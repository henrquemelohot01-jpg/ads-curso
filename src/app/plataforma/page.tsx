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

  // Login com Email OTP
  const [email, setEmail] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState('');
  const [countdown, setCountdown] = useState(0);

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
        localStorage.setItem('ads_paid_users', JSON.stringify([userId]));
      }
    } catch {
      const paidUsers = JSON.parse(localStorage.getItem('ads_paid_users') || '[]');
      if (paidUsers.includes(userId)) setPaid(true);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user);
        const paidUsers = JSON.parse(localStorage.getItem('ads_paid_users') || '[]');
        if (paidUsers.includes(session.user.id)) setPaid(true);
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

    return () => subscription.unsubscribe();
  }, []);

  // Countdown timer
  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  // Enviar código OTP para o email
  const enviarCodigo = async () => {
    if (!email.trim()) {
      setAuthError('Digite seu email');
      return;
    }
    setAuthLoading(true);
    setAuthError('');

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: email.trim(),
        options: {
          shouldCreateUser: true,
        },
      });

      if (error) {
        console.error('Supabase OTP error:', error);
        if (error.message.includes('60 seconds')) {
          setAuthError('Aguarde 60 segundos para reenviar o código.');
        } else if (error.message.includes('rate limit') || error.message.includes('Rate limit')) {
          setAuthError('Muitas tentativas. Aguarde alguns minutos.');
        } else {
          setAuthError(`Erro: ${error.message}`);
        }
      } else {
        setOtpSent(true);
        setCountdown(60);
        setAuthError('');
      }
    } catch (err: any) {
      console.error('Network error:', err);
      setAuthError(`Erro de conexão: ${err?.message || 'Verifique sua internet'}`);
    }
    setAuthLoading(false);
  };

  // Verificar código OTP digitado
  const verificarCodigo = async () => {
    if (otpCode.length !== 6) {
      setAuthError('Digite o código de 6 dígitos');
      return;
    }
    setAuthLoading(true);
    setAuthError('');

    try {
      const { error } = await supabase.auth.verifyOtp({
        email: email.trim(),
        token: otpCode,
        type: 'email',
      });

      if (error) {
        console.error('OTP verify error:', error);
        if (error.message.includes('expired') || error.message.includes('invalid')) {
          setAuthError('Código inválido ou expirado. Solicite um novo.');
        } else {
          setAuthError(`Erro: ${error.message}`);
        }
      }
    } catch (err: any) {
      console.error('Verify error:', err);
      setAuthError(`Erro de conexão: ${err?.message || 'Tente novamente'}`);
    }
    setAuthLoading(false);
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

  // ============ TELA DE LOGIN COM CÓDIGO OTP ============
  if (!user) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#0a0a0a', padding: 24 }}>
        <div style={{ background: '#141414', border: '1px solid #2a2a2a', borderRadius: 16, padding: 48, maxWidth: 440, width: '100%', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: 16 }}>🎯</div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 8 }}>ADS Master Pro</h1>

          {!otpSent ? (
            <>
              <p style={{ color: '#888', marginBottom: 24, fontSize: '.95rem' }}>
                Digite seu email para acessar o treinamento
              </p>

              <input
                type="email"
                placeholder="Seu melhor email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && enviarCodigo()}
                style={{
                  width: '100%', padding: '16px 20px', background: '#1a1a1a', border: '1px solid #2a2a2a',
                  borderRadius: 12, fontSize: '1rem', color: '#fff', outline: 'none', marginBottom: 16,
                  boxSizing: 'border-box', transition: 'border-color .3s',
                }}
                onFocus={e => e.currentTarget.style.borderColor = '#00e88f'}
                onBlur={e => e.currentTarget.style.borderColor = '#2a2a2a'}
              />

              <button
                onClick={enviarCodigo}
                disabled={authLoading}
                style={{
                  width: '100%', padding: '16px 24px',
                  background: authLoading ? '#333' : 'linear-gradient(135deg, #00e88f, #00b8d4)',
                  color: authLoading ? '#888' : '#0a0a0a', border: 'none', borderRadius: 12,
                  fontSize: '1rem', fontWeight: 700, cursor: authLoading ? 'wait' : 'pointer',
                  transition: 'transform .2s, box-shadow .2s',
                }}
                onMouseOver={e => { if (!authLoading) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,232,143,0.3)'; } }}
                onMouseOut={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                {authLoading ? '⏳ Enviando...' : '📧 Enviar Código de Acesso'}
              </button>
            </>
          ) : (
            <>
              <p style={{ color: '#888', marginBottom: 8, fontSize: '.95rem' }}>
                Enviamos um código de 6 dígitos para:
              </p>
              <p style={{ color: '#00e88f', fontWeight: 700, marginBottom: 24, fontSize: '.95rem' }}>
                {email}
              </p>

              <input
                type="text"
                placeholder="000000"
                value={otpCode}
                onChange={e => setOtpCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                onKeyDown={e => e.key === 'Enter' && verificarCodigo()}
                maxLength={6}
                style={{
                  width: '100%', padding: '16px 20px', background: '#1a1a1a', border: '1px solid #2a2a2a',
                  borderRadius: 12, fontSize: '1.5rem', color: '#fff', outline: 'none', marginBottom: 16,
                  boxSizing: 'border-box', textAlign: 'center', letterSpacing: '8px', fontWeight: 700,
                }}
                onFocus={e => e.currentTarget.style.borderColor = '#00e88f'}
                onBlur={e => e.currentTarget.style.borderColor = '#2a2a2a'}
                autoFocus
              />

              <button
                onClick={verificarCodigo}
                disabled={authLoading || otpCode.length !== 6}
                style={{
                  width: '100%', padding: '16px 24px',
                  background: (authLoading || otpCode.length !== 6) ? '#333' : 'linear-gradient(135deg, #00e88f, #00b8d4)',
                  color: (authLoading || otpCode.length !== 6) ? '#888' : '#0a0a0a', border: 'none', borderRadius: 12,
                  fontSize: '1rem', fontWeight: 700, cursor: (authLoading || otpCode.length !== 6) ? 'not-allowed' : 'pointer',
                }}
              >
                {authLoading ? '⏳ Verificando...' : '✅ Confirmar Código'}
              </button>

              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 16 }}>
                <button
                  onClick={() => { setOtpSent(false); setOtpCode(''); setAuthError(''); }}
                  style={{ background: 'none', border: 'none', color: '#888', fontSize: '.85rem', cursor: 'pointer' }}
                >
                  ← Trocar email
                </button>
                <button
                  onClick={enviarCodigo}
                  disabled={countdown > 0 || authLoading}
                  style={{
                    background: 'none', border: 'none',
                    color: countdown > 0 ? '#555' : '#00e88f',
                    fontSize: '.85rem', cursor: countdown > 0 ? 'default' : 'pointer',
                  }}
                >
                  {countdown > 0 ? `Reenviar em ${countdown}s` : '🔄 Reenviar código'}
                </button>
              </div>
            </>
          )}

          {authError && (
            <p style={{ color: '#ff6b6b', fontSize: '.85rem', marginTop: 16, padding: '10px 16px', background: 'rgba(255,107,107,0.08)', borderRadius: 8, border: '1px solid rgba(255,107,107,0.15)' }}>
              {authError}
            </p>
          )}

          <p style={{ color: '#555', fontSize: '.8rem', marginTop: 24 }}>🔒 Acesso seguro • Sem senha necessária</p>
        </div>
      </div>
    );
  }

  // ============ MODAL DE PAGAMENTO PIX ============
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

  // ============ PLATAFORMA — LISTA DE MÓDULOS ============
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      <nav style={{ background: '#141414', borderBottom: '1px solid #2a2a2a', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <span style={{ fontWeight: 800, fontSize: '1.2rem', background: 'linear-gradient(135deg, #00e88f, #00b8d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>ADS Master Pro</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #00e88f, #00b8d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.85rem', fontWeight: 700, color: '#0a0a0a' }}>
              {(user.email || '?')[0].toUpperCase()}
            </div>
            <span style={{ fontSize: '.9rem', color: '#888' }}>{user.email}</span>
          </div>
          {paid && <span style={{ background: 'rgba(0,232,143,0.1)', color: '#00e88f', padding: '4px 12px', borderRadius: 20, fontSize: '.75rem', fontWeight: 700 }}>♾️ VITALÍCIO</span>}
          <button onClick={logout} style={{ padding: '8px 16px', background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: 8, color: '#888', fontSize: '.8rem', cursor: 'pointer' }}>Sair</button>
        </div>
      </nav>

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
