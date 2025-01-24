<template>
  <section class="py-12">
    <h2>
      {{ $t('pages.home.blog.title') }}
    </h2>
    <h3>
      {{ $t('pages.home.blog.tagline') }}
    </h3>
    <ClientOnly>
      <div v-if="status === 'pending'">Carregando...</div>
      <div v-else-if="error">Erro: {{ error }}</div>
      <div v-else class="flex max-w-xl flex-col gap-2 px-5">
        <BlogThePost v-if="posts" :post="posts[0]"> </BlogThePost>
        <div v-else>nenhum post</div>
      </div>
    </ClientOnly>
  </section>
</template>
<script lang="ts" setup>
  const { data: posts, status, error } = await usePosts();
</script>
