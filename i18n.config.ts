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
