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

    const formattedPosts: Array<FormattedPost> = posts.map((post) => {
      let featuredImage: string | undefined;

      if (
        post.yoast_head_json?.og_image &&
        post.yoast_head_json.og_image.length > 0
      ) {
        featuredImage = post.yoast_head_json.og_image[0].url;
      }

      return {
        id: post.id,
        date: new Date(post.date),
        slug: post.slug,
        createdAt: new Date(post.date),
        title: cleanText(post.title.rendered),
        excerpt: cleanText(post.excerpt.rendered),
        featuredImage,
        categories: post.categories_detailed,
        link: post.link,
        author: post.author,
        content: post.content ? cleanText(post.content.rendered) : undefined,
      };
    });

    return formattedPosts;
  } catch (error) {
    console.error('Erro ao buscar posts do WordPress:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Falha ao buscar posts do WordPress.',
    });
  }
});
