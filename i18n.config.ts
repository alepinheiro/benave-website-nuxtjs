const pages = {
  home: {
    heroSection: {
      title: 'Especialistas em soluções elétricas industriais',
      subtitle: 'Transformamos ideias em energia,',
      subtitleBold: 'soluções em inovação',
      aboutUs: 'A Benavê',
      contactUs: 'Fale Conosco',
    },
    aboutUs: {
      tagline: 'Nossa História',
      companyName: 'A Benavê',
      summary:
        'A Benavê Engenharia surge com o propósito de oferecer soluções elétricas seguras, modernas e eficientes. Desde o primeiro projeto, priorizamos a qualidade, o respeito às normas técnicas e a personalização para atender as demandas de cada cliente. Ao longo dos anos, consolidamos nossa presença nos mais diversos setores, entregando resultados que superam expectativas.',
      valueProposition: {
        prefix: 'Por que escolher a',
        name: 'Benavê Engenharia?',
        highlights: {
          1: 'Experiência em projetos de alta complexidade',
          2: 'Equipe qualificada e certificada',
          3: 'Foco e respeito às normas de padronização',
          4: 'Compromisso com prazos e resultados',
        },
      },
      cta: 'Entrar em contato',
    },
    services: {
      title: 'Nossos Serviços',
      electricPanels: {
        title: {
          prefix: 'Projetos de',
          suffix: 'painéis elétricos',
        },
        img: 'http://unsplash.it/900/600?random=10&gravity=center',
        summary:
          'Concepção e detalhamento do conjunto de componentes que garantem o controle e distribuição eficiente de energia elétrica, sempre seguindo rigorosamente as normas técnicas.',
        services: {
          QGBT: 'Quadro Geral de Baixa Tensão',
          CCM: 'Centro de Controle de Motores',
          QTA: 'Quadro de Transf. Automática',
          QTM: 'Quadro de Tomada Monofásico',
          QDL: 'Quadro de Distribuição de Luz',
          QDT: 'Quadro de Distrib. de Tomadas',
        },
      },
      electricProjects: {
        title: {
          prefix: 'Projetos',
          suffix: 'Elétricos',
        },
        img: 'http://unsplash.it/900/600?random=11&gravity=center',
        summary:
          'Desenho técnico e planejamento de todas as informações pertinentes e necessárias para a execução da obra, elaborado em software BIM, garantindo eficiência e precisão.',
        services: {
          1: 'Luminotécnico',
          2: 'Aterramento',
          3: 'Sistema de Proteção contra Descargas Atmosféricas (SPDA)',
          4: 'Bandejamento e diagrama de interligação',
        },
      },
      memorialDescription: {
        title: {
          prefix: 'Memorial',
          suffix: 'de Cálculo',
        },
        img: 'http://unsplash.it/900/600?random=12&gravity=center',
        summary:
          'Cálculos detalhados para dimensionamento seguro e eficiente de sistemas e componentes elétricos.',
        services: {
          1: 'Cabos elétricos e condutores',
          2: 'Sistema de Proteção contra Descargas Atmosféricas (SPDA)',
          3: 'Sistemas luminotécnicos',
        },
      },
    },
    portfolio: {
      title: 'PORTFÓLIO',
      tagline: 'CONHEÇA OS CASES DE SUCESSO BENAVÊ',
      cases: {
        1: {
          img: 'http://unsplash.it/900/600?random=13&gravity=center',
          title: 'Quadro Geral de Baixa Tensão',
        },
        2: {
          img: 'http://unsplash.it/900/600?random=14&gravity=center',
          title: 'Quadro de Distribuição de Tomadas',
        },
        3: {
          img: 'http://unsplash.it/900/600?random=15&gravity=center',
          title: 'Quadro de Distribuição de Luz',
        },
        4: {
          img: 'http://unsplash.it/900/600?random=16&gravity=center',
          title: 'Quadro de Transf. Automática',
        },
        5: {
          img: 'http://unsplash.it/900/600?random=17&gravity=center',
          title: 'Quadro de Tomada Monofásico',
        },
      },
    },
    blog: {
      title: 'BLOG',
      tagline: 'Fique por dentro das últimas notícias e insights',
    },
  },
};

const app = {
  name: 'Benavê Engenharia',
};

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'br',
  messages: {
    br: {
      app,
      pages,
    },
  },
}));
