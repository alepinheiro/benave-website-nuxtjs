import { WPCategory } from '~/types/wordPress';

export default defineEventHandler(async (event) => {
  try {
    const categories = await $fetch<Array<WPCategory>>(
      `https://public-api.wordpress.com/wp/v2/sites/alessandropsbra.wordpress.com/categories`,
    );

    return categories;
  } catch (error) {
    console.error('Erro ao buscar categorias do WordPress:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Falha ao buscar categorias do WordPress.',
    });
  }
});
