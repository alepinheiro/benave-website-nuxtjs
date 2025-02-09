<template>
  <section id="blog" class="px-5 py-12">
    <div class="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row">
      <div class="flex flex-col justify-around gap-2 md:items-start">
        <div
          class="flex flex-row items-center justify-center gap-2 text-primary">
          <TheLogo type="icon" class="h-10 w-8" />
          <h2 class="border-b-2 border-primary text-xl font-bold">
            {{ $t('pages.home.blog.title') }}
          </h2>
        </div>

        <h3 class="pt-4 font-bold">
          {{ $t('pages.home.blog.tagline') }}
        </h3>

        <p>
          Esses temas destacam como a engenharia elétrica está conectada aos
          avanços tecnológicos e mudanças sociais.
        </p>

        <Button>Acesse nosso Blog</Button>
      </div>
      <template v-if="status === 'pending'">Carregando...</template>
      <div v-else-if="error">Erro: {{ error }}</div>
      <div
        v-else-if="posts"
        class="flex max-w-xl flex-col gap-2 pt-4 md:max-w-3xl md:flex-row">
        <BlogThePost :post="posts[0]" class="flex-1"> </BlogThePost>
        <BlogThePost :post="posts[1]" class="flex-1"> </BlogThePost>
      </div>
      <div v-else>nenhum post</div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  const { data: posts, status, error } = await useFetch('/api/posts');
</script>
