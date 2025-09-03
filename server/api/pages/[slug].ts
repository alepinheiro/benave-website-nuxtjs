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

    const [post] = posts;

    let featuredImage: string | undefined;

    if (
      post.yoast_head_json?.og_image &&
      post.yoast_head_json.og_image.length > 0
    ) {
      featuredImage = post.yoast_head_json.og_image[0].url;
    }

    return {
      id: post.id,
      featuredImage,
      slug: post.slug,
      date: post.date,
      title: post.title.rendered,
      content: post.content.rendered,
      excerpt: post.excerpt.rendered,
      categories: post.categories_detailed,
    };
  } catch (error) {
    console.error('Erro ao buscar post do WordPress:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Falha ao buscar post do WordPress.',
    });
  }
});
