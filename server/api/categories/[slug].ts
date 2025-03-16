import { cleanText } from '~/functions/cleanText';
import { FormattedPost } from '~/server/api/posts';
import { WPPost, WPCategory } from '~/types/wordPress';

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig();
    const slug = event.context.params?.slug;

    // Busca a categoria primeiro
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

    // Busca posts da categoria
    const posts = await $fetch<Array<WPPost>>(
      `${config.public.blogUrl}/posts`,
      {
        params: {
          categories: category.id,
          _embed: 'wp:featuredmedia,wp:term',
        },
      },
    );

    // Formata os posts para o frontend
    const formattedPosts: Array<FormattedPost> = posts.map((post) => ({
      id: post.id,
      date: post.date,
      slug: post.slug,
      createdAt: post.date,
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
