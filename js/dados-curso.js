function tip(t,b){return '<div class="tip-box"><h4>'+t+'</h4><p>'+b+'</p></div>';}
function warn(t,b){return '<div class="warning-box"><h4>'+t+'</h4><p>'+b+'</p></div>';}
function ex(t,b){return '<div class="example-box"><h4>'+t+'</h4><p>'+b+'</p></div>';}
function h2(t){return '<h2>'+t+'</h2>';}
function h3(t){return '<h3>'+t+'</h3>';}
function p(t){return '<p>'+t+'</p>';}
function ul(items){return '<ul>'+items.map(function(i){return '<li>'+i+'</li>';}).join('')+'</ul>';}
function ol(items){return '<ol>'+items.map(function(i){return '<li>'+i+'</li>';}).join('')+'</ol>';}

const CURSO = [
{titulo:"Fundamentos do Meta Ads",icon:"\u{1F3AF}",color:"#00e88f",aulas:[
{titulo:"Introdução ao Meta Ads 2025/2026",resumo:"Visão geral completa da plataforma",duracao:"18 min",conteudo:
h2("O que é o Meta Ads?")+
p("O <strong>Meta Ads</strong> (antigo Facebook Ads) é a plataforma de anúncios do grupo Meta, que engloba <strong>Facebook, Instagram, Messenger e Audience Network</strong>. Com mais de 3 bilhões de usuários ativos mensais, é a maior plataforma de publicidade digital do mundo.")+
p("Em 2025/2026, a plataforma passou por atualizações significativas: <strong>Advantage+ expandido</strong>, novos formatos de criativos com IA, mudanças nas políticas de privacidade e integração avançada com a API de Conversões.")+
h3("Por que anunciar no Meta Ads?")+
ul(["Alcance massivo: 3+ bilhões de usuários ativos no ecossistema","Segmentação avançada por interesses, comportamentos e dados demográficos","Formatos diversos: imagem, vídeo, carrossel, coleção, stories, reels","Ferramentas de IA para otimização automática de campanhas","Integração com e-commerce, CRM e ferramentas de automação","Remarketing poderoso com públicos personalizados e lookalikes","Custo acessível: é possível começar com R$10/dia","ROI mensurável: rastreie cada centavo investido"])+
h3("Ecossistema Meta")+
p("Ao anunciar no Meta Ads, seus anúncios podem aparecer em:")+
ul(["<strong>Facebook</strong> - Feed, Stories, Marketplace, Vídeos, Coluna direita","<strong>Instagram</strong> - Feed, Stories, Reels, Explorar, Loja","<strong>Messenger</strong> - Caixa de entrada, Stories","<strong>Audience Network</strong> - Apps e sites parceiros"])+
tip("DICA PRO","Sempre comece com um objetivo claro. O algoritmo do Meta otimiza suas campanhas com base no objetivo escolhido. Escolher errado = desperdiçar dinheiro.")+
warn("ATENÇÃO","Nunca use sua conta pessoal para anúncios profissionais. Contas pessoais têm limites e podem ser bloqueadas mais facilmente.")
},
{titulo:"Criando sua Conta Business Manager",resumo:"Configuração profissional passo a passo",duracao:"22 min",conteudo:
h2("Business Manager: Sua Central de Comando")+
p("O <strong>Business Manager</strong> (business.facebook.com) é a ferramenta profissional para gerenciar todos os seus ativos de marketing no Meta. É obrigatório para qualquer pessoa séria sobre anúncios.")+
h3("Por que usar o Business Manager?")+
ul(["Gerenciar múltiplas páginas e contas de anúncio","Controlar acesso de equipe com permissões granulares","Instalar e gerenciar pixels em diferentes sites","Criar públicos compartilhados entre contas","Gerar relatórios profissionais detalhados","Proteger seus ativos com autenticação em duas etapas","Separar vida pessoal da profissional"])+
h3("Passo a Passo para Criar")+
ol(["Acesse <strong>business.facebook.com</strong>","Clique em <strong>Criar Conta</strong>","Insira o nome da sua empresa (use o nome real do negócio)","Preencha seu nome e e-mail corporativo","Confirme o e-mail recebido","Configure a autenticação em duas etapas (obrigatório!)","Adicione sua página do Facebook","Crie ou vincule uma conta de anúncios"])+
h3("Estrutura do Business Manager")+
ul(["<strong>Pessoas</strong> - Membros da equipe com diferentes níveis de acesso","<strong>Páginas</strong> - Suas páginas do Facebook vinculadas","<strong>Contas de Anúncio</strong> - Onde campanhas são criadas e gerenciadas","<strong>Pixels</strong> - Códigos de rastreamento do site","<strong>Catálogos</strong> - Listas de produtos para anúncios dinâmicos","<strong>Fontes de dados</strong> - Integrações com sites e apps"])+
ex("ESTRUTURA RECOMENDADA","1 Business Manager → 1-3 Contas de Anúncio → 1 Pixel por site → Múltiplas páginas. Se você gerencia clientes, crie BMs separados ou solicite acesso ao BM do cliente.")+
tip("SEGURANÇA","Ative SEMPRE a autenticação em duas etapas. Contas hackeadas podem gerar gastos enormes e são difíceis de recuperar.")+
warn("LIMITE","Cada pessoa pode criar até 2 Business Managers. Cada BM pode ter até 25 contas de anúncio. Planeje sua estrutura antes de começar.")
},
{titulo:"Navegando pelo Gerenciador de Anúncios",resumo:"Interface completa explicada",duracao:"25 min",conteudo:
h2("Conhecendo o Gerenciador de Anúncios")+
p("O <strong>Gerenciador de Anúncios</strong> (Ads Manager) é onde você cria, gerencia e analisa todas as suas campanhas. Acesse em: <code>adsmanager.facebook.com</code>")+
h3("Painel Principal")+
p("O painel mostra uma visão geral de todas as campanhas com métricas em tempo real:")+
ul(["<strong>Alcance</strong> - Quantas pessoas únicas viram seu anúncio","<strong>Impressões</strong> - Total de vezes que o anúncio foi exibido (inclui repetições)","<strong>Cliques no link</strong> - Cliques que direcionam ao destino","<strong>CTR</strong> - Taxa de cliques (cliques/impressões × 100)","<strong>CPC</strong> - Custo por clique no link","<strong>CPM</strong> - Custo por 1.000 impressões","<strong>ROAS</strong> - Retorno sobre investimento em anúncios","<strong>Frequência</strong> - Média de vezes que cada pessoa viu o anúncio"])+
h3("Colunas Personalizadas")+
p("Configure colunas personalizadas para ver as métricas mais relevantes para seu negócio. Vá em <strong>Colunas > Personalizar Colunas</strong>.")+
tip("CRIE 3 PRESETS","<strong>Prospecção:</strong> Alcance, CPM, Frequência, CTR<br><strong>Tráfego:</strong> CPC, CTR, Visualizações de LP, Taxa de rejeição<br><strong>Conversão:</strong> CPA, ROAS, Valor de conversão, Custo por resultado")+
h3("Filtros e Pesquisa")+
p("Use filtros para encontrar campanhas específicas rapidamente:")+
ul(["Filtrar por <strong>status</strong> (ativa, pausada, em análise)","Filtrar por <strong>objetivo</strong> (vendas, tráfego, leads)","Filtrar por <strong>data</strong> (últimos 7, 14, 30 dias)","Filtrar por <strong>métricas</strong> (CPA acima de X, CTR abaixo de Y)"])+
h3("Atalhos Úteis")+
ul(["<strong>Ctrl+D</strong> - Duplicar campanha/conjunto/anúncio","<strong>Ctrl+Z</strong> - Desfazer última ação","Clique no <strong>gráfico de tendência</strong> ao lado das métricas para ver evolução","Use <strong>Detalhamento</strong> para ver dados por idade, gênero, posicionamento"])
},
{titulo:"Estrutura de Campanhas: Campanha > Conjunto > Anúncio",resumo:"Os 3 níveis hierárquicos explicados",duracao:"20 min",conteudo:
h2("Entendendo a Hierarquia")+
p("Cada campanha no Meta Ads segue uma hierarquia de <strong>3 níveis</strong>. Entender isso é fundamental para organizar e otimizar seus anúncios.")+
h3("Nível 1: Campanha")+
p("É o nível mais alto. Aqui você define:")+
ul(["O <strong>objetivo</strong> de marketing (reconhecimento, tráfego, vendas, etc.)","O <strong>tipo de compra</strong> (leilão ou alcance e frequência)","<strong>Orçamento da campanha</strong> (CBO) - o Meta distribui entre conjuntos","<strong>Teste A/B</strong> - se deseja testar variáveis","<strong>Advantage+ Campaign Budget</strong> - distribuição automática de verba"])+
h3("Nível 2: Conjunto de Anúncios")+
p("Aqui você define PARA QUEM e ONDE mostrar:")+
ul(["<strong>Público-alvo</strong>: idade, gênero, localização, interesses, comportamentos","<strong>Posicionamento</strong>: Feed, Stories, Reels, Audience Network (manual ou automático)","<strong>Orçamento e agenda</strong>: valor diário ou vitalício, datas de início/fim","<strong>Otimização</strong>: para que ação otimizar (cliques, conversões, impressões)","<strong>Lance</strong>: automático ou com limite de custo"])+
h3("Nível 3: Anúncio")+
p("O criativo em si — o que as pessoas veem:")+
ul(["O <strong>formato</strong>: imagem, vídeo, carrossel ou coleção","<strong>Texto primário</strong>: o corpo do texto do anúncio","<strong>Título</strong>: headline curta e impactante","<strong>Descrição</strong>: texto complementar","<strong>Call-to-Action (CTA)</strong>: botão como 'Compre Agora', 'Saiba Mais'","<strong>URL de destino</strong>: para onde o clique leva","<strong>Advantage+ Creative</strong>: variações automáticas geradas por IA"])+
ex("EXEMPLO PRÁTICO","<strong>Campanha:</strong> Vendas - Lançamento Curso<br><strong>Conjunto 1:</strong> Mulheres 25-45, São Paulo, interesse em Marketing<br><strong>Conjunto 2:</strong> Homens 25-45, Rio de Janeiro, interesse em Empreendedorismo<br><strong>Anúncio 1A:</strong> Vídeo depoimento + copy com dor<br><strong>Anúncio 1B:</strong> Carrossel benefícios + copy com oferta")+
warn("ERRO COMUM","Não crie dezenas de conjuntos com públicos muito pequenos. Isso fragmenta o orçamento e impede o algoritmo de otimizar. Máximo 3-5 conjuntos por campanha.")
},
{titulo:"Objetivos de Campanha ODAX",resumo:"Escolhendo o objetivo certo para cada meta",duracao:"22 min",conteudo:
h2("Sistema ODAX de Objetivos")+
p("Em 2024/2025, o Meta consolidou os objetivos em <strong>6 categorias principais</strong> (ODAX - Outcome-Driven Ad Experiences):")+
ol(["<strong>Reconhecimento</strong> - Alcançar o máximo de pessoas e fixar sua marca","<strong>Tráfego</strong> - Enviar pessoas para um destino (site, app, WhatsApp)","<strong>Engajamento</strong> - Gerar interações (curtidas, comentários, mensagens)","<strong>Cadastro/Leads</strong> - Coletar informações de contato","<strong>Promoção de App</strong> - Downloads e uso do aplicativo","<strong>Vendas</strong> - Gerar compras e conversões no site"])+
h3("Como Escolher o Objetivo Certo")+
p("A regra de ouro: <strong>escolha o objetivo que corresponde à ação que você quer que o usuário faça</strong>.")+
h3("Guia Rápido por Tipo de Negócio")+
ul(["<strong>E-commerce</strong> → Vendas (com evento Purchase)","<strong>Serviços locais</strong> → Cadastro (Lead Ads) ou Engajamento (WhatsApp)","<strong>Infoprodutos</strong> → Vendas ou Cadastro (dependendo do funil)","<strong>Apps</strong> → Promoção de App","<strong>Marca nova</strong> → Reconhecimento para criar base, depois Tráfego","<strong>Conteúdo/Blog</strong> → Tráfego para gerar audiência"])+
tip("REGRA DE OURO","Se você quer vendas, use objetivo de VENDAS. Se quer leads, use CADASTRO. Parece óbvio, mas muita gente usa Tráfego esperando vendas — isso não funciona porque o algoritmo otimiza para cliques, não compras.")+
h3("Advantage+ Campaigns")+
p("O Meta introduziu campanhas <strong>Advantage+</strong> que usam IA para otimizar automaticamente:")+
ul(["<strong>Advantage+ Shopping</strong> - Para e-commerce, combina prospecção e remarketing","<strong>Advantage+ App</strong> - Para promoção de aplicativos","<strong>Advantage+ Audience</strong> - Segmentação expandida por IA"])+
warn("ATENÇÃO 2025","O Advantage+ Shopping agora é o padrão para e-commerce. Se você vende produtos online, teste esta opção antes de campanhas manuais.")
},
{titulo:"Orçamento e Lances",resumo:"Quanto investir e como controlar gastos",duracao:"20 min",conteudo:
h2("Definindo seu Orçamento")+
p("O orçamento define <strong>quanto você quer gastar</strong> com seus anúncios. Existem duas formas de definir:")+
h3("Orçamento Diário vs Vitalício")+
ul(["<strong>Diário</strong> - Valor máximo gasto por dia (ex: R$50/dia). Pode variar ±25% no dia, mas mantém a média","<strong>Vitalício</strong> - Valor total para o período da campanha (ex: R$1.500 em 30 dias). O Meta distribui automaticamente"])+
h3("CBO vs ABO")+
ul(["<strong>CBO (Campaign Budget Optimization)</strong> - Orçamento definido na CAMPANHA. O Meta distribui entre conjuntos automaticamente. Recomendado na maioria dos casos","<strong>ABO (Ad Set Budget)</strong> - Orçamento definido em cada CONJUNTO. Você controla quanto cada público recebe. Útil para testes"])+
h3("Quanto Investir para Começar?")+
p("Fórmula prática para calcular o orçamento mínimo:")+
ex("FÓRMULA","Orçamento mínimo diário = CPA desejado × 2<br><br>Ex: Se você quer pagar R$30 por lead, invista pelo menos R$60/dia.<br>Ex: Se seu produto custa R$100 e sua margem é 50%, seu CPA máximo é R$50. Invista R$100/dia.")+
h3("Estratégias de Lance")+
ul(["<strong>Menor custo</strong> - O Meta busca o menor CPA possível (padrão, recomendado para começar)","<strong>Limite de custo</strong> - Você define um CPA máximo (ex: 'não pague mais de R$40 por lead')","<strong>Limite de lance</strong> - Controla o valor máximo no leilão (avançado)","<strong>ROAS mínimo</strong> - Define retorno mínimo desejado (ex: ROAS 3x)"])+
tip("PARA INICIANTES","Comece com orçamento diário + menor custo. Após 7 dias com dados, avalie se vale implementar limite de custo.")+
warn("NÃO COMECE COM POUCO","Orçamentos muito baixos (R$5-10/dia) não geram dados suficientes para o algoritmo otimizar. Mínimo recomendado: R$30/dia por conjunto.")
},
{titulo:"Posicionamentos de Anúncios",resumo:"Onde seus anúncios aparecem",duracao:"18 min",conteudo:
h2("Entendendo os Posicionamentos")+
p("Posicionamentos são os <strong>locais onde seus anúncios são exibidos</strong> dentro do ecossistema Meta.")+
h3("Posicionamentos Disponíveis")+
ul(["<strong>Facebook Feed</strong> - O principal, maior volume de impressões","<strong>Facebook Stories</strong> - Tela cheia vertical, formato imersivo","<strong>Facebook Reels</strong> - Vídeos curtos verticais","<strong>Facebook Marketplace</strong> - Dentro da seção de compra/venda","<strong>Facebook Coluna Direita</strong> - Apenas desktop, menor e mais barato","<strong>Instagram Feed</strong> - Alta qualidade visual, público engajado","<strong>Instagram Stories</strong> - 500M+ de usuários diários","<strong>Instagram Reels</strong> - Maior alcance orgânico do Instagram","<strong>Instagram Explorar</strong> - Descoberta de novos conteúdos","<strong>Messenger</strong> - Caixa de entrada e stories","<strong>Audience Network</strong> - Apps e sites parceiros do Meta"])+
h3("Automático vs Manual")+
ul(["<strong>Advantage+ Placements (Automático)</strong> - O Meta decide onde mostrar. Recomendado na maioria dos casos — o algoritmo otimiza para o melhor custo","<strong>Manual</strong> - Você escolhe onde exibir. Use quando: tem criativos específicos para um formato, quer testar posicionamentos isolados, ou tem dados mostrando que um placement performa muito melhor"])+
h3("Tamanhos por Posicionamento")+
ul(["<strong>Feed</strong> - 1080×1080px (1:1) ou 1200×628px (1.91:1)","<strong>Stories/Reels</strong> - 1080×1920px (9:16)","<strong>Carrossel</strong> - 1080×1080px (1:1) por card","<strong>Vídeo</strong> - Mínimo 720p, ideal 1080p"])+
tip("ESTRATÉGIA","Crie criativos em pelo menos 2 formatos: 1:1 (feed) e 9:16 (stories/reels). Assim o Meta pode exibir em todos os posicionamentos sem cortar sua imagem.")
},
{titulo:"Políticas de Anúncios do Meta",resumo:"O que pode e o que não pode anunciar",duracao:"20 min",conteudo:
h2("Políticas de Publicidade")+
p("Conhecer as políticas é <strong>essencial para evitar bloqueios</strong>. Ter a conta bloqueada pode destruir seu negócio.")+
h3("Conteúdo Proibido")+
ul(["Produtos ilegais, drogas e substâncias controladas","Tabaco e produtos relacionados","Armas, munição e explosivos","Conteúdo adulto explícito","Práticas discriminatórias","Documentos falsos","Spyware e malware","Esquemas de pirâmide e MLM enganosos"])+
h3("Conteúdo Restrito (Precisa de Aprovação)")+
ul(["Álcool (restrição de idade obrigatória)","Jogos de azar e apostas (requer licença)","Saúde e farmácia (sem promessas milagrosas)","Suplementos alimentares (sem claims médicos)","Serviços financeiros (transparência obrigatória)","Emagrecimento (proibido antes/depois, claims irreais)","Criptomoedas (requer aprovação prévia)"])+
h3("Erros que Causam Bloqueio")+
ul(["Usar <strong>antes/depois</strong> em anúncios de saúde/estética","Promessas de <strong>ganho financeiro garantido</strong>","<strong>Clickbait</strong> extremo ou conteúdo sensacionalista","Landing page diferente do que o anúncio promete","Coletar dados sensíveis no formulário (raça, religião, saúde)","Usar marca registrada de terceiros sem autorização"])+
ex("COMO APELAR","Se seu anúncio for reprovado injustamente: Vá em <strong>Account Quality</strong> > Encontre o anúncio > Clique em <strong>Solicitar Revisão</strong>. Explique claramente por que seu anúncio está em conformidade.")+
warn("PROTEÇÃO","Mantenha SEMPRE uma segunda conta de anúncios e um segundo Business Manager como backup. Bloqueios podem acontecer por erro do sistema.")
},
{titulo:"Configurações Essenciais da Conta",resumo:"Setup técnico para resultados máximos",duracao:"18 min",conteudo:
h2("Configurações que Impactam Resultados")+
p("Antes de criar sua primeira campanha, configure sua conta corretamente. Erros aqui podem custar caro.")+
h3("Forma de Pagamento")+
ul(["Adicione cartão de crédito internacional (Visa/Mastercard)","Boleto bancário disponível para valores maiores","Configure <strong>limite de gastos da conta</strong> para evitar surpresas","Mantenha um segundo método de pagamento como backup"])+
h3("Fuso Horário e Moeda")+
p("Configure antes de criar campanhas — <strong>não pode ser alterado depois</strong>:")+
ul(["Fuso: <strong>America/Sao_Paulo (GMT-3)</strong>","Moeda: <strong>BRL (Real Brasileiro)</strong>","Todos os relatórios usarão esta configuração"])+
h3("Acesso e Permissões")+
ul(["<strong>Admin</strong> - Acesso total (apenas donos do negócio)","<strong>Anunciante</strong> - Cria e gerencia campanhas","<strong>Analista</strong> - Apenas visualiza relatórios"])+
h3("Verificação da Empresa")+
p("A verificação da empresa no Business Manager desbloqueia recursos avançados:")+
ul(["Acesso a mais contas de anúncio","Limites de gastos maiores","Prioridade no suporte do Meta","Credibilidade maior = menos bloqueios"])+
tip("CHECKLIST INICIAL","Antes da primeira campanha: ✅ BM criado ✅ 2FA ativado ✅ Pagamento configurado ✅ Página vinculada ✅ Pixel instalado ✅ Domínio verificado")+
warn("CUIDADO","Nunca compartilhe acesso de Admin com pessoas não confiáveis. Um admin pode remover todos os outros e roubar a conta inteira.")
},
{titulo:"Métricas Fundamentais",resumo:"Os números que todo anunciante precisa dominar",duracao:"22 min",conteudo:
h2("O Vocabulário dos Dados")+
p("Dominar as métricas é o que separa amadores de profissionais. Sem entender números, você está <strong>jogando dinheiro fora</strong>.")+
h3("Métricas de Alcance")+
ul(["<strong>Impressões</strong> - Total de vezes que seu anúncio foi mostrado (inclui repetições)","<strong>Alcance</strong> - Número de pessoas únicas que viram seu anúncio","<strong>Frequência</strong> - Impressões ÷ Alcance = média de vezes que cada pessoa viu. Ideal: 1.5-3.0"])+
h3("Métricas de Engajamento")+
ul(["<strong>CTR (Click-Through Rate)</strong> - % de pessoas que clicaram. Fórmula: (Cliques ÷ Impressões) × 100. Bom: acima de 1.5%","<strong>CPC (Custo por Clique)</strong> - Quanto paga por cada clique. Bom: R$0.50-3.00 (varia por nicho)","<strong>CPM (Custo por Mil)</strong> - Quanto paga por 1.000 impressões. Bom: R$15-50"])+
h3("Métricas de Conversão")+
ul(["<strong>CPA (Custo por Aquisição)</strong> - Quanto paga por cada conversão (venda, lead, etc.)","<strong>ROAS (Return on Ad Spend)</strong> - Receita gerada ÷ Valor investido. Ex: ROAS 3x = R$3 de receita para cada R$1 investido","<strong>Taxa de Conversão</strong> - % de cliques que viraram conversão. Bom: 2-10% (varia por tipo)","<strong>Custo por Lead (CPL)</strong> - Quanto paga por cada lead capturado"])+
h3("Métricas de Vídeo")+
ul(["<strong>3-Second Video Views</strong> - Pessoas que assistiram 3+ segundos","<strong>ThruPlay</strong> - Assistiram 15+ segundos ou o vídeo todo","<strong>Hook Rate</strong> - 3s views ÷ impressões. Bom: acima de 25%","<strong>Hold Rate</strong> - ThruPlay ÷ 3s views. Bom: acima de 15%"])+
ex("ANÁLISE PRÁTICA","Campanha gastou R$500. Gerou 10.000 impressões, 200 cliques e 15 vendas de R$100.<br><br>CPM = R$50 | CPC = R$2.50 | CTR = 2% | CPA = R$33 | ROAS = 3x (R$1.500 ÷ R$500)<br><br><strong>Veredicto:</strong> Campanha lucrativa! ROAS 3x significa lucro.")+
tip("META PARA CADA NÍVEL","<strong>Iniciante:</strong> Foque em CTR e CPC<br><strong>Intermediário:</strong> Foque em CPA e taxa de conversão<br><strong>Avançado:</strong> Foque em ROAS e LTV")
}
]},
{titulo:"Segmentação e Públicos",icon:"👥",color:"#7c4dff",aulas:[
{titulo:"Entendendo Públicos no Meta Ads",resumo:"A base de toda campanha eficiente",duracao:"20 min",conteudo:
h2("A Importância da Segmentação")+
p("Segmentação é o processo de definir <strong>para quem</strong> seus anúncios serão exibidos. É o fator #1 que determina o sucesso ou fracasso de uma campanha.")+
p("No Meta Ads, existem <strong>3 tipos principais de público</strong>:")+
h3("1. Públicos Salvos (Core Audiences)")+
p("Criados manualmente com base em dados demográficos, interesses e comportamentos:")+
ul(["<strong>Localização</strong> - País, estado, cidade, raio em km","<strong>Idade</strong> - 18 a 65+ anos","<strong>Gênero</strong> - Masculino, feminino ou todos","<strong>Interesses</strong> - Páginas curtidas, conteúdo consumido","<strong>Comportamentos</strong> - Compras online, viajantes, etc.","<strong>Dados demográficos</strong> - Educação, cargo, renda"])+
h3("2. Públicos Personalizados (Custom Audiences)")+
p("Criados a partir de dados que você já possui:")+
ul(["Visitantes do site (via Pixel)","Listas de clientes (e-mail, telefone)","Engajamento em redes sociais","Visualizadores de vídeo","Usuários de app"])+
h3("3. Públicos Semelhantes (Lookalike Audiences)")+
p("Criados pelo algoritmo para encontrar pessoas parecidas com seu público existente.")+
tip("REGRA GERAL","Para prospecção: use Lookalikes e interesses amplos. Para remarketing: use públicos personalizados. O equilíbrio entre os dois é o que gera escala com lucro.")+
warn("TAMANHO IDEAL","Públicos entre 500 mil e 5 milhões são ideais para a maioria das campanhas. Muito pequeno = custo alto. Muito grande = baixa relevância.")
},
{titulo:"Públicos Personalizados: Site",resumo:"Criando audiências com o Pixel",duracao:"25 min",conteudo:
h2("Públicos Baseados no Tráfego do Site")+
p("Os públicos de site são criados pelo <strong>Meta Pixel</strong> que rastreia visitantes. São os públicos mais valiosos para remarketing.")+
h3("Como Criar")+
ol(["Acesse <strong>Gerenciador de Anúncios > Públicos</strong>","Clique em <strong>Criar Público > Público Personalizado</strong>","Selecione <strong>Site</strong> como fonte","Escolha a regra: todos os visitantes, páginas específicas ou eventos","Defina a janela de tempo (1 a 180 dias)","Nomeie o público e salve"])+
h3("Segmentos Estratégicos por Tempo")+
ul(["<strong>1-3 dias</strong> - Público ultra quente, maior intenção de compra","<strong>7 dias</strong> - Público quente, boa lembrança da marca","<strong>14 dias</strong> - Público morno, precisa de reforço","<strong>30 dias</strong> - Público padrão para remarketing geral","<strong>60-90 dias</strong> - Público frio, requer re-engajamento","<strong>180 dias</strong> - Público máximo, para lookalikes"])+
h3("Segmentos por Comportamento")+
ul(["<strong>Todos os visitantes</strong> - Para remarketing geral","<strong>Visitantes de páginas específicas</strong> - Ex: página de produto, preço","<strong>Por evento</strong> - ViewContent, AddToCart, InitiateCheckout","<strong>Top 25% por tempo</strong> - Visitantes mais engajados","<strong>Por frequência</strong> - Visitou 2+ vezes = alta intenção"])+
ex("SEGMENTO PODEROSO","Crie um público de pessoas que fizeram AddToCart mas NÃO fizeram Purchase nos últimos 7 dias. Este é seu público de carrinho abandonado — o mais lucrativo para remarketing.")+
tip("DICA PRO","Crie TODOS esses públicos agora, mesmo sem campanha ativa. Eles começam a popular imediatamente e estarão prontos quando você precisar.")
},
{titulo:"Públicos Personalizados: Engajamento",resumo:"Audiências de quem interagiu com sua marca",duracao:"22 min",conteudo:
h2("Públicos de Engajamento")+
p("Esses públicos capturam pessoas que <strong>interagiram com seu conteúdo</strong> no Facebook e Instagram, mesmo sem visitar seu site.")+
h3("Fontes de Engajamento")+
ul(["<strong>Página do Facebook</strong> - Curtiu, comentou, compartilhou, enviou mensagem","<strong>Perfil do Instagram</strong> - Visitou perfil, interagiu com posts/stories, enviou DM","<strong>Vídeos</strong> - Assistiu 3s, 10s, 25%, 50%, 75% ou 95% do vídeo","<strong>Formulários de Lead</strong> - Abriu ou preencheu formulário","<strong>Eventos</strong> - Respondeu a eventos do Facebook","<strong>Experiência Instantânea</strong> - Interagiu com anúncios de coleção"])+
h3("Públicos de Vídeo (Os Mais Poderosos)")+
p("Públicos de vídeo são extremamente valiosos porque medem <strong>nível de interesse real</strong>:")+
ul(["<strong>25% assistido</strong> - Interesse inicial (bom para remarketing amplo)","<strong>50% assistido</strong> - Interesse moderado (bom para ofertas)","<strong>75% assistido</strong> - Alto interesse (excelente para conversão)","<strong>95% assistido</strong> - Interesse máximo (melhor público para Lookalike)"])+
h3("Públicos de Instagram")+
ul(["Pessoas que <strong>visitaram seu perfil</strong> nos últimos 30-90 dias","Pessoas que <strong>salvaram posts</strong> (alto interesse)","Pessoas que <strong>enviaram mensagem</strong> (intenção de contato)","Pessoas que <strong>interagiram com qualquer conteúdo</strong>"])+
tip("ESTRATÉGIA DE VÍDEO","Rode uma campanha de Reconhecimento com vídeo educativo. Depois, crie público de 75%+ e faça remarketing com oferta. Custo de aquisição cai drasticamente.")+
warn("VALIDADE","Públicos de engajamento expiram em 365 dias (máximo). Para site/pixel, o máximo é 180 dias. Configure janelas adequadas.")
},
{titulo:"Públicos Personalizados: Listas de Clientes",resumo:"Upload de dados para segmentação",duracao:"18 min",conteudo:
h2("Customer List: Seus Dados, Seu Poder")+
p("Faça upload da sua lista de clientes para encontrá-los no Meta e criar públicos segmentados.")+
h3("Dados Aceitos")+
ul(["<strong>E-mail</strong> - Principal identificador (taxa de match ~60-70%)","<strong>Telefone</strong> - Com código do país (+55 para Brasil)","<strong>Nome + Sobrenome</strong> - Complementa o match","<strong>CPF</strong> - Aumenta precisão no Brasil","<strong>Cidade + Estado + CEP</strong> - Complementa identificação"])+
h3("Como Fazer Upload")+
ol(["Prepare arquivo CSV ou TXT com os dados","Acesse <strong>Públicos > Público Personalizado > Lista de Clientes</strong>","Faça upload do arquivo","Mapeie as colunas (e-mail, telefone, etc.)","Aguarde o processamento (pode levar até 1 hora)","Verifique a <strong>taxa de match</strong> (ideal acima de 50%)"])+
h3("Segmentos Estratégicos")+
ul(["<strong>Compradores recorrentes</strong> - Seus melhores clientes, ideal para Lookalike","<strong>Compradores únicos</strong> - Para cross-sell e upsell","<strong>Leads que não compraram</strong> - Remarketing com oferta especial","<strong>Clientes inativos</strong> - Re-engajamento com novidade","<strong>VIPs (alto ticket)</strong> - Lookalike para encontrar mais clientes premium"])+
ex("TAXA DE MATCH","Lista com 10.000 e-mails → Match de 65% = 6.500 pessoas encontradas. Use como Lookalike fonte para encontrar milhões de pessoas similares.")+
tip("ATUALIZE SEMPRE","Faça upload atualizado da lista a cada 15-30 dias. Clientes novos melhoram a qualidade do público e do Lookalike.")+
warn("LGPD","Certifique-se de ter consentimento dos clientes para uso dos dados em publicidade. Compliance com LGPD é obrigatório no Brasil.")
},
{titulo:"Públicos Semelhantes (Lookalike)",resumo:"Expandindo alcance com IA",duracao:"25 min",conteudo:
h2("Lookalike: A Ferramenta Mais Poderosa de Escala")+
p("Os <strong>Públicos Semelhantes</strong> são criados pelo algoritmo do Meta para encontrar pessoas parecidas com seus melhores clientes. É a ferramenta #1 para <strong>escalar campanhas lucrativas</strong>.")+
h3("Como Funciona")+
p("Você fornece um público-fonte (ex: seus compradores) e o Meta analisa <strong>centenas de sinais comportamentais</strong> para encontrar pessoas com perfil similar.")+
h3("Tamanhos de Lookalike")+
ul(["<strong>1%</strong> - Mais similar ao público-fonte. Menor alcance (~2M pessoas no BR), maior qualidade. Ideal para começar","<strong>2%</strong> - Bom equilíbrio para escala inicial","<strong>3-5%</strong> - Equilíbrio entre alcance e qualidade. Ideal para escala","<strong>6-10%</strong> - Maior alcance, menor similaridade. Para awareness"])+
h3("Melhores Fontes para Lookalike (Em Ordem)")+
ol(["<strong>Compradores</strong> - Melhor fonte absoluta, público de maior valor","<strong>Compradores recorrentes ou alto ticket</strong> - Ainda melhor que compradores gerais","<strong>Leads qualificados (SQL)</strong> - Pessoas que demonstraram intenção real","<strong>Evento Purchase no Pixel</strong> - Baseado em dados de conversão","<strong>Evento AddToCart</strong> - Próximo passo se não tem 100+ compras","<strong>Engajamento com vídeo 75%+</strong> - Alta intenção de conteúdo","<strong>Visitantes do site (top 25%)</strong> - Os mais engajados"])+
h3("Estratégia de Empilhamento")+
p("Crie Lookalikes em faixas e teste cada uma:")+
ex("SETUP PROFISSIONAL","<strong>Conjunto 1:</strong> Lookalike 1% de Compradores<br><strong>Conjunto 2:</strong> Lookalike 1-3% de Compradores (exclui o 1%)<br><strong>Conjunto 3:</strong> Lookalike 3-5% de Compradores (exclui 1-3%)<br><br>Compare CPA e ROAS de cada faixa após 7 dias.")+
tip("TAMANHO DA FONTE","O público-fonte ideal tem entre 1.000 e 50.000 pessoas. Muito pequeno = dados insuficientes. Muito grande = diluição da qualidade.")+
warn("ERRO FATAL","Não use como fonte 'todos os visitantes do site'. É genérico demais. Use SEMPRE compradores ou leads qualificados como fonte.")
},
{titulo:"Segmentação por Interesses",resumo:"Targeting detalhado no Meta",duracao:"22 min",conteudo:
h2("Segmentação Detalhada por Interesses")+
p("A segmentação por interesses permite alcançar pessoas com base em <strong>dados demográficos, interesses e comportamentos</strong> que o Meta identifica.")+
h3("Categorias Principais")+
ul(["<strong>Dados Demográficos</strong> - Educação, trabalho, renda, status de relacionamento, eventos da vida","<strong>Interesses</strong> - Hobbies, entretenimento, esportes, tecnologia, fitness, gastronomia","<strong>Comportamentos</strong> - Compras online, viajantes frequentes, donos de negócios, early adopters"])+
h3("Estratégia de Interesses Amplos vs Nichados")+
ul(["<strong>Amplo</strong> (1M+ pessoas) - Dá mais espaço ao algoritmo, funciona bem com Pixel maduro","<strong>Nichado</strong> (100K-500K) - Mais relevante, funciona bem para testar hipóteses","<strong>Empilhado</strong> - Combinar 2-3 interesses para refinar (ex: Marketing Digital + Empreendedorismo + Negócios Online)"])+
h3("Como Pesquisar Interesses")+
ol(["Use a ferramenta <strong>Audience Insights</strong> do Meta","Pesquise páginas, marcas e influenciadores do seu nicho","Analise os interesses dos seus melhores clientes","Use ferramentas externas como <strong>Facebook Interest Targeting Tool</strong>","Teste interesses de nichos adjacentes"])+
h3("Estratégia de Exclusão")+
p("Tão importante quanto definir quem incluir é definir quem <strong>excluir</strong>:")+
ul(["Exclua compradores recentes de campanhas de prospecção","Exclua concorrentes e seus funcionários","Exclua públicos irrelevantes (ex: estudantes se vende produto premium)","Exclua fãs da sua página se quer apenas público novo"])+
ex("EXEMPLO PRÁTICO","<strong>Produto:</strong> Curso de marketing digital para iniciantes<br><strong>Interesses:</strong> Marketing Digital + Empreendedorismo + Negócios Online<br><strong>Excluir:</strong> Agências de publicidade, Profissionais de marketing (já são avançados)<br><strong>Idade:</strong> 25-45 | <strong>Resultado:</strong> ~2M pessoas")
},
{titulo:"Advantage+ Audience",resumo:"Segmentação automática por IA do Meta",duracao:"20 min",conteudo:
h2("O Novo Advantage+ Audience")+
p("Em 2025, o Meta introduziu o <strong>Advantage+ Audience</strong>, que usa IA para encontrar o melhor público automaticamente, substituindo a segmentação manual.")+
h3("Como Funciona")+
p("Em vez de definir interesses manualmente, você fornece <strong>sugestões de público</strong> (audience suggestions) e o algoritmo expande a busca para encontrar as pessoas com maior probabilidade de converter.")+
h3("Quando Usar")+
ul(["Contas com <strong>histórico de conversões</strong> (50+ por semana)","Campanhas de <strong>vendas e leads</strong> com Pixel maduro","Quando você quer <strong>escalar</strong> além dos públicos manuais","E-commerce com catálogo grande","Quando Lookalikes começam a saturar"])+
h3("Quando NÃO Usar")+
ul(["Contas novas sem histórico de conversões","Produtos muito nichados ou regionais","Quando você precisa de controle total sobre segmentação","Orçamentos muito baixos (menos de R$50/dia)","Quando está testando hipóteses específicas de público"])+
h3("Configuração Ideal")+
ol(["Selecione <strong>Advantage+ Audience</strong> no conjunto de anúncios","Adicione <strong>sugestões de público</strong> (seus melhores interesses/lookalikes)","Defina restrições de <strong>idade e localização</strong> se necessário","Deixe o algoritmo otimizar por pelo menos <strong>7 dias</strong>","Compare resultados com campanhas de público manual"])+
tip("TESTE A/B","Rode uma campanha com Advantage+ Audience contra uma com segmentação manual. Compare CPA e ROAS após 7 dias com gasto equivalente. O vencedor fica.")+
warn("MONITORAMENTO","O Advantage+ pode gastar orçamento em públicos inesperados. Monitore relatórios de detalhamento por idade, gênero e localização nos primeiros dias.")
},
{titulo:"Exclusões e Sobreposição de Públicos",resumo:"Evitando competição interna",duracao:"18 min",conteudo:
h2("O Problema da Sobreposição")+
p("Quando dois conjuntos de anúncios competem pelo <strong>mesmo público</strong>, ambos perdem. Isso se chama <strong>sobreposição de públicos</strong> (audience overlap) e é um dos erros mais comuns.")+
h3("Como Verificar Sobreposição")+
ol(["Vá em <strong>Públicos</strong> no Gerenciador","Selecione 2 públicos que quer comparar","Clique em <strong>... > Mostrar sobreposição de público</strong>","Se a sobreposição for acima de <strong>30%</strong>, tome ação"])+
h3("Como Resolver")+
ul(["<strong>Excluir</strong> um público do outro (ex: excluir Lookalike 1% do Lookalike 1-3%)","<strong>Consolidar</strong> públicos similares em um único conjunto","Usar <strong>CBO</strong> para que o Meta distribua orçamento inteligentemente","<strong>Separar</strong> por objetivo: um para prospecção, outro para remarketing"])+
h3("Exclusões Estratégicas Obrigatórias")+
ul(["<strong>Campanhas de prospecção</strong> → Exclua SEMPRE: compradores, leads existentes, visitantes recentes","<strong>Campanhas de remarketing</strong> → Exclua compradores recentes (evita gastar com quem já comprou)","<strong>Lookalikes empilhados</strong> → Exclua o público menor do maior (1% excluído do 1-3%)","<strong>Entre campanhas</strong> → Se tem campanhas separadas para mesmo produto, exclua o público da outra"])+
ex("SETUP CORRETO","<strong>Campanha Prospecção:</strong> Lookalike 1% EXCLUINDO visitantes site 30d + compradores 180d<br><strong>Campanha Remarketing:</strong> Visitantes 7d EXCLUINDO compradores 30d<br><strong>Campanha Carrinho:</strong> AddToCart 7d EXCLUINDO compradores 7d")+
warn("IMPACTO REAL","Sobreposição de 50% pode aumentar seu CPA em 40%+. Seus próprios anúncios competem entre si no leilão, inflando o custo.")
},
{titulo:"Segmentação Geográfica e Demográfica",resumo:"Refinando por localização e perfil",duracao:"18 min",conteudo:
h2("Segmentação Geográfica Avançada")+
p("A localização é um dos filtros mais importantes, especialmente para <strong>negócios locais e regionais</strong>.")+
h3("Opções de Localização")+
ul(["<strong>País inteiro</strong> - Para produtos digitais e e-commerce nacional","<strong>Estado</strong> - Para franquias e negócios regionais","<strong>Cidade</strong> - Para negócios locais","<strong>Raio em km</strong> - Para lojas físicas (1km a 80km ao redor de um ponto)","<strong>CEP/Código Postal</strong> - Para áreas específicas"])+
h3("Tipos de Presença")+
ul(["<strong>Pessoas que moram aqui</strong> - Residentes (ideal para negócios locais)","<strong>Pessoas recentemente neste local</strong> - Inclui turistas e visitantes","<strong>Pessoas viajando para este local</strong> - Turistas planejando viagem","<strong>Todos neste local</strong> - Combinação de todos (padrão)"])+
h3("Segmentação Demográfica Avançada")+
ul(["<strong>Educação</strong> - Nível de escolaridade, universidade, área de estudo","<strong>Trabalho</strong> - Cargo, setor, empresa (útil para B2B)","<strong>Renda</strong> - Top 10%, 25%, 50% de renda (disponível em alguns países)","<strong>Status de relacionamento</strong> - Solteiro, casado, noivo","<strong>Eventos da vida</strong> - Aniversário próximo, recém-casado, novo emprego","<strong>Pais</strong> - Pais de filhos 0-2 anos, 3-5 anos, adolescentes"])+
tip("NEGÓCIO LOCAL","Para lojas físicas: use raio de 5-15km + idade relevante + interesse no seu produto. Adicione 'pessoas que moram aqui' para evitar turistas que não retornam.")+
ex("B2B","Para vender para empresas: segmente por <strong>cargo</strong> (CEO, Diretor, Gerente) + <strong>setor</strong> (Tecnologia, Varejo) + <strong>tamanho da empresa</strong>. Combine com Lookalike de clientes existentes para máxima eficácia.")
},
{titulo:"Estratégia Completa de Públicos",resumo:"Montando sua estrutura de audiências",duracao:"25 min",conteudo:
h2("Plano de Públicos Profissional")+
p("Uma estrutura bem planejada de públicos é o <strong>alicerce de todo o seu marketing</strong>. Siga este framework:")+
h3("Framework TOFU/MOFU/BOFU")+
ul(["<strong>TOFU (Topo)</strong> - Público frio: Lookalikes 3-5%, interesses amplos, Advantage+ Audience","<strong>MOFU (Meio)</strong> - Público morno: Visitantes do site 30d, engajamento IG/FB 60d, video viewers 50%+","<strong>BOFU (Fundo)</strong> - Público quente: ViewContent 7d, AddToCart 7d, visitantes de preço, leads existentes"])+
h3("Checklist de Públicos para Criar Hoje")+
ol(["<strong>Visitantes do site</strong> - 7, 14, 30, 60, 180 dias","<strong>ViewContent</strong> - 7 e 14 dias","<strong>AddToCart</strong> - 7 e 14 dias","<strong>Purchase</strong> - 30, 60, 180 dias (para Lookalike e exclusão)","<strong>Engajamento Instagram</strong> - 30, 90, 365 dias","<strong>Engajamento Facebook</strong> - 30, 90, 365 dias","<strong>Video viewers</strong> - 50%, 75%, 95% (últimos 365 dias)","<strong>Lookalike 1%</strong> de compradores","<strong>Lookalike 1-3%</strong> de compradores","<strong>Lookalike 3-5%</strong> de compradores"])+
h3("Nomenclatura Profissional")+
p("Padronize nomes para organização:")+
ex("PADRÃO DE NOMES","<strong>PP_</strong> = Público Personalizado<br><strong>LK_</strong> = Lookalike<br><br>PP_Site_Visitantes_30d<br>PP_Site_AddToCart_7d<br>PP_IG_Engajamento_90d<br>PP_Video_75pct_365d<br>PP_Lista_Compradores_2025<br>LK_1pct_Compradores<br>LK_3pct_Compradores")+
h3("Matriz de Distribuição de Orçamento")+
ul(["<strong>60-70%</strong> do orçamento em BOFU (remarketing quente)","<strong>20-30%</strong> em prospecção (Lookalikes e interesses)","<strong>10%</strong> em testes de novos públicos"])+
tip("REVISÃO MENSAL","A cada 30 dias, analise quais públicos performam melhor e realoque orçamento. Públicos saturados devem ser renovados ou pausados.")+
warn("PÚBLICO MÍNIMO","Públicos personalizados precisam de pelo menos 1.000 pessoas para funcionar. Se seu site tem pouco tráfego, comece com públicos de engajamento e interesses enquanto o Pixel acumula dados.")
}
]},
{titulo:"Criativos e Formatos",icon:"🎨",color:"#ff6b6b",aulas:[
{titulo:"Formatos de Anúncios no Meta",resumo:"Todos os formatos explicados em detalhes",duracao:"22 min",conteudo:
h2("Formatos Disponíveis")+
p("O Meta oferece diversos formatos de anúncios. Escolher o formato certo para cada objetivo e público é <strong>crucial para a performance</strong>.")+
h3("1. Imagem Única")+
ul(["Formato mais simples e rápido de criar","Ideal para mensagens diretas e ofertas claras","Tamanho: <strong>1080×1080px</strong> (Feed 1:1) ou <strong>1080×1920px</strong> (Stories 9:16)","Texto na imagem: máximo 20% da área (recomendação, não regra)"])+
h3("2. Vídeo")+
ul(["Maior engajamento e retenção que imagem","Duração ideal: <strong>15-30 segundos</strong> para prospecção, até 60s para retargeting","Formato vertical <strong>9:16</strong> para Reels/Stories, <strong>1:1</strong> para Feed","Legendas são <strong>obrigatórias</strong> — 85% dos usuários assistem sem som","Resolução mínima: 720p, ideal 1080p"])+
h3("3. Carrossel")+
ul(["Até <strong>10 cards</strong> com imagem ou vídeo cada","Ideal para mostrar múltiplos produtos ou contar uma história sequencial","Cada card pode ter URL e CTA diferentes","Engajamento <strong>72% maior</strong> que imagem única em média"])+
h3("4. Coleção + Instant Experience")+
p("Formato imersivo que abre em <strong>tela cheia no mobile</strong>. Combina vídeo/imagem de capa com catálogo de produtos. Perfeito para e-commerce.")+
h3("5. Anúncios de Catálogo (Dynamic Ads)")+
p("Mostra automaticamente produtos do seu catálogo baseado no comportamento do usuário.")+
tip("REGRA UNIVERSAL","Sempre crie criativos em pelo menos 3 proporções: <strong>1:1</strong> (feed), <strong>9:16</strong> (stories/reels), <strong>4:5</strong> (feed mobile). Assim o Meta exibe em todos os posicionamentos sem cortar.")
},
{titulo:"Copywriting para Anúncios",resumo:"Textos que param o scroll e vendem",duracao:"28 min",conteudo:
h2("A Arte do Copywriting em Ads")+
p("O texto do anúncio é tão importante quanto o visual. Uma boa copy pode <strong>dobrar sua taxa de conversão</strong> sem gastar um centavo a mais.")+
h3("Estrutura AIDA")+
ol(["<strong>Atenção</strong> - Primeira linha que PARA o scroll. Use pergunta, estatística chocante ou afirmação ousada","<strong>Interesse</strong> - Descreva o problema/dor que o público sente","<strong>Desejo</strong> - Apresente a solução e os benefícios transformadores","<strong>Ação</strong> - CTA claro, direto e urgente"])+
ex("EXEMPLO COPY COMPLETA","🔥 Cansado de gastar dinheiro em anúncios que não vendem?<br><br>Eu também já passei por isso. Gastei R$15.000 antes de descobrir o método que mudou tudo.<br><br>Depois de 3 anos testando, criei um sistema que já gerou R$2M+ em vendas para mais de 500 alunos.<br><br>✅ Passo a passo do zero ao avançado<br>✅ Templates prontos para copiar<br>✅ Suporte por 12 meses<br>✅ Garantia incondicional de 7 dias<br><br>👉 Clique em SAIBA MAIS e comece hoje com 40% OFF (últimas 48h)")+
h3("Gatilhos Mentais que Funcionam")+
ul(["<strong>Escassez</strong> - 'Últimas 10 vagas disponíveis'","<strong>Urgência</strong> - 'Oferta válida apenas até sexta-feira'","<strong>Prova social</strong> - 'Mais de 5.000 alunos formados'","<strong>Autoridade</strong> - 'Método usado por empresas como X e Y'","<strong>Reciprocidade</strong> - Ofereça valor gratuito antes de pedir algo","<strong>Especificidade</strong> - 'Aumente vendas em 37.2%' (números específicos geram mais credibilidade)"])+
h3("Estrutura de Texto Primário")+
ul(["<strong>Linha 1</strong> - Hook matador (aparece antes do 'ver mais')","<strong>Linha 2-3</strong> - Problema/dor do público","<strong>Linha 4-6</strong> - Solução e benefícios","<strong>Linha 7-8</strong> - Prova social ou garantia","<strong>Linha 9</strong> - CTA com urgência"])+
warn("CUIDADO","Evite promessas exageradas e clickbait. O Meta penaliza anúncios com claims irreais, podendo bloquear sua conta. Seja ousado mas honesto.")
},
{titulo:"Design de Criativos que Convertem",resumo:"Princípios visuais para alta performance",duracao:"25 min",conteudo:
h2("Princípios de Design para Ads")+
p("Um criativo eficaz precisa <strong>parar o scroll em menos de 3 segundos</strong>. Siga estes princípios comprovados:")+
h3("Hierarquia Visual")+
ol(["<strong>Elemento hero</strong> - Produto, pessoa ou objeto em destaque central","<strong>Headline</strong> - Texto grande e impactante (máximo 5-7 palavras)","<strong>Benefício</strong> - Por que o usuário deve se importar (1 frase)","<strong>CTA visual</strong> - Botão, seta ou elemento que direcione a ação"])+
h3("Cores e Contraste")+
ul(["Use cores que <strong>contrastem com o feed</strong> (o feed é azul/branco no FB, branco/cinza no IG)","Cores quentes (vermelho, laranja, amarelo) chamam mais atenção","Fundo escuro com texto claro = alta legibilidade","Mantenha consistência com a paleta da sua marca","Use no máximo 3 cores por criativo"])+
h3("Tipografia")+
ul(["Máximo <strong>2 fontes</strong> por criativo","Texto grande e legível no mobile (o thumb é PEQUENO)","Fontes sans-serif são mais legíveis em tamanho pequeno","Use <strong>negrito</strong> para destacar palavras-chave","Contraste mínimo de 4.5:1 entre texto e fundo"])+
h3("Elementos que Aumentam CTR")+
ul(["<strong>Rostos humanos</strong> - Aumentam conexão emocional em 38%","<strong>Cores vibrantes</strong> - Destacam no feed (evite fundos brancos ou cinzas)","<strong>Borda/moldura</strong> - Cria separação do feed, +15% CTR","<strong>Movimento</strong> - GIFs e vídeos curtos chamam mais atenção","<strong>Badges/selos</strong> - '50% OFF', 'FRETE GRÁTIS', 'NOVO'"])+
tip("FERRAMENTA GRATUITA","Use o <strong>Canva</strong> com templates de anúncios para criar criativos profissionais sem conhecimento de design. Adapte templates do tamanho correto para cada posicionamento.")
},
{titulo:"Vídeos para Anúncios",resumo:"Como criar vídeos que vendem",duracao:"25 min",conteudo:
h2("Vídeo: O Formato Mais Poderoso")+
p("Vídeos têm <strong>2-3x mais engajamento</strong> que imagens. Com smartphone e apps simples, qualquer pessoa pode criar vídeos eficazes.")+
h3("Estrutura do Vídeo Perfeito")+
ol(["<strong>Segundo 0-3 (Hook)</strong> - Captura atenção IMEDIATAMENTE. Use movimento, texto grande ou pergunta impactante","<strong>Segundo 3-10</strong> - Apresente o problema que você resolve","<strong>Segundo 10-20</strong> - Mostre a solução e benefícios","<strong>Segundo 20-30</strong> - Prova social ou demonstração","<strong>Segundo 25-30</strong> - CTA forte e claro"])+
h3("Tipos de Vídeo que Funcionam")+
ul(["<strong>UGC (User Generated Content)</strong> - Pessoa real falando para câmera. O formato mais eficaz de 2025","<strong>Depoimento de cliente</strong> - Nada vende mais que resultado real","<strong>Before/After</strong> - Transformação visual (cuidado com políticas!)","<strong>Tutorial/How-to</strong> - Eduque enquanto vende","<strong>Unboxing</strong> - Experiência de receber o produto","<strong>Behind the scenes</strong> - Bastidores geram conexão","<strong>Slideshow</strong> - Sequência de imagens com texto animado"])+
h3("Especificações Técnicas")+
ul(["<strong>Resolução</strong> - Mínimo 720p, ideal 1080p","<strong>Proporção</strong> - 9:16 (vertical) para Stories/Reels, 1:1 para Feed","<strong>Duração</strong> - 15-30s para prospecção, até 60s para retargeting","<strong>Legendas</strong> - OBRIGATÓRIAS (85% assistem sem som)","<strong>Formato</strong> - MP4 ou MOV, máximo 4GB"])+
ex("APPS PARA CRIAR","<strong>CapCut</strong> - Edição profissional gratuita, templates prontos<br><strong>InShot</strong> - Simples e rápido para celular<br><strong>Canva Vídeo</strong> - Templates animados<br><strong>DaVinci Resolve</strong> - Profissional, gratuito para desktop")+
warn("HOOK OBRIGATÓRIO","Se os primeiros 3 segundos não prendem, o restante não importa. Teste 5-10 hooks diferentes para o mesmo vídeo e veja qual tem melhor Hook Rate.")
},
{titulo:"Carrossel: Estratégias Avançadas",resumo:"Maximizando engajamento com múltiplos cards",duracao:"20 min",conteudo:
h2("Dominando o Formato Carrossel")+
p("O carrossel é um dos formatos mais versáteis. Permite contar histórias, mostrar produtos e educar — tudo em um único anúncio.")+
h3("Estratégias de Carrossel")+
ol(["<strong>Storytelling sequencial</strong> - Cada card continua a história (curiosidade puxa o swipe)","<strong>Lista de benefícios</strong> - 1 benefício por card com visual impactante","<strong>Catálogo de produtos</strong> - Cada card mostra um produto diferente","<strong>Tutorial passo a passo</strong> - Educar enquanto vende","<strong>Antes e depois</strong> - Transformação em cards sequenciais","<strong>Depoimentos</strong> - 1 depoimento por card"])+
h3("Anatomia do Card Perfeito")+
ul(["<strong>Card 1</strong> - O mais importante! É o hook. Deve gerar curiosidade para swipe","<strong>Cards 2-8</strong> - Conteúdo principal, mantenha consistência visual","<strong>Último card</strong> - CTA forte, link de destino, urgência"])+
h3("Especificações")+
ul(["Tamanho: <strong>1080×1080px</strong> por card (proporção 1:1)","Mínimo 2 cards, máximo 10","Cada card pode ter imagem ou vídeo (até 15s)","Títulos: máximo 40 caracteres por card","Links podem ser diferentes para cada card"])+
tip("HACK DE SWIPE","No Card 1, corte a imagem/texto na borda direita, como se 'continuasse' no card 2. Isso cria curiosidade natural e aumenta taxa de swipe em até 40%.")+
ex("CARROSSEL DE ALTA CONVERSÃO","Card 1: 'Você está cometendo estes 5 erros em anúncios?'<br>Cards 2-6: Um erro por card com explicação<br>Card 7: 'A solução para todos eles'<br>Card 8: Oferta + CTA")
},
{titulo:"UGC e Conteúdo Autêntico",resumo:"O formato que mais vende em 2025",duracao:"22 min",conteudo:
h2("UGC: User Generated Content")+
p("Em 2025, anúncios que parecem <strong>conteúdo orgânico</strong> performam drasticamente melhor que anúncios 'polidos'. UGC é rei.")+
h3("O que é UGC?")+
p("Conteúdo criado por <strong>pessoas reais</strong> (clientes, influenciadores ou criadores) falando sobre seu produto de forma autêntica, como se fosse um post orgânico.")+
h3("Por que UGC Funciona?")+
ul(["<strong>Confiança</strong> - 92% dos consumidores confiam mais em recomendações de pessoas do que marcas","<strong>Naturalidade</strong> - Não parece anúncio, então as pessoas não pulam","<strong>Identificação</strong> - O público se vê na pessoa que está falando","<strong>Custo baixo</strong> - Não precisa de produção profissional","<strong>Versatilidade</strong> - Funciona para qualquer nicho"])+
h3("Como Criar UGC")+
ol(["<strong>Selecione criadores</strong> - Busque em plataformas como Spark, Fiverr ou contrate micro-influenciadores","<strong>Crie um briefing claro</strong> - Defina: hook, pontos-chave, CTA, tom de voz","<strong>Especifique formato</strong> - Vertical 9:16, 30-60 segundos, boa iluminação","<strong>Peça variações</strong> - Mínimo 3 hooks diferentes por criador","<strong>Edite com legendas</strong> - Adicione texto na tela e cortes rápidos"])+
h3("Estrutura de UGC que Converte")+
ul(["<strong>Hook (0-3s)</strong> - 'Gente, preciso contar uma coisa...' ou 'Descobri algo que mudou minha vida'","<strong>Problema (3-10s)</strong> - 'Eu vivia sofrendo com X...'","<strong>Descoberta (10-15s)</strong> - 'Até que descobri o [produto]'","<strong>Prova (15-25s)</strong> - Demonstração ou resultado","<strong>CTA (25-30s)</strong> - 'Link na bio' ou 'Clica no botão abaixo'"])+
tip("CUSTO","Criadores UGC cobram R$200-500 por vídeo no Brasil. Com 3-5 vídeos, você tem material para semanas de teste. ROI absurdo.")+
warn("AUTENTICIDADE","NÃO roteirize demais. O charme do UGC está na naturalidade. Forneça pontos-chave, não script palavra por palavra.")
},
{titulo:"Testes A/B de Criativos",resumo:"Metodologia científica para encontrar vencedores",duracao:"22 min",conteudo:
h2("Teste A/B: Encontrando os Vencedores")+
p("Sem testes, você está <strong>adivinhando</strong>. Testar criativos de forma sistemática é o que separa campanhas lucrativas de prejuízo.")+
h3("O que Testar (Em Ordem de Impacto)")+
ol(["<strong>Hook/Abertura</strong> - Os primeiros 3 segundos do vídeo ou a imagem principal","<strong>Formato</strong> - Vídeo vs Imagem vs Carrossel vs UGC","<strong>Ângulo de copy</strong> - Dor vs benefício vs prova social vs curiosidade","<strong>CTA</strong> - 'Compre Agora' vs 'Saiba Mais' vs 'Cadastre-se'","<strong>Oferta</strong> - 10% off vs frete grátis vs bônus","<strong>Headline</strong> - Teste 3-5 variações de título","<strong>Cores/visual</strong> - Fundo claro vs escuro, cores quentes vs frias"])+
h3("Regras para Testes Válidos")+
ol(["Teste <strong>UMA variável por vez</strong> (mude apenas 1 elemento entre A e B)","Orçamento mínimo de <strong>R$50/dia por variação</strong>","Aguarde pelo menos <strong>3-5 dias</strong> antes de declarar vencedor","Mínimo de <strong>1.000 impressões</strong> por variação para significância","Use a ferramenta de <strong>Teste A/B nativa</strong> do Meta quando possível","Declare vencedor quando a diferença for <strong>20%+ consistente</strong>"])+
h3("Métricas para Avaliar Criativos")+
ul(["<strong>Hook Rate</strong> (3s views ÷ impressões) - Acima de 25% = bom","<strong>Hold Rate</strong> (ThruPlay ÷ 3s views) - Acima de 15% = bom","<strong>CTR</strong> - Acima de 1.5% = bom criativo","<strong>CPA</strong> - Custo por ação comparado entre variações","<strong>Thumb Stop Ratio</strong> - % que parou para ver (idealmente > 30%)"])+
warn("ERRO FATAL","Não mate anúncios cedo demais! O algoritmo precisa de tempo para otimizar. Dê pelo menos 3 dias e 50 eventos de otimização antes de pausar um criativo.")
},
{titulo:"Ferramentas de Criação",resumo:"Apps e softwares para criar anúncios profissionais",duracao:"18 min",conteudo:
h2("Arsenal de Ferramentas")+
p("Você NÃO precisa de designer ou equipamento caro para criar anúncios profissionais. Estas ferramentas fazem o trabalho:")+
h3("Design de Imagens")+
ul(["<strong>Canva (grátis/pro)</strong> - A ferramenta #1. Templates prontos para ads, fácil de usar","<strong>Adobe Express (grátis)</strong> - Templates profissionais do Adobe","<strong>Figma (grátis)</strong> - Para designs mais avançados, colaborativo","<strong>Remove.bg</strong> - Remove fundo de imagens em 1 clique","<strong>Unsplash/Pexels</strong> - Banco de imagens gratuitas de alta qualidade"])+
h3("Edição de Vídeo")+
ul(["<strong>CapCut (grátis)</strong> - O melhor editor gratuito, templates virais, legendas automáticas","<strong>InShot (grátis)</strong> - Rápido e simples no celular","<strong>DaVinci Resolve (grátis)</strong> - Profissional no desktop","<strong>Adobe Premiere Rush</strong> - Versão simplificada do Premiere"])+
h3("Legendas e Texto")+
ul(["<strong>CapCut</strong> - Legendas automáticas com IA","<strong>Zubtitle</strong> - Especializado em legendas para ads","<strong>Headliner</strong> - Transforma áudio em vídeo com ondas"])+
h3("IA para Criativos")+
ul(["<strong>ChatGPT/Claude</strong> - Gerar copies, headlines e roteiros","<strong>Midjourney/DALL-E</strong> - Gerar imagens com IA","<strong>Runway</strong> - Edição de vídeo com IA","<strong>ElevenLabs</strong> - Narração com IA em português","<strong>Meta Advantage+ Creative</strong> - Variações automáticas nativas"])+
tip("WORKFLOW EFICIENTE","1) Gere copy com IA → 2) Crie visual no Canva → 3) Adapte para 3 proporções → 4) Adicione legendas no CapCut → 5) Exporte e suba no Meta. Processo todo em 30 minutos.")
},
{titulo:"Creative Fatigue e Renovação",resumo:"Quando e como renovar seus criativos",duracao:"18 min",conteudo:
h2("Fadiga de Criativo")+
p("Todo anúncio tem uma <strong>vida útil</strong>. Quando o público vê o mesmo criativo muitas vezes, para de prestar atenção. Isso se chama <strong>creative fatigue</strong>.")+
h3("Sinais de Fadiga")+
ul(["<strong>CTR caindo</strong> progressivamente ao longo dos dias","<strong>CPA subindo</strong> sem mudança no público ou orçamento","<strong>Frequência acima de 3</strong> no período de 7 dias","<strong>Comentários negativos</strong> aumentando","<strong>CPM subindo</strong> (o Meta cobra mais por baixa relevância)"])+
h3("Quando Renovar")+
ul(["A cada <strong>7-14 dias</strong> para públicos pequenos (remarketing)","A cada <strong>14-30 dias</strong> para públicos grandes (prospecção)","Imediatamente se CTR cair <strong>50%+</strong> em relação ao pico","Quando frequência atingir <strong>4+</strong> em 7 dias"])+
h3("Como Renovar sem Começar do Zero")+
ol(["<strong>Novo hook</strong> - Mantenha o corpo, mude os primeiros 3 segundos","<strong>Novo visual</strong> - Mesmo texto, nova imagem/vídeo","<strong>Novo ângulo</strong> - Mesmo produto, perspectiva diferente (dor vs benefício)","<strong>Novo formato</strong> - Imagem → Vídeo → Carrossel → UGC","<strong>Novo criador</strong> - Mesmo roteiro, pessoa diferente (para UGC)","<strong>Novo fundo/cor</strong> - Mesmo layout, paleta de cores diferente"])+
tip("BANCO DE CRIATIVOS","Mantenha sempre 5-10 criativos prontos em 'estoque'. Quando um fatigar, já tem substituto pronto. Nunca fique sem criativo novo.")+
warn("NÃO PAUSE VENCEDORES","Se um criativo ainda performa bem, NÃO pause para 'descansar'. Deixe rodar enquanto estiver lucrativo. Adicione novos criativos ao lado dele.")
},
{titulo:"Biblioteca de Anúncios e Espionagem",resumo:"Pesquisando concorrentes e referências",duracao:"20 min",conteudo:
h2("Meta Ad Library: Sua Ferramenta de Pesquisa")+
p("A <strong>Biblioteca de Anúncios do Meta</strong> (facebook.com/ads/library) permite ver TODOS os anúncios ativos de qualquer página. É a melhor ferramenta de pesquisa competitiva.")+
h3("Como Usar")+
ol(["Acesse <strong>facebook.com/ads/library</strong>","Selecione o país (Brasil)","Pesquise pelo nome do concorrente ou palavra-chave","Filtre por <strong>plataforma</strong> (Facebook, Instagram)","Filtre por <strong>tipo de mídia</strong> (imagem, vídeo)","Analise os anúncios ativos"])+
h3("O que Analisar nos Concorrentes")+
ul(["<strong>Quais formatos</strong> usam (vídeo, imagem, carrossel)","<strong>Tom da copy</strong> (formal, informal, urgente)","<strong>Ofertas</strong> (desconto, bônus, frete grátis)","<strong>CTAs</strong> (qual botão usam)","<strong>Duração</strong> - Anúncios que rodam há semanas/meses = estão funcionando","<strong>Variações</strong> - Quantas versões testam simultaneamente"])+
h3("Ferramentas Complementares")+
ul(["<strong>Meta Ad Library</strong> - Gratuita, oficial","<strong>Minea</strong> - Espionagem avançada de e-commerce","<strong>BigSpy</strong> - Banco de dados de anúncios globais","<strong>Foreplay</strong> - Salvar e organizar referências de ads","<strong>Swipe File</strong> - Crie sua própria pasta de referências"])+
ex("MÉTODO DE PESQUISA","1) Encontre 5 concorrentes diretos<br>2) Veja anúncios ativos há +30 dias (se roda há 1 mês, é lucrativo)<br>3) Anote: formato, hook, oferta, CTA<br>4) Adapte para seu produto (NUNCA copie, adapte)<br>5) Crie 3 variações baseadas nas melhores referências")+
tip("INSPIRAÇÃO FORA DO NICHO","Não olhe só seus concorrentes. Os melhores insights vêm de nichos diferentes. Veja como e-commerce de moda, apps, SaaS e infoprodutos anunciam — adapte as melhores ideias.")
}
]},
{titulo:"Pixel e Rastreamento",icon:"📊",color:"#00b8d4",aulas:[
{titulo:"O que é o Meta Pixel",resumo:"Entendendo o código que rastreia tudo",duracao:"20 min",conteudo:
h2("Meta Pixel: A Base de Tudo")+
p("O <strong>Meta Pixel</strong> é um código JavaScript instalado no seu site que rastreia ações dos visitantes. Sem ele, você está anunciando às cegas.")+
h3("O que o Pixel Faz")+
ul(["<strong>Rastreia conversões</strong> - Sabe exatamente quais anúncios geraram vendas","<strong>Cria públicos</strong> - Permite remarketing para visitantes do site","<strong>Otimiza campanhas</strong> - Alimenta o algoritmo com dados de quem converte","<strong>Mede ROAS</strong> - Calcula retorno real sobre investimento","<strong>Habilita eventos</strong> - Rastreia ações específicas (compra, cadastro, etc.)"])+
h3("Como o Pixel Funciona")+
p("Quando alguém visita seu site, o Pixel envia informações para o Meta:")+
ol(["Usuário clica no anúncio e vai ao seu site","Pixel carrega no navegador do visitante","Pixel envia dados de volta ao Meta (página visitada, ações realizadas)","Meta cruza: 'esta pessoa que viu o anúncio X fez a ação Y'","Algoritmo aprende e otimiza para encontrar mais pessoas similares"])+
h3("Pixel Base Code vs Eventos")+
ul(["<strong>Base Code</strong> - Código principal, rastreia PageView automaticamente em todas as páginas","<strong>Eventos</strong> - Códigos adicionais para ações específicas (compra, lead, add to cart)"])+
tip("INSTALE AGORA","Mesmo sem campanhas ativas, instale o Pixel hoje. Ele começa a coletar dados de visitantes imediatamente, e esses dados serão valiosos quando você lançar campanhas.")+
warn("UM PIXEL POR SITE","Cada site deve ter apenas 1 Pixel. Múltiplos pixels no mesmo site causam conflitos e dados duplicados.")
},
{titulo:"Instalação do Pixel Passo a Passo",resumo:"Todos os métodos de instalação",duracao:"25 min",conteudo:
h2("Instalando o Meta Pixel")+
h3("Método 1: Manual (HTML)")+
ol(["Acesse <strong>Gerenciador de Eventos</strong> no Business Manager","Clique em <strong>Conectar Fontes de Dados > Web</strong>","Selecione <strong>Meta Pixel</strong> e dê um nome","Escolha <strong>Instalar código manualmente</strong>","Copie o código do Pixel","Cole no <code>&lt;head&gt;</code> de TODAS as páginas do site, antes do <code>&lt;/head&gt;</code>","Salve e publique"])+
h3("Método 2: Google Tag Manager (Recomendado)")+
ol(["Crie uma conta no <strong>Google Tag Manager</strong> (tagmanager.google.com)","Instale o container do GTM no site","No GTM, crie uma nova <strong>Tag</strong> > tipo <strong>HTML Personalizado</strong>","Cole o código do Pixel","Acionador: <strong>All Pages</strong>","Publique o container"])+
h3("Método 3: Integrações Nativas")+
ul(["<strong>Shopify</strong> - Configurações > Apps e canais > Facebook & Instagram","<strong>WordPress</strong> - Plugin 'Meta Pixel for WordPress' ou 'PixelYourSite'","<strong>WooCommerce</strong> - Plugin 'Facebook for WooCommerce'","<strong>Wix</strong> - Marketing > Integrações de marketing > Facebook Pixel"])+
h3("Verificando a Instalação")+
ol(["Instale a extensão <strong>Meta Pixel Helper</strong> no Chrome","Acesse seu site","O ícone deve ficar <strong>verde</strong> com o número do Pixel","Verifique se o evento <strong>PageView</strong> está disparando","No Gerenciador de Eventos, veja se dados estão chegando"])+
ex("TESTE COMPLETO","Após instalar: 1) Abra seu site 2) Verifique no Pixel Helper 3) Vá ao Gerenciador de Eventos 4) Clique em 'Testar Eventos' 5) Navegue pelo site 6) Confirme que cada página registra PageView")+
warn("ERRO COMUM","Se o Pixel Helper mostra erro 'Pixel encontrado mas sem PageView', o código está posicionado errado no HTML. Deve estar DENTRO do <head>, não no <body>.")
},
{titulo:"Eventos Padrão do Pixel",resumo:"Rastreando cada ação do usuário",duracao:"28 min",conteudo:
h2("Eventos: O Coração do Rastreamento")+
p("Eventos são <strong>ações específicas</strong> que os usuários realizam no seu site. Configurá-los corretamente é o que permite otimizar campanhas para conversões reais.")+
h3("Eventos Padrão (Standard Events)")+
ul(["<strong>PageView</strong> - Visualização de página (automático com Pixel base)","<strong>ViewContent</strong> - Visualizou um produto ou conteúdo específico","<strong>AddToCart</strong> - Adicionou produto ao carrinho","<strong>InitiateCheckout</strong> - Iniciou processo de checkout","<strong>AddPaymentInfo</strong> - Adicionou informações de pagamento","<strong>Purchase</strong> - Compra concluída com sucesso","<strong>Lead</strong> - Preencheu formulário de cadastro/contato","<strong>CompleteRegistration</strong> - Completou registro/criou conta","<strong>Search</strong> - Usou busca no site","<strong>Contact</strong> - Clicou em botão de contato","<strong>Subscribe</strong> - Assinou newsletter ou serviço"])+
h3("Parâmetros dos Eventos")+
p("Cada evento pode enviar dados adicionais para melhor otimização:")+
ex("CÓDIGO DE EXEMPLO","<strong>Purchase com parâmetros:</strong><br><code>fbq('track', 'Purchase', {<br>&nbsp;&nbsp;value: 297.00,<br>&nbsp;&nbsp;currency: 'BRL',<br>&nbsp;&nbsp;content_ids: ['PROD-123'],<br>&nbsp;&nbsp;content_type: 'product',<br>&nbsp;&nbsp;num_items: 1<br>});</code>")+
h3("Onde Instalar Cada Evento")+
ul(["<strong>ViewContent</strong> - Na página de cada produto/serviço","<strong>AddToCart</strong> - No clique do botão 'Adicionar ao Carrinho'","<strong>InitiateCheckout</strong> - Na página de checkout","<strong>Purchase</strong> - Na página de confirmação/obrigado (thank you page)","<strong>Lead</strong> - No envio do formulário de contato/cadastro"])+
tip("PRIORIDADE","Configure no mínimo: PageView + ViewContent + AddToCart + Purchase (ou Lead). Estes 4 cobrem o funil básico. Os demais são bônus.")+
warn("VALOR OBRIGATÓRIO","Sempre envie o parâmetro <strong>value</strong> e <strong>currency</strong> nos eventos Purchase. Sem isso, o Meta não calcula ROAS e você perde a métrica mais importante.")
},
{titulo:"Eventos Personalizados",resumo:"Criando eventos sob medida para seu negócio",duracao:"20 min",conteudo:
h2("Custom Events")+
p("Quando os eventos padrão não cobrem uma ação específica do seu negócio, crie <strong>eventos personalizados</strong>.")+
h3("Quando Usar Eventos Personalizados")+
ul(["Ações específicas do seu funil (ex: 'AssistirWebinar', 'ClicarWhatsApp')","Etapas intermediárias do processo de compra","Interações com elementos específicos da página","Scroll depth (quanto o usuário rolou a página)","Tempo na página (visitou por mais de 2 minutos)"])+
h3("Como Criar")+
ex("CÓDIGO","<code>fbq('trackCustom', 'AssistirWebinar', {<br>&nbsp;&nbsp;nome_webinar: 'Meta Ads 2025',<br>&nbsp;&nbsp;duracao: '60min',<br>&nbsp;&nbsp;valor: 0<br>});</code>")+
h3("Configuração sem Código")+
p("Use a <strong>Ferramenta de Configuração de Eventos</strong> do Meta:")+
ol(["Acesse Gerenciador de Eventos","Clique no seu Pixel > <strong>Configurações</strong>","Selecione <strong>Abrir ferramenta de configuração de eventos</strong>","Digite a URL do seu site","A ferramenta abre seu site e permite <strong>clicar nos elementos</strong> para criar eventos","Selecione o tipo de evento e salve"])+
h3("Conversões Personalizadas")+
p("Crie conversões baseadas em URLs sem código:")+
ul(["<strong>URL contém</strong> '/obrigado' → Evento de Purchase","<strong>URL contém</strong> '/cadastro-completo' → Evento de Lead","<strong>URL contém</strong> '/download' → Evento personalizado"])+
tip("ORGANIZAÇÃO","Mantenha uma planilha documentando todos os eventos: nome, onde dispara, parâmetros enviados, e para que é usado. Isso evita confusão quando a conta cresce.")
},
{titulo:"API de Conversões (CAPI)",resumo:"Rastreamento server-side obrigatório",duracao:"25 min",conteudo:
h2("API de Conversões: O Futuro do Rastreamento")+
p("A <strong>API de Conversões</strong> (CAPI) envia dados de eventos diretamente do seu <strong>servidor</strong> para o Meta, sem depender do navegador do usuário.")+
h3("Por que a CAPI é Essencial em 2025")+
ul(["<strong>iOS 14.5+</strong> bloqueou 40-60% do rastreamento via Pixel","<strong>Bloqueadores de anúncios</strong> removem o Pixel em 30%+ dos browsers","<strong>Cookies de terceiros</strong> estão sendo eliminados pelos navegadores","A CAPI contorna TODOS esses problemas","O Meta <strong>exige CAPI</strong> para performance máxima das campanhas","Melhora a <strong>qualidade dos eventos</strong> e reduz CPA em 15-30%"])+
h3("Como Implementar")+
ul(["<strong>Gateway CAPI do Meta</strong> - Solução sem código, 1 clique (recomendada para iniciantes)","<strong>Integrações de parceiros</strong> - Shopify, WooCommerce, WordPress têm plugins nativos","<strong>Google Tag Manager Server-Side</strong> - Para setups mais avançados","<strong>Implementação manual</strong> - Via servidor com a Graph API (requer desenvolvedor)"])+
h3("Desduplicação de Eventos")+
p("Quando usa Pixel + CAPI juntos, precisa <strong>desduplicar</strong> para não contar 2x:")+
ex("COMO DESDUPLICAR","Envie o mesmo <strong>event_id</strong> tanto no Pixel quanto na CAPI:<br><br><strong>Pixel:</strong> fbq('track', 'Purchase', {value: 100}, {eventID: 'order_12345'})<br><strong>CAPI:</strong> event_id: 'order_12345'<br><br>O Meta automaticamente descarta a duplicata.")+
h3("Event Match Quality (EMQ)")+
p("O EMQ mede a qualidade dos dados que você envia. Ideal: <strong>acima de 6.0</strong>")+
ul(["Envie <strong>e-mail</strong> do cliente (hasheado)","Envie <strong>telefone</strong> (hasheado)","Envie <strong>nome</strong> do cliente","Envie <strong>IP</strong> e <strong>user agent</strong>","Quanto mais parâmetros, maior o EMQ"])+
warn("OBRIGATÓRIO","Em 2025, campanhas sem CAPI têm performance significativamente inferior. Se você não implementou ainda, faça HOJE. É a melhoria de maior impacto que você pode fazer.")
},
{titulo:"Verificação de Domínio",resumo:"Configuração obrigatória pós iOS 14.5",duracao:"18 min",conteudo:
h2("Verificação de Domínio")+
p("A verificação de domínio é <strong>obrigatória</strong> para rastrear conversões de usuários iOS e para configurar eventos agregados.")+
h3("Por que Verificar")+
ul(["Exigido pelo Meta para rastreamento pós iOS 14.5","Permite configurar eventos prioritários","Aumenta confiança do Meta na sua conta","Desbloqueia recursos de otimização avançados","Protege contra edições não autorizadas nos eventos"])+
h3("Como Verificar")+
ol(["Acesse Business Manager > <strong>Brand Safety > Domínios</strong>","Clique em <strong>Adicionar</strong> e insira seu domínio","Escolha um dos métodos de verificação:"])+
h3("Métodos de Verificação")+
ul(["<strong>Meta-tag HTML</strong> - Cole uma meta tag no <head> do site (mais fácil)","<strong>DNS TXT Record</strong> - Adicione registro TXT no DNS do domínio (mais confiável)","<strong>Upload de arquivo</strong> - Faça upload de um arquivo HTML na raiz do site"])+
h3("Configuração de Eventos Agregados")+
p("Com iOS 14.5+, você pode rastrear no máximo <strong>8 eventos por domínio</strong> em ordem de prioridade:")+
ol(["<strong>Purchase</strong> (prioridade máxima)","<strong>InitiateCheckout</strong>","<strong>AddToCart</strong>","<strong>Lead / CompleteRegistration</strong>","<strong>ViewContent</strong>","<strong>AddPaymentInfo</strong>","<strong>Search</strong>","<strong>PageView</strong> (prioridade mínima)"])+
warn("TEMPO","Alterações nos eventos agregados levam <strong>72 horas</strong> para aplicar. Durante esse período, campanhas otimizadas para esses eventos podem ter performance reduzida. Planeje com antecedência.")
},
{titulo:"Google Tag Manager para Meta Ads",resumo:"Setup profissional com GTM",duracao:"22 min",conteudo:
h2("GTM: O Padrão Profissional")+
p("O <strong>Google Tag Manager</strong> é a ferramenta profissional para gerenciar todos os códigos de rastreamento do seu site sem editar HTML.")+
h3("Por que Usar GTM")+
ul(["Instala Pixel, Google Analytics, e outros em um só lugar","Não precisa de desenvolvedor para adicionar/editar tags","Controle de versão: desfaça mudanças facilmente","Modo de preview para testar antes de publicar","Funciona com qualquer plataforma de site"])+
h3("Configuração Básica")+
ol(["Crie conta em <strong>tagmanager.google.com</strong>","Crie um <strong>Container</strong> para seu site","Instale o código do GTM no site (2 trechos: head + body)","No GTM, crie tag para <strong>Meta Pixel Base Code</strong>","Acionador: All Pages","Publique"])+
h3("Tags Essenciais para Criar")+
ul(["<strong>Meta Pixel Base</strong> - Em todas as páginas","<strong>Meta Pixel Events</strong> - Purchase na thank you page, Lead no form submit","<strong>Google Analytics 4</strong> - Tracking completo do site","<strong>Google Ads Conversion</strong> - Se usar Google Ads também"])+
h3("Variáveis Úteis")+
ul(["<strong>Data Layer Variables</strong> - Para capturar valor do pedido, ID do produto","<strong>URL Variables</strong> - Para disparar eventos baseados na URL","<strong>Click Variables</strong> - Para rastrear cliques em botões específicos","<strong>Form Variables</strong> - Para capturar envio de formulários"])+
tip("MODO PREVIEW","SEMPRE use o modo Preview antes de publicar. Ele mostra exatamente quais tags disparam em cada página e ação. Evita erros em produção.")+
ex("DATALAYER PURCHASE","<code>dataLayer.push({<br>&nbsp;&nbsp;'event': 'purchase',<br>&nbsp;&nbsp;'transaction_id': 'T-12345',<br>&nbsp;&nbsp;'value': 297.00,<br>&nbsp;&nbsp;'currency': 'BRL'<br>});</code>")
},
{titulo:"Testando e Debugando o Pixel",resumo:"Garantindo que tudo funciona corretamente",duracao:"20 min",conteudo:
h2("Debugging do Pixel")+
p("Um Pixel mal configurado é pior que nenhum Pixel — gera dados errados que levam a decisões erradas. <strong>Teste TUDO</strong>.")+
h3("Ferramentas de Teste")+
ul(["<strong>Meta Pixel Helper</strong> - Extensão Chrome que mostra eventos disparados em tempo real","<strong>Eventos de Teste</strong> - No Gerenciador de Eventos, clique em 'Testar Eventos' e navegue pelo site","<strong>Diagnóstico do Pixel</strong> - Gerenciador de Eventos > Diagnósticos mostra erros e alertas","<strong>GTM Preview</strong> - Se usa GTM, mostra exatamente o que dispara"])+
h3("Checklist de Teste")+
ol(["Abra o Pixel Helper e navegue por cada página do site","Verifique se <strong>PageView</strong> dispara em todas as páginas","Acesse uma página de produto — <strong>ViewContent</strong> deve disparar com content_id","Adicione ao carrinho — <strong>AddToCart</strong> com value e currency","Inicie checkout — <strong>InitiateCheckout</strong> com valor total","Conclua compra teste — <strong>Purchase</strong> com value, currency e order_id","Preencha formulário — <strong>Lead</strong> ou <strong>CompleteRegistration</strong>"])+
h3("Erros Comuns")+
ul(["<strong>Pixel duplicado</strong> - 2 PageViews por página = código instalado 2 vezes","<strong>Evento sem parâmetros</strong> - Purchase sem value = ROAS não calculado","<strong>content_id errado</strong> - Não bate com catálogo = remarketing dinâmico quebrado","<strong>Evento na página errada</strong> - Purchase no checkout em vez da thank you page","<strong>Pixel não dispara</strong> - Bloqueador de anúncios ativo ou código com erro"])+
tip("COMPRA TESTE","Faça uma compra real (ou use cupom de 100% desconto) para testar o fluxo completo: ViewContent → AddToCart → InitiateCheckout → Purchase. Verifique cada etapa no Pixel Helper.")+
warn("DADOS ERRADOS","Um Purchase disparando na página errada pode inflar seu ROAS aparente e fazê-lo gastar mais do que deveria. Sempre valide eventos com compras reais.")
},
{titulo:"Atribuição e Janelas de Conversão",resumo:"Como o Meta credita conversões aos anúncios",duracao:"22 min",conteudo:
h2("Modelos de Atribuição")+
p("Atribuição define <strong>qual anúncio recebe o crédito</strong> por uma conversão. Entender isso é crucial para analisar resultados corretamente.")+
h3("Janelas de Atribuição")+
ul(["<strong>1 dia clique</strong> - Conversão aconteceu em até 24h após o clique no anúncio","<strong>7 dias clique</strong> - Conversão em até 7 dias após o clique (PADRÃO e mais usado)","<strong>1 dia visualização</strong> - Pessoa VIU o anúncio e converteu em 24h (sem clicar!)","<strong>7 dias clique + 1 dia visualização</strong> - Combinação padrão do Meta"])+
h3("Qual Janela Usar")+
ul(["<strong>Produtos de decisão rápida</strong> (< R$100) → 1 dia clique + 1 dia view","<strong>Produtos de decisão média</strong> (R$100-500) → 7 dias clique + 1 dia view","<strong>Produtos de decisão longa</strong> (> R$500) → 7 dias clique + 1 dia view","<strong>E-commerce geral</strong> → 7 dias clique + 1 dia view (padrão)"])+
h3("View-through vs Click-through")+
p("Uma conversão <strong>view-through</strong> significa que a pessoa viu o anúncio mas NÃO clicou, e depois converteu por outro caminho (busca direta, Google, etc.).")+
ul(["Conversões view-through são <strong>parcialmente</strong> atribuíveis ao anúncio","O Meta pode <strong>inflar ROAS</strong> com muitas conversões view-through","Compare ROAS com 'apenas clique' para ter visão mais conservadora","Use <strong>comparação de colunas</strong> para ver dados em diferentes janelas"])+
ex("COMO COMPARAR","No Gerenciador, vá em Colunas > Personalizar > Janela de Atribuição. Compare:<br>• ROAS (7d clique + 1d view) = 4.5x<br>• ROAS (7d clique apenas) = 3.2x<br>• ROAS (1d clique apenas) = 2.1x<br><br>O valor real provavelmente está entre 2.1x e 4.5x.")+
tip("REGRA PRÁTICA","Use 7d clique como padrão para otimização. Para análise de lucratividade real, olhe 7d clique APENAS (sem view-through). A verdade está entre os dois.")
},
{titulo:"Diagnósticos e Qualidade de Dados",resumo:"Mantendo seu rastreamento saudável",duracao:"20 min",conteudo:
h2("Saúde do Rastreamento")+
p("Rastreamento é um organismo vivo — precisa de <strong>manutenção constante</strong>. Mudanças no site, atualizações de plataforma e novas políticas podem quebrar seu setup.")+
h3("Painel de Diagnósticos")+
p("Acesse <strong>Gerenciador de Eventos > Diagnósticos</strong> para ver:")+
ul(["<strong>Erros ativos</strong> - Problemas que precisam de correção imediata","<strong>Alertas</strong> - Potenciais problemas que podem afetar performance","<strong>Eventos inativos</strong> - Eventos que pararam de disparar","<strong>Parâmetros faltando</strong> - Eventos sem value, currency, etc."])+
h3("Checklist Semanal")+
ol(["Verifique <strong>Diagnósticos</strong> no Gerenciador de Eventos","Compare volume de eventos com semana anterior (queda brusca = problema)","Teste eventos principais com Pixel Helper em navegação anônima","Verifique <strong>Event Match Quality</strong> da CAPI (ideal > 6.0)","Confira se eventos de Purchase batem com vendas reais no sistema"])+
h3("Data Discrepancies")+
p("É NORMAL haver diferença entre dados do Meta e do seu sistema:")+
ul(["Diferença de <strong>10-20%</strong> é aceitável e normal","Diferença de <strong>20-40%</strong> indica problema na CAPI ou Pixel","Diferença <strong>acima de 40%</strong> = setup quebrado, corrija imediatamente"])+
h3("Causa de Discrepâncias")+
ul(["<strong>Bloqueadores de anúncios</strong> - 20-30% dos usuários bloqueiam o Pixel","<strong>iOS opt-out</strong> - Usuários que negaram rastreamento no ATT","<strong>Múltiplas sessões</strong> - Pessoa clica no anúncio hoje, compra amanhã em outro device","<strong>Janela de atribuição</strong> - Conversão fora da janela não é contada"])+
tip("FONTE DA VERDADE","Use seu sistema (CRM, plataforma de pagamento) como fonte da verdade para receita. Use o Meta para otimização e direcionamento. NÃO tome decisões de lucratividade baseado apenas nos dados do Meta.")+
warn("MONITORAMENTO","Configure alertas automáticos para queda de eventos. Se Purchase cair 50%+ de um dia para outro, algo quebrou no site. Aja imediatamente.")
}
]},
{titulo:"Campanhas de Tráfego",icon:"🚀",color:"#ffd740",aulas:[
{titulo:"Objetivo de Tráfego Explicado",resumo:"Quando e como usar campanhas de tráfego",duracao:"20 min",conteudo:
h2("Tráfego: Levando Pessoas ao Seu Destino")+
p("O objetivo de <strong>Tráfego</strong> é ideal para direcionar pessoas ao seu site, landing page, app ou WhatsApp. O algoritmo encontra pessoas com maior probabilidade de <strong>clicar e visitar</strong> seu destino.")+
h3("Quando Usar Tráfego")+
ul(["Levar pessoas para artigos, blog ou conteúdo educativo","Direcionar para landing pages de captura","Enviar para WhatsApp ou Messenger","Aquecer público antes de campanhas de conversão","Gerar tráfego para Pixel novo sem histórico de conversões","Testar landing pages antes de investir pesado em conversão"])+
h3("Quando NÃO Usar")+
ul(["Quando quer vendas diretas (use objetivo Vendas)","Quando quer leads com formulário nativo (use Cadastro)","Quando tem Pixel maduro com 50+ conversões/semana (use Vendas)"])+
h3("Destinos Disponíveis")+
ul(["<strong>Site</strong> - Qualquer URL externa","<strong>App</strong> - Link para download ou deep link","<strong>Messenger</strong> - Abre conversa no Messenger","<strong>WhatsApp</strong> - Abre conversa no WhatsApp"])+
h3("Otimização de Entrega")+
ul(["<strong>Cliques no link</strong> - O Meta mostra para quem clica (inclui cliques acidentais)","<strong>Visualizações de página de destino</strong> - Confirma que a pessoa CARREGOU a página (recomendado)","<strong>Alcance diário único</strong> - Mostra no máximo 1x por dia por pessoa"])+
tip("DICA CRUCIAL","SEMPRE otimize para 'Visualizações de página de destino', não 'Cliques no link'. Cliques incluem acidentais; visualizações confirmam que a pessoa realmente carregou a página.")+
warn("ARMADILHA","Não use Tráfego esperando vendas. O algoritmo otimiza para CLIQUES, não compras. Para vendas, use objetivo de Vendas.")
},
{titulo:"Criando sua Primeira Campanha de Tráfego",resumo:"Passo a passo completo e detalhado",duracao:"28 min",conteudo:
h2("Setup Completo de Campanha de Tráfego")+
h3("Passo 1: Nível Campanha")+
ol(["Clique em <strong>Criar</strong> no Gerenciador","Selecione objetivo <strong>Tráfego</strong>","Nomeie: 'TRÁFEGO | [produto/tema] | [data]'","Ative ou desative <strong>CBO</strong> (orçamento por campanha)","Prossiga"])+
h3("Passo 2: Nível Conjunto de Anúncios")+
ol(["Selecione destino: <strong>Site</strong>","Otimização: <strong>Visualizações de página de destino</strong>","Defina orçamento: mínimo R$30/dia para dados significativos","Agende: contínuo ou com data de fim","Configure público (interesses, lookalike ou advantage+)","Posicionamentos: <strong>Advantage+</strong> (automático) para começar"])+
h3("Passo 3: Nível Anúncio")+
ol(["Selecione página do Facebook e perfil do Instagram","Escolha formato: imagem, vídeo ou carrossel","Upload do criativo nos tamanhos corretos","Escreva texto primário com hook na primeira linha","Adicione headline curta e impactante","Descrição complementar","CTA: 'Saiba Mais' para conteúdo, 'Compre Agora' para oferta","URL de destino com UTMs","Revise e publique"])+
ex("NOMENCLATURA PROFISSIONAL","<strong>Campanha:</strong> TRAF_CursoAds_Mai2025<br><strong>Conjunto:</strong> LK1_Compradores_BR_2545<br><strong>Anúncio:</strong> VID_Depoimento_Hook1")+
tip("UTMs OBRIGATÓRIOS","Sempre adicione UTMs na URL: ?utm_source=facebook&utm_medium=cpc&utm_campaign=nome_campanha&utm_content=nome_anuncio. Isso permite rastrear no Google Analytics.")
},
{titulo:"Landing Pages que Convertem",resumo:"Otimizando páginas de destino para máximo resultado",duracao:"25 min",conteudo:
h2("Anatomia de uma Landing Page de Alta Conversão")+
p("De nada adianta tráfego se sua landing page não converte. A LP é <strong>50% do resultado</strong>.")+
h3("Elementos Essenciais (Em Ordem)")+
ol(["<strong>Headline magnética</strong> - Promessa clara, específica e impactante","<strong>Sub-headline</strong> - Complementa e especifica a promessa","<strong>Hero image/vídeo</strong> - Visual impactante do produto ou resultado","<strong>CTA acima da dobra</strong> - Botão visível SEM rolar a página","<strong>Benefícios</strong> - Lista de 3-5 benefícios principais com ícones","<strong>Prova social</strong> - Depoimentos reais, logos de clientes, números","<strong>Explicação detalhada</strong> - O que inclui, como funciona","<strong>FAQ</strong> - Respostas para objeções comuns","<strong>CTA final</strong> - Repetir botão com urgência"])+
h3("Velocidade de Carregamento")+
p("Cada segundo de carregamento reduz conversões em <strong>7%</strong>:")+
ul(["Comprima imagens (WebP, máx 100KB cada)","Minimize CSS e JavaScript","Use CDN para servir arquivos (Cloudflare é gratuito)","Remova scripts desnecessários","Objetivo: carregar em <strong>menos de 3 segundos</strong>","Teste no <strong>Google PageSpeed Insights</strong>"])+
h3("Taxas de Conversão de Referência")+
ul(["<strong>Ruim:</strong> 2-5%","<strong>Média:</strong> 5-10%","<strong>Boa:</strong> 10-20%","<strong>Excelente:</strong> 20%+"])+
ex("IMPACTO REAL","Com R$100 de ads e 200 cliques:<br>LP com 5% conversão = 10 leads (R$10/lead)<br>LP com 20% conversão = 40 leads (R$2.50/lead)<br><br>MESMA verba, 4x mais resultado!")+
warn("CONGRUÊNCIA","A landing page DEVE corresponder exatamente ao que o anúncio prometeu. Se o anúncio fala de desconto, a LP deve mostrar o desconto imediatamente. Incongruência mata conversão.")
},
{titulo:"Campanhas para WhatsApp",resumo:"Gerando conversas diretas e qualificadas",duracao:"22 min",conteudo:
h2("Ads para WhatsApp")+
p("No Brasil, o WhatsApp é o canal <strong>#1 de comunicação</strong>. Campanhas que direcionam para WhatsApp têm taxas de resposta e conversão altíssimas.")+
h3("Configuração")+
ol(["Objetivo: <strong>Tráfego</strong> ou <strong>Engajamento</strong>","Destino: <strong>WhatsApp</strong>","Vincule seu número do <strong>WhatsApp Business</strong>","Configure mensagem de boas-vindas automática","CTA do anúncio: 'Enviar mensagem pelo WhatsApp'"])+
h3("Mensagem de Boas-vindas")+
p("Configure uma mensagem automática profissional:")+
ex("EXEMPLO","'Olá! 👋 Obrigado pelo interesse no [produto/serviço].<br><br>Para que eu possa te ajudar da melhor forma, me conta:<br>1️⃣ Qual seu principal objetivo?<br>2️⃣ Quando pretende começar?<br><br>Respondo em até 5 minutos durante horário comercial (9h-18h) 🕐'")+
h3("Melhores Práticas")+
ul(["<strong>Horário:</strong> Agende anúncios apenas em horário comercial (9h-18h)","<strong>Tempo de resposta:</strong> Máximo 5 minutos para primeira resposta","<strong>Respostas rápidas:</strong> Configure atalhos no WhatsApp Business","<strong>Catálogo:</strong> Cadastre produtos no WhatsApp Business","<strong>Etiquetas:</strong> Organize leads por estágio (Novo, Em negociação, Fechado)"])+
h3("Métricas")+
ul(["<strong>Custo por conversa iniciada</strong> - R$1-5 é bom para Brasil","<strong>Taxa de resposta</strong> - Acima de 30% é bom","<strong>Taxa de conversão</strong> - 15-30% para serviços locais","<strong>Tempo médio de resposta</strong> - Quanto menor, melhor a conversão"])+
warn("ERRO FATAL","NÃO direcione para WhatsApp fora do horário comercial. Leads que não recebem resposta rápida perdem interesse e dificilmente retornam.")
},
{titulo:"Tráfego para Conteúdo e Blog",resumo:"Estratégia de conteúdo pago",duracao:"18 min",conteudo:
h2("Content Marketing com Paid Traffic")+
p("Usar tráfego pago para distribuir <strong>conteúdo educativo</strong> é uma das estratégias mais inteligentes para construir autoridade e aquecer público.")+
h3("Por que Pagar por Tráfego de Conteúdo?")+
ul(["Constrói autoridade e confiança antes de vender","Gera público quente para remarketing futuro","Pixel acumula dados de visitantes interessados","Conteúdo bom gera compartilhamento orgânico","Custo por visita muito menor que campanhas de venda"])+
h3("Tipos de Conteúdo para Impulsionar")+
ul(["<strong>Artigos de blog</strong> - Guias completos, listas, tutoriais","<strong>Vídeos educativos</strong> - YouTube, Reels, IGTV","<strong>Podcasts</strong> - Episódios relevantes para seu público","<strong>E-books e materiais gratuitos</strong> - Em troca de cadastro","<strong>Webinars e lives</strong> - Eventos ao vivo"])+
h3("Funil de Conteúdo")+
ol(["<strong>Fase 1:</strong> Rode ads para artigo/vídeo educativo (público frio, R$0.10-0.50/visita)","<strong>Fase 2:</strong> Crie público de quem leu/assistiu (engajamento + site)","<strong>Fase 3:</strong> Faça remarketing com oferta (público quente, CPA 3-5x menor)"])+
tip("ROI INDIRETO","O tráfego de conteúdo parece 'não vender', mas alimenta todo o funil. Clientes que consumiram conteúdo antes de comprar têm ticket médio 40% maior e LTV 2x maior.")+
ex("CUSTO COMPARATIVO","CPC médio para artigo: R$0.15-0.50<br>CPC médio para oferta direta: R$1.50-5.00<br><br>Com R$100, você leva 200-600 pessoas para conteúdo vs 20-60 para oferta. Depois, remarketing nos 600 custa centavos.")
},
{titulo:"UTMs e Rastreamento de Links",resumo:"Mensurando cada centavo com precisão",duracao:"18 min",conteudo:
h2("Parâmetros UTM")+
p("UTMs são códigos adicionados às URLs para rastrear a <strong>origem exata</strong> do tráfego no Google Analytics e outras ferramentas.")+
h3("Os 5 Parâmetros UTM")+
ul(["<strong>utm_source</strong> - Plataforma de origem (facebook, instagram, google)","<strong>utm_medium</strong> - Tipo de mídia (cpc, cpm, social, email)","<strong>utm_campaign</strong> - Nome da campanha","<strong>utm_content</strong> - Variação do anúncio (para diferenciar criativos)","<strong>utm_term</strong> - Segmentação ou palavra-chave (opcional)"])+
ex("EXEMPLO COMPLETO","seusite.com/oferta<strong>?utm_source=facebook&utm_medium=cpc&utm_campaign=lancamento_curso_mai25&utm_content=video_depoimento_joao&utm_term=lookalike_1pct</strong>")+
h3("Nomenclatura Padronizada")+
ul(["Use <strong>minúsculas</strong> sempre (UTMs são case-sensitive)","Use <strong>underscores</strong> em vez de espaços","Seja <strong>consistente</strong> — crie um padrão e siga","Documente em <strong>planilha compartilhada</strong>"])+
h3("Ferramentas")+
ul(["<strong>Google Campaign URL Builder</strong> - Gerador oficial e gratuito","<strong>UTM.io</strong> - Gerenciamento de UTMs em equipe","<strong>Planilha padrão</strong> - Documente todas as UTMs usadas","<strong>Meta URL Parameters</strong> - No nível do anúncio, use parâmetros dinâmicos"])+
h3("UTMs Dinâmicos do Meta")+
p("O Meta permite UTMs dinâmicos que se preenchem automaticamente:")+
ex("PARÂMETROS DINÂMICOS","utm_source=facebook<br>utm_medium={{placement}}<br>utm_campaign={{campaign.name}}<br>utm_content={{ad.name}}<br>utm_term={{adset.name}}<br><br>Resultado: cada anúncio e posicionamento fica identificado automaticamente no Analytics.")+
tip("OBRIGATÓRIO","NUNCA rode campanha sem UTMs. Sem eles, você não sabe qual anúncio realmente funciona no seu Analytics. É voar às cegas.")
},
{titulo:"Tráfego para Messenger e DM",resumo:"Estratégias de mensagens diretas",duracao:"18 min",conteudo:
h2("Campanhas de Mensagem")+
p("Além do WhatsApp, você pode direcionar tráfego para <strong>Messenger e Direct do Instagram</strong>, criando conversas automatizadas.")+
h3("Messenger Ads")+
ul(["Objetivo: <strong>Engajamento > Mensagens</strong>","CTA: 'Enviar mensagem'","Configure <strong>respostas automáticas</strong> no Messenger","Use <strong>ManyChat</strong> ou <strong>Chatfuel</strong> para chatbots avançados","Ideal para: atendimento, qualificação, agendamento"])+
h3("Instagram Direct")+
ul(["Funciona com objetivo de Engajamento","CTA: 'Enviar mensagem' via Instagram","Mais pessoal e visual que Messenger","Ideal para negócios B2C, moda, beleza, fitness"])+
h3("Automação com Chatbots")+
p("Configure fluxos automáticos para qualificar leads:")+
ol(["Mensagem de boas-vindas automática","Perguntas qualificadoras (nome, interesse, orçamento)","Envio automático de link/material","Transferência para atendente humano se qualificado","Tag para remarketing posterior"])+
ex("FLUXO CHATBOT","1. 'Olá! Quer conhecer nosso curso?'<br>2. Botões: 'Sim, quero saber mais' / 'Qual o preço?'<br>3. Se 'preço': envia vídeo + preço + link de compra<br>4. Se 'saber mais': envia benefícios + depoimento<br>5. Follow-up automático 24h depois se não respondeu")+
tip("CUSTO","Conversas via Messenger/DM costumam ter custo de R$0.50-3.00 por conversa iniciada. Com chatbot qualificador, a taxa de conversão chega a 20-40%.")
},
{titulo:"Remarketing de Tráfego",resumo:"Convertendo visitantes em clientes",duracao:"20 min",conteudo:
h2("O Ciclo Tráfego → Remarketing")+
p("A estratégia mais eficiente combina <strong>tráfego frio</strong> (prospecção) com <strong>remarketing quente</strong> (reconversão). Os dois trabalham juntos.")+
h3("Como Funciona o Ciclo")+
ol(["Campanha de tráfego leva pessoas ao site/conteúdo","Pixel rastreia os visitantes automaticamente","Crie público personalizado dos visitantes","Lance campanha de remarketing para esse público","Visitantes quentes veem oferta e convertem","Repita e escale"])+
h3("Segmentos de Remarketing de Tráfego")+
ul(["<strong>Visitantes 1-3 dias</strong> - Ultra quentes, mostra oferta direta","<strong>Visitantes 4-7 dias</strong> - Quentes, mostra prova social + oferta","<strong>Visitantes 8-14 dias</strong> - Mornos, mostra bônus ou desconto extra","<strong>Visitantes 15-30 dias</strong> - Frios, mostra novo ângulo ou conteúdo","<strong>Páginas específicas</strong> - Visitou preço mas não comprou (alta intenção)"])+
h3("Criativos para Cada Fase")+
ul(["<strong>1-3d:</strong> 'Você viu [produto], aqui está um cupom especial'","<strong>4-7d:</strong> 'Veja o que [nome] conquistou com [produto]' (depoimento)","<strong>8-14d:</strong> 'Última chance: bônus exclusivo por 48h'","<strong>15-30d:</strong> 'Novidade! Atualizamos [produto] com [feature]'"])+
tip("ORÇAMENTO","Invista 20-30% do budget total em remarketing. O custo por conversão de remarketing é 3-10x menor que prospecção.")+
warn("FREQUÊNCIA","Não bombardeie. Limite a frequência a 3-5 vezes por semana. Remarketing agressivo irrita e gera comentários negativos.")
},
{titulo:"Otimização de Campanhas de Tráfego",resumo:"Reduzindo CPC e melhorando qualidade",duracao:"22 min",conteudo:
h2("Otimizando para Máximo Resultado")+
p("Após lançar, a fase de <strong>otimização</strong> é onde o dinheiro real é feito.")+
h3("Métricas-Chave para Monitorar")+
ul(["<strong>CPC (link)</strong> - Custo por clique no link. Bom: R$0.30-2.00","<strong>CTR (link)</strong> - Taxa de cliques. Bom: acima de 1.5%","<strong>CPM</strong> - Custo por 1000 impressões. Varia: R$15-60","<strong>Custo por visualização de LP</strong> - Melhor que CPC (elimina cliques fantasmas)","<strong>Taxa de rejeição</strong> - Abaixo de 60% na landing page"])+
h3("Como Reduzir o CPC")+
ol(["<strong>Melhore o criativo</strong> - Maior CTR = menor CPC (o Meta premia relevância)","<strong>Teste públicos</strong> - Alguns públicos são mais baratos que outros","<strong>Expanda posicionamentos</strong> - Mais posicionamentos = mais competição saudável","<strong>Renove criativos</strong> - A cada 7-14 dias para evitar fadiga","<strong>Exclua públicos ruins</strong> - Remova segmentos com CPC muito alto"])+
h3("Diagnóstico Rápido")+
ul(["<strong>CTR baixo + CPC alto</strong> → Criativo ruim ou segmentação errada","<strong>CTR bom + alta rejeição</strong> → LP não corresponde ao anúncio","<strong>Muitos cliques + poucos leads</strong> → LP precisa de melhoria","<strong>CPM muito alto</strong> → Público saturado ou muito nichado"])+
tip("REGRA DOS 3 DIAS","Se CTR está abaixo de 1% após 3 dias e 1000+ impressões, pause e refaça o criativo. Não adianta jogar dinheiro em anúncio sem interesse.")
},
{titulo:"Análise de Resultados e Relatórios",resumo:"Interpretando dados de campanhas de tráfego",duracao:"20 min",conteudo:
h2("Lendo os Resultados")+
p("Analisar dados corretamente é o que transforma gastos em investimentos.")+
h3("Dashboard de Tráfego")+
p("Configure colunas personalizadas para campanhas de tráfego:")+
ul(["Resultados (visualizações de LP)","Custo por resultado","Alcance e Impressões","Frequência","CTR (link) e CTR (todos)","CPC (link)","CPM","Cliques no link vs Visualizações de LP"])+
h3("Relatório no Google Analytics")+
p("Além do Meta, analise o tráfego no GA4:")+
ol(["Acesse <strong>Aquisição > Aquisição de Tráfego</strong>","Filtre por <strong>utm_source = facebook</strong>","Compare: sessões, tempo na página, taxa de rejeição, conversões","Veja <strong>páginas por sessão</strong> (indica qualidade do tráfego)","Compare com outras fontes (Google, orgânico, direto)"])+
h3("Qualidade do Tráfego")+
p("Nem todo tráfego é igual. Avalie a QUALIDADE:")+
ul(["<strong>Tempo na página</strong> - Acima de 1 min = bom","<strong>Páginas por sessão</strong> - Acima de 2 = engajado","<strong>Taxa de rejeição</strong> - Abaixo de 60% = relevante","<strong>Retorno</strong> - % que volta ao site = marca memorável","<strong>Conversão</strong> - Mesmo sem vender, houve micro-conversão?"])+
ex("RELATÓRIO SEMANAL","Todo dia 1 da semana, gere relatório:<br>1. Gasto total da semana<br>2. Total de visitas qualificadas<br>3. CPV (Custo por Visita Qualificada)<br>4. Públicos que performaram melhor<br>5. Criativos top 3 por CTR<br>6. Ações para próxima semana")+
tip("AUTOMAÇÃO","Use o recurso de <strong>Relatórios Agendados</strong> do Meta para receber relatórios por e-mail automaticamente. Configure envio semanal toda segunda-feira.")
}
]},
{titulo:"Campanhas de Leads",icon:"📋",color:"#e040fb",aulas:[
{titulo:"Objetivo de Cadastro/Leads",resumo:"Gerando contatos qualificados para seu negócio",duracao:"20 min",conteudo:
h2("Por que Capturar Leads?")+
p("O objetivo de <strong>Cadastro</strong> é projetado para coletar informações de contato de pessoas interessadas no seu produto ou serviço. É essencial para negócios que dependem de follow-up comercial.")+
h3("Quando Usar")+
ul(["Serviços de alto ticket que exigem negociação pessoal","Infoprodutos com funil de lançamento","Consultórias, agências e serviços profissionais","Imobiliárias, clínicas, escritórios de advocacia","Qualquer negócio que precise qualificar antes de vender","Quando não tem e-commerce com carrinho online"])+
h3("Tipos de Captura")+
ul(["<strong>Formulários Instantâneos</strong> - Formulário nativo do Meta (sem sair da plataforma)","<strong>Site/Landing Page</strong> - Direciona para formulário no seu site","<strong>WhatsApp</strong> - Inicia conversa para capturar dados","<strong>Messenger</strong> - Chatbot que coleta informações"])+
h3("Lead vs Venda Direta")+
p("A decisão entre capturar lead ou vender direto depende do seu modelo:")+
ul(["<strong>Produto até R$200</strong> → Venda direta (objetivo Vendas)","<strong>Produto R$200-2.000</strong> → Lead + follow-up comercial","<strong>Produto acima de R$2.000</strong> → Lead obrigatório (decisão longa)","<strong>Serviço personalizado</strong> → Lead + consulta/orçamento"])+
tip("REGRA DE OURO","Quanto maior o ticket, mais etapas no funil. Ninguém compra um carro por impulso em um anúncio. Capture o lead, nutra e converta.")
},
{titulo:"Formulários Instantâneos (Lead Ads)",resumo:"Capturando leads nativamente no Meta",duracao:"28 min",conteudo:
h2("Lead Ads: Formulários Nativos")+
p("Os <strong>Formulários Instantâneos</strong> permitem capturar leads sem que o usuário saia do Facebook/Instagram. Campos são preenchidos automaticamente com dados do perfil.")+
h3("Vantagens")+
ul(["<strong>Zero fricção</strong> - Não precisa carregar outro site","<strong>Preenchimento automático</strong> - Nome, e-mail, telefone já preenchidos","<strong>Funciona no mobile</strong> - Experiência nativa e rápida","<strong>Menor custo por lead</strong> - Geralmente 30-50% mais barato que LP","<strong>Integra com CRMs</strong> - Dados vão direto pro sistema"])+
h3("Criando Formulário Passo a Passo")+
ol(["Objetivo: <strong>Cadastro/Leads</strong>","No nível do anúncio, clique em <strong>Criar Formulário</strong>","Escolha tipo: <strong>Mais volume</strong> ou <strong>Mais intenção</strong>","Adicione <strong>imagem ou vídeo de contexto</strong> no topo","Configure campos: Nome, E-mail, Telefone","Adicione <strong>perguntas personalizadas</strong> para qualificar","Escreva texto de <strong>Política de Privacidade</strong>","Configure <strong>tela de agradecimento</strong> com CTA","Revise e publique"])+
h3("Tipos de Formulário")+
ul(["<strong>Mais volume</strong> - Formulário rápido, campos auto-preenchidos. Mais leads, menor qualidade. Use quando volume é prioridade","<strong>Mais intenção</strong> - Adiciona tela de revisão antes de enviar. Menos leads, MAIOR qualidade. Use para tickets altos"])+
ex("COMPARAÇÃO","Orçamento: R$500<br><strong>Mais volume:</strong> 100 leads × R$5/lead. 10% qualificados = 10 bons<br><strong>Mais intenção:</strong> 50 leads × R$10/lead. 30% qualificados = 15 bons<br><br>Mais intenção gerou 50% mais leads qualificados pelo mesmo preço!")+
tip("DICA PRO","Use tipo 'Mais intenção' + 1-2 perguntas qualificadoras. O CPL sobe, mas o custo por lead QUALIFICADO cai drasticamente.")+
warn("VELOCIDADE","Leads de formulário instantâneo esfriam RÁPIDO. Configure automação para contatar em até 5 minutos. Após 30 min, a taxa de conversão cai 9x.")
},
{titulo:"Landing Page para Captura de Leads",resumo:"Formulários no site vs formulários nativos",duracao:"22 min",conteudo:
h2("Lead Capture via Landing Page")+
p("Quando usar LP em vez de formulário nativo? Quando você precisa de <strong>mais controle, mais contexto e leads mais qualificados</strong>.")+
h3("Quando Preferir LP")+
ul(["Produto/serviço precisa de <strong>explicação detalhada</strong>","Quer <strong>filtrar melhor</strong> com formulário complexo","Precisa de <strong>Pixel events</strong> no formulário (CompleteRegistration)","Quer fazer <strong>remarketing</strong> de quem visitou mas não preencheu","Necessita de <strong>elementos de persuasão</strong> (vídeo, depoimentos, FAQ)"])+
h3("Elementos da LP de Captura")+
ol(["<strong>Headline</strong> com benefício claro","<strong>Sub-headline</strong> especificando o que recebe","<strong>Formulário curto</strong> (nome + e-mail + telefone = máximo)","<strong>3-5 benefícios</strong> do material/oferta","<strong>Prova social</strong> (número de downloads, depoimentos)","<strong>Urgência</strong> (vagas limitadas, tempo limitado)","<strong>Zero distrações</strong> - Sem menu, sem links externos"])+
h3("Otimização do Formulário")+
ul(["<strong>Menos campos = mais conversão</strong>. Cada campo extra reduz conversão em 5-10%","Coloque o formulário <strong>acima da dobra</strong> (visível sem rolar)","Use <strong>botão com texto ativo</strong>: 'QUERO MEU E-BOOK GRÁTIS' em vez de 'Enviar'","Adicione <strong>texto de privacidade</strong>: 'Seus dados estão seguros'","Use <strong>validação em tempo real</strong> nos campos"])+
tip("A/B TESTE","Teste formulário no topo da página vs no meio. Para ofertas simples (e-book grátis), formulário no topo converte mais. Para ofertas complexas (consulta grátis), contexto antes do formulário funciona melhor.")
},
{titulo:"Integração com CRM e Automação",resumo:"Automatizando o follow-up de leads",duracao:"25 min",conteudo:
h2("Do Lead à Venda: Automação")+
p("Capturar leads é apenas 20% do trabalho. Os outros 80% estão no <strong>follow-up</strong>. Sem automação, você perde dinheiro.")+
h3("Opções de Integração")+
ul(["<strong>Zapier/Make (Integromat)</strong> - Conecta Meta Leads a qualquer CRM/ferramenta","<strong>Integrações nativas</strong> - HubSpot, Salesforce, RD Station, Mailchimp","<strong>API do Meta</strong> - Para setups customizados com desenvolvedor","<strong>Google Sheets</strong> - Simples mas funcional para começar","<strong>LeadsBridge</strong> - Especializado em integrações de leads do Meta"])+
h3("Fluxo de Automação Ideal")+
ol(["<strong>Imediato</strong> - WhatsApp automático: 'Olá [nome]! Vi que se cadastrou...'","<strong>1 minuto</strong> - E-mail de boas-vindas com o material prometido","<strong>5 minutos</strong> - Notificação para equipe comercial fazer follow-up","<strong>30 minutos</strong> - Ligação do vendedor (se lead qualificado)","<strong>24 horas</strong> - E-mail 2: conteúdo educativo complementar","<strong>48 horas</strong> - E-mail 3: caso de sucesso / depoimento","<strong>72 horas</strong> - E-mail 4: oferta com urgência","<strong>7 dias</strong> - E-mail 5: última chance + bônus exclusivo"])+
ex("ZAPIER EXEMPLO","<strong>Trigger:</strong> Novo lead no Facebook Lead Ad<br><strong>Ação 1:</strong> Adicionar ao Google Sheets<br><strong>Ação 2:</strong> Enviar e-mail via Gmail/Mailchimp<br><strong>Ação 3:</strong> Enviar mensagem via WhatsApp API<br><strong>Ação 4:</strong> Criar tarefa no CRM para vendedor")+
tip("REGRA DOS 5 MINUTOS","Estudos mostram que leads contatados em até 5 minutos têm <strong>9x mais chance de conversão</strong> vs leads contatados após 30 minutos. Velocidade é TUDO.")+
warn("SEM AUTOMAÇÃO = PREJUÍZO","Se você não tem automação de follow-up, NÃO gaste dinheiro em Lead Ads. Leads sem follow-up são dinheiro jogado fora.")
},
{titulo:"Qualificação de Leads",resumo:"Separando leads bons dos ruins",duracao:"20 min",conteudo:
h2("Nem Todo Lead é Bom")+
p("A qualificação garante que sua equipe invista tempo apenas em leads com <strong>real potencial de compra</strong>.")+
h3("Perguntas Qualificadoras para Formulário")+
ul(["<strong>Faturamento/renda</strong> - 'Qual sua faixa de renda mensal?'","<strong>Orçamento</strong> - 'Quanto pretende investir?'","<strong>Timing</strong> - 'Quando pretende começar/comprar?'","<strong>Cargo/posição</strong> - Para B2B, identifica decisor","<strong>Desafio principal</strong> - Entende a dor e qualifica interesse"])+
h3("Framework BANT")+
ul(["<strong>B</strong>udget (Orçamento) - Tem dinheiro para comprar?","<strong>A</strong>uthority (Autoridade) - É quem decide a compra?","<strong>N</strong>eed (Necessidade) - Tem uma dor real que você resolve?","<strong>T</strong>imeline (Prazo) - Quando pretende resolver?"])+
h3("Lead Scoring")+
p("Atribua pontos baseado em comportamento e dados:")+
ul(["<strong>+10pts</strong> - Abriu e-mail de follow-up","<strong>+20pts</strong> - Clicou em link no e-mail","<strong>+30pts</strong> - Visitou página de preço/produto","<strong>+50pts</strong> - Solicitou contato ou respondeu WhatsApp","<strong>+100pts</strong> - Agendou reunião/demonstração","<strong>-20pts</strong> - Não abriu e-mails em 7 dias","<strong>-50pts</strong> - Informou que não tem interesse"])+
tip("CPL QUALIFICADO","Acompanhe o <strong>CPLQ</strong> (Custo por Lead Qualificado), não apenas CPL bruto. Um lead de R$50 que compra vale infinitamente mais que 10 leads de R$5 que ignoram seu follow-up.")
},
{titulo:"Campanhas de WhatsApp para Leads",resumo:"Capturando leads via conversa",duracao:"22 min",conteudo:
h2("WhatsApp como Canal de Captação")+
p("No Brasil, campanhas que capturam leads via <strong>WhatsApp</strong> têm taxas de conversão até 3x maiores que formulários tradicionais.")+
h3("Setup")+
ol(["Objetivo: <strong>Engajamento > Mensagens</strong>","Destino: <strong>WhatsApp</strong>","Vincule <strong>WhatsApp Business</strong> ao Meta","Configure <strong>mensagem automática de boas-vindas</strong>","CTA do anúncio: 'Enviar mensagem pelo WhatsApp'"])+
h3("Script de Qualificação")+
ex("FLUXO","<strong>Automática:</strong> 'Olá! 👋 Obrigado pelo interesse. Para te ajudar melhor, posso fazer 2 perguntas rápidas?'<br><br><strong>Pergunta 1:</strong> 'Qual seu principal objetivo com [produto/serviço]?'<br><strong>Pergunta 2:</strong> 'Quando pretende começar?'<br><br><strong>Se qualificado:</strong> 'Perfeito! Vou te passar para nosso especialista. Ele vai te chamar em até 5 minutos.'<br><strong>Se não qualificado:</strong> 'Entendi! Enquanto isso, separei um material gratuito que vai te ajudar: [link]'")+
h3("Organização no WhatsApp Business")+
ul(["<strong>Respostas rápidas</strong> - Configure atalhos para perguntas frequentes","<strong>Etiquetas</strong> - Novo Lead, Qualificado, Em Negociação, Fechado, Perdido","<strong>Catálogo</strong> - Cadastre produtos/serviços com preços","<strong>Horário comercial</strong> - Configure mensagem de ausência","<strong>Mensagens automáticas</strong> - Boas-vindas e ausência"])+
tip("TAXA DE CONVERSÃO","WhatsApp Lead → Venda: 15-30% para serviços. Formulário Lead → Venda: 5-15%. A diferença é a conversa pessoal e imediata.")+
warn("ESCALA","O desafio do WhatsApp é escala. Se você recebe 50+ leads/dia, precisa de equipe ou ferramenta como <strong>Zenvia</strong>, <strong>Take Blip</strong> ou <strong>Respond.io</strong> para gerenciar.")
},
{titulo:"E-mail Marketing para Nutrição",resumo:"Convertendo leads frios em compradores",duracao:"22 min",conteudo:
h2("Nutrição de Leads por E-mail")+
p("A maioria dos leads NÃO está pronta para comprar imediatamente. A nutrição por e-mail transforma leads frios em compradores ao longo do tempo.")+
h3("Sequência de Nutrição (7 E-mails)")+
ol(["<strong>E-mail 1 (imediato)</strong> - Entrega do material prometido + boas-vindas","<strong>E-mail 2 (24h)</strong> - História pessoal + conexão emocional","<strong>E-mail 3 (48h)</strong> - Conteúdo educativo de alto valor","<strong>E-mail 4 (72h)</strong> - Case de sucesso / depoimento detalhado","<strong>E-mail 5 (5 dias)</strong> - Apresentação da oferta principal","<strong>E-mail 6 (6 dias)</strong> - FAQ + quebra de objeções","<strong>E-mail 7 (7 dias)</strong> - Urgência + última chance + bônus exclusivo"])+
h3("Métricas de E-mail")+
ul(["<strong>Taxa de abertura</strong> - Bom: acima de 25%","<strong>Taxa de clique</strong> - Bom: acima de 3%","<strong>Taxa de resposta</strong> - Bom: acima de 1%","<strong>Taxa de descadastro</strong> - Normal: até 0.5% por e-mail","<strong>Conversão</strong> - Varia muito, mas 2-5% da lista é bom"])+
h3("Assuntos que Geram Abertura")+
ul(["Use <strong>nome do lead</strong>: '[Nome], separei algo para você'","<strong>Curiosidade</strong>: 'O erro que 90% cometem (e como evitar)'","<strong>Números</strong>: 'Como gerei R$47.000 em 30 dias'","<strong>Urgência</strong>: 'Últimas 6 horas para garantir'","<strong>Pergunta</strong>: 'Você está cometendo esse erro?'"])+
tip("FERRAMENTAS","<strong>Mailchimp</strong> (grátis até 500 contatos), <strong>ActiveCampaign</strong> (melhor para automação), <strong>RD Station</strong> (popular no Brasil), <strong>ConvertKit</strong> (foco em criadores).")
},
{titulo:"Remarketing para Leads",resumo:"Re-engajando leads que não converteram",duracao:"18 min",conteudo:
h2("Retargeting de Leads")+
p("Nem todo lead converte na primeira tentativa. O remarketing para leads é onde você <strong>recupera vendas perdidas</strong>.")+
h3("Públicos de Remarketing")+
ul(["<strong>Abriu formulário mas não enviou</strong> - Alta intenção, mostre incentivo","<strong>Enviou formulário mas não comprou</strong> - Nutra com prova social","<strong>Abriu e-mails mas não clicou</strong> - Teste novo ângulo","<strong>Clicou em e-mail mas não converteu</strong> - Mostre oferta direta","<strong>Leads antigos (30-90 dias)</strong> - Nova oferta ou atualização"])+
h3("Estratégia por Fase")+
ul(["<strong>0-7 dias</strong> - Urgência: 'Sua vaga está reservada por 48h'","<strong>7-14 dias</strong> - Prova social: 'Veja o que [nome] conquistou'","<strong>14-30 dias</strong> - Nova oferta: 'Preparamos algo especial para você'","<strong>30-60 dias</strong> - Conteúdo: reengaje com valor antes de vender","<strong>60-90 dias</strong> - Última tentativa: oferta irresistível ou desista"])+
tip("EXCLUSÃO","Sempre exclua do remarketing quem já comprou. Gastar dinheiro mostrando anúncio para cliente atual é desperdício (a menos que seja upsell/cross-sell).")
},
{titulo:"Métricas e KPIs de Leads",resumo:"Números que determinam sucesso na geração de leads",duracao:"20 min",conteudo:
h2("Dashboard de Leads")+
p("Gerir leads sem métricas é dirigir sem painel. Configure estes KPIs:")+
h3("Métricas do Meta Ads")+
ul(["<strong>CPL (Custo por Lead)</strong> - Quanto paga por cada lead capturado","<strong>Volume de leads</strong> - Total de leads por dia/semana","<strong>CTR do anúncio</strong> - Taxa de cliques do criativo","<strong>Taxa de conversão do formulário</strong> - % que completa o form","<strong>Custo por lead por público</strong> - Qual público gera leads mais baratos"])+
h3("Métricas do Funil Completo")+
ul(["<strong>Lead → Qualificado</strong> - % de leads que passam na qualificação. Bom: 20-40%","<strong>Qualificado → Reunião</strong> - % que aceita agendar. Bom: 30-50%","<strong>Reunião → Proposta</strong> - % que recebe proposta. Bom: 60-80%","<strong>Proposta → Venda</strong> - % que fecha. Bom: 20-40%","<strong>Lead → Venda (total)</strong> - Conversão ponta a ponta. Bom: 2-10%"])+
h3("Cálculo de Viabilidade")+
ex("CÁLCULO COMPLETO","<strong>Produto:</strong> R$2.000<br><strong>CPL:</strong> R$25<br><strong>Leads para 1 venda:</strong> 20 (taxa de 5%)<br><strong>CAC:</strong> 20 × R$25 = R$500<br><strong>Margem:</strong> R$2.000 - R$500 = R$1.500 (75%)<br><br><strong>Veredicto:</strong> Viável! Para cada R$500 investido, retorna R$2.000.")+
tip("ACOMPANHAMENTO","Crie uma planilha que acompanhe cada lead desde a captura até o fechamento. Isso mostra o verdadeiro ROI dos seus anúncios, não apenas o CPL.")
},
{titulo:"Estratégias Avançadas de Geração de Leads",resumo:"Técnicas profissionais para volume e qualidade",duracao:"22 min",conteudo:
h2("Levando Leads ao Próximo Nível")+
h3("Lead Magnet Irresistível")+
p("O que você oferece em troca do contato determina volume E qualidade:")+
ul(["<strong>E-book/Guia</strong> - Conteúdo aprofundado (bom para educação)","<strong>Template/Planilha</strong> - Ferramenta prática (alta percepção de valor)","<strong>Webinar/Aula grátis</strong> - Relacionamento + autoridade","<strong>Diagnóstico grátis</strong> - Personalizado para cada lead","<strong>Cupom/Desconto</strong> - Para e-commerce e varejo","<strong>Calculadora/Quiz</strong> - Interativo e engajante","<strong>Consultoria gratuita</strong> - Alto ticket, alta qualificação"])+
h3("Multi-Step Forms")+
p("Formulários de múltiplos passos convertem até 300% mais que formulários longos:")+
ol(["<strong>Passo 1:</strong> Pergunta simples (ex: 'Qual seu objetivo?')","<strong>Passo 2:</strong> Pergunta qualificadora (ex: 'Quanto pretende investir?')","<strong>Passo 3:</strong> Dados de contato (nome, e-mail, telefone)"])+
h3("Lookalike de Leads Qualificados")+
p("Crie Lookalike baseado APENAS em leads que viraram clientes (não todos os leads). A qualidade do Lookalike será muito superior.")+
h3("Teste de Iscas")+
ul(["Teste 3+ lead magnets diferentes simultaneamente","Compare: CPL + taxa de qualificação + taxa de conversão em venda","O lead magnet com menor CPLQ (custo por lead qualificado) vence","Renove iscas a cada 3-6 meses (conteúdo fica datado)"])+
tip("HACK AVANÇADO","Use <strong>quiz/calculadora</strong> como lead magnet. A taxa de conclusão é 40-60% (vs 10-20% para e-book). Use ferramentas como <strong>Typeform</strong>, <strong>Outgrow</strong> ou <strong>Interact</strong>.")+
warn("QUALIDADE > QUANTIDADE","100 leads qualificados valem mais que 1.000 leads frios. Sempre otimize para qualidade, não apenas volume. Seu time comercial agradece.")
}
]},
{titulo:"Campanhas de Vendas",icon:"💰",color:"#00e676",aulas:[
{titulo:"Objetivo de Vendas Explicado",resumo:"Maximizando conversões e receita",duracao:"22 min",conteudo:
h2("Vendas: O Objetivo Mais Poderoso")+
p("O objetivo de <strong>Vendas</strong> otimiza suas campanhas para que o Meta encontre pessoas com maior probabilidade de <strong>comprar</strong>. É o objetivo mais importante para qualquer negócio que vende online.")+
h3("Pré-requisitos")+
ul(["<strong>Pixel instalado</strong> corretamente com evento Purchase","<strong>CAPI configurada</strong> para máxima captura de dados","<strong>Domínio verificado</strong> no Business Manager","<strong>Histórico mínimo</strong> - Idealmente 50+ compras nos últimos 30 dias","<strong>Landing page</strong> otimizada para conversão"])+
h3("Eventos de Otimização")+
p("Você pode otimizar para diferentes eventos do funil:")+
ul(["<strong>Purchase</strong> - Otimiza para compras reais (ideal, mas exige volume de dados)","<strong>InitiateCheckout</strong> - Otimiza para quem inicia checkout (mais volume, menos qualidade)","<strong>AddToCart</strong> - Otimiza para quem adiciona ao carrinho (ainda mais volume)","<strong>ViewContent</strong> - Otimiza para visualizações de produto (maior volume, menor qualidade)"])+
tip("REGRA","Sempre otimize para o evento mais próximo da venda que tenha 50+ ocorrências por semana. Se Purchase tem menos de 50/semana, suba para AddToCart até acumular dados.")+
warn("PACIÊNCIA","Campanhas de vendas precisam de 3-7 dias na 'fase de aprendizado'. Não mexa em NADA durante esse período. Mudanças reiniciam o aprendizado.")
},
{titulo:"Configuração de Campanha de Vendas",resumo:"Setup completo passo a passo",duracao:"28 min",conteudo:
h2("Montando sua Campanha de Vendas")+
h3("Nível Campanha")+
ol(["Objetivo: <strong>Vendas</strong>","Nome: 'VENDAS | [produto] | [data]'","<strong>CBO ativado</strong> (recomendado para vendas)","Orçamento diário: mínimo CPA esperado × 3","Desative teste A/B por enquanto"])+
h3("Nível Conjunto de Anúncios")+
ol(["Evento de conversão: <strong>Purchase</strong>","Otimização: <strong>Conversões</strong>","Janela de atribuição: <strong>7 dias clique, 1 dia view</strong>","Público: comece com Lookalike 1% de compradores","Posicionamentos: <strong>Advantage+</strong>","Se usando ABO: orçamento mínimo R$100/dia por conjunto"])+
h3("Nível Anúncio")+
ol(["Formato: teste vídeo E imagem (mínimo 3 criativos)","Copy focada em: benefício + prova social + oferta + CTA","URL com UTMs completos","Advantage+ Creative: ativado para variações automáticas","Adicione criativos em múltiplas proporções (1:1, 4:5, 9:16)"])+
ex("ESTRUTURA IDEAL","<strong>1 Campanha CBO</strong> com R$300/dia<br>→ <strong>Conjunto 1:</strong> LK 1% Compradores (3 anúncios)<br>→ <strong>Conjunto 2:</strong> LK 2-3% Compradores (3 anúncios)<br>→ <strong>Conjunto 3:</strong> Interesses amplos (3 anúncios)<br><br>Total: 9 anúncios sendo testados. O CBO distribui para os melhores.")+
warn("FASE DE APRENDIZADO","Cada conjunto precisa de ~50 conversões em 7 dias para sair da fase de aprendizado. Até lá, resultados serão instáveis. NÃO pause/edite durante esse período.")
},
{titulo:"Advantage+ Shopping Campaigns",resumo:"A campanha de vendas mais poderosa do Meta",duracao:"25 min",conteudo:
h2("ASC: O Futuro das Campanhas de Vendas")+
p("As <strong>Advantage+ Shopping Campaigns</strong> são campanhas automatizadas por IA que combinam prospecção e remarketing em um único lugar.")+
h3("Como Funciona")+
ul(["O Meta usa IA para encontrar os melhores públicos automaticamente","Combina público frio (prospecção) e quente (remarketing) em uma campanha","Você define apenas: orçamento, criativos e país","O algoritmo faz o resto: público, posicionamento, lance"])+
h3("Quando Usar ASC")+
ul(["E-commerce com catálogo de produtos","Contas com histórico de 100+ compras","Quando campanhas manuais começam a saturar","Quando quer simplificar a gestão","Para escalar além dos limites manuais"])+
h3("Configuração")+
ol(["Crie nova campanha > Vendas > <strong>Advantage+ Shopping</strong>","Selecione país e defina orçamento","Defina <strong>percentual de público existente</strong> (recomendação: 30-40% para remarketing)","Adicione no mínimo <strong>5-10 criativos</strong> variados","Publique e aguarde 7 dias"])+
h3("Performance vs Manual")+
ul(["ASC geralmente tem <strong>CPA 10-30% menor</strong> que campanhas manuais","Menos controle sobre segmentação","Precisa de <strong>mais criativos</strong> (a IA testa muitas combinações)","<strong>Funciona melhor</strong> quanto mais dados a conta tem"])+
tip("COEXISTÊNCIA","Rode ASC ao lado de campanhas manuais. Não substitua tudo de uma vez. Compare performance por 14 dias e ajuste.")+
warn("CONTROLE","Você perde controle granular de público. Se precisa excluir segmentos específicos ou controlar exatamente para quem mostra, use campanha manual.")
},
{titulo:"Catálogo de Produtos e DPA",resumo:"Anúncios dinâmicos que vendem automaticamente",duracao:"25 min",conteudo:
h2("Dynamic Product Ads (DPA)")+
p("Os <strong>anúncios dinâmicos de catálogo</strong> mostram automaticamente os produtos certos para as pessoas certas, baseado no comportamento delas.")+
h3("Como Funciona")+
ol(["Você faz upload do seu catálogo de produtos","O Pixel rastreia quais produtos cada pessoa viu/adicionou ao carrinho","O Meta mostra automaticamente esses produtos nos anúncios","A pessoa vê exatamente o produto que ela estava olhando"])+
h3("Configurando o Catálogo")+
ol(["Acesse Commerce Manager no Business Manager","Crie um <strong>catálogo de produtos</strong>","Adicione produtos via: feed de dados, CSV, Shopify/WooCommerce plugin","Configure atualização automática do feed (diária ou horária)","Vincule o catálogo ao Pixel"])+
h3("Campos Obrigatórios do Feed")+
ul(["<strong>id</strong> - Identificador único (deve bater com content_id do Pixel)","<strong>title</strong> - Nome do produto","<strong>description</strong> - Descrição do produto","<strong>availability</strong> - Em estoque / esgotado","<strong>condition</strong> - Novo / usado","<strong>price</strong> - Preço (incluindo moeda: '99.90 BRL')","<strong>link</strong> - URL do produto no site","<strong>image_link</strong> - URL da imagem principal"])+
h3("Tipos de Campanha com Catálogo")+
ul(["<strong>Remarketing Dinâmico</strong> - Mostra produtos que a pessoa já viu (ROAS altíssimo)","<strong>Prospecção com Catálogo</strong> - Mostra produtos relevantes para público novo","<strong>Broad Audience</strong> - Deixa o Meta decidir tudo baseado nos dados"])+
tip("IMAGENS DO CATÁLOGO","Use imagens de alta qualidade com fundo branco para catálogo. Adicione até 10 imagens por produto. Produtos com múltiplas imagens têm CTR 20% maior.")+
warn("content_id","O content_id enviado pelo Pixel DEVE ser idêntico ao id no catálogo. Se não bater, o remarketing dinâmico não funciona.")
},
{titulo:"Funil de Vendas Completo",resumo:"Estruturando o caminho do desconhecido ao comprador",duracao:"22 min",conteudo:
h2("Construindo seu Funil de Vendas")+
p("Um funil bem estruturado guia o potencial cliente por cada etapa da decisão de compra.")+
h3("TOFU - Topo do Funil (Awareness)")+
ul(["<strong>Objetivo:</strong> Reconhecimento ou Tráfego","<strong>Público:</strong> Frio - Lookalikes amplos, interesses, Advantage+","<strong>Criativos:</strong> Educativos, entretenimento, UGC leve","<strong>Meta:</strong> Gerar visualizações, engajamento e alimentar Pixel","<strong>Investimento:</strong> 20-30% do budget total"])+
h3("MOFU - Meio do Funil (Consideração)")+
ul(["<strong>Objetivo:</strong> Tráfego ou Engajamento","<strong>Público:</strong> Morno - Engajamento 30-90d, visitantes do site 14-30d, video viewers 50%+","<strong>Criativos:</strong> Cases, depoimentos, comparações, demonstrações","<strong>Meta:</strong> Gerar consideração e intent signals","<strong>Investimento:</strong> 20-30% do budget total"])+
h3("BOFU - Fundo do Funil (Conversão)")+
ul(["<strong>Objetivo:</strong> Vendas","<strong>Público:</strong> Quente - ViewContent 7d, AddToCart 7d, visitantes de preço, leads","<strong>Criativos:</strong> Oferta direta, urgência, desconto, garantia","<strong>Meta:</strong> Gerar compras com ROAS positivo","<strong>Investimento:</strong> 40-60% do budget total"])+
ex("FUNIL REAL","Budget R$3.000/mês:<br><strong>TOFU:</strong> R$600 → Vídeo educativo → 50.000 views → Cria público<br><strong>MOFU:</strong> R$900 → Depoimentos → 5.000 visitas ao site<br><strong>BOFU:</strong> R$1.500 → Oferta com desconto → 150 vendas × R$100 = R$15.000<br><strong>ROAS:</strong> 5x")+
tip("NÃO PULE ETAPAS","Ir direto para BOFU com público frio geralmente não funciona. As pessoas precisam ser aquecidas. O funil completo tem ROAS global 2-4x maior.")
},
{titulo:"Otimização de ROAS",resumo:"Maximizando retorno sobre investimento em anúncios",duracao:"25 min",conteudo:
h2("ROAS: A Métrica Mais Importante")+
p("<strong>ROAS = Receita gerada ÷ Valor investido</strong>. Um ROAS de 3x significa que para cada R$1 investido, retornam R$3 em receita.")+
h3("ROAS Mínimo Viável")+
p("Calcule seu ROAS mínimo baseado na sua margem de lucro:")+
ex("CÁLCULO","Se sua margem é 50%:<br>Vende produto de R$200, custo é R$100<br>ROAS mínimo = 1 ÷ 0.50 = <strong>ROAS 2x</strong><br><br>Se margem é 30%:<br>ROAS mínimo = 1 ÷ 0.30 = <strong>ROAS 3.3x</strong><br><br>Se margem é 70%:<br>ROAS mínimo = 1 ÷ 0.70 = <strong>ROAS 1.4x</strong>")+
h3("Como Melhorar o ROAS")+
ol(["<strong>Melhore criativos</strong> - CTR maior = CPC menor = CPA menor = ROAS maior","<strong>Refine públicos</strong> - Foque em quem mais converte (detalhamento por idade, gênero, região)","<strong>Aumente ticket médio</strong> - Upsell, cross-sell, bundles no site","<strong>Melhore taxa de conversão da LP</strong> - Cada 1% a mais de conversão impacta ROAS diretamente","<strong>Implemente CAPI</strong> - Captura mais conversões = ROAS reportado mais preciso","<strong>Otimize para valor</strong> - Use otimização de ROAS mínimo no Meta"])+
h3("Otimização por Valor")+
p("No Meta Ads, você pode definir um ROAS mínimo desejado:")+
ul(["Vá em Estratégia de Lance > <strong>ROAS mínimo</strong>","Defina o ROAS mínimo (ex: 3x)","O Meta só gasta se estimar que atingirá esse retorno","Recomendado para contas com 100+ conversões/semana"])+
tip("VISÃO COMPLETA","ROAS no Meta é útil mas incompleto. Calcule também o <strong>MER (Marketing Efficiency Ratio)</strong>: Receita total ÷ Investimento total em marketing. Isso mostra o impacto real.")+
warn("ROAS MENTIROSO","O Meta pode inflar ROAS com conversões view-through e atribuição generosa. Sempre compare com receita real do seu sistema de pagamento.")
},
{titulo:"Estratégias de Preço e Oferta",resumo:"Criando ofertas irresistíveis que maximizam conversão",duracao:"20 min",conteudo:
h2("A Oferta que Vende")+
p("Ter o melhor anúncio do mundo não adianta se a <strong>oferta</strong> não for atrativa. A oferta é 50% da conversão.")+
h3("Elementos de uma Oferta Irresistível")+
ul(["<strong>Preço âncora</strong> - Mostre o preço original antes do desconto (de R$997 por R$497)","<strong>Bônus</strong> - Adicione valor percebido com extras (e-book, consultoria, template)","<strong>Garantia</strong> - Incondicional de 7-30 dias (reduz risco percebido em 80%)","<strong>Escassez</strong> - Vagas limitadas, estoque baixo (deve ser REAL)","<strong>Urgência</strong> - Prazo definido para a oferta (countdown timer)","<strong>Parcelamento</strong> - '12x de R$49.90' é mais atrativo que 'R$497'","<strong>Frete grátis</strong> - Para e-commerce, frete grátis aumenta conversão em 30-50%"])+
h3("Estratégia de Preço")+
ul(["<strong>Charm pricing</strong> - R$97 em vez de R$100 (aumenta conversão em 8%)","<strong>Bundle</strong> - Pacote de produtos com desconto por volume","<strong>Tripwire</strong> - Produto barato (R$7-47) para converter leads em compradores","<strong>Order bump</strong> - Oferta complementar no checkout","<strong>Upsell pós-compra</strong> - Oferta de upgrade após a compra inicial"])+
tip("STACK DE VALOR","Liste TUDO que o cliente recebe e o valor individual de cada item. Total R$3.500 em valor → Seu preço: R$497. Isso mostra o absurdo desconto.")+
ex("OFERTA COMPLETA","🔥 Treinamento Meta Ads Completo<br>✅ 100 aulas (valor: R$1.997)<br>✅ Templates prontos (valor: R$497)<br>✅ Grupo exclusivo 12 meses (valor: R$997)<br>✅ 3 mentorias ao vivo (valor: R$1.500)<br>📦 Total: R$4.991<br>💥 Hoje por apenas 12x R$49,70<br>🛡️ Garantia incondicional 7 dias")
},
{titulo:"Checkout e Pós-venda",resumo:"Da compra à fidelização do cliente",duracao:"18 min",conteudo:
h2("Otimizando o Checkout")+
p("Uma taxa de abandono de carrinho de <strong>70%</strong> é normal. Mas você pode reduzir isso significativamente.")+
h3("Reduzindo Abandono de Carrinho")+
ul(["<strong>Checkout simplificado</strong> - Máximo 2-3 etapas","<strong>Múltiplas formas de pagamento</strong> - Pix, cartão, boleto","<strong>Guest checkout</strong> - Não exija criação de conta","<strong>Frete calculado antes</strong> - Surpresas no frete causam abandono","<strong>Selos de segurança</strong> - SSL, compra segura, cadeado","<strong>FAQ no checkout</strong> - Responda objeções de último minuto","<strong>Timer de urgência</strong> - 'Oferta reservada por 15 minutos'"])+
h3("Remarketing de Carrinho Abandonado")+
p("Configure campanha específica para quem adicionou ao carrinho mas não comprou:")+
ul(["Público: <strong>AddToCart últimos 3 dias EXCLUINDO Purchase</strong>","Criativo: Mostre o produto exato que a pessoa adicionou","Oferta: Cupom de 5-10% ou frete grátis para incentivar","Frequência: Máximo 2-3 vezes em 3 dias"])+
h3("Pós-venda")+
ul(["<strong>E-mail de confirmação</strong> imediato com tracking e próximos passos","<strong>Onboarding</strong> - Guie o cliente para usar o produto corretamente","<strong>Check-in</strong> - 7 dias após, pergunte como está a experiência","<strong>Review</strong> - 14 dias após, peça avaliação/depoimento","<strong>Cross-sell</strong> - 30 dias após, ofereça produto complementar"])+
tip("LTV","Um cliente satisfeito vale 5-10x mais que um cliente novo. O custo de reter é 5x menor que adquirir. Invista em pós-venda.")
},
{titulo:"Análise de Performance de Vendas",resumo:"Dashboards e relatórios para decisões de negócio",duracao:"22 min",conteudo:
h2("Dashboard de Vendas")+
p("Configure colunas específicas para campanhas de vendas:")+
h3("Colunas Essenciais")+
ul(["Resultados (Purchase)","Custo por resultado (CPA)","Valor de conversão de compras (receita)","ROAS (Retorno sobre investimento)","Valor gasto","CTR (link)","CPC (link)","CPM","Frequência","Impressões"])+
h3("Análise de Detalhamento")+
p("Use Detalhamento para encontrar os segmentos mais lucrativos:")+
ul(["<strong>Por idade</strong> - Qual faixa etária compra mais?","<strong>Por gênero</strong> - Homens ou mulheres convertem mais?","<strong>Por posicionamento</strong> - Feed, Stories ou Reels performa melhor?","<strong>Por dispositivo</strong> - iOS vs Android vs Desktop?","<strong>Por região</strong> - Quais estados/cidades geram mais vendas?","<strong>Por hora</strong> - Quais horários têm mais conversão?"])+
h3("Métricas Avançadas")+
ul(["<strong>AOV (Average Order Value)</strong> - Ticket médio. Aumente com upsell/bundles","<strong>CAC (Customer Acquisition Cost)</strong> - Custo total para adquirir 1 cliente","<strong>LTV (Lifetime Value)</strong> - Quanto o cliente gasta ao longo do tempo","<strong>Payback Period</strong> - Tempo para recuperar o CAC","<strong>Contribuição marginal</strong> - Receita - COGS - CAC = lucro real por venda"])+
ex("RELATÓRIO EXECUTIVO","<strong>Semana 1-7 Mai:</strong><br>Investido: R$5.000<br>Vendas: 85<br>Receita: R$21.250<br>ROAS: 4.25x<br>CPA: R$58.82<br>AOV: R$250<br>Margem: R$12.750<br><strong>Veredicto:</strong> Escalar +20%")+
tip("AUTOMAÇÃO DE RELATÓRIO","Configure relatórios automáticos no Meta para receber toda segunda-feira. Crie dashboard no Google Sheets/Data Studio para visão consolidada.")
},
{titulo:"Escalando Vendas com Lucro",resumo:"De R$100/dia para R$10.000/dia mantendo ROAS",duracao:"25 min",conteudo:
h2("Escala Lucrativa")+
p("Escalar é o Santo Graal do Meta Ads — <strong>aumentar investimento mantendo ROAS</strong>. Aqui está o playbook:")+
h3("Fase 1: Validação (R$50-100/dia)")+
ul(["Teste 3-5 criativos com 2-3 públicos","Identifique combinações vencedoras (CPA dentro da meta)","Colete dados por pelo menos 7 dias","Meta: encontrar criativos e públicos lucrativos"])+
h3("Fase 2: Otimização (R$100-500/dia)")+
ul(["Pause perdedores, escale vencedores (+20% a cada 3 dias)","Adicione novos criativos semanalmente","Crie novos Lookalikes e teste","Configure remarketing para todo o funil","Meta: estabilizar ROAS e preparar para escala"])+
h3("Fase 3: Escala (R$500-5.000/dia)")+
ul(["Escala vertical: +20-30% de budget a cada 3-5 dias","Escala horizontal: novas campanhas, novos públicos, novas ofertas","Implemente ASC (Advantage+ Shopping) em paralelo","Adicione 5+ novos criativos por semana","Teste novas ofertas e ângulos de copy","Meta: maximizar receita mantendo ROAS mínimo"])+
h3("Fase 4: Domínio (R$5.000+/dia)")+
ul(["Múltiplas campanhas coexistindo (manual + ASC + remarketing)","Equipe dedicada a produção de criativos","Testes constantes de novos funis e ofertas","Expansão para novos mercados/países","Integração completa com Google Ads e outros canais"])+
warn("REGRA INQUEBRÁVEL","Se ROAS cair 30%+ após escalar, VOLTE ao orçamento anterior imediatamente. Investigue a causa antes de tentar novamente.")+
tip("A CHAVE DA ESCALA","Criativos novos são a maior alavanca. Uma campanha não escala sem criativos frescos. Invista mais tempo criando criativos do que mexendo em configurações.")
}
]},
{titulo:"Remarketing Avançado",icon:"🔄",color:"#ff9100",aulas:[
{titulo:"Fundamentos do Remarketing",resumo:"O conceito mais lucrativo do marketing digital",duracao:"20 min",conteudo:
h2("Remarketing: Seu Maior Lucro")+
p("Remarketing é mostrar anúncios para pessoas que <strong>já interagiram com sua marca</strong>. É a estratégia mais lucrativa porque o público já te conhece.")+
h3("Por que Remarketing é Tão Poderoso")+
ul(["<strong>98%</strong> dos visitantes NÃO compram na primeira visita","Remarketing recupera parte desses <strong>98%</strong>","CPA de remarketing é <strong>3-10x menor</strong> que prospecção","ROAS de remarketing é <strong>2-5x maior</strong> que prospecção","Público já conhece sua marca, precisa apenas de um empurrão"])+
h3("Tipos de Remarketing no Meta")+
ul(["<strong>Site</strong> - Visitantes via Pixel (mais poderoso)","<strong>Engajamento</strong> - Interagiu com conteúdo no IG/FB","<strong>Vídeo</strong> - Assistiu seus vídeos","<strong>Lista de clientes</strong> - Clientes existentes","<strong>Catálogo/DPA</strong> - Produtos específicos que a pessoa viu","<strong>Formulário</strong> - Abriu mas não enviou o formulário"])+
h3("Distribuição de Orçamento")+
ul(["<strong>Prospecção (público frio):</strong> 60-70% do budget","<strong>Remarketing (público quente):</strong> 30-40% do budget","Nunca gaste menos de 20% em remarketing","Aumente % de remarketing conforme tráfego do site cresce"])+
tip("REGRA DE OURO","Para cada R$1 gasto em prospecção, gaste R$0.30-0.50 em remarketing. Prospecção alimenta o funil, remarketing converte. Os dois juntos são imbatíveis.")
},
{titulo:"Remarketing por Etapa do Funil",resumo:"Mensagens diferentes para cada nível de intenção",duracao:"25 min",conteudo:
h2("Remarketing Segmentado")+
p("Nem todo visitante é igual. Segmente seu remarketing por <strong>nível de intenção</strong> para mensagens personalizadas.")+
h3("Visitantes de Conteúdo (Baixa Intenção)")+
ul(["Público: visitantes do blog/artigos nos últimos 30 dias","Mensagem: conteúdo complementar ou isca digital","Objetivo: nutrir e levar para página de produto","CTA: 'Baixe o guia grátis' ou 'Saiba mais'"])+
h3("Visitantes de Produto (Média Intenção)")+
ul(["Público: ViewContent últimos 14 dias","Mensagem: benefícios específicos do produto, depoimentos","Objetivo: gerar desejo e levar ao carrinho","CTA: 'Veja os resultados' ou 'Garanta o seu'"])+
h3("Carrinho Abandonado (Alta Intenção)")+
ul(["Público: AddToCart últimos 7 dias EXCLUINDO Purchase","Mensagem: lembrete + incentivo (frete grátis, 5% off)","Objetivo: fechar a venda","CTA: 'Complete sua compra' com urgência"])+
h3("Checkout Abandonado (Intenção Máxima)")+
ul(["Público: InitiateCheckout últimos 3 dias EXCLUINDO Purchase","Mensagem: 'Algo deu errado? Finalize com desconto exclusivo'","Objetivo: recuperar vendas perdidas","CTA: 'Finalizar pedido' com garantia"])+
ex("SEQUÊNCIA COMPLETA","<strong>Dia 1-2:</strong> 'Esqueceu algo no carrinho?' + imagem do produto<br><strong>Dia 3-4:</strong> 'Últimas unidades! + depoimento de cliente'<br><strong>Dia 5-7:</strong> 'Cupom exclusivo de 10% + frete grátis'<br><strong>Dia 8+:</strong> Para, não insista mais (evita irritação)")+
warn("EXCLUSÃO OBRIGATÓRIA","SEMPRE exclua compradores recentes (7-30 dias) de campanhas de remarketing de aquisição. Não gaste dinheiro em quem já comprou.")
},
{titulo:"Remarketing Dinâmico (DPA)",resumo:"Anúncios automáticos com catálogo de produtos",duracao:"22 min",conteudo:
h2("DPA: O Poder do Produto Certo")+
p("O Remarketing Dinâmico mostra <strong>automaticamente os produtos exatos</strong> que cada pessoa visualizou no seu site.")+
h3("Pré-requisitos")+
ul(["Catálogo de produtos configurado no Commerce Manager","Pixel com eventos ViewContent e AddToCart com content_id","content_id do Pixel batendo com id do catálogo","Feed de produtos atualizado (preço, disponibilidade)"])+
h3("Configuração")+
ol(["Objetivo: <strong>Vendas</strong>","Selecione seu <strong>catálogo de produtos</strong>","Público: <strong>Retarget people who interacted with products</strong>","Defina: Visualizou ou adicionou ao carrinho nos últimos 7-14 dias","Exclua: Compradores nos últimos 7-30 dias","Template automático com foto, nome e preço do produto"])+
h3("Personalização do Template")+
ul(["Adicione <strong>overlay</strong> com desconto ('10% OFF', 'FRETE GRÁTIS')","Use <strong>frame/moldura</strong> da sua marca","Texto dinâmico: 'Ainda interessado em {{product.name}}?'","Preço riscado se o produto estiver em promoção"])+
tip("ROAS ESPERADO","Remarketing dinâmico bem configurado gera ROAS de 5-20x. É o tipo de campanha mais lucrativo que existe no Meta Ads.")+
warn("FEED ATUALIZADO","Se seu feed não atualiza automaticamente, produtos esgotados podem aparecer nos anúncios. Configure atualização automática a cada 6-12 horas.")
},
{titulo:"Sequências de Remarketing",resumo:"Storytelling progressivo para conversão",duracao:"20 min",conteudo:
h2("Sequential Retargeting")+
p("Em vez de mostrar o mesmo anúncio repetidamente, crie uma <strong>sequência narrativa</strong> que guia o público pela jornada de decisão.")+
h3("Sequência de 4 Fases")+
ol(["<strong>Fase 1 (Dia 1-3):</strong> Reforço de marca + benefício principal. 'Lembra de nós? Veja por que 5.000 pessoas confiam no [produto]'","<strong>Fase 2 (Dia 4-7):</strong> Prova social + resultado. Depoimento em vídeo ou caso de sucesso detalhado","<strong>Fase 3 (Dia 8-14):</strong> Quebra de objeções + FAQ. 'As 5 dúvidas mais comuns sobre [produto]'","<strong>Fase 4 (Dia 15-21):</strong> Oferta final + urgência. 'Última chance: 20% OFF + bônus exclusivo por 48h'"])+
h3("Como Implementar")+
ul(["Crie <strong>4 conjuntos de anúncios</strong> com janelas de tempo diferentes","Use <strong>exclusões mútuas</strong> para não sobrepor fases","Cada conjunto tem criativo diferente com mensagem progressiva","Monitore taxa de progressão entre fases"])+
h3("Conteúdo por Fase")+
ul(["<strong>Fase 1:</strong> Imagem/vídeo do produto com benefício #1","<strong>Fase 2:</strong> Vídeo depoimento de 30-60s ou carrossel de cases","<strong>Fase 3:</strong> Carrossel com FAQ ou vídeo quebrando objeções","<strong>Fase 4:</strong> Imagem com oferta + countdown + garantia"])+
tip("PERSONALIZAÇÃO","Use o nome do produto ou categoria nos criativos. 'Você viu nossos [tênis de corrida]. Sabia que eles são os mais vendidos do Brasil?' Isso aumenta relevância e CTR.")
},
{titulo:"Cross-sell e Upsell",resumo:"Vendendo mais para quem já comprou",duracao:"22 min",conteudo:
h2("Monetizando Clientes Existentes")+
p("Vender para quem já comprou é <strong>5-7x mais barato</strong> que conquistar um cliente novo. Cross-sell e upsell são suas maiores oportunidades de lucro.")+
h3("Cross-sell (Produtos Complementares)")+
ul(["Comprou tênis → mostre meias, palmilha, spray impermeabilizante","Comprou curso → mostre consultoria, mentoria, comunidade","Comprou software → mostre add-ons, integrações, upgrade","Comprou produto X → mostre produto Y que combina"])+
h3("Upsell (Upgrade)")+
ul(["Comprou plano básico → ofereça plano premium","Comprou 1 unidade → ofereça kit com 3 por preço especial","Comprou versão simples → mostre versão avançada","Assinatura mensal → ofereça anual com desconto"])+
h3("Configuração no Meta")+
ol(["Crie público: <strong>Compradores últimos 30-60 dias</strong>","Exclua: quem já comprou o produto de cross-sell","Criativos personalizados: 'Você comprou X, complete com Y'","Objetivo: Vendas ou Catálogo dinâmico","Use DPA com conjuntos de produtos complementares"])+
h3("Timing")+
ul(["<strong>Imediato (0-3 dias):</strong> Order bump automático pós-compra (no checkout)","<strong>Curto (7-14 dias):</strong> 'Como está seu [produto]? Quer complementar?'","<strong>Médio (30 dias):</strong> Lançamento de produto novo para base existente","<strong>Longo (60-90 dias):</strong> Re-engajamento + nova oferta"])+
tip("ROAS ESPERADO","Campanhas de cross-sell/upsell costumam ter ROAS de 8-20x. É o dinheiro mais fácil do marketing digital.")
},
{titulo:"Remarketing de Engajamento Social",resumo:"Convertendo seguidores em compradores",duracao:"18 min",conteudo:
h2("Transformando Engajamento em Vendas")+
p("Pessoas que interagem com seu conteúdo no Instagram e Facebook são <strong>público morno valioso</strong> que pode ser convertido com remarketing.")+
h3("Públicos para Criar")+
ul(["<strong>Engajamento Instagram 30d</strong> - Curtiu, comentou, compartilhou, salvou","<strong>Engajamento Instagram 90d</strong> - Para Lookalike","<strong>Visitou perfil Instagram 30d</strong> - Alta intenção","<strong>Salvou posts 365d</strong> - Interesse real no conteúdo","<strong>Enviou DM 90d</strong> - Intenção de contato","<strong>Engajamento Facebook 60d</strong> - Todas as interações"])+
h3("Estratégia")+
ol(["Rode conteúdo orgânico de qualidade no Instagram/Facebook","Impulsione posts com melhor engajamento orgânico","Crie público de engajamento","Lance remarketing com oferta para esse público","Custo será muito menor que público frio"])+
h3("Criativos para Engajamento → Conversão")+
ul(["'Você curte nosso conteúdo? Agora conheça nosso [produto]'","'Obrigado por acompanhar! Presente especial para nossos seguidores'","'De seguidor a aluno: 500+ seguidores já fizeram essa transição'","Depoimento de seguidor que virou cliente"])+
tip("CUSTO","Remarketing de engajamento social tem CPA 50-70% menor que prospecção fria. É um dos melhores públicos para testar antes de investir pesado.")
},
{titulo:"Remarketing por E-mail e Listas",resumo:"Integrando offline com online",duracao:"18 min",conteudo:
h2("Conectando Dados Offline ao Meta")+
p("Use suas <strong>listas de clientes e leads</strong> para criar campanhas de remarketing ultra-segmentadas no Meta.")+
h3("Segmentos de Lista")+
ul(["<strong>Leads quentes não convertidos</strong> - Solicita contato mas não comprou","<strong>Clientes inativos</strong> - Não compra há 90+ dias","<strong>Clientes VIP</strong> - Alto ticket, compra recorrente","<strong>Leads de webinar</strong> - Participou mas não comprou","<strong>Assinantes de newsletter</strong> - Seguidores fiéis"])+
h3("Como Usar no Meta")+
ol(["Exporte lista do CRM em CSV","Faça upload como Público Personalizado de lista de clientes","Crie campanha de remarketing específica para cada segmento","Personalize mensagem: 'Sentimos sua falta, [nome]!'"])+
h3("Reativação de Clientes Inativos")+
ul(["Público: Clientes que não compram há 90+ dias","Oferta: Desconto exclusivo de 'volta' ou lançamento novo","Criativo: 'Faz tempo que não nos vemos! Temos novidades...'","Meta: Reativar 5-10% da base inativa","ROAS esperado: 5-15x"])+
tip("SINCRONIZAÇÃO","Use Zapier para sincronizar automaticamente sua lista do CRM com públicos do Meta. Toda vez que um lead entra no CRM, automaticamente entra no público de remarketing.")
},
{titulo:"Frequency Capping e Fadiga",resumo:"Evitando irritar seu público com excesso de anúncios",duracao:"18 min",conteudo:
h2("O Equilíbrio do Remarketing")+
p("Remarketing agressivo irrita as pessoas e gera reação negativa. O segredo é encontrar o <strong>equilíbrio entre lembrar e irritar</strong>.")+
h3("Frequência Ideal por Tipo")+
ul(["<strong>Remarketing geral:</strong> 3-5 impressões por semana","<strong>Carrinho abandonado:</strong> 2-3 impressões em 3 dias, depois pare","<strong>Sequência narrativa:</strong> 1 impressão por fase (4 total)","<strong>Cross-sell:</strong> 2-3 impressões por semana"])+
h3("Sinais de Frequência Excessiva")+
ul(["Frequência acima de 5 em 7 dias","CTR caindo progressivamente","Comentários negativos aumentando","Pessoas clicando em 'Ocultar anúncio'","CPA subindo sem outra explicação"])+
h3("Como Controlar Frequência")+
ul(["Use <strong>Alcance Diário Único</strong> como otimização","Configure <strong>limite de frequência</strong> quando disponível","Segmente por <strong>janelas de tempo curtas</strong> (1-3d, 4-7d, 8-14d)","<strong>Renove criativos</strong> a cada 7-14 dias para evitar fadiga","Use <strong>sequências</strong> em vez de repetir o mesmo anúncio"])+
warn("LIMITE","Se alguém viu seu anúncio 10+ vezes e não converteu, PARE. Mais exposição não vai ajudar. Espere 30 dias ou mude completamente a abordagem.")
},
{titulo:"Remarketing Omnichannel",resumo:"Integrando múltiplos canais para máxima conversão",duracao:"20 min",conteudo:
h2("Remarketing em Todos os Canais")+
p("O remarketing mais eficaz não vive apenas no Meta. <strong>Combine múltiplos canais</strong> para cercar o potencial cliente.")+
h3("Canais de Remarketing")+
ul(["<strong>Meta Ads</strong> - Facebook, Instagram, Messenger, Audience Network","<strong>Google Ads</strong> - Display Network, YouTube, Gmail","<strong>E-mail</strong> - Sequências automatizadas de follow-up","<strong>WhatsApp</strong> - Mensagens personalizadas","<strong>SMS</strong> - Para ofertas urgentes (com consentimento)","<strong>Push Notifications</strong> - Para quem instalou app ou aceitou notificações"])+
h3("Fluxo Omnichannel")+
ol(["Pessoa vê anúncio no <strong>Instagram</strong> e visita o site","Recebe <strong>e-mail</strong> de follow-up 1 hora depois","Vê anúncio de remarketing no <strong>Google Display</strong> no dia seguinte","Recebe <strong>WhatsApp</strong> com oferta personalizada","Vê anúncio de remarketing no <strong>Facebook Feed</strong> com depoimento","Converte"])+
h3("Atribuição Multicanal")+
p("Com múltiplos canais, cada um vai reivindicar a conversão. Use UTMs + Google Analytics 4 como fonte de verdade.")+
tip("EXPERIÊNCIA","O remarketing omnichannel não é spam — é criar uma <strong>experiência consistente</strong> em todos os pontos de contato. A mensagem deve progredir, não repetir.")
},
{titulo:"Estratégia Completa de Remarketing",resumo:"O playbook definitivo para implementar hoje",duracao:"25 min",conteudo:
h2("Seu Playbook de Remarketing")+
p("Monte toda a sua estratégia de remarketing seguindo este framework:")+
h3("Nível 1: Básico (Implemente Hoje)")+
ul(["Campanha de remarketing para <strong>todos os visitantes do site 30d</strong>","Excluindo compradores 30d","Criativo: oferta + prova social","Orçamento: 20% do budget total"])+
h3("Nível 2: Intermediário (Semana 2)")+
ul(["Segmente por <strong>ViewContent, AddToCart, InitiateCheckout</strong>","Criativos diferentes para cada etapa do funil","Adicione remarketing de <strong>engajamento Instagram/Facebook</strong>","Configure <strong>DPA</strong> se tem catálogo de produtos"])+
h3("Nível 3: Avançado (Mês 2)")+
ul(["Implemente <strong>sequências narrativas</strong> (4 fases)","Configure <strong>cross-sell/upsell</strong> para clientes","Adicione <strong>remarketing de vídeo</strong> (viewers 75%+)","Integre <strong>listas de CRM</strong> para reativação","Setup de remarketing <strong>omnichannel</strong> (Meta + Google + E-mail)"])+
h3("Checklist de Públicos de Remarketing")+
ol(["PP_Site_Todos_7d, 14d, 30d","PP_Site_ViewContent_7d, 14d","PP_Site_AddToCart_3d, 7d","PP_Site_InitiateCheckout_3d","PP_Site_Purchase_30d, 60d, 180d (para exclusão e Lookalike)","PP_IG_Engajamento_30d, 90d","PP_FB_Engajamento_30d, 90d","PP_Video_75pct_365d","PP_Lista_Clientes","PP_Lista_Leads"])+
tip("IMPACTO REAL","Empresas que implementam remarketing completo veem aumento de 30-70% na receita total de Meta Ads, com investimento adicional de apenas 20-30%.")+
warn("ORDEM IMPORTA","Implemente na ordem sugerida. Remarketing básico gera resultado imediato. Não pule para avançado sem ter o básico funcionando perfeitamente.")
}
]},
{titulo:"Otimização e Escala",icon:"📈",color:"#448aff",aulas:[
{titulo:"Análise de Dados e Relatórios",resumo:"Lendo métricas como um profissional",duracao:"25 min",conteudo:
h2("Dominando os Relatórios")+
p("Tomar decisões baseadas em dados é o que separa amadores de profissionais. Aprenda a <strong>ler e interpretar</strong> os relatórios do Meta.")+
h3("Relatórios de Detalhamento")+
ul(["<strong>Por idade e gênero</strong> - Descubra quem converte mais. Pause faixas com CPA 2x acima da média","<strong>Por posicionamento</strong> - Feed vs Stories vs Reels. Aloque mais budget onde funciona","<strong>Por dispositivo</strong> - iOS vs Android vs Desktop. CPA pode variar 3x entre dispositivos","<strong>Por região</strong> - Cidades e estados mais lucrativos. Crie campanhas específicas para os melhores","<strong>Por hora do dia</strong> - Identifique horários de pico de conversão. Agende anúncios estrategicamente"])+
h3("Colunas Recomendadas por Objetivo")+
ul(["<strong>Tráfego:</strong> CTR, CPC, CPM, Visualizações de LP, Taxa de rejeição (via GA4)","<strong>Leads:</strong> CPL, Volume de leads, Taxa de conversão do formulário, Custo por lead qualificado","<strong>Vendas:</strong> CPA, ROAS, Receita, AOV, Frequência, CPM"])+
h3("Janelas de Atribuição")+
p("Configure para ver dados com diferentes janelas e compare:")+
ul(["<strong>1 dia clique</strong> - Conversão mais conservadora e confiável","<strong>7 dias clique</strong> - Padrão, mais abrangente","<strong>1 dia visualização</strong> - Inclui quem viu mas não clicou","<strong>Compare as 3</strong> para ter visão realista do desempenho"])+
tip("ROTINA","Analise relatórios diariamente nos primeiros 7 dias, depois 3x por semana. Crie dashboards salvos com suas colunas favoritas para agilizar a análise.")
},
{titulo:"Escalando Campanhas",resumo:"De R$50 para R$5.000/dia mantendo resultado",duracao:"28 min",conteudo:
h2("O Playbook Completo de Escala")+
p("Escalar é <strong>aumentar o investimento mantendo o CPA/ROAS</strong>. É a habilidade mais valiosa de um media buyer.")+
h3("Pré-requisitos para Escalar")+
ul(["Campanha rodando há pelo menos <strong>7 dias</strong> com resultados estáveis","CPA/ROAS dentro da meta por <strong>3+ dias consecutivos</strong>","<strong>50+ conversões</strong> no período (saiu da fase de aprendizado)","Criativos com CTR acima de 1.5%","Sem sinais de fadiga (frequência, CTR caindo)"])+
h3("Escala Vertical (Mesmo Público)")+
p("Aumentar orçamento da mesma campanha gradualmente:")+
ul(["Aumente <strong>20-30% a cada 3-5 dias</strong>","NUNCA duplique o orçamento de uma vez","O algoritmo precisa de tempo para se reajustar a cada mudança","Monitore CPA nas primeiras 24-48h após cada aumento","Se CPA subiu 30%+, volte ao orçamento anterior e espere 3 dias"])+
h3("Escala Horizontal (Novos Públicos)")+
p("Criar novas campanhas, públicos e criativos:")+
ul(["Duplique a campanha vencedora com <strong>novo público</strong>","Teste novos Lookalikes (1%, 2%, 3%, 5%)","Expanda para novos interesses relacionados","Adicione novos criativos para evitar fadiga","Teste novos países ou regiões","Crie ASC (Advantage+ Shopping) em paralelo"])+
h3("Quando NÃO Escalar")+
ul(["CPA subindo consistentemente por 3+ dias","Frequência acima de 3 em 7 dias","CTR caindo 30%+ em relação ao pico","ROAS abaixo do mínimo viável"])+
warn("REGRA INQUEBRÁVEL","Se o CPA subiu mais de 30% após escalar, VOLTE ao orçamento anterior IMEDIATAMENTE. Investigue antes de tentar novamente.")+
tip("A MAIOR ALAVANCA","CRIATIVOS NOVOS. Adicione 3-5 criativos novos por semana para manter a performance ao escalar. Campanha sem criativos novos morre em 2-4 semanas.")
},
{titulo:"Regras Automatizadas",resumo:"Automação de otimização 24/7",duracao:"22 min",conteudo:
h2("Automatizando Otimizações")+
p("Use <strong>regras automatizadas</strong> para gerenciar campanhas sem monitorar 24 horas por dia.")+
h3("Regras Essenciais para Configurar")+
ol(["<strong>Pausar anúncios ruins</strong> - Se CPA > 2x meta E gastos > R$50 nas últimas 24h → Pausar anúncio","<strong>Aumentar orçamento</strong> - Se ROAS > 3x por 3 dias consecutivos → +20% budget","<strong>Reduzir orçamento</strong> - Se CPA subiu 50% vs média 7d → -20% budget","<strong>Alerta de gasto</strong> - Se gasto diário > R$X → Notificar por e-mail","<strong>Alerta de CPA</strong> - Se CPA > R$X nas últimas 12h → Notificar","<strong>Reativar</strong> - Se campanha pausada e ROAS da conta > 3x → Notificar para revisão"])+
h3("Como Criar no Meta")+
ol(["Vá em Gerenciador de Anúncios > <strong>Regras Automatizadas</strong>","Clique em <strong>Criar Regra</strong>","Selecione <strong>nível</strong> (campanha, conjunto ou anúncio)","Defina a <strong>condição</strong> (se CPA > R$50)","Defina a <strong>ação</strong> (pausar, ajustar budget, notificar)","Configure <strong>frequência</strong> de verificação (a cada 30 min, diariamente)","Defina <strong>janela de tempo</strong> (últimas 24h, 3 dias, 7 dias)","Ative e monitore por 7 dias"])+
tip("COMECE DEVAGAR","Comece com regras de NOTIFICAÇÃO antes de regras de ação automática. Assim você entende os padrões antes de automatizar decisões.")+
warn("CUIDADO","Regras muito agressivas podem pausar campanhas prematuramente. Sempre defina janela mínima de dados (24h+) e gasto mínimo antes de agir.")
},
{titulo:"Diagnóstico e Troubleshooting",resumo:"Resolvendo os problemas mais comuns",duracao:"25 min",conteudo:
h2("Problemas Comuns e Soluções")+
p("Quando uma campanha não performa, siga este <strong>checklist de diagnóstico</strong> sistemático:")+
h3("CPM Alto (Custo por Mil Alto)")+
ul(["<strong>Causa 1:</strong> Público muito restrito → <strong>Solução:</strong> Expanda para Lookalike mais amplo","<strong>Causa 2:</strong> Muita competição no leilão → <strong>Solução:</strong> Mude posicionamento ou horário","<strong>Causa 3:</strong> Criativo de baixa qualidade → <strong>Solução:</strong> Renove criativos","<strong>Causa 4:</strong> Sazonalidade (Black Friday, Natal) → <strong>Solução:</strong> Aumente budget ou espere"])+
h3("CTR Baixo (Poucos Cliques)")+
ul(["<strong>Causa 1:</strong> Criativo não chama atenção → <strong>Solução:</strong> Teste novos hooks visuais","<strong>Causa 2:</strong> Segmentação errada → <strong>Solução:</strong> Refine público-alvo","<strong>Causa 3:</strong> Copy fraca → <strong>Solução:</strong> Reescreva com gatilhos mentais","<strong>Causa 4:</strong> Formato inadequado → <strong>Solução:</strong> Teste vídeo vs imagem"])+
h3("CPA Alto (Conversões Caras)")+
ul(["<strong>Causa 1:</strong> Landing page ruim → <strong>Solução:</strong> Otimize para velocidade e conversão","<strong>Causa 2:</strong> Público frio demais → <strong>Solução:</strong> Aqueça com conteúdo antes","<strong>Causa 3:</strong> Oferta fraca → <strong>Solução:</strong> Melhore proposta de valor","<strong>Causa 4:</strong> Poucos dados → <strong>Solução:</strong> Suba no funil (AddToCart vs Purchase)"])+
h3("Conta Restrita ou Bloqueada")+
ul(["Verifique políticas violadas no <strong>Account Quality</strong>","Solicite <strong>revisão manual</strong> com explicação detalhada","Mantenha backup: 2ª conta no Business Manager","Evite: claims médicos, antes/depois, conteúdo adulto, promessas financeiras"])+
tip("DIAGNÓSTICO RÁPIDO","CTR ruim = problema no CRIATIVO. CPA alto com CTR bom = problema na LANDING PAGE ou OFERTA. CPM alto = problema no PÚBLICO ou sazonalidade.")
},
{titulo:"Testes A/B Avançados",resumo:"Metodologia científica para otimização contínua",duracao:"22 min",conteudo:
h2("Testes Sistemáticos")+
p("Teste A/B é a ferramenta mais importante de otimização. Teste <strong>constantemente</strong> para descobrir o que funciona melhor.")+
h3("O que Testar (Em Ordem de Impacto)")+
ol(["<strong>Criativos</strong> - Hook, formato (vídeo vs imagem vs carrossel), ângulo visual","<strong>Copy</strong> - Ângulo (dor vs benefício), comprimento (curto vs longo), tom","<strong>Público</strong> - Lookalike vs interesses vs Advantage+, tamanhos diferentes","<strong>Oferta</strong> - Desconto vs frete grátis vs bônus vs parcelamento","<strong>Landing page</strong> - Longa vs curta, vídeo vs texto, formulário em cima vs embaixo","<strong>CTA</strong> - 'Compre Agora' vs 'Saiba Mais' vs 'Cadastre-se'","<strong>Posicionamento</strong> - Automático vs manual, Feed vs Reels"])+
h3("Framework de Teste")+
ol(["<strong>Hipótese</strong> - 'Acredito que vídeo UGC terá CPA 30% menor que imagem'","<strong>Setup</strong> - Mesmo público, mesmo orçamento, variáveis diferentes","<strong>Duração</strong> - Mínimo 3-5 dias ou 1.000+ impressões por variação","<strong>Análise</strong> - Compare métricas-chave (CPA, ROAS, CTR)","<strong>Decisão</strong> - Vencedor fica, perdedor sai. Novo teste começa"])+
h3("Ferramenta Nativa de Teste A/B")+
p("O Meta oferece teste A/B nativo no nível da campanha:")+
ol(["Ao criar campanha, ative <strong>Teste A/B</strong>","Selecione variável: criativo, público, posicionamento ou otimização","Configure duração e orçamento","O Meta divide o público igualmente entre variações","Após o teste, mostra o vencedor com nível de confiança"])+
tip("VOLUME DE TESTES","As melhores contas rodam 5-10 testes por semana. Quanto mais testa, mais rápido encontra vencedores. Perder um teste não é fracasso — é aprendizado.")
},
{titulo:"Orçamento e Gestão Financeira",resumo:"Controlando investimentos com precisão",duracao:"20 min",conteudo:
h2("Gestão Financeira de Ads")+
p("Gestão financeira rigorosa é o que mantém um negócio de ads <strong>lucrativo e sustentável</strong>.")+
h3("Planejamento de Orçamento")+
ul(["<strong>Mensal</strong> - Defina budget mensal total baseado na margem do negócio","<strong>Por campanha</strong> - Distribua: 60% conversão, 20% remarketing, 20% testes","<strong>Reserva</strong> - Mantenha 20% do budget como reserva para oportunidades","<strong>Escalonamento</strong> - Planeje aumentos graduais (20% a cada 2 semanas)"])+
h3("Controle de Custos")+
ul(["Configure <strong>limite de gastos da conta</strong> no Meta","Configure <strong>limite de gastos por campanha</strong>","Use <strong>regras automatizadas</strong> para alertas de gasto","Reconcilie gastos do Meta com <strong>fatura do cartão</strong> semanalmente","Mantenha <strong>planilha de controle</strong> com gasto diário vs receita"])+
h3("Cálculo de Break-even")+
ex("FÓRMULA","<strong>Break-even ROAS</strong> = 1 ÷ Margem de lucro<br><br>Margem 50% → Break-even ROAS = 2.0x<br>Margem 30% → Break-even ROAS = 3.3x<br>Margem 70% → Break-even ROAS = 1.4x<br><br>Qualquer ROAS acima do break-even = LUCRO")+
h3("Métricas Financeiras")+
ul(["<strong>ROAS</strong> - Retorno sobre investimento em ads","<strong>MER</strong> - Marketing Efficiency Ratio (receita total ÷ gasto total)","<strong>CAC</strong> - Custo de aquisição de cliente","<strong>LTV</strong> - Valor vitalício do cliente","<strong>LTV:CAC</strong> - Proporção ideal: acima de 3:1"])+
tip("VISÃO DE NEGÓCIO","Não olhe apenas ROAS. Olhe o LUCRO líquido. Uma campanha com ROAS 10x mas margem de 5% pode ser menos lucrativa que ROAS 3x com margem de 60%.")
},
{titulo:"Google Analytics 4 para Meta Ads",resumo:"Analisando tráfego do Meta com precisão",duracao:"22 min",conteudo:
h2("GA4: Sua Fonte da Verdade")+
p("O Google Analytics 4 oferece uma <strong>visão independente</strong> do desempenho dos seus anúncios, complementando os dados do Meta.")+
h3("Configuração Essencial")+
ol(["Instale GA4 no site via <strong>Google Tag Manager</strong>","Configure <strong>eventos de conversão</strong> (purchase, generate_lead)","Configure <strong>e-commerce tracking</strong> se vende produtos","Use UTMs em TODAS as URLs dos anúncios"])+
h3("Relatórios-Chave")+
ul(["<strong>Aquisição > Aquisição de tráfego</strong> - Compare facebook/cpc com outras fontes","<strong>Engajamento > Páginas e telas</strong> - Veja quais páginas retêm mais","<strong>Monetização > Visão geral</strong> - Receita por fonte de tráfego","<strong>Explorar > Funil</strong> - Visualize cada etapa do funil de conversão"])+
h3("Comparação Meta vs GA4")+
p("Os números SEMPRE serão diferentes. Isso é normal:")+
ul(["<strong>Meta conta mais conversões</strong> (view-through, janela maior)","<strong>GA4 conta menos conversões</strong> (last click, sem view-through)","A verdade provavelmente está <strong>entre os dois</strong>","Use GA4 para decisões de lucratividade","Use Meta para otimização de campanhas"])+
tip("MODELO DE ATRIBUIÇÃO","No GA4, mude para modelo de atribuição <strong>Data-Driven</strong> em vez de Last Click. Isso distribui crédito mais justamente entre canais.")
},
{titulo:"Automação com Meta API e Ferramentas",resumo:"Escalando operações com tecnologia",duracao:"20 min",conteudo:
h2("Automatizando Operações")+
p("Quando você gerencia múltiplas contas ou gasta mais de R$10.000/mês, automação se torna essencial.")+
h3("Ferramentas de Automação")+
ul(["<strong>Revealbot</strong> - Regras avançadas, relatórios automáticos, bulk operations","<strong>Madgicx</strong> - IA para otimização de criativos e públicos","<strong>AdEspresso</strong> - Testes A/B simplificados, relatórios visuais","<strong>Smartly.io</strong> - Para equipes grandes, automação enterprise","<strong>Triple Whale</strong> - Atribuição avançada e dashboard unificado","<strong>Supermetrics</strong> - Puxa dados do Meta para Google Sheets/Data Studio"])+
h3("Dashboards Automáticos")+
ul(["Use <strong>Google Data Studio/Looker Studio</strong> (gratuito) para criar dashboards","Conecte via <strong>Supermetrics</strong> ou <strong>API nativa</strong>","Visualize métricas-chave em tempo real","Compartilhe com equipe e clientes"])+
h3("Relatórios Automatizados")+
ul(["Configure <strong>relatórios agendados</strong> no Meta (toda segunda-feira por e-mail)","Crie <strong>alertas de métricas</strong> via Zapier (se CPA > X, envia Slack/WhatsApp)","Use <strong>planilhas automáticas</strong> que puxam dados diariamente"])+
tip("PRIORIDADE","Automatize primeiro: relatórios > alertas > regras de otimização > criação de campanhas. Cada nível libera mais tempo para estratégia.")
},
{titulo:"Sazonalidade e Planejamento Anual",resumo:"Preparando campanhas para cada época do ano",duracao:"20 min",conteudo:
h2("Calendário Estratégico")+
p("As datas comemorativas e sazonalidade afetam <strong>drasticamente</strong> custos e resultados no Meta Ads.")+
h3("Datas Importantes no Brasil")+
ul(["<strong>Janeiro:</strong> Volta às aulas, Verão. CPM baixo (boa época para testar)","<strong>Março:</strong> Dia da Mulher, Dia do Consumidor (15/03 - 'Black Friday do 1º semestre')","<strong>Maio:</strong> Dia das Mães (2º maior evento de vendas)","<strong>Junho:</strong> Dia dos Namorados, São João","<strong>Agosto:</strong> Dia dos Pais","<strong>Outubro:</strong> Dia das Crianças, Halloween","<strong>Novembro:</strong> Black Friday (maior evento). CPM 2-3x mais alto","<strong>Dezembro:</strong> Natal, Ano Novo. CPM altíssimo até dia 25"])+
h3("Como Preparar")+
ul(["<strong>60 dias antes:</strong> Planeje ofertas e criativos","<strong>30 dias antes:</strong> Aqueça públicos com conteúdo e reconhecimento","<strong>14 dias antes:</strong> Lance campanhas de prospecção com oferta early bird","<strong>Dia D:</strong> Escale budget 2-3x com criativos testados","<strong>Após:</strong> Remarketing agressivo para quem não comprou"])+
h3("CPM Sazonal")+
ul(["<strong>Jan-Fev:</strong> CPM baixo (~R$15-25). Boa época para testar e escalar","<strong>Mar-Set:</strong> CPM médio (~R$25-45). Normal","<strong>Out-Nov:</strong> CPM alto (~R$40-80). Black Friday infla tudo","<strong>Dez 1-25:</strong> CPM máximo (~R$50-100). Só anuncia quem tem margem alta"])+
tip("ESTRATÉGIA","Gaste mais em Jan-Set quando CPM é baixo. Reduza ou mantenha em Nov-Dez quando CPM dispara. Seus R$100 em janeiro compram 3x mais impressões que em novembro.")+
warn("BLACK FRIDAY","Prepare-se com 60 dias de antecedência. Aqueça públicos, teste criativos, valide ofertas. Quem entra na BF sem preparação perde dinheiro.")
},
{titulo:"Gestão de Múltiplas Contas e Clientes",resumo:"Operando como agência ou freelancer",duracao:"22 min",conteudo:
h2("Gerenciando em Escala")+
p("Se você gerencia anúncios para múltiplos clientes ou negócios, precisa de <strong>processos e organização</strong>.")+
h3("Estrutura de Business Manager")+
ul(["<strong>Opção 1:</strong> 1 BM seu + acesso ao BM do cliente (recomendado para agências)","<strong>Opção 2:</strong> Todos no seu BM (controle total, mas risco se perder acesso)","Sempre peça <strong>acesso de Parceiro</strong>, nunca compartilhe login"])+
h3("Processos Essenciais")+
ul(["<strong>Onboarding do cliente</strong> - Checklist de acesso, Pixel, catálogo, objetivos","<strong>Briefing mensal</strong> - Metas, budget, ofertas especiais, datas importantes","<strong>Relatório semanal</strong> - Métricas-chave + insights + próximos passos","<strong>Relatório mensal</strong> - Resultados completos + recomendações estratégicas","<strong>Reunião quinzenal</strong> - Alinhamento e aprovação de criativos"])+
h3("Nomenclatura Padronizada")+
ex("PADRÃO","<strong>Campanha:</strong> [CLIENTE]_[OBJETIVO]_[PRODUTO]_[DATA]<br>Ex: JOAO_VENDAS_CursoAds_Mai25<br><br><strong>Conjunto:</strong> [TIPO_PUBLICO]_[DETALHES]<br>Ex: LK1_Compradores_BR_2545<br><br><strong>Anúncio:</strong> [FORMATO]_[DESCRIÇÃO]_[VERSÃO]<br>Ex: VID_UGC_Hook1_v2")+
h3("Precificação de Serviços")+
ul(["<strong>% do investimento</strong> - 10-20% do budget gerenciado (mais comum)","<strong>Fee fixo</strong> - R$1.500-5.000/mês por cliente","<strong>Performance</strong> - Fee base + bônus por resultado","<strong>Projeto</strong> - R$3.000-10.000 por setup + gestão por período"])+
tip("VALOR","Não compita por preço. Compita por resultado. Um gestor que gera ROAS 5x vale muito mais que um que cobra barato e entrega ROAS 1.5x.")
}
]},
{titulo:"Estratégias Avançadas",icon:"🏆",color:"#ff5252",aulas:[
{titulo:"IA e Automação no Meta Ads",resumo:"Usando inteligência artificial a seu favor",duracao:"25 min",conteudo:
h2("IA no Meta Ads 2025/2026")+
p("O Meta está investindo pesadamente em IA. Quem souber usar essas ferramentas terá <strong>vantagem competitiva enorme</strong>.")+
h3("Ferramentas de IA Nativas do Meta")+
ul(["<strong>Advantage+ Creative</strong> - Gera variações automáticas dos criativos (texto, cor, composição)","<strong>Advantage+ Placements</strong> - Distribui entre posicionamentos ideais automaticamente","<strong>Advantage+ Audience</strong> - Encontra o melhor público sem segmentação manual","<strong>Advantage+ Shopping</strong> - Campanha completa automatizada por IA","<strong>AI Text Generation</strong> - Sugere copies e headlines baseadas no seu produto","<strong>Background Generation</strong> - Cria fundos profissionais para imagens de produto","<strong>Image Expansion</strong> - Expande imagens para diferentes proporções automaticamente"])+
h3("Quando Confiar na IA")+
ul(["Contas com <strong>histórico robusto</strong> de conversões (100+ por mês)","Campanhas com <strong>50+ conversões por semana</strong> (fase de aprendizado concluída)","E-commerce com catálogo grande (50+ produtos)","Quando você quer <strong>testar em escala</strong> sem criar tudo manualmente","Quando campanhas manuais atingiram um platô"])+
h3("Quando Manter Controle Manual")+
ul(["Contas novas sem dados de conversão","Nichos muito específicos ou regionais","Quando precisa de controle criativo total","Testes iniciais de validação de mercado","Quando a IA gasta muito em públicos irrelevantes"])+
tip("FUTURO","Em 2025/2026, campanhas manuais tendem a perder performance para campanhas com IA. A tendência é clara: adapte-se e aprenda a usar IA como parceira, não inimiga.")
},
{titulo:"Estratégias Multicanal",resumo:"Integrando Meta com Google, E-mail e outros",duracao:"22 min",conteudo:
h2("Multicanalidade Estratégica")+
p("As melhores estratégias combinam <strong>Meta Ads + Google Ads + outros canais</strong> para dominar toda a jornada do consumidor.")+
h3("Meta + Google: A Combinação Perfeita")+
ul(["<strong>Meta Ads</strong> - Descoberta e criação de demanda (push marketing). Ideal para awareness e prospecção","<strong>Google Search</strong> - Captura de demanda existente (pull marketing). Ideal para quem já está buscando","<strong>YouTube</strong> - Awareness e consideração com vídeo longo. Complementa Reels do Instagram","<strong>Google Display</strong> - Remarketing em sites parceiros. Amplia alcance do remarketing Meta","<strong>E-mail marketing</strong> - Nutrição e retenção. Custo praticamente zero após captura"])+
h3("Fluxo Multicanal Completo")+
ol(["Pessoa vê <strong>anúncio no Instagram</strong> e se interessa (Meta - Awareness)","Pesquisa no <strong>Google</strong> sobre o produto (Google Search - Intent)","Vê anúncio de remarketing no <strong>YouTube</strong> (Google - Consideração)","Recebe <strong>e-mail</strong> com conteúdo educativo (E-mail - Nutrição)","Vê anúncio de remarketing no <strong>Facebook</strong> com oferta (Meta - Conversão)","<strong>Converte</strong> e recebe sequência de pós-venda"])+
h3("Distribuição de Orçamento Multicanal")+
ul(["<strong>60%</strong> Meta Ads (Facebook + Instagram)","<strong>25%</strong> Google Ads (Search + YouTube + Display)","<strong>10%</strong> E-mail Marketing (automação)","<strong>5%</strong> Outros (TikTok, Pinterest, etc.)"])+
tip("ATRIBUIÇÃO","Use UTMs + GA4 como fonte de verdade para atribuição multicanal. Cada plataforma vai reivindicar a conversão. Só o Analytics mostra a jornada completa.")
},
{titulo:"Funis Avançados de Venda",resumo:"Estruturas sofisticadas para maximizar receita",duracao:"25 min",conteudo:
h2("Funis que Multiplicam Receita")+
p("Funis avançados vão além do simples 'anúncio → compra'. Eles maximizam o <strong>valor de cada visitante</strong>.")+
h3("Funil de Lançamento (Infoprodutos)")+
ol(["<strong>Fase 1 (14 dias antes):</strong> Conteúdo gratuito + captura de leads","<strong>Fase 2 (7 dias antes):</strong> Sequência de e-mails de aquecimento","<strong>Fase 3 (Abertura):</strong> Vídeo de vendas + página de oferta","<strong>Fase 4 (3 dias):</strong> Cart open - anúncios de oferta + urgência","<strong>Fase 5 (Último dia):</strong> Fechamento com escassez real"])+
h3("Funil Tripwire (E-commerce)")+
ol(["<strong>Fase 1:</strong> Oferta de produto barato (R$7-47) com margem zero","<strong>Fase 2:</strong> Order bump no checkout (+30% receita média)","<strong>Fase 3:</strong> Upsell pós-compra (produto premium com desconto)","<strong>Fase 4:</strong> Downsell se recusar upsell (versão mais barata)","<strong>Fase 5:</strong> Sequência de e-mail com cross-sell em 7-30 dias"])+
h3("Funil VSL (Video Sales Letter)")+
ol(["<strong>Fase 1:</strong> Anúncio de vídeo curto (15-30s) com hook impactante","<strong>Fase 2:</strong> Landing page com vídeo longo (10-30 min) que vende","<strong>Fase 3:</strong> Remarketing para quem assistiu 50%+ do vídeo","<strong>Fase 4:</strong> Oferta com urgência para quem assistiu 75%+"])+
ex("RECEITA POR FUNIL","<strong>Funil simples:</strong> 100 visitantes → 3 vendas × R$100 = R$300<br><strong>Funil avançado:</strong> 100 visitantes → 3 vendas × R$100 + 1 upsell × R$300 + 2 order bumps × R$30 = R$660<br><br><strong>MESMO tráfego, 2.2x mais receita!</strong>")
},
{titulo:"Casos de Estudo Detalhados",resumo:"Campanhas reais analisadas com números",duracao:"28 min",conteudo:
h2("Análise de Campanhas Reais")+
h3("Caso 1: E-commerce de Moda (Loja Online)")+
ul(["<strong>Investimento:</strong> R$15.000/mês","<strong>Estratégia:</strong> ASC (Advantage+ Shopping) + Remarketing Dinâmico + Lookalike 1%","<strong>Criativos:</strong> 70% UGC (modelos reais), 30% catálogo com overlay","<strong>Resultado:</strong> ROAS 4.8x, 320 vendas/mês, ticket médio R$225","<strong>CPA:</strong> R$46.87","<strong>Lição:</strong> Catálogo atualizado diariamente + criativos UGC semanais = melhor performance"])+
h3("Caso 2: Infoproduto (Curso Online)")+
ul(["<strong>Investimento:</strong> R$8.000/mês","<strong>Estratégia:</strong> Funil TOFU (vídeo educativo) → MOFU (depoimentos) → BOFU (oferta com escassez)","<strong>Criativos:</strong> Vídeos de 30s com depoimentos reais, carrossel de resultados","<strong>Resultado:</strong> CPL R$12, 667 leads/mês, taxa de conversão 8% (53 vendas)","<strong>Ticket:</strong> R$997, receita R$52.841, ROAS 6.6x","<strong>Lição:</strong> Vídeo de 30s com depoimento converte 3x mais que imagem. Lead quente do funil converte 4x mais que lead frio"])+
h3("Caso 3: Serviço Local (Clínica Odontológica)")+
ul(["<strong>Investimento:</strong> R$3.000/mês","<strong>Estratégia:</strong> Lead Ads (formulário instantâneo) + WhatsApp + raio de 15km","<strong>Criativos:</strong> Antes/depois (dentro das políticas), vídeo do consultório, depoimentos em vídeo","<strong>Resultado:</strong> 85 leads/mês, custo R$35/lead, 25% agendaram, 60% compareceram","<strong>Ticket médio:</strong> R$2.500 (tratamento completo)","<strong>Lição:</strong> Pergunta qualificadora no formulário ('Tem convênio?') reduziu leads irrelevantes em 60%"])+
tip("PADRÃO DE SUCESSO","Os 3 casos têm em comum: criativo de qualidade + público bem definido + rastreamento correto + follow-up rápido. Sem isso, nenhuma estratégia funciona.")
},
{titulo:"Compliance e Segurança da Conta",resumo:"Protegendo seu maior ativo digital",duracao:"20 min",conteudo:
h2("Protegendo sua Conta")+
p("Sua conta de anúncios é seu <strong>maior ativo digital</strong>. Um bloqueio pode destruir meses de trabalho.")+
h3("Prevenção de Bloqueios")+
ul(["<strong>Siga as políticas</strong> - Leia e releia as políticas de anúncios do Meta","<strong>Evite claims</strong> - Não prometa resultados médicos, financeiros ou milagrosos","<strong>Seja transparente</strong> - Anúncio deve refletir exatamente o que a LP oferece","<strong>Cuidado com antes/depois</strong> - Proibido em saúde/estética (use depoimentos em texto)","<strong>Não use conteúdo de terceiros</strong> - Marcas registradas, fotos de famosos sem autorização","<strong>Landing page profissional</strong> - Termos de uso, política de privacidade, contato visível"])+
h3("Backup e Redundância")+
ul(["Tenha <strong>2 Business Managers</strong> configurados","Tenha <strong>2+ contas de anúncio</strong> por BM","<strong>2 métodos de pagamento</strong> cadastrados","<strong>2+ admins</strong> no BM (pessoa de confiança como backup)","<strong>Documente tudo</strong> - Prints de campanhas, públicos, configurações"])+
h3("Se For Bloqueado")+
ol(["Acesse <strong>Account Quality</strong> e identifique a violação","Solicite <strong>revisão manual</strong> explicando detalhadamente por que está em conformidade","Se rejeitado, reescreva a explicação com mais detalhes e evidências","Último recurso: <strong>chat com suporte</strong> do Meta (se disponível para sua conta)","Ative o BM/conta de backup enquanto resolve"])+
warn("NUNCA","Nunca crie múltiplas contas pessoais para contornar bloqueio. O Meta detecta e bloqueia permanentemente. Resolva o problema na conta original.")
},
{titulo:"Estratégias para Diferentes Nichos",resumo:"Playbooks específicos por tipo de negócio",duracao:"25 min",conteudo:
h2("Playbooks por Nicho")+
h3("E-commerce")+
ul(["Use <strong>ASC + DPA</strong> como base","Catálogo atualizado com imagens profissionais","Frete grátis acima de X como alavanca de conversão","Black Friday e datas sazonais são 40%+ da receita anual","Sequência de remarketing dinâmico de 3 fases"])+
h3("Infoprodutos / Cursos Online")+
ul(["Funil de conteúdo: vídeo educativo → lead → sequência de nutrição → oferta","Depoimentos em vídeo são o criativo #1","Lançamentos com escassez real geram picos de receita","Webinar gratuito como isca converte 8-15%","CPL ideal: R$5-25 dependendo do ticket"])+
h3("Serviços Locais")+
ul(["Raio de 5-15km ao redor do negócio","Lead Ads + WhatsApp como canais principais","Fotos reais do estabelecimento e equipe","Avaliações do Google como prova social","Tempo de resposta < 5 minutos para maximizar conversão"])+
h3("SaaS / Software")+
ul(["Trial grátis como conversão principal","Vídeo demo de 60-90s como criativo","Retargeting de quem iniciou trial mas não ativou","LinkedIn Ads como complemento para B2B","LTV alto justifica CPA mais alto"])+
h3("Negócios B2B")+
ul(["Segmentação por cargo, setor e tamanho de empresa","Conteúdo educativo (whitepaper, webinar, relatório)","LinkedIn Ads como canal principal, Meta como complemento","Funil longo: conteúdo → lead → nutrição → reunião → proposta → venda","CPL aceitável muito mais alto (R$50-200+) devido ao ticket"])+
tip("ADAPTE","Estes são pontos de partida. Cada negócio é único. Teste, meça e adapte para sua realidade específica.")
},
{titulo:"Tendências e Futuro do Meta Ads",resumo:"O que esperar nos próximos anos",duracao:"20 min",conteudo:
h2("O Futuro da Publicidade Digital")+
h3("Tendências 2025/2026")+
ul(["<strong>IA generativa em criativos</strong> - O Meta vai gerar anúncios inteiros automaticamente","<strong>Fim dos cookies de terceiros</strong> - CAPI e dados first-party são o futuro","<strong>Advantage+ dominante</strong> - Campanhas manuais perdem relevância progressivamente","<strong>Vídeo vertical</strong> - Reels e Stories dominam o consumo de conteúdo","<strong>UGC e autenticidade</strong> - Anúncios que parecem orgânicos performam cada vez melhor","<strong>Conversational commerce</strong> - WhatsApp e Messenger como canais de venda direta","<strong>AR/VR</strong> - Realidade aumentada para experimentar produtos antes de comprar"])+
h3("Como se Preparar")+
ul(["<strong>Domine IA</strong> - Aprenda a usar ferramentas de IA para criar criativos e copies","<strong>Invista em first-party data</strong> - E-mail, telefone, CRM são cada vez mais valiosos","<strong>Produza UGC</strong> - Conteúdo autêntico vai dominar vs conteúdo polido","<strong>Configure CAPI perfeitamente</strong> - Rastreamento server-side é obrigatório","<strong>Diversifique canais</strong> - Não dependa 100% do Meta. TikTok, Google, Pinterest"])+
tip("MENTALIDADE","A única constante no marketing digital é a mudança. O que funciona hoje pode não funcionar amanhã. Teste sempre, adapte rápido, e nunca pare de aprender.")
},
{titulo:"Construindo um Negócio de Tráfego Pago",resumo:"Transformando conhecimento em carreira",duracao:"22 min",conteudo:
h2("Carreira em Tráfego Pago")+
p("O mercado de gestores de tráfego está em <strong>crescimento explosivo</strong> no Brasil. Há mais demanda que oferta qualificada.")+
h3("Caminhos de Carreira")+
ul(["<strong>Freelancer</strong> - Gerencie 5-15 clientes, renda R$5.000-20.000/mês","<strong>Agência</strong> - Monte equipe, escale para 50+ clientes, renda R$30.000-200.000/mês","<strong>In-house</strong> - Trabalhe fixo em uma empresa, salário R$5.000-25.000/mês","<strong>Infoprodutor</strong> - Venda seus próprios produtos usando tráfego pago","<strong>Mentor/Consultor</strong> - Ensine outros gestores, renda R$10.000-50.000/mês"])+
h3("Como Começar")+
ol(["<strong>Estude este treinamento completo</strong> (você está fazendo isso agora!)","<strong>Pratique com seu próprio dinheiro</strong> - Invista R$500-1.000 em testes","<strong>Consiga seus primeiros 3 clientes</strong> - Ofereça preço baixo em troca de depoimento","<strong>Documente resultados</strong> - Prints, cases, números","<strong>Aumente preços gradualmente</strong> conforme resultados melhoram","<strong>Especialize-se em um nicho</strong> - Seja o melhor de e-commerce, ou infoprodutos, ou serviços locais"])+
h3("Ferramentas do Profissional")+
ul(["<strong>Meta Business Suite</strong> - Gestão central de tudo","<strong>Google Analytics 4</strong> - Análise de dados do site","<strong>Canva/CapCut</strong> - Criação de criativos","<strong>ChatGPT/Claude</strong> - Geração de copies e ideias","<strong>Google Sheets</strong> - Relatórios e controle financeiro","<strong>Notion</strong> - Documentação e processos"])+
tip("DIFERENCIAL","O que separa gestores medianos de excepcionais: 1) Obsessão por dados 2) Produção constante de criativos 3) Follow-up rápido com clientes 4) Estudo contínuo 5) Transparência total com resultados.")
},
{titulo:"Ética e Responsabilidade no Marketing",resumo:"Anunciando com integridade e resultados",duracao:"18 min",conteudo:
h2("Marketing Ético")+
p("Marketing eficaz NÃO precisa ser enganoso. As melhores campanhas são <strong>honestas, claras e entregam valor real</strong>.")+
h3("Princípios Éticos")+
ul(["<strong>Honestidade</strong> - Nunca prometa o que não pode entregar","<strong>Transparência</strong> - Mostre preços reais, sem custos escondidos","<strong>Respeito</strong> - Não use manipulação emocional excessiva","<strong>Privacidade</strong> - Respeite dados dos clientes (LGPD)","<strong>Qualidade</strong> - Venda apenas produtos que você acredita","<strong>Responsabilidade</strong> - Se errou, corrija rapidamente"])+
h3("Práticas a Evitar")+
ul(["Claims financeiros irreais ('ganhe R$10.000 sem fazer nada')","Claims de saúde não comprovados","Escassez falsa (vagas 'limitadas' que nunca acabam)","Depoimentos falsos ou manipulados","Clickbait extremo que não entrega o prometido","Coleta e uso indevido de dados pessoais"])+
h3("LGPD e Compliance")+
ul(["Tenha <strong>Política de Privacidade</strong> atualizada no site","Obtenha <strong>consentimento explícito</strong> para uso de dados","Ofereça opção de <strong>descadastro</strong> em todas as comunicações","Mantenha <strong>registro de consentimento</strong>","Nomeie um <strong>DPO</strong> (Encarregado de Dados) se necessário"])+
tip("RESULTADO","Marketing ético gera clientes mais satisfeitos, menos reembolsos, melhor LTV e reputação sólida. É mais lucrativo a longo prazo que táticas duvidosas.")
},
{titulo:"Plano de Ação: Seus Próximos 30 Dias",resumo:"Implementação prática do zero ao avançado",duracao:"25 min",conteudo:
h2("Seu Plano de Ação Personalizado")+
p("Aplique <strong>tudo que aprendeu</strong> seguindo este cronograma detalhado de 30 dias:")+
h3("Semana 1: Fundação (Dias 1-7)")+
ol(["Criar/organizar <strong>Business Manager</strong> com 2FA ativado","Criar <strong>conta de anúncios</strong> com pagamento configurado","<strong>Instalar Meta Pixel</strong> no site via GTM","Configurar <strong>eventos essenciais</strong> (PageView, ViewContent, AddToCart, Purchase/Lead)","Implementar <strong>API de Conversões</strong> (CAPI)","<strong>Verificar domínio</strong> no BM","Criar <strong>10 públicos personalizados</strong> (lista do módulo de segmentação)","Definir <strong>eventos prioritários</strong> agregados"])+
h3("Semana 2: Primeiras Campanhas (Dias 8-14)")+
ol(["Lançar campanha de <strong>Tráfego/Conteúdo</strong> para aquecer Pixel (R$30-50/dia)","Criar <strong>5+ criativos</strong> em diferentes formatos (imagem, vídeo, carrossel)","Testar <strong>3 públicos diferentes</strong> (Lookalike, interesses, Advantage+)","Configurar <strong>UTMs em todas as URLs</strong>","Instalar e configurar <strong>Google Analytics 4</strong>","Analisar primeiros dados e identificar tendências"])+
h3("Semana 3: Otimização (Dias 15-21)")+
ol(["Analisar dados da semana 2 em detalhamento","<strong>Pausar criativos ruins</strong> (CTR < 1%), manter vencedores","Lançar campanha de <strong>Conversão/Vendas</strong> (R$100+/dia)","Configurar <strong>remarketing básico</strong> (visitantes 30d)","Criar <strong>3 novos criativos</strong> baseados nos aprendizados","Configurar <strong>regras automatizadas</strong> de alerta"])+
h3("Semana 4: Escala (Dias 22-30)")+
ol(["Criar <strong>Lookalikes</strong> dos melhores públicos (1%, 2-3%, 3-5%)","<strong>Escalar campanhas vencedoras</strong> (+20% budget)","Lançar <strong>remarketing segmentado</strong> (ViewContent, AddToCart)","Testar <strong>novos criativos</strong> (5+ por semana)","Implementar <strong>funil completo</strong> TOFU/MOFU/BOFU","Criar <strong>dashboard de métricas</strong> semanal","Documentar aprendizados e planejar mês 2"])+
tip("COMPROMETIMENTO","Siga o plano por 30 dias SEM PULAR ETAPAS. A maioria desiste na semana 2 quando os primeiros resultados não são extraordinários. Quem persiste com método, consistência e dados, VENCE.")+
warn("ÚLTIMA MENSAGEM","O Meta Ads muda constantemente. Atualizações, novos recursos, mudanças de algoritmo — tudo evolui. Continue estudando, testando e se adaptando. O profissional que para de aprender fica para trás. Dados sempre superam opiniões. Boa sorte na sua jornada! 🚀")
}
]}
];
