<template>
  <section class="px-5 py-12">
    <div class="flex flex-row items-center justify-center gap-2 text-primary">
      <TheLogo type="icon" class="h-10 w-8" />
      <h2 class="border-b-2 border-primary text-xl font-bold">
        {{ $t('pages.home.blog.title') }}
      </h2>
    </div>

    <h3 class="pt-4 font-bold">
      {{ $t('pages.home.blog.tagline') }}
    </h3>

    <ClientOnly>
      <div v-if="status === 'pending'">Carregando...</div>
      <div v-else-if="error">Erro: {{ error }}</div>
      <div v-else class="flex max-w-xl flex-col gap-2 pt-4">
        <BlogThePost v-if="posts" :post="posts[0]"> </BlogThePost>
        <div v-else>nenhum post</div>
      </div>
    </ClientOnly>
  </section>
</template>
<script lang="ts" setup>
  const { data: posts, status, error } = await usePosts();
</script>
