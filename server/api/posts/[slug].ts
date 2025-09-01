import { cleanText } from '~/functions/cleanText';
import type { FormattedPost, WPPost } from '~/types/wordPress';

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig();
    const slug = event.context.params?.slug;

    const posts = await $fetch<Array<WPPost>>(
      `${config.public.blogUrl}/posts`,
      {
        params: {
          slug,
          _embed: 'wp:featuredmedia,wp:term',
        },
      },
    );

    if (!posts.length) {
      throw createError({
        statusCode: 404,
        message: 'Post não encontrado',
      });
    }

    const [post] = posts;

    return {
      id: post.id,
      slug: post.slug,
      date: new Date(post.date),
      createdAt: new Date(post.date),
      content: post.content.rendered,
      title: cleanText(post.title.rendered),
      excerpt: cleanText(post.excerpt.rendered),
      featuredImage: post.jetpack_featured_media_url,
      categories: post._embedded?.['wp:term']?.[0] || [],
    } satisfies FormattedPost;
  } catch (error) {
    console.error('Erro ao buscar post do WordPress:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Falha ao buscar post do WordPress.',
    });
  }
});
