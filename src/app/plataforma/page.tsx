'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

const MODULOS = [
  { id: 1, titulo: 'Fundamentos do Meta Ads', icon: '📚', cor: '#00e88f' },
  { id: 2, titulo: 'Segmentação e Públicos', icon: '🎯', cor: '#00b8d4' },
  { id: 3, titulo: 'Criativos e Formatos', icon: '🎨', cor: '#ff6b6b' },
  { id: 4, titulo: 'Pixel e Rastreamento', icon: '📊', cor: '#ffd93d' },
  { id: 5, titulo: 'Campanhas de Tráfego', icon: '🚀', cor: '#6c5ce7' },
  { id: 6, titulo: 'Campanhas de Leads', icon: '📋', cor: '#00cec9' },
  { id: 7, titulo: 'Campanhas de Vendas', icon: '💰', cor: '#fdcb6e' },
  { id: 8, titulo: 'Remarketing Avançado', icon: '🔄', cor: '#e17055' },
  { id: 9, titulo: 'Otimização e Escala', icon: '📈', cor: '#0984e3' },
  { id: 10, titulo: 'Estratégias Avançadas', icon: '🏆', cor: '#00e88f' },
];

export default function PlataformaPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [paid, setPaid] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [pixData, setPixData] = useState<any>(null);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [checking, setChecking] = useState(false);
  const [copied, setCopied] = useState(false);

  // Verificar acesso vitalício no Supabase
  const checkAccess = async (userId: string) => {
    try {
      const res = await fetch('/api/check-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      });
      const data = await res.json();
      if (data.hasAccess) {
        setPaid(true);
        // Cache local para carregar mais rápido
        localStorage.setItem('ads_paid_users', JSON.stringify([userId]));
      }
    } catch {
      // Fallback para localStorage
      const paidUsers = JSON.parse(localStorage.getItem('ads_paid_users') || '[]');
      if (paidUsers.includes(userId)) setPaid(true);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user);
        // Check local cache primeiro para UX rápida
        const paidUsers = JSON.parse(localStorage.getItem('ads_paid_users') || '[]');
        if (paidUsers.includes(session.user.id)) setPaid(true);
        // Depois verifica no Supabase (fonte real)
        checkAccess(session.user.id);
      }
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user);
        checkAccess(session.user.id);
      } else {
        setUser(null);
        setPaid(false);
      }
      setLoading(false);
    });

    // OAuth callback
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (code) {
      supabase.auth.exchangeCodeForSession(code).then(() => {
        window.history.replaceState({}, '', '/plataforma');
      });
    }

    return () => subscription.unsubscribe();
  }, []);

  const loginGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setPaid(false);
  };

  const gerarPagamento = async () => {
    setPaymentLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          email: user.email,
          name: user.user_metadata?.full_name || '',
        }),
      });
      const data = await res.json();
      if (data.qrCode) {
        setPixData(data);
        setShowPayment(true);
      } else {
        alert(data.error || 'Erro ao gerar pagamento');
      }
    } catch { alert('Erro de conexão'); }
    setPaymentLoading(false);
  };

  const verificarPagamento = async () => {
    if (!pixData?.transactionId) return;
    setChecking(true);
    try {
      const res = await fetch('/api/verify-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ transactionId: pixData.transactionId }),
      });
      const data = await res.json();
      if (data.approved) {
        // Salvar acesso vitalício local (cache)
        localStorage.setItem('ads_paid_users', JSON.stringify([user.id]));
        setPaid(true);
        setShowPayment(false);
        setPixData(null);
      } else {
        alert('⏳ Pagamento ainda pendente. Aguarde alguns segundos após pagar e tente novamente.');
      }
    } catch { alert('Erro ao verificar'); }
    setChecking(false);
  };

  const copiarPix = () => {
    if (pixData?.qrCode) {
      navigator.clipboard.writeText(pixData.qrCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#0a0a0a' }}>
        <div style={{ textAlign: 'center', color: '#888' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>⏳</div>
          <p>Carregando...</p>
        </div>
      </div>
    );
  }

  // TELA DE LOGIN COM GOOGLE
  if (!user) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#0a0a0a', padding: 24 }}>
        <div style={{ background: '#141414', border: '1px solid #2a2a2a', borderRadius: 16, padding: 48, maxWidth: 440, width: '100%', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: 16 }}>🎯</div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 8 }}>ADS Master Pro</h1>
          <p style={{ color: '#888', marginBottom: 32, fontSize: '.95rem' }}>Faça login para acessar o treinamento completo de Facebook Ads</p>
          <button onClick={loginGoogle} style={{
            width: '100%', padding: '16px 24px', background: '#fff', color: '#333', border: 'none', borderRadius: 12,
            fontSize: '1rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
            transition: 'transform .2s, box-shadow .2s',
          }}
          onMouseOver={e => { (e.currentTarget).style.transform = 'translateY(-2px)'; (e.currentTarget).style.boxShadow = '0 8px 24px rgba(0,0,0,.3)'; }}
          onMouseOut={e => { (e.currentTarget).style.transform = ''; (e.currentTarget).style.boxShadow = ''; }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            Entrar com Google
          </button>
          <p style={{ color: '#555', fontSize: '.8rem', marginTop: 24 }}>🔒 Login seguro via Google</p>
        </div>
      </div>
    );
  }

  // MODAL DE PAGAMENTO PIX
  if (showPayment && pixData) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#0a0a0a', padding: 24 }}>
        <div style={{ background: '#141414', border: '1px solid #2a2a2a', borderRadius: 16, padding: 40, maxWidth: 480, width: '100%', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 8 }}>💳 Pagamento via PIX</h2>
          <p style={{ color: '#888', marginBottom: 24 }}>Escaneie o QR Code ou copie o código PIX abaixo</p>
          
          {pixData.qrCodeBase64 && (
            <div style={{ background: '#fff', borderRadius: 12, padding: 16, display: 'inline-block', marginBottom: 20 }}>
              <img src={`data:image/png;base64,${pixData.qrCodeBase64}`} alt="QR Code PIX" width={220} height={220} style={{ display: 'block', pointerEvents: 'auto' }} />
            </div>
          )}

          <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: 8, padding: 12, marginBottom: 16, fontSize: '.75rem', color: '#888', wordBreak: 'break-all', maxHeight: 80, overflow: 'auto' }}>
            {pixData.qrCode}
          </div>

          <button onClick={copiarPix} style={{
            width: '100%', padding: '14px', background: copied ? '#00c474' : 'linear-gradient(135deg, #00e88f, #00b8d4)',
            color: '#0a0a0a', border: 'none', borderRadius: 10, fontSize: '1rem', fontWeight: 700, cursor: 'pointer', marginBottom: 12,
          }}>
            {copied ? '✅ Código copiado!' : '📋 Copiar Código PIX'}
          </button>

          <button onClick={verificarPagamento} disabled={checking} style={{
            width: '100%', padding: '14px', background: 'transparent', border: '2px solid #00e88f', color: '#00e88f',
            borderRadius: 10, fontSize: '1rem', fontWeight: 600, cursor: checking ? 'wait' : 'pointer', marginBottom: 12,
          }}>
            {checking ? '⏳ Verificando...' : '✅ Já paguei — Liberar meu acesso'}
          </button>

          <button onClick={() => { setShowPayment(false); setPixData(null); }} style={{
            background: 'none', border: 'none', color: '#888', fontSize: '.9rem', cursor: 'pointer', marginTop: 8,
          }}>
            ← Voltar
          </button>

          <div style={{ marginTop: 20, padding: '16px', background: 'rgba(0,232,143,0.05)', border: '1px solid rgba(0,232,143,0.15)', borderRadius: 10 }}>
            <div style={{ color: '#00e88f', fontSize: '2.2rem', fontWeight: 800 }}>R$ 37,00</div>
            <p style={{ color: '#00e88f', fontSize: '.85rem', fontWeight: 600, marginTop: 4 }}>Pagamento único</p>
            <p style={{ color: '#888', fontSize: '.8rem', marginTop: 4 }}>♾️ Acesso VITALÍCIO — uma vez pago, é seu para sempre</p>
          </div>
        </div>
      </div>
    );
  }

  // PLATAFORMA — LISTA DE MÓDULOS
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      {/* HEADER */}
      <nav style={{ background: '#141414', borderBottom: '1px solid #2a2a2a', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <span style={{ fontWeight: 800, fontSize: '1.2rem', background: 'linear-gradient(135deg, #00e88f, #00b8d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>ADS Master Pro</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {user.user_metadata?.avatar_url && (
              <img src={user.user_metadata.avatar_url} alt="" width={32} height={32} style={{ borderRadius: '50%', border: '2px solid #2a2a2a', pointerEvents: 'auto' }} />
            )}
            <span style={{ fontSize: '.9rem', color: '#888' }}>{user.user_metadata?.full_name || user.email}</span>
          </div>
          {paid && <span style={{ background: 'rgba(0,232,143,0.1)', color: '#00e88f', padding: '4px 12px', borderRadius: 20, fontSize: '.75rem', fontWeight: 700 }}>♾️ VITALÍCIO</span>}
          <button onClick={logout} style={{ padding: '8px 16px', background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: 8, color: '#888', fontSize: '.8rem', cursor: 'pointer' }}>Sair</button>
        </div>
      </nav>

      {/* CONTEÚDO */}
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 8 }}>
            {paid ? '🎓 Seu Treinamento Completo' : '🔒 Treinamento Bloqueado'}
          </h1>
          <p style={{ color: '#888', fontSize: '.95rem' }}>
            {paid 
              ? '✅ Acesso vitalício ativo — clique em um módulo para estudar'
              : 'Libere seu acesso vitalício por apenas R$37 — pagamento único'
            }
          </p>
        </div>

        {/* LISTA DE MÓDULOS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {MODULOS.map(mod => (
            <div key={mod.id} onClick={() => {
              if (paid) {
                window.location.href = `/aula?modulo=${mod.id - 1}&aula=0`;
              } else {
                gerarPagamento();
              }
            }} style={{
              background: '#141414', border: '1px solid #2a2a2a', borderRadius: 12, padding: '20px 24px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer',
              transition: 'all .3s', position: 'relative', overflow: 'hidden',
            }}
            onMouseOver={e => { e.currentTarget.style.borderColor = paid ? mod.cor : '#555'; e.currentTarget.style.transform = 'translateX(4px)'; }}
            onMouseOut={e => { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.transform = ''; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ fontSize: '1.8rem', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${mod.cor}15`, borderRadius: 10 }}>
                  {mod.icon}
                </div>
                <div>
                  <div style={{ fontSize: '.75rem', color: mod.cor, fontWeight: 600, marginBottom: 2 }}>MÓDULO {String(mod.id).padStart(2, '0')}</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700 }}>{mod.titulo}</div>
                  <div style={{ fontSize: '.8rem', color: '#888', marginTop: 2 }}>10 aulas</div>
                </div>
              </div>

              {paid ? (
                <div style={{ color: '#00e88f', fontSize: '1.2rem' }}>▶</div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#ff6b6b', fontSize: '.85rem', fontWeight: 600 }}>
                  <span>🔒</span>
                  <span>Libere seu acesso</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* BOTÃO CENTRAL DE LIBERAR */}
        {!paid && (
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <button onClick={gerarPagamento} disabled={paymentLoading} style={{
              padding: '18px 40px', background: 'linear-gradient(135deg, #00e88f, #00b8d4)', color: '#0a0a0a',
              border: 'none', borderRadius: 12, fontSize: '1.1rem', fontWeight: 800, cursor: paymentLoading ? 'wait' : 'pointer',
              boxShadow: '0 0 30px rgba(0,232,143,0.2)', transition: 'transform .2s',
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseOut={e => e.currentTarget.style.transform = ''}
            >
              {paymentLoading ? '⏳ Gerando pagamento...' : '🚀 LIBERAR ACESSO VITALÍCIO POR R$37'}
            </button>
            <p style={{ color: '#888', fontSize: '.8rem', marginTop: 12 }}>💳 Pagamento único via PIX • ♾️ Acesso vitalício imediato</p>
          </div>
        )}
      </div>
    </div>
  );
}
