import { pages, app, icons } from '@/locales/pt-BR.json';

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
