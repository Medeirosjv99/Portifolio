// Todo o conteúdo do portfólio fica aqui: para atualizar textos, links ou
// projetos, edite este arquivo — os componentes só leem estes dados.
import photo from '../assets/img/joao-vitor.jpg'
import instagramClone from '../assets/img/instagram-clone.jpg'

export const profile = {
  name: 'João Vitor de Medeiros',
  shortName: 'João Vitor',
  initials: 'JM',
  role: 'Desenvolvedor Full Stack',
  headline: 'JavaScript · Vue.js · Node.js · Neo4j',
  tagline: 'Transformando ideias em soluções digitais.',
  pitch:
    'Desenvolvo e mantenho aplicações web de ponta a ponta — da interface à API e ao banco de dados — para resolver necessidades reais de negócio.',
  location: 'Paraná, Brasil',
  photo,
  email: 'medeirosjv.963@gmail.com',
  // Coloque o PDF em public/ (ex.: public/curriculo-joao-vitor-de-medeiros.pdf)
  // e preencha o caminho abaixo para exibir o botão "Baixar currículo".
  resumeUrl: '',
  stats: [
    { value: '4+', label: 'anos em tecnologia' },
    { value: 'Vexur', label: 'Full Stack atualmente' },
    { value: 'IFPR', label: 'Sistemas para Internet' },
  ],
}

export const socials = [
  { id: 'github', label: 'GitHub', handle: 'Medeirosjv99', url: 'https://github.com/Medeirosjv99', icon: 'github' },
  { id: 'linkedin', label: 'LinkedIn', handle: 'in/medeirosjv99', url: 'https://www.linkedin.com/in/medeirosjv99', icon: 'linkedin' },
  { id: 'instagram', label: 'Instagram', handle: '@medeirosjv_99', url: 'https://www.instagram.com/medeirosjv_99', icon: 'instagram' },
  { id: 'whatsapp', label: 'WhatsApp', handle: '+55 43 98485-8677', url: 'https://wa.me/5543984858677', icon: 'message' },
]

export const about = {
  paragraphs: [
    'Sou desenvolvedor Full Stack, com experiência no desenvolvimento e manutenção de aplicações web, integração de APIs e manipulação de bancos de dados.',
    'Atualmente trabalho na Vexur, participando do desenvolvimento de soluções e sistemas que atendem necessidades reais de negócio. Minha experiência envolve tecnologias como JavaScript, Vue.js, Node.js, Neo4j e SQL.',
    'Também sou estudante de Tecnologia em Sistemas para Internet pelo Instituto Federal do Paraná (IFPR), buscando aprimorar continuamente meus conhecimentos em arquitetura de software, desenvolvimento web e boas práticas de programação.',
    'Gosto de transformar problemas em soluções funcionais, eficientes e bem estruturadas.',
  ],
  focus: [
    { icon: 'monitor', title: 'Interfaces web', text: 'Telas responsivas e componentizadas com Vue.js, Vuetify e React.' },
    { icon: 'server', title: 'APIs e integrações', text: 'APIs REST em Node.js e Express, integrações entre sistemas e serviços externos.' },
    { icon: 'database', title: 'Dados', text: 'Modelagem e consultas em grafos (Neo4j / Cypher) e bancos relacionais.' },
  ],
}

export const experience = [
  {
    company: 'Vexur',
    role: 'Desenvolvedor Full Stack',
    period: 'Atual',
    current: true,
    summary:
      'Atuo no desenvolvimento e na evolução de sistemas web corporativos, do front-end ao banco de dados, atendendo demandas reais de negócio.',
    responsibilities: [
      'Desenvolvimento e manutenção de telas e componentes com Vue.js e Vuetify.',
      'Criação e evolução de APIs e integrações em Node.js.',
      'Modelagem de dados e escrita/otimização de consultas Cypher no Neo4j.',
      'Correção de bugs, melhorias contínuas e análise de impacto das mudanças.',
      'Versionamento com Git, revisão de código e entregas via pull request.',
    ],
    stack: ['JavaScript', 'Vue.js', 'Vuetify', 'Node.js', 'Neo4j', 'Git'],
  },
  {
    company: 'Técnico em informática',
    role: 'Suporte e manutenção',
    period: '4 anos',
    current: false,
    summary:
      'Comecei na área aos 17 anos como técnico. Foi esse contato diário com problemas reais de usuários e sistemas que despertou meu interesse por programação.',
    responsibilities: [
      'Manutenção de computadores, instalação e configuração de sistemas.',
      'Atendimento e suporte a usuários, diagnóstico e resolução de problemas.',
    ],
    stack: ['Hardware', 'Sistemas operacionais', 'Redes', 'Suporte'],
  },
]

// `icon` = classe do Devicon (https://devicon.dev). `mono` usa a cor do texto
// em vez da cor da marca (para logos pretos não sumirem no tema escuro).
// `daily` marca o que uso no dia a dia.
export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'monitor',
    items: [
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored', daily: true },
      { name: 'Vue.js', icon: 'devicon-vuejs-plain colored', daily: true },
      { name: 'Vuetify', icon: 'devicon-vuetify-plain colored', daily: true },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'HTML5', icon: 'devicon-html5-plain colored' },
      { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    ],
  },
  {
    title: 'Backend',
    icon: 'server',
    items: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored', daily: true },
      { name: 'Express.js', icon: 'devicon-express-original', mono: true },
      { name: 'APIs REST', iconName: 'share' },
      { name: 'Sequelize', icon: 'devicon-sequelize-plain colored' },
    ],
  },
  {
    title: 'Bancos de dados',
    icon: 'database',
    items: [
      { name: 'Neo4j', icon: 'devicon-neo4j-plain colored', daily: true },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
      { name: 'MySQL', icon: 'devicon-mysql-original colored' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
    ],
  },
  {
    title: 'Ferramentas e ambiente',
    icon: 'tool',
    items: [
      { name: 'Git', icon: 'devicon-git-plain colored', daily: true },
      { name: 'GitHub', icon: 'devicon-github-original', mono: true },
      { name: 'Linux', icon: 'devicon-linux-plain', mono: true },
      { name: 'NPM', icon: 'devicon-npm-original-wordmark colored' },
      { name: 'AWS S3', icon: 'devicon-amazonwebservices-plain-wordmark', mono: true },
    ],
  },
]

// cover: 'graph' | 'dashboard' | 'table' gera uma capa ilustrada quando o
// projeto ainda não tem print. Para usar um print, importe a imagem e
// preencha `image`.
export const projects = [
  {
    slug: 'erp-pcp',
    title: 'ERP com PCP',
    subtitle: 'Gestão de produção, estoque e vendas para uma fábrica',
    featured: true,
    status: 'Em desenvolvimento',
    cover: 'graph',
    image: null,
    summary:
      'ERP web para uma fábrica de artigos religiosos: ficha técnica com custo, ordens de produção, estoque com reservas, vendas, faturamento e NF-e.',
    description: [
      'Sistema completo de gestão com Planejamento e Controle da Produção (PCP). A estrutura dos produtos é modelada como grafo no Neo4j: cada produto se relaciona com os materiais que o compõem, com quantidade, unidade e perda — o que torna natural calcular custos e necessidades de material.',
      'O backend segue camadas bem definidas (Routes → Controller → Service → Repository) e o frontend é uma SPA em Vue 3 com Pinia e Vue Router, consumindo um contrato de API documentado.',
    ],
    highlights: [
      'Ficha técnica com cálculo de custo e cadastro de materiais',
      'Ordens de produção com reserva de materiais e apontamento',
      'Estoque físico, reservado e disponível, com histórico de movimentações',
      'Vendas com catálogo, aprovação de desconto por alçada e faturamento',
      'Contas a receber geradas pela condição de pagamento',
      'Emissão de NF-e integrada a um provedor externo',
      'Autenticação JWT e permissões por nível de acesso',
      'Importação do catálogo de produtos a partir de planilha Excel',
    ],
    challenges: [
      {
        title: 'Ficha técnica que não muda o passado',
        text: 'Ao liberar uma ordem de produção, a composição é copiada e congelada e os materiais são reservados. Alterações posteriores na ficha não afetam ordens já liberadas.',
      },
      {
        title: 'Saldo de estoque rastreável',
        text: 'Toda alteração de saldo gera uma movimentação com usuário e ordem de produção, permitindo auditar de onde veio cada número.',
      },
      {
        title: 'Regras de negócio consistentes',
        text: 'Faturamento bloqueado sem estoque (configurável) e cancelamento com estorno automático de estoque, nota e parcelas.',
      },
    ],
    stack: ['Vue 3', 'Pinia', 'Vue Router', 'Vite', 'Node.js', 'Express', 'Neo4j', 'Cypher', 'JWT'],
    links: { repo: '', demo: '' },
    linkNote: 'Código em repositório privado — posso apresentar em uma conversa.',
  },
  {
    slug: 'petlar-express',
    title: 'PetLar Express',
    subtitle: 'Aplicação web completa com fluxos de negócio',
    featured: true,
    status: 'Projeto acadêmico',
    cover: 'dashboard',
    image: null,
    summary:
      'Aplicação web com cadastro e gerenciamento, interface responsiva e fluxos de negócio integrados ao backend.',
    description: [
      'Projeto desenvolvido a partir do levantamento e da organização de requisitos, com atenção especial à experiência do usuário em todos os fluxos.',
      'A aplicação cobre cadastro e gerenciamento das entidades principais, fluxos de negócio de ponta a ponta e integração entre frontend e backend.',
    ],
    highlights: [
      'Cadastro e gerenciamento de dados',
      'Interface responsiva para celular, tablet e desktop',
      'Fluxos de negócio modelados a partir dos requisitos',
      'Integração entre frontend e backend',
    ],
    challenges: [
      {
        title: 'Requisitos para telas',
        text: 'Traduzir requisitos levantados em fluxos simples, com o mínimo de passos para o usuário.',
      },
    ],
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Node.js', 'API REST'],
    links: { repo: '', demo: '' },
    linkNote: '',
  },
  {
    slug: 'gestao-academica',
    title: 'Gestão Acadêmica',
    subtitle: 'API REST para cursos, professores e disciplinas',
    featured: true,
    status: 'Projeto acadêmico',
    cover: 'table',
    image: null,
    summary:
      'API REST em Node.js e Express com CRUD completo de cursos, professores e disciplinas sobre um banco relacional.',
    description: [
      'API que permite cadastrar, consultar, alterar e excluir cursos, professores e disciplinas, trabalhando com três tabelas relacionadas em um banco de dados relacional.',
      'O foco do projeto foi organizar bem as rotas, tratar os relacionamentos entre as entidades e manter a integridade dos dados.',
    ],
    highlights: [
      'Operações CRUD completas',
      'Relacionamentos entre entidades',
      'Organização de rotas e camadas',
      'Validação e integridade dos dados',
    ],
    challenges: [
      {
        title: 'Relacionamentos',
        text: 'Garantir que excluir ou alterar um curso ou professor não deixe disciplinas inconsistentes.',
      },
    ],
    stack: ['Node.js', 'Express', 'SQL', 'API REST'],
    links: {
      repo: 'https://github.com/Medeirosjv99/Trabalho-Avaliativo-API-REST-com-NodeJS-Express',
      demo: '',
    },
    linkNote: '',
  },
  {
    slug: 'instajao',
    title: 'Instajão',
    subtitle: 'Recriação da tela de login do Instagram',
    featured: false,
    status: 'Primeiros passos',
    cover: null,
    image: instagramClone,
    summary:
      'Um dos meus primeiros projetos: a tela de login do Instagram recriada apenas com HTML e CSS.',
    description: [
      'Projeto de estudo para praticar estrutura semântica em HTML, posicionamento e layout com CSS, reproduzindo fielmente uma interface conhecida.',
    ],
    highlights: ['HTML semântico', 'Layout com CSS', 'Fidelidade visual'],
    challenges: [],
    stack: ['HTML5', 'CSS3'],
    links: { repo: 'https://github.com/Medeirosjv99/Pagina-do-Instagram', demo: '' },
    linkNote: '',
  },
]

export const education = [
  {
    institution: 'Instituto Federal do Paraná (IFPR)',
    course: 'Tecnologia em Sistemas para Internet',
    period: 'Em andamento',
    text: 'Formação com foco em desenvolvimento web, bancos de dados, engenharia e arquitetura de software.',
  },
]

export const certificatesUrl = 'https://github.com/Medeirosjv99/Certificacoes'

export const navLinks = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'tecnologias', label: 'Tecnologias' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'formacao', label: 'Formação' },
  { id: 'contato', label: 'Contato' },
]
