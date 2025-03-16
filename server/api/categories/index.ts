import { WPCategory } from '~/types/wordPress';

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig();
    const categories = await $fetch<Array<WPCategory>>(
      `${config.public.blogUrl}/categories`,
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
