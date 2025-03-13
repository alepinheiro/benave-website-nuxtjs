import { WPPost } from '~/types/wordPress';

export type FormattedPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  featuredImage: string | undefined;
  categories: Array<{
    id: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
  }>;
};

function cleanText(excerpt: string) {
  return excerpt
    .replace(/<[^>]+>/g, ' ') // Remove tags HTML
    .replace(/&[^;]+;/g, ' ') // Remove entidades HTML
    .replace(/Continue reading.*/i, '') // Remove "Continue reading" e o que vier depois
    .trim(); // Remove espaços extras
}

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

    const formattedPosts: Array<FormattedPost> = posts.map((post) => ({
      id: post.id,
      title: cleanText(post.title.rendered),
      slug: post.slug,
      excerpt: cleanText(post.excerpt.rendered),
      date: post.date,
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
