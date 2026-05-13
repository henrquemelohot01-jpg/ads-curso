'use client';

const modulos = [
  { num:'01', title:'Fundamentos do Meta Ads', desc:'Business Manager, Ads Manager, hierarquia de campanhas, objetivos e métricas.', lessons:10, icon:'📚' },
  { num:'02', title:'Segmentação e Públicos', desc:'Públicos personalizados, Lookalike, Advantage+ Audience e exclusões.', lessons:10, icon:'🎯' },
  { num:'03', title:'Criativos e Formatos', desc:'Copywriting, design, vídeos, carrossel, UGC e Ad Library.', lessons:10, icon:'🎨' },
  { num:'04', title:'Pixel e Rastreamento', desc:'Pixel, eventos, API de Conversões (CAPI), GTM e atribuição.', lessons:10, icon:'📊' },
  { num:'05', title:'Campanhas de Tráfego', desc:'Landing pages, WhatsApp, UTMs, otimização de CPC.', lessons:10, icon:'🚀' },
  { num:'06', title:'Campanhas de Leads', desc:'Formulários instantâneos, CRM, qualificação e e-mail marketing.', lessons:10, icon:'📋' },
  { num:'07', title:'Campanhas de Vendas', desc:'Advantage+ Shopping, DPA, funil TOFU/MOFU/BOFU e ROAS.', lessons:10, icon:'💰' },
  { num:'08', title:'Remarketing Avançado', desc:'Remarketing dinâmico, sequências, cross-sell e omnichannel.', lessons:10, icon:'🔄' },
  { num:'09', title:'Otimização e Escala', desc:'Regras automatizadas, testes A/B, gestão financeira.', lessons:10, icon:'📈' },
  { num:'10', title:'Estratégias Avançadas', desc:'IA no Meta Ads, compliance, casos de estudo e plano de 30 dias.', lessons:10, icon:'🏆' },
];

export default function HomePage() {
  return (
    <>
      {/* NAV */}
      <header>
        <nav className="nav" id="nav">
          <div className="nav-inner">
            <a href="#" className="logo">ADS Master Pro</a>
            <div className="nav-links">
              <a href="#modulos">Módulos</a>
              <a href="#investimento">Investimento</a>
              <a href="#faq">FAQ</a>
              <a href="/plataforma" className="btn-primary" style={{ textDecoration:'none' }}>Começar Agora</a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="container">
            <div className="hero-content fade-up">
              <span className="badge">🚀 Atualizado para 2025/2026</span>
              <h1>Curso de <span>Facebook Ads</span> — Domine Tráfego Pago e Escale Seus Resultados</h1>
              <p>Treinamento completo de <strong>Meta Ads</strong> do zero ao avançado. Aprenda a <strong>anunciar com tráfego pago</strong>, configurar Pixel, campanhas de vendas, remarketing e escalar resultados reais.</p>
              <div style={{ display:'flex', gap:16, flexWrap:'wrap' }}>
                <a href="/plataforma" className="btn-primary" style={{ textDecoration:'none' }}>🎯 Começar Agora</a>
                <button className="btn-outline" onClick={() => document.getElementById('modulos')?.scrollIntoView({ behavior:'smooth' })}>Ver Conteúdo</button>
              </div>
              <div className="hero-stats fade-up delay-2">
                <div><strong>10</strong><span>Módulos</span></div>
                <div><strong>100</strong><span>Aulas</span></div>
                <div><strong>50h+</strong><span>Conteúdo</span></div>
                <div><strong>100%</strong><span>Atualizado</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section style={{ padding:'60px 0' }}>
          <div className="container">
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))', gap:24 }}>
              {[
                { icon:'🎯', title:'Todas as Campanhas de Facebook Ads', desc:'Tráfego, Vendas, Leads, Engajamento — domine cada objetivo.' },
                { icon:'📊', title:'Pixel & API de Conversões', desc:'Configure rastreamento avançado e otimize campanhas com dados reais.' },
                { icon:'🔄', title:'Remarketing e Escala', desc:'Reconquiste visitantes e escale resultados com remarketing inteligente.' },
                { icon:'🏆', title:'Estratégias Profissionais', desc:'Técnicas avançadas de agência para ROAS positivo.' },
              ].map((f, i) => (
                <article key={i} className={`module-card fade-up delay-${i}`}>
                  <div style={{ fontSize:'2rem', marginBottom:12 }}>{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MÓDULOS */}
        <section id="modulos">
          <div className="container">
            <span className="badge section-label">Conteúdo Programático</span>
            <h2 className="section-title">Tudo que Você Vai <span>Aprender</span> sobre Tráfego Pago</h2>
            <p className="section-desc">Uma jornada completa do zero ao avançado em Facebook Ads e Meta Ads.</p>
            <div className="modules-grid">
              {modulos.map(m => (
                <div key={m.num} className="module-card fade-up">
                  <div className="module-num">{m.icon}</div>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                  <span className="module-lessons">📚 {m.lessons} aulas</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INVESTIMENTO */}
        <section id="investimento" style={{ background:'var(--bg-card)' }}>
          <div className="container" style={{ textAlign:'center' }}>
            <span className="badge section-label">Investimento</span>
            <h2 className="section-title">Acesso <span>Completo</span></h2>
            <p className="section-desc" style={{ marginLeft:'auto', marginRight:'auto' }}>Pagamento único. Sem mensalidade. Sem pegadinha.</p>
            <div style={{ display:'flex', justifyContent:'center', marginTop:40 }}>
              <div className="price-card featured" style={{ maxWidth:480, width:'100%', position:'relative', overflow:'hidden' }}>
                <div style={{ position:'absolute', top:16, right:-35, background:'var(--primary)', color:'#0d0f12', padding:'6px 40px', fontSize:'.75rem', fontWeight:700, transform:'rotate(45deg)', letterSpacing:1 }}>OFERTA</div>
                <div style={{ fontSize:'2.5rem', marginBottom:4 }}>🏆</div>
                <h3 style={{ fontSize:'1.5rem', marginBottom:4 }}>Acesso Vitalício Completo</h3>
                <p style={{ color:'var(--text-muted)', fontSize:'.95rem', marginBottom:20 }}>Todo o treinamento por um único pagamento</p>
                <div style={{ color:'var(--text-muted)', fontSize:'1rem', textDecoration:'line-through', marginBottom:4 }}>De R$ 297,00</div>
                <div className="price" style={{ background:'var(--gradient)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', fontSize:'4rem', margin:0 }}><sup style={{ fontSize:'1.5rem' }}>R$</sup>37</div>
                <div style={{ color:'var(--primary)', fontSize:'.9rem', fontWeight:600, marginBottom:24 }}>Pagamento único — acesso para sempre</div>
                <ul className="price-features" style={{ textAlign:'left' }}>
                  <li>✅ 10 Módulos completos (100 aulas)</li>
                  <li>✅ Do iniciante ao avançado</li>
                  <li>✅ Acesso vitalício e imediato</li>
                  <li>✅ Todas as atualizações futuras incluídas</li>
                  <li>✅ Conteúdo 100% atualizado 2025/2026</li>
                  <li>✅ Estratégias reais com exemplos práticos</li>
                  <li>✅ Templates e checklists profissionais</li>
                  <li>✅ Método validado para gerar resultados reais</li>
                </ul>
                <a href="/plataforma" className="btn-primary" style={{ width:'100%', justifyContent:'center', fontSize:'1.1rem', padding:18, marginTop:8, textDecoration:'none', display:'flex' }}>🚀 GARANTIR MEU ACESSO POR R$37</a>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8, marginTop:16, paddingTop:16, borderTop:'1px solid var(--border)' }}>
                  <span style={{ fontSize:'1.2rem' }}>🔒</span>
                  <span style={{ color:'var(--text-muted)', fontSize:'.85rem' }}>Pagamento seguro • Acesso imediato</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <div className="container" style={{ maxWidth:750 }}>
            <div style={{ textAlign:'center' }}>
              <span className="badge section-label">Dúvidas</span>
              <h2 className="section-title">Perguntas <span>Frequentes</span></h2>
            </div>
            {[
              { q:'Preciso ter experiência prévia?', a:'Não! O treinamento leva você do zero ao avançado.' },
              { q:'O conteúdo está atualizado?', a:'Sim! Baseado nas atualizações do Meta Ads 2025/2026.' },
              { q:'Por quanto tempo tenho acesso?', a:'Vitalício! Pague R$37 uma vez e acesse para sempre.' },
              { q:'Quanto conteúdo tem?', a:'10 módulos com 100 aulas e mais de 50h de conteúdo.' },
              { q:'O pagamento é único mesmo?', a:'Sim! R$37 em pagamento único, sem mensalidade.' },
            ].map((faq, i) => (
              <div key={i} className="faq-item">
                <div className="faq-q" onClick={e => (e.currentTarget.parentElement as any).classList.toggle('active')}>
                  <span>{faq.q}</span><span className="icon">+</span>
                </div>
                <div className="faq-a"><div className="faq-a-inner">{faq.a}</div></div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background:'linear-gradient(135deg, rgba(0,232,143,0.08), rgba(0,184,212,0.04))', borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)' }}>
          <div className="container" style={{ textAlign:'center' }}>
            <h2 className="section-title">Pronto Para <span>Dominar</span> o Facebook Ads?</h2>
            <p className="section-desc" style={{ marginLeft:'auto', marginRight:'auto' }}>100 aulas, do zero ao avançado, por apenas <strong style={{ color:'var(--primary)' }}>R$37</strong> — pagamento único.</p>
            <a href="/plataforma" className="btn-primary" style={{ fontSize:'1.1rem', padding:'18px 40px', textDecoration:'none', display:'inline-flex' }}>🚀 Garantir Meu Acesso Agora</a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="logo" style={{ fontSize:'1.3rem' }}>ADS Master Pro</a>
              <p>Plataforma de treinamento em <strong>Facebook Ads</strong> e <strong>tráfego pago</strong>.</p>
            </div>
            <div>
              <h4>Curso</h4>
              <ul><li><a href="#modulos">Módulos</a></li><li><a href="#investimento">Investimento</a></li><li><a href="#faq">FAQ</a></li></ul>
            </div>
            <div>
              <h4>Legal</h4>
              <ul><li><a href="#">Termos de Uso</a></li><li><a href="#">Privacidade</a></li></ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 ADS Master Pro — Curso de Facebook Ads. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
