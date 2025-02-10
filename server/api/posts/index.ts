import { WPPost } from '~/types/wordPress';

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const page = Number(query.page) || 1;
    const perPage = 9;

    const posts = await $fetch<Array<WPPost>>(
      `https://public-api.wordpress.com/wp/v2/sites/alessandropsbra.wordpress.com/posts`,
      {
        params: {
          page,
          per_page: perPage,
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
      posts: formattedPosts,
      hasMore: posts.length === perPage,
    };
  } catch (error) {
    console.error('Erro ao buscar posts do WordPress:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Falha ao buscar posts do WordPress.',
    });
  }
});
