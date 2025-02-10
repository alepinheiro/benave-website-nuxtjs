import { WPPost, WPCategory } from '~/types/wordPress';

export default defineEventHandler(async (event) => {
  try {
    const slug = event.context.params?.slug;

    // Busca a categoria primeiro
    const categories = await $fetch<Array<WPCategory>>(
      `https://public-api.wordpress.com/wp/v2/sites/alessandropsbra.wordpress.com/categories`,
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
      `https://public-api.wordpress.com/wp/v2/sites/alessandropsbra.wordpress.com/posts`,
      {
        params: {
          categories: category.id,
          _embed: 'wp:featuredmedia,wp:term',
        },
      },
    );

    // Formata os posts para o frontend
    const formattedPosts = posts.map((post) => ({
      id: post.id,
      title: post.title.rendered,
      slug: post.slug,
      excerpt: post.excerpt.rendered,
      date: post.date,
      featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url,
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
