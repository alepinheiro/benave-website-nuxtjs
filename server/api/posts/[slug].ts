import { WPPost } from '~/types/wordPress';

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
        statusMessage: 'Post não encontrado',
      });
    }

    const post = posts[0];

    // Formata o post para o frontend
    return {
      id: post.id,
      title: post.title.rendered,
      slug: post.slug,
      content: post.content.rendered,
      excerpt: post.excerpt.rendered,
      date: post.date,
      featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url,
      categories: post._embedded?.['wp:term']?.[0] || [],
    };
  } catch (error) {
    console.error('Erro ao buscar post do WordPress:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Falha ao buscar post do WordPress.',
    });
  }
});
