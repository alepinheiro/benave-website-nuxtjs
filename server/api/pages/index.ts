import type { WPPage } from '~/types/wordPress';

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const page = Number(query.page) || 1;
    const perPage = 9;

    const pages = await $fetch<Array<WPPage>>(
      `https://public-api.wordpress.com/wp/v2/sites/alessandropsbra.wordpress.com/pages`,
      {
        params: {
          page,
          per_page: perPage,
          // _embed: 'wp:featuredmedia,wp:term',
        },
      },
    );

    const formattedPages = pages.map((page) => ({
      id: page.id,
      title: page.title.rendered,
      slug: page.slug,
      excerpt: page.excerpt.rendered,
      date: page.date,
      featuredImage: page._embedded?.['wp:featuredmedia']?.[0]?.source_url,
      categories: page._embedded?.['wp:term']?.[0] || [],
    }));

    return {
      pages: formattedPages,
      hasMore: pages.length === perPage,
    };
  } catch (error) {
    console.error('Erro ao buscar paginas do WordPress:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Falha ao buscar paginas do WordPress.',
    });
  }
});
