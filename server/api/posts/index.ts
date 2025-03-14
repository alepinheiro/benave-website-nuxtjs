import { WPPost } from '~/types/wordPress';

export type FormattedPost = {
  id: string;
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  createdAt: string;
  featuredImage: string | undefined;
  categories: Array<{
    id: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
  }>;
};

/**
 * Remove caracteres indesejados do texto
 * @param excerpt
 * @returns
 */
function cleanText(excerpt: string) {
  return excerpt
    .replace(/<[^>]+>/g, ' ') // Remove tags HTML
    .replace(/&[^;]+;/g, ' ') // Remove entidades HTML
    .replace(/Continue reading.*/i, '') // Remove "Continue reading" e o que vier depois
    .trim(); // Remove espaços extras
}

/**
 * Rota para buscar os posts do WordPress
 */
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  try {
    const query = getQuery(event);
    const page = Number(query.page) || 1;
    const perPage = Number(query.perPage) || 9;
    console.log(config.public.blogUrl);

    const posts = await $fetch<Array<WPPost>>(
      `${config.public.blogUrl}/posts`,
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
      date: post.date,
      slug: post.slug,
      createdAt: post.date,
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
