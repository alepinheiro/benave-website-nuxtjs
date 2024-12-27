import type { WPPost } from "~/types/wordPress"

export const usePosts = () => useFetch<Array<WPPost>>('https://public-api.wordpress.com/wp/v2/sites/alessandropsbra.wordpress.com/posts', {
  method: 'GET'
})