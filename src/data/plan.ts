import {
  BookOpenText,
  Building2,
  Factory,
  Leaf,
  ShieldCheck,
  Sun,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

export type Proposal = {
  code: string;
  title: string;
  problem: string;
  evidence: string;
  action: string;
  beneficiaries: string;
  target: string;
};

export type StrategicAxis = {
  number: string;
  title: string;
  question: string;
  icon: LucideIcon;
  proposals: [Proposal, Proposal];
};

export const strategicAxes: StrategicAxis[] = [
  {
    number: "01",
    title: "População, educação e qualidade de vida",
    question: "Como melhorar a qualidade de vida considerando o perfil da população?",
    icon: BookOpenText,
    proposals: [
      {
        code: "1.1",
        title: "Programa Nacional de Alfabetização e Qualificação de Adultos",
        problem: "A alfabetização insuficiente limita o acesso à informação, às oportunidades profissionais e à participação social.",
        evidence: "Em Alvaria, 12% da população é analfabeta e a escolaridade média é de 8 anos. Metade da população está na classe baixa.",
        action: "Oferecer alfabetização integrada à formação profissional, em horários flexíveis e com atendimento próximo das comunidades rurais e urbanas de baixa renda.",
        beneficiaries: "População adulta de baixa renda e trabalhadores rurais.",
        target: "Reduzir o analfabetismo para menos de 2% e elevar a escolaridade média para 11 anos até 2036.",
      },
      {
        code: "1.2",
        title: "Permanência Alvaria: bolsas e fixação de talentos",
        problem: "A saída crescente de profissionais qualificados reduz a capacidade do país de inovar e ampliar setores de maior produtividade.",
        evidence: "A emigração de profissionais qualificados cresce enquanto tecnologia e serviços terceirizados precisam de mão de obra especializada.",
        action: "Criar bolsas, estágios remunerados, iniciação científica e oportunidades de carreira que conectem talentos a empresas, universidades e pesquisa no país.",
        beneficiaries: "Universitários, pesquisadores, engenheiros e jovens profissionais.",
        target: "Reduzir em 70% a emigração de profissionais qualificados em dez anos.",
      },
    ],
  },
  {
    number: "02",
    title: "Trabalho, emprego e economia",
    question: "Como gerar trabalho e renda aproveitando as capacidades da população e do território?",
    icon: Factory,
    proposals: [
      {
        code: "2.1",
        title: "Modernização do complexo têxtil e agroindustrial",
        problem: "A produção agrícola precisa gerar mais valor dentro do país e oferecer trabalho a quem busca emprego.",
        evidence: "Alvaria cultiva algodão e já possui indústria têxtil, o que permite fortalecer uma cadeia produtiva existente.",
        action: "Implantar polos têxteis de alta tecnologia para beneficiar localmente o algodão e produzir tecidos e confecções com maior valor agregado.",
        beneficiaries: "Trabalhadores de baixa renda e população urbana das regiões agrícolas e industriais.",
        target: "Gerar 400 mil empregos diretos no setor de transformação têxtil até 2036.",
      },
      {
        code: "2.2",
        title: "Programa de incentivo à empregabilidade feminina",
        problem: "As mulheres enfrentam uma taxa de desemprego muito superior à dos homens.",
        evidence: "O desemprego é de 12% entre mulheres e 6% entre homens; mulheres pardas e negras representam grande parte da população de baixa renda.",
        action: "Ampliar formação e intermediação de emprego, apoiar contratação equitativa e acompanhar diferenças salariais e de acesso ao trabalho.",
        beneficiaries: "Mulheres em idade ativa, especialmente mulheres negras e pardas de baixa renda.",
        target: "Reduzir o desemprego feminino para 6%, equiparando-o à taxa masculina em dez anos.",
      },
    ],
  },
  {
    number: "03",
    title: "Território, cidades, habitação e mobilidade",
    question: "Como organizar o território para aproximar moradia, infraestrutura e oportunidades?",
    icon: Building2,
    proposals: [
      {
        code: "3.1",
        title: "Reestruturação urbana e integração do migrante",
        problem: "O êxodo rural pressiona cidades e pode ampliar assentamentos sem moradia adequada, saneamento ou serviços.",
        evidence: "A população cresceu em 25 milhões de pessoas na última década e há forte migração interna do campo para as cidades.",
        action: "Planejar bairros novos com regularização fundiária, saneamento, transporte e acesso a serviços; integrar famílias migrantes às redes locais.",
        beneficiaries: "Famílias migrantes e moradores de novos assentamentos e periferias urbanas.",
        target: "Garantir regularização fundiária e infraestrutura básica em 100% dos novos assentamentos urbanos.",
      },
      {
        code: "3.2",
        title: "Norma antissísmica e mobilidade do norte",
        problem: "Terremotos podem causar perdas humanas e interromper serviços essenciais em comunidades montanhosas.",
        evidence: "A cadeia montanhosa ao norte está sujeita a terremotos e concentra infraestrutura exposta a risco sísmico.",
        action: "Adotar normas antissísmicas em novas obras e readequar pontes, estradas e edifícios públicos; priorizar rotas de evacuação seguras.",
        beneficiaries: "Moradores, trabalhadores e serviços públicos da região norte.",
        target: "Readequar todas as pontes, estradas e edifícios públicos do norte conforme as normas antissísmicas.",
      },
    ],
  },
  {
    number: "04",
    title: "Meio ambiente, clima e recursos naturais",
    question: "Como usar os recursos naturais sem comprometer a vida das próximas gerações?",
    icon: Leaf,
    proposals: [
      {
        code: "4.1",
        title: "Gestão de bacias e reservatórios sazonais",
        problem: "A dependência das monções deixa comunidades e áreas agrícolas vulneráveis durante os períodos secos.",
        evidence: "Dois grandes rios atravessam as principais áreas agrícolas, enquanto a disponibilidade de água diminui em algumas regiões na estação seca.",
        action: "Armazenar parte das chuvas sazonais em reservatórios, proteger bacias e coordenar a distribuição de água para o consumo e a produção agrícola.",
        beneficiaries: "Produtores agrícolas e comunidades afetadas pelo estresse hídrico.",
        target: "Garantir abastecimento hídrico contínuo para a agricultura e o consumo da população.",
      },
      {
        code: "4.2",
        title: "Mineração sustentável e recuperação de áreas",
        problem: "A extração mineral pode degradar solos, vegetação e cursos d’água se ocorrer sem prevenção e recuperação.",
        evidence: "Alvaria possui reservas muito grandes de carvão e grandes reservas de ferro e bauxita, além de potencial para outros minerais.",
        action: "Exigir planos de recuperação, fiscalização ambiental e reflorestamento das áreas afetadas como parte da operação mineral.",
        beneficiaries: "Comunidades próximas às áreas de mineração, trabalhadores e gerações futuras.",
        target: "Recuperar e reflorestar obrigatoriamente as zonas degradadas pela mineração.",
      },
    ],
  },
  {
    number: "05",
    title: "Energia, tecnologia e desenvolvimento",
    question: "De onde virá a energia e a inovação necessárias para desenvolver Alvaria?",
    icon: Sun,
    proposals: [
      {
        code: "5.1",
        title: "Transição energética solar e eólica",
        problem: "A forte dependência do carvão mineral aumenta os impactos ambientais e torna a matriz elétrica menos diversificada.",
        evidence: "Alvaria possui reservas muito grandes de carvão e alta radiação solar nas planícies centrais, além de potencial para energia eólica.",
        action: "Instalar parques solares e eólicos, conectar a geração à rede e planejar a transição com proteção às comunidades e trabalhadores envolvidos.",
        beneficiaries: "População geral, setores produtivos e trabalhadores da cadeia energética.",
        target: "Alcançar 40% da matriz elétrica proveniente de fontes solar e eólica em dez anos.",
      },
      {
        code: "5.2",
        title: "Polos de serviços tecnológicos e software",
        problem: "O país pode ampliar o valor gerado localmente por suas atividades de tecnologia e terceirização.",
        evidence: "Alvaria já atua com tecnologia e serviços terceirizados, base para exportar serviços de maior valor agregado.",
        action: "Criar polos tecnológicos conectados à formação técnica, pesquisa, empresas locais e mercados internacionais de software e serviços.",
        beneficiaries: "Jovens técnicos, profissionais de TI, pesquisadores e empresas nacionais.",
        target: "Dobrar o faturamento do setor de exportação de serviços tecnológicos.",
      },
    ],
  },
  {
    number: "06",
    title: "Segurança, direitos e bem-estar social",
    question: "O que significa garantir proteção, direitos e bem-estar para a população de Alvaria?",
    icon: ShieldCheck,
    proposals: [
      {
        code: "6.1",
        title: "Ações afirmativas e inclusão étnico-racial",
        problem: "A distribuição socioeconômica demonstra segregação racial e barreiras de acesso a renda e posições de liderança.",
        evidence: "Segundo o diagnóstico do projeto, a classe alta não inclui pessoas negras ou pardas, enquanto a classe baixa é composta integralmente por pessoas negras ou pardas.",
        action: "Adotar ações afirmativas no serviço público e incentivos para que empresas ampliem a diversidade em cargos de liderança.",
        beneficiaries: "Populações negra e parda.",
        target: "Estabelecer cotas de 30% no serviço público e incentivos fiscais para empresas com liderança diversificada.",
      },
      {
        code: "6.2",
        title: "Prevenção integrada a desastres naturais",
        problem: "Inundações, secas e terremotos colocam em risco vidas, moradias e infraestrutura.",
        evidence: "O clima de monções alterna períodos chuvosos e secos; a região montanhosa do norte está sujeita a abalos sísmicos.",
        action: "Mapear riscos, instalar alertas precoces, preparar rotas de evacuação e manter abrigos equipados nas áreas vulneráveis.",
        beneficiaries: "Moradores de áreas expostas a cheias, secas ou terremotos.",
        target: "Implantar sistemas de alerta precoce e abrigos estruturados nas regiões de risco.",
      },
    ],
  },
  {
    number: "07",
    title: "Cultura, lazer, turismo e participação social",
    question: "Como garantir pertencimento, convivência, cultura e oportunidades de lazer?",
    icon: UsersRound,
    proposals: [
      {
        code: "7.1",
        title: "Centros culturais e de integração comunitária",
        problem: "A convivência e o pertencimento precisam ser fortalecidos em uma sociedade de diversidade cultural e religiosa.",
        evidence: "O país reúne comunidades hindus, muçulmanas, cristãs, sikhs e budistas.",
        action: "Criar espaços comunitários acessíveis para atividades culturais, encontros, esporte, lazer e participação de diferentes grupos.",
        beneficiaries: "Moradores de todas as idades, coletivos culturais e comunidades religiosas.",
        target: "Construir espaços públicos comunitários que promovam convivência e cultura ao longo do decênio.",
      },
      {
        code: "7.2",
        title: "Parques nacionais e ecoturismo sustentável",
        problem: "O potencial natural pode gerar oportunidades locais, mas precisa ser protegido contra exploração não planejada.",
        evidence: "Alvaria possui florestas tropicais, savanas, campos e ecossistemas montanhosos.",
        action: "Estruturar parques com conservação ambiental, visitação responsável, formação de guias locais e participação das comunidades.",
        beneficiaries: "Comunidades locais, trabalhadores do comércio e serviços e visitantes.",
        target: "Criar cinco parques ecoturísticos estruturados.",
      },
    ],
  },
];

export const timeline = [
  {
    period: "Curto prazo",
    years: "Anos 1—3",
    marker: "2026—2028",
    intro: "Estabelecer as bases e iniciar as respostas mais urgentes.",
    actions: [
      "Iniciar o Programa de Alfabetização de Adultos.",
      "Expandir a infraestrutura têxtil com base no algodão produzido no país.",
      "Construir os primeiros reservatórios agrícolas para armazenar a água das chuvas.",
      "Implantar incentivos para a permanência de profissionais qualificados.",
    ],
  },
  {
    period: "Médio prazo",
    years: "Anos 4—6",
    marker: "2029—2031",
    intro: "Ampliar as políticas e fortalecer a capacidade das instituições.",
    actions: [
      "Aplicar medidas de equidade no mercado de trabalho para reduzir o desemprego feminino.",
      "Implementar normas antissísmicas no norte e habitação planejada nas cidades.",
      "Construir parques de energia solar nas planícies centrais.",
      "Aplicar ações afirmativas para inclusão étnico-racial.",
    ],
  },
  {
    period: "Longo prazo",
    years: "Anos 7—10",
    marker: "2032—2036",
    intro: "Consolidar as metas de desenvolvimento e avaliar os resultados do plano.",
    actions: [
      "Atingir 40% da matriz elétrica a partir de fontes solar e eólica.",
      "Reduzir o analfabetismo para menos de 2%.",
      "Consolidar saneamento e regularização em todos os novos assentamentos urbanos.",
      "Dobrar o faturamento das exportações de serviços de tecnologia.",
    ],
  },
];

export const principles = [
  {
    number: "01",
    title: "Evidência demográfica",
    text: "Políticas orientadas por dados, projeções e metas mensuráveis.",
  },
  {
    number: "02",
    title: "Justiça intergeracional",
    text: "Equilibrar responsabilidades e oportunidades entre gerações.",
  },
  {
    number: "03",
    title: "Produtividade humana",
    text: "Valorizar aprendizagem contínua, trabalho digno e capacidade de realização.",
  },
];

export const outcomes = [
  { value: "<2%", label: "analfabetismo até 2036" },
  { value: "400 mil", label: "empregos têxteis diretos" },
  { value: "6%", label: "desemprego feminino" },
  { value: "40%", label: "matriz elétrica solar e eólica" },
];
