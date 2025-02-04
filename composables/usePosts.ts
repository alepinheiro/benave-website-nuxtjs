import type { WPPost } from '~/types/wordPress';

export const usePosts = async () =>
  useAsyncData<Array<WPPost>>(
    'posts',
    () =>
      $fetch(
        'https://public-api.wordpress.com/wp/v2/sites/alessandropsbra.wordpress.com/posts',
        {
          method: 'GET',
        },
      ),
    {
      server: false, // garante que a requisição será feita no servidor
      transform: (data) => {
        console.log(data);
        return data;
      }, // opcional: você pode transformar os dados aqui se necessário
    },
  );
