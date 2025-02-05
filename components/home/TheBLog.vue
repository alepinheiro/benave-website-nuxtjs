<template>
  <section class="blog px-5 py-12">
    <div class="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row">
      <div v-if="status === 'pending'">Carregando...</div>
      <div v-if="status === 'success' && posts && posts.length > 0">
        <div>
          <p class="text-red-500" v-html="posts[0].title.rendered"></p>
          <p class="text-primary-500" v-html="posts[0].title.rendered"></p>
        </div>
      </div>
      <div v-else-if="status === 'error'">
        {{ error }}
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import type { WPPost } from '~/types/wordPress';

  // ✅ Use o useFetch diretamente para funcionar no SSR e CSR
  const {
    data: posts,
    status,
    error,
  } = await useLazyFetch<WPPost[]>('/api/posts');

  // Remove o computed desnecessário
</script>
