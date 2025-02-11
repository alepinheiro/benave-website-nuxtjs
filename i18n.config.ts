const pages = {
  home: {
    heroSection: {
      title: 'Especialistas em soluções elétricas industriais',
      subtitle: 'Transformamos ideias em energia,',
      subtitleBold: 'soluções em inovação',
      aboutUs: 'A Benavê',
      contactUs: 'Fale Conosco',
      slides: {
        1: {
          alt: 'Slide 1',
          img: '/img/slide-hero-1.png',
        },
        2: {
          alt: 'Slide 2',
          img: '/img/slide-hero-2.png',
        },
        3: {
          alt: 'Slide 3',
          img: '/img/slide-hero-3.png',
        },
      },
    },
    aboutUs: {
      tagline: 'Nossa História',
      companyName: 'A Benavê',
      summary:
        'A Benavê Engenharia surge com o propósito de oferecer soluções elétricas seguras, modernas e eficientes. Desde o primeiro projeto, priorizamos a qualidade, o respeito às normas técnicas e a personalização para atender as demandas de cada cliente.<br><br> Ao longo dos anos, consolidamos nossa presença nos mais diversos setores, entregando resultados que superam expectativas.',
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
        img: '/img/services-1.png',
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
        img: '/img/services-2.png',
        summary:
          'Desenho técnico e planejamento de todas as informações pertinentes e necessárias para a execução da obra, elaborado em software BIM, garantindo eficiência e precisão.',
        services: {
          1: 'Luminotécnico',
          2: 'Aterramento',
          3: 'Sistema de Proteção contra Descargas Atmosféricas (SPDA)',
          4: 'Bandejamento',
          5: 'Diagrama de interligação',
        },
      },
      memorialDescription: {
        title: {
          prefix: 'Memorial',
          suffix: 'de Cálculo',
        },
        img: '/img/services-3.png',
        summary:
          'Cálculos detalhados para dimensionamento seguro e eficiente de sistemas e componentes elétricos.',
        services: {
          1: 'Cabos e condutores elétricos',
          2: 'Sistema de Proteção contra Descargas Atmosféricas (SPDA)',
          3: 'Sistemas luminotécnicos',
        },
      },
      eletroCenter: {
        title: {
          prefix: 'Eletrocentros',
          suffix: '',
        },
        img: '/img/services-4.png',
        summary:
          'Equipamentos modulares que proporcionam flexibilidade para atender uma ampla gama de aplicações em segmentos variados, como usinas de etanol, siderurgias, mineradoras.',
        services: {
          1: 'Luminotécnico',
          2: 'Bandejamento',
          3: 'Aterramento',
          4: 'Sistema de Proteção contra Descargas Atmosféricas (SPDA)',
          5: 'Diagrama de interligação',
        },
      },
    },
    portfolio: {
      title: 'PORTFÓLIO',
      tagline: 'CONHEÇA OS CASES DE SUCESSO BENAVÊ',
      cases: {
        1: {
          img: 'https://unsplash.it/900/600?random=13&gravity=center',
          title: 'Quadro Geral de Baixa Tensão',
        },
        2: {
          img: 'https://unsplash.it/900/600?random=14&gravity=center',
          title: 'Quadro de Distribuição de Tomadas',
        },
        3: {
          img: 'https://unsplash.it/900/600?random=15&gravity=center',
          title: 'Quadro de Distribuição de Luz',
        },
        4: {
          img: 'https://unsplash.it/900/600?random=16&gravity=center',
          title: 'Quadro de Transf. Automática',
        },
        5: {
          img: 'https://unsplash.it/900/600?random=17&gravity=center',
          title: 'Quadro de Tomada Monofásico',
        },
      },
    },
    blog: {
      title: 'BLOG',
      tagline: 'Fique por dentro das últimas notícias e insights',
    },
    testimonials: {
      title: 'EXPERIÊNCIAS QUE INSPIRAM CONFIANÇA',
      1: {
        img: '/img/testimonial-robson.png',
        name: 'Robson',
        company: 'Artesian',
        job: 'Gerente de produção',
        quote:
          'Tive uma boa experiência com os serviços prestados e a agilidade foi o ponto positivo mais relevante nesta parceria. Sem dúvidas, eu recomendaria a Benavê para outros colegas.',
      },
      2: {
        img: '/img/testimonial-geferson.png',
        name: 'Geferson Bachi',
        company: 'GB Instalações e manutenções elétricas',
        job: 'Proprietário',
        quote:
          'O atendimento e atenção dispensada causou uma ótima impressão, sempre disposto a ajudar e tirar dúvidas, facilitando a execução do projeto, que teve um ótimo resultado. Agregou muito no desenvolvimento e execução do trabalho.',
      },
    },
    callToAction: {
      1: {
        title:
          'Precisa de um parceiro confiável para o seu projeto elétrico? Fale com um de nossos especialistas.',
        tagline:
          'Faça seu orçamento agora e transforme a necessidade em soluções eficientes.',
        email: "contato{'@'}benave.com.br",
        phone: '47 9 8893-4935',
      },
    },
    footer: {
      logo: 'https://unsplash.it/900/600?random=20&gravity=center',
      tagline:
        'Projetos elétricos de alta performance para um mundo em constante movimento.',
      about: {
        title: 'Sobre',
        links: {
          1: {
            label: 'Política de Privacidade',
            url: '#',
          },
          2: {
            label: 'Termos de Uso',
            url: '#',
          },
          3: {
            label: 'Política de cookies',
            url: '#',
          },
          4: {
            label: 'Acessibilidade',
            url: '#',
          },
        },
      },
      sitemap: {
        title: 'Links úteis',
        links: {
          1: {
            label: 'Início',
            url: '#',
          },
          2: {
            label: 'Sobre',
            url: '#',
          },
          3: {
            label: 'Serviços',
            url: '#',
          },
          4: {
            label: 'Portfólio',
            url: '#',
          },
          5: {
            label: 'Contato',
            url: '#',
          },
        },
      },
      social: {
        title: 'Siga-nos nas redes sociais:',
        links: {
          1: {
            label: 'WhatsApp',
            icon: '@:icons.whatsapp',
            url: '#',
          },
          2: {
            label: 'Instagram',
            icon: '@:icons.instagram',
            url: '#',
          },
          3: {
            label: 'LinkedIn',
            icon: '@:icons.linkedin',
            url: '#',
          },
        },
      },
      businessInfo: {
        title: 'Horário de atendimento:',
        openTime: {
          weekDays: 'Segunda a Sexta-feira',
          open: 'Das 08h às 12h',
          close: 'e das 13h às 18h.',
        },
      },
      legalInfo: {
        socialReason: 'PABLO YURI BENAVENUTO DOS SANTOS 46.552.830/0001-22',
        year: '{year} © BENAVÊ. Todos os direitos reservados.',
        lgpd: 'Leia nosso Aviso de Privacidade e a Política de Cookies.',
      },
    },
    topBar: {
      menu: {
        title: 'Selecione uma opção',
        links: {
          1: {
            label: 'Início',
            url: '#inicio',
          },
          2: {
            label: 'Sobre',
            url: '#sobre',
          },
          3: {
            label: 'Serviços',
            url: '#servicos',
          },
          4: {
            label: 'Portfólio',
            url: '#portifolio',
          },
          5: {
            label: 'Contato',
            url: '#contato',
          },
        },
      },
    },
  },
};

const app = {
  name: 'Benavê Engenharia',
};

const icons = {
  whatsapp: 'mdi-whatsapp',
  instagram: 'mdi-instagram',
  linkedin: 'mdi-linkedin',
  menu: 'material-symbols:menu-rounded',
};

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'br',
  messages: {
    br: {
      app,
      icons,
      pages,
    },
  },
}));
