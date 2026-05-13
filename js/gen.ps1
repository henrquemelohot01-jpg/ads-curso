
$js = @'
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
{titulo:"Introdu\u00e7\u00e3o ao Meta Ads 2025/2026",resumo:"Vis\u00e3o geral da plataforma",duracao:"15 min",conteudo:
h2("O que \u00e9 o Meta Ads?")+
p("O <strong>Meta Ads</strong> (antigo Facebook Ads) \u00e9 a plataforma de an\u00fancios do grupo Meta, que engloba <strong>Facebook, Instagram, Messenger e Audience Network</strong>. Com mais de 3 bilh\u00f5es de usu\u00e1rios ativos, \u00e9 a maior plataforma de publicidade digital do mundo.")+
p("Em 2025/2026, a plataforma passou por atualiza\u00e7\u00f5es significativas: <strong>Advantage+ expandido</strong>, novos formatos de criativos com IA, mudan\u00e7as nas pol\u00edticas de privacidade e integra\u00e7\u00e3o avan\u00e7ada com a API de Convers\u00f5es.")+
h3("Por que anunciar no Meta Ads?")+
ul(["Alcance massivo: 3+ bilh\u00f5es de usu\u00e1rios",
"Segmenta\u00e7\u00e3o avan\u00e7ada por interesses, comportamentos e dados demogr\u00e1ficos",
"Formatos diversos: imagem, v\u00eddeo, carrossel, cole\u00e7\u00e3o, stories",
"Ferramentas de IA para otimiza\u00e7\u00e3o autom\u00e1tica",
"Integra\u00e7\u00e3o com e-commerce e CRM",
"Remarketing poderoso com p\u00fablicos personalizados"])+
h3("Estrutura da Plataforma")+
p("O Meta Ads funciona em <strong>3 n\u00edveis hier\u00e1rquicos</strong>:")+
ol(["<strong>Campanha</strong> - Define o objetivo (reconhecimento, tr\u00e1fego, vendas, etc.)",
"<strong>Conjunto de An\u00fancios</strong> - Define p\u00fablico, or\u00e7amento, posicionamento e agenda",
"<strong>An\u00fancio</strong> - O criativo em si (imagem/v\u00eddeo + texto + CTA)"])+
tip("DICA PRO","Sempre comece com um objetivo claro. O algoritmo do Meta otimiza suas campanhas com base no objetivo escolhido. Escolher errado = desperdi\u00e7ar dinheiro.")+
h3("Conta Business Manager")+
p("Para anunciar profissionalmente, voc\u00ea precisa de uma <strong>conta Business Manager</strong> (business.facebook.com). Ela permite:")+
ul(["Gerenciar m\u00faltiplas p\u00e1ginas e contas de an\u00fancio","Controlar acesso de equipe com permiss\u00f5es","Instalar e gerenciar pixels","Criar p\u00fablicos compartilhados","Gerar relat\u00f3rios profissionais"])+
warn("ATEN\u00c7\u00c3O","Nunca use sua conta pessoal para an\u00fancios profissionais. Contas pessoais t\u00eam limites e podem ser bloqueadas mais facilmente.")
},
{titulo:"Gerenciador de An\u00fancios",resumo:"Navegando pela interface",duracao:"20 min",conteudo:
h2("Conhecendo o Gerenciador de An\u00fancios")+
p("O <strong>Gerenciador de An\u00fancios</strong> (Ads Manager) \u00e9 onde voc\u00ea cria, gerencia e analisa todas as suas campanhas. Acesse em: <code>adsmanager.facebook.com</code>")+
h3("Painel Principal")+
p("O painel mostra uma vis\u00e3o geral de todas as campanhas com m\u00e9tricas em tempo real:")+
ul(["<strong>Alcance</strong> - Quantas pessoas viram seu an\u00fancio","<strong>Impress\u00f5es</strong> - Total de vezes que o an\u00fancio foi exibido","<strong>Cliques</strong> - Intera\u00e7\u00f5es com o an\u00fancio","<strong>CTR</strong> - Taxa de cliques (cliques/impress\u00f5es)","<strong>CPC</strong> - Custo por clique","<strong>CPM</strong> - Custo por 1000 impress\u00f5es","<strong>ROAS</strong> - Retorno sobre investimento em an\u00fancios"])+
h3("Colunas Personalizadas")+
p("Configure colunas personalizadas para ver as m\u00e9tricas mais relevantes para seu neg\u00f3cio. V\u00e1 em <strong>Colunas > Personalizar Colunas</strong>.")+
tip("DICA PRO","Crie 3 presets de colunas: um para PROSPEC\u00c7\u00c3O (alcance, CPM), um para TR\u00c1FEGO (CPC, CTR) e um para CONVERS\u00c3O (CPA, ROAS). Isso agiliza sua an\u00e1lise.")+
h3("Filtros e Segmenta\u00e7\u00e3o")+
p("Use filtros para encontrar campanhas espec\u00edficas rapidamente. Voc\u00ea pode filtrar por status, objetivo, data e m\u00e9tricas.")+
h3("Regras Automatizadas")+
p("Crie regras para automatizar a\u00e7\u00f5es como pausar an\u00fancios com CPA alto ou aumentar or\u00e7amento de campanhas com bom desempenho.")
},
{titulo:"Estrutura de Campanhas",resumo:"Campanha > Conjunto > An\u00fancio",duracao:"18 min",conteudo:
h2("Entendendo a Estrutura")+
p("Cada campanha no Meta Ads segue uma hierarquia de 3 n\u00edveis. Entender isso \u00e9 fundamental.")+
h3("N\u00edvel 1: Campanha")+
ul(["Define o <strong>objetivo</strong> de marketing","Op\u00e7\u00f5es: Reconhecimento, Tr\u00e1fego, Engajamento, Leads, Vendas, Promo\u00e7\u00e3o de App","Or\u00e7amento pode ser definido aqui (CBO) ou no conjunto","Advantage+ Campaign Budget distribui verba automaticamente"])+
h3("N\u00edvel 2: Conjunto de An\u00fancios")+
ul(["<strong>P\u00fablico-alvo</strong>: idade, g\u00eanero, localiza\u00e7\u00e3o, interesses","<strong>Posicionamento</strong>: Feed, Stories, Reels, Audience Network","<strong>Or\u00e7amento e agenda</strong>: valor di\u00e1rio ou vitalicio","<strong>Otimiza\u00e7\u00e3o</strong>: para que a\u00e7\u00e3o otimizar"])+
h3("N\u00edvel 3: An\u00fancio")+
ul(["O criativo: imagem, v\u00eddeo ou carrossel","Texto prim\u00e1rio, t\u00edtulo e descri\u00e7\u00e3o","Call-to-Action (CTA)","URL de destino","Advantage+ Creative para varia\u00e7\u00f5es autom\u00e1ticas"])+
ex("EXEMPLO PR\u00c1TICO","Campanha de Vendas > Conjunto 1: Mulheres 25-45, SP + Conjunto 2: Homens 25-45, RJ > 3 an\u00fancios com criativos diferentes em cada conjunto.")+
warn("O QUE N\u00c3O FAZER","N\u00e3o crie dezenas de conjuntos com p\u00fablicos muito pequenos. Isso fragmenta o or\u00e7amento e impede o algoritmo de otimizar.")
},
{titulo:"Objetivos de Campanha ODAX",resumo:"Novo sistema simplificado",duracao:"22 min",conteudo:
h2("Sistema ODAX de Objetivos")+
p("Em 2024/2025, o Meta consolidou os objetivos em <strong>6 categorias principais</strong> (ODAX - Outcome-Driven Ad Experiences):")+
ol(["<strong>Reconhecimento</strong> - Alcan\u00e7ar o m\u00e1ximo de pessoas","<strong>Tr\u00e1fego</strong> - Enviar pessoas para um destino","<strong>Engajamento</strong> - Gerar intera\u00e7\u00f5es","<strong>Cadastro/Leads</strong> - Coletar informa\u00e7\u00f5es","<strong>Promo\u00e7\u00e3o de App</strong> - Downloads e uso","<strong>Vendas</strong> - Gerar compras e convers\u00f5es"])+
h3("Como Escolher o Objetivo Certo")+
p("A regra de ouro: <strong>escolha o objetivo que corresponde \u00e0 a\u00e7\u00e3o que voc\u00ea quer que o usu\u00e1rio fa\u00e7a</strong>.")+
tip("REGRA DE OURO","Se voc\u00ea quer vendas, use objetivo de VENDAS. Se quer leads, use CADASTRO. Parece \u00f3bvio, mas muita gente usa Tr\u00e1fego esperando vendas - isso n\u00e3o funciona porque o algoritmo otimiza para cliques, n\u00e3o compras.")+
h3("Advantage+ Campaigns")+
p("O Meta introduziu campanhas <strong>Advantage+</strong> que usam IA para otimizar automaticamente. Tipos dispon\u00edveis:")+
ul(["<strong>Advantage+ Shopping</strong> - Para e-commerce, combina prospec\u00e7\u00e3o e remarketing","<strong>Advantage+ App</strong> - Para promo\u00e7\u00e3o de aplicativos","<strong>Advantage+ Audience</strong> - Segmenta\u00e7\u00e3o expandida por IA"])+
warn("ATEN\u00c7\u00c3O 2025","O Advantage+ Shopping agora \u00e9 o padr\u00e3o para e-commerce. Se voc\u00ea vende produtos online, teste esta op\u00e7\u00e3o antes de campanhas manuais.")
}]},
'@

$js | Set-Content -Path "$PSScriptRoot\dados-curso.js" -Encoding UTF8
Write-Host "Parte 1 OK"
