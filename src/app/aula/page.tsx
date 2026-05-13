'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function AulaPage() {
  const [user, setUser] = useState<any>(null);
  const [paid, setPaid] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modIdx, setModIdx] = useState(0);
  const [aulaIdx, setAulaIdx] = useState(0);
  const [curso, setCurso] = useState<any[]>([]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user);
        const paidUsers = JSON.parse(localStorage.getItem('ads_paid_users') || '[]');
        if (paidUsers.includes(session.user.id)) setPaid(true);
      }
      setLoading(false);
    });

    // Parse URL params
    const params = new URLSearchParams(window.location.search);
    setModIdx(parseInt(params.get('modulo') || '0'));
    setAulaIdx(parseInt(params.get('aula') || '0'));

    // Carregar dados do curso
    const script = document.createElement('script');
    script.src = '/js/dados-curso.js';
    script.onload = () => {
      if ((window as any).CURSO) setCurso((window as any).CURSO);
    };
    document.head.appendChild(script);
  }, []);

  if (loading) return <div style={{ display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',background:'#0a0a0a',color:'#888' }}>Carregando...</div>;
  if (!user || !paid) {
    if (typeof window !== 'undefined') window.location.href = '/plataforma';
    return null;
  }

  const modulo = curso[modIdx];
  const aula = modulo?.aulas?.[aulaIdx];

  if (!modulo || !aula) return <div style={{ display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',background:'#0a0a0a',color:'#888' }}>Carregando conteúdo...</div>;

  return (
    <div style={{ minHeight:'100vh',background:'#0a0a0a' }}>
      {/* NAV */}
      <nav style={{ background:'#141414',borderBottom:'1px solid #2a2a2a',padding:'16px 24px',display:'flex',justifyContent:'space-between',alignItems:'center',position:'sticky',top:0,zIndex:100 }}>
        <a href="/plataforma" style={{ color:'#00e88f',fontWeight:600,display:'flex',alignItems:'center',gap:8,textDecoration:'none' }}>← Voltar</a>
        <span style={{ fontWeight:800,fontSize:'1.1rem',background:'linear-gradient(135deg, #00e88f, #00b8d4)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent' }}>ADS Master Pro</span>
        <div style={{ width:80 }}></div>
      </nav>

      {/* CONTEÚDO */}
      <div style={{ maxWidth:900,margin:'0 auto',padding:'32px 24px' }}>
        <div style={{ marginBottom:32 }}>
          <span style={{ background:'rgba(0,232,143,0.1)',color:'#00e88f',padding:'6px 16px',borderRadius:20,fontSize:'.8rem',fontWeight:600 }}>
            {modulo.icon} {modulo.titulo}
          </span>
          <h1 style={{ fontSize:'2rem',fontWeight:800,marginTop:16,marginBottom:8 }}>{aula.titulo}</h1>
          <p style={{ color:'#888',fontSize:'.9rem' }}>Aula {aulaIdx + 1} de {modulo.aulas.length}</p>
        </div>

        <div className="aula-content" dangerouslySetInnerHTML={{ __html: aula.conteudo }} />

        {/* NAVEGAÇÃO */}
        <div style={{ display:'flex',justifyContent:'space-between',marginTop:32,gap:16 }}>
          {aulaIdx > 0 ? (
            <a href={`/aula?modulo=${modIdx}&aula=${aulaIdx - 1}`} style={{ padding:'14px 24px',background:'#1a1a1a',border:'1px solid #2a2a2a',borderRadius:10,color:'#e8e8e8',fontWeight:600,textDecoration:'none' }}>← Anterior</a>
          ) : <div />}
          
          {aulaIdx < modulo.aulas.length - 1 ? (
            <a href={`/aula?modulo=${modIdx}&aula=${aulaIdx + 1}`} style={{ padding:'14px 24px',background:'linear-gradient(135deg, #00e88f, #00b8d4)',color:'#0a0a0a',borderRadius:10,fontWeight:700,textDecoration:'none' }}>Próxima →</a>
          ) : modIdx < curso.length - 1 ? (
            <a href={`/aula?modulo=${modIdx + 1}&aula=0`} style={{ padding:'14px 24px',background:'linear-gradient(135deg, #00e88f, #00b8d4)',color:'#0a0a0a',borderRadius:10,fontWeight:700,textDecoration:'none' }}>Próximo Módulo →</a>
          ) : (
            <span style={{ padding:'14px 24px',background:'#1a1a1a',border:'1px solid #00e88f',borderRadius:10,color:'#00e88f',fontWeight:600 }}>🏆 Curso Completo!</span>
          )}
        </div>
      </div>
    </div>
  );
}
