import { cleanText } from '~/functions/cleanText';
import type { FormattedPost, WPPost } from '~/types/wordPress';

/**
 * Rota para buscar os posts do WordPress
 */
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  try {
    const query = getQuery(event);
    const page = Number(query.page) || 1;
    const perPage = Number(query.perPage) || 9;
    const categories = Number(query.categories) || undefined;
    console.log(query);

    const posts = await $fetch<Array<WPPost>>(
      `${config.public.blogUrl}/posts`,
      {
        params: {
          page,
          categories,
          per_page: perPage,
          _embed: 'wp:featuredmedia,wp:term',
        },
      },
    );

    const formattedPosts: Array<FormattedPost> = posts.map((post) => ({
      id: post.id,
      date: new Date(post.date),
      slug: post.slug,
      createdAt: new Date(post.date),
      title: cleanText(post.title.rendered),
      excerpt: cleanText(post.excerpt.rendered),
      featuredImage: post.jetpack_featured_media_url,
      categories: post._embedded?.['wp:term']?.[0] || [],
    }));

    return formattedPosts;
  } catch (error) {
    console.error('Erro ao buscar posts do WordPress:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Falha ao buscar posts do WordPress.',
    });
  }
});
