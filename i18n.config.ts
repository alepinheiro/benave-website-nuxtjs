const pages = {
  home: {
    heroSection: {
      title: 'Especialistas em soluções elétricas industriais',
      subtitle: 'Transformamos ideias em energia,',
      subtitleBold: 'soluções em inovação',
      aboutUs: 'A Benavê',
      contactUs: 'Fale Conosco',
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
