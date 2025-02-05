import { useFetch } from 'nuxt/app';
import { WPPost } from '~/types/wordPress';

export default defineEventHandler(async (event) => {
  try {
    const posts = await useFetch<Array<WPPost>>(
      'https://public-api.wordpress.com/wp/v2/sites/alessandropsbra.wordpress.com/posts',
    );
    // console.log(posts);
    return posts;
  } catch (error) {
    console.error('Erro ao buscar posts do WordPress:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Falha ao buscar posts do WordPress.',
    });
  }
});
