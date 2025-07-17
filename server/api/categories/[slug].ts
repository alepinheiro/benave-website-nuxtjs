import { cleanText } from '~/functions/cleanText';
import type { WPPost, WPCategory, FormattedPost } from '~/types/wordPress';

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig();
    const slug = event.context.params?.slug;

    const categories = await $fetch<Array<WPCategory>>(
      `${config.public.blogUrl}/categories`,
      {
        params: { slug },
      },
    );

    if (!categories.length) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Categoria não encontrada',
      });
    }

    const category = categories[0];

    const posts = await $fetch<Array<WPPost>>(
      `${config.public.blogUrl}/posts`,
      {
        params: {
          categories: category.id,
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

    return {
      category: {
        id: category.id,
        name: category.name,
        slug: category.slug,
        description: category.description,
      },
      posts: formattedPosts,
    };
  } catch (error) {
    console.error('Erro ao buscar categoria e posts do WordPress:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Falha ao buscar categoria e posts do WordPress.',
    });
  }
});
