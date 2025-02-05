<template>
  <section class="blog px-5 py-12">
    <div class="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row">
      <div v-if="pending">Carregando...</div>
      <div v-else-if="error">Erro ao carregar posts.</div>
      <div v-else>
        <p class="text-red-500">{{ posts }}</p>
        <p class="text-primary-500">{{ posts }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import type { WPPost } from '~/types/wordPress';

  // ✅ Use o useFetch diretamente para funcionar no SSR e CSR
  const {
    data: posts,
    pending,
    error,
  } = await useLazyFetch<WPPost[]>('/api/posts');

  // Remove o computed desnecessário
</script>
