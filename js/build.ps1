$content = @"
const CURSO = [
{titulo:'Fundamentos do Meta Ads',icon:'\u{1F3AF}',color:'#00e88f',aulas:[
{titulo:'Introducao ao Meta Ads 2025',resumo:'Visao geral completa',duracao:'15min',conteudo:genFundamentos1()},
{titulo:'Gerenciador de Anuncios',resumo:'Interface e navegacao',duracao:'20min',conteudo:genFundamentos2()},
{titulo:'Estrutura de Campanhas',resumo:'Campanha > Conjunto > Anuncio',duracao:'18min',conteudo:genFundamentos3()},
{titulo:'Objetivos de Campanha',resumo:'Escolhendo o objetivo certo',duracao:'22min',conteudo:genFundamentos4()}
]},
{titulo:'Pixel e Rastreamento',icon:'\u{1F4CA}',color:'#00b8d4',aulas:[
{titulo:'O Pixel do Facebook',resumo:'O que e e como funciona',duracao:'18min',conteudo:genPixel1()},
{titulo:'Instalacao do Pixel',resumo:'Passo a passo completo',duracao:'25min',conteudo:genPixel2()},
{titulo:'API de Conversoes',resumo:'Rastreamento server-side',duracao:'22min',conteudo:genPixel3()},
{titulo:'Eventos e Parametros',resumo:'Configurando eventos',duracao:'20min',conteudo:genPixel4()}
]},
{titulo:'Campanha de Reconhecimento',icon:'\u{1F4E2}',color:'#ab47bc',aulas:[
{titulo:'O que e Reconhecimento',resumo:'Objetivo e quando usar',duracao:'15min',conteudo:genRecon1()},
{titulo:'Configurando a Campanha',resumo:'Setup completo',duracao:'22min',conteudo:genRecon2()},
{titulo:'Segmentacao de Publico',resumo:'Alcance ideal',duracao:'18min',conteudo:genRecon3()},
{titulo:'Otimizacao e Metricas',resumo:'KPIs importantes',duracao:'20min',conteudo:genRecon4()}
]},
{titulo:'Campanha de Trafego',icon:'\u{1F310}',color:'#42a5f5',aulas:[
{titulo:'Trafego: Fundamentos',resumo:'Levando visitantes',duracao:'15min',conteudo:genTraf1()},
{titulo:'Config de Trafego',resumo:'Passo a passo',duracao:'22min',conteudo:genTraf2()},
{titulo:'Landing Pages',resumo:'Paginas que convertem',duracao:'20min',conteudo:genTraf3()},
{titulo:'Otimizando Trafego',resumo:'CPC e CTR',duracao:'18min',conteudo:genTraf4()}
]},
{titulo:'Campanha de Engajamento',icon:'\u{2764}',color:'#ef5350',aulas:[
{titulo:'Engajamento: Visao Geral',resumo:'Interacoes que importam',duracao:'15min',conteudo:genEng1()},
{titulo:'Tipos de Engajamento',resumo:'Posts, videos, eventos',duracao:'20min',conteudo:genEng2()},
{titulo:'Criativos que Engajam',resumo:'Conteudo viral',duracao:'18min',conteudo:genEng3()},
{titulo:'Metricas de Engajamento',resumo:'Analisando resultados',duracao:'16min',conteudo:genEng4()}
]},
{titulo:'Campanha de Cadastro',icon:'\u{1F4CB}',color:'#66bb6a',aulas:[
{titulo:'Lead Ads: Introducao',resumo:'Gerando leads qualificados',duracao:'15min',conteudo:genLead1()},
{titulo:'Formularios Nativos',resumo:'Instant Forms',duracao:'22min',conteudo:genLead2()},
{titulo:'Integracao com CRM',resumo:'Automacao de leads',duracao:'20min',conteudo:genLead3()},
{titulo:'Qualificacao de Leads',resumo:'Leads que compram',duracao:'18min',conteudo:genLead4()}
]},
{titulo:'Promocao de App',icon:'\u{1F4F1}',color:'#ffa726',aulas:[
{titulo:'App Campaigns',resumo:'Promovendo aplicativos',duracao:'18min',conteudo:genApp1()},
{titulo:'Instalacao e Engajamento',resumo:'Downloads e retencao',duracao:'20min',conteudo:genApp2()},
{titulo:'Deep Links e Eventos',resumo:'Rastreamento in-app',duracao:'22min',conteudo:genApp3()}
]},
{titulo:'Campanha de Vendas',icon:'\u{1F4B0}',color:'#26c6da',aulas:[
{titulo:'Vendas: Fundamentos',resumo:'Convertendo em vendas',duracao:'18min',conteudo:genVendas1()},
{titulo:'Catalogo de Produtos',resumo:'Feed e catalogo',duracao:'25min',conteudo:genVendas2()},
{titulo:'Checkout e Conversao',resumo:'Otimizando vendas',duracao:'22min',conteudo:genVendas3()},
{titulo:'Escala de Vendas',resumo:'Multiplicando receita',duracao:'20min',conteudo:genVendas4()}
]},
{titulo:'Remarketing Avancado',icon:'\u{1F504}',color:'#ec407a',aulas:[
{titulo:'Remarketing: Introducao',resumo:'Reconquistando visitantes',duracao:'15min',conteudo:genRmkt1()},
{titulo:'Publicos Personalizados',resumo:'Custom Audiences',duracao:'22min',conteudo:genRmkt2()},
{titulo:'Lookalike Audiences',resumo:'Publicos semelhantes',duracao:'20min',conteudo:genRmkt3()},
{titulo:'Funis de Remarketing',resumo:'Estrategias avancadas',duracao:'25min',conteudo:genRmkt4()}
]},
{titulo:'Video Views e Conteudo',icon:'\u{1F3AC}',color:'#7e57c2',aulas:[
{titulo:'Video Views',resumo:'Campanhas de video',duracao:'18min',conteudo:genVideo1()},
{titulo:'Criativos de Video',resumo:'Videos que convertem',duracao:'22min',conteudo:genVideo2()},
{titulo:'Funil de Conteudo',resumo:'Atraindo com valor',duracao:'20min',conteudo:genVideo3()}
]},
{titulo:'Otimizacao e Escala',icon:'\u{1F680}',color:'#00e88f',aulas:[
{titulo:'Otimizacao de Campanhas',resumo:'Melhorando resultados',duracao:'22min',conteudo:genOtim1()},
{titulo:'Testes A/B',resumo:'Testando criativos',duracao:'20min',conteudo:genOtim2()},
{titulo:'Escalando Campanhas',resumo:'De R$50 a R$5000/dia',duracao:'25min',conteudo:genOtim3()},
{titulo:'Analise e Relatorios',resumo:'Dados que importam',duracao:'18min',conteudo:genOtim4()}
]}
];
"@
Set-Content -Path "dados-curso.js" -Value $content -Encoding UTF8
Write-Host "OK"
