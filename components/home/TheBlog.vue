<template>
  <section id="blog" class="px-5 py-12">
    <div class="mx-auto flex max-w-7xl flex-col items-center gap-5">
      <div class="flex flex-col justify-around gap-2 text-center">
        <div
          class="flex flex-row items-center justify-center gap-2 text-primary">
          <TheLogo type="icon" class="h-10 w-8" />
          <h2 class="border-b-2 border-primary text-xl font-bold">
            {{ $t('pages.home.blog.title') }}
          </h2>
        </div>

        <h3 class="pt-4 text-xl font-bold">
          {{ $t('pages.home.blog.tagline') }}
        </h3>

        <p>
          Esses temas destacam como a engenharia elétrica está conectada aos
          avanços tecnológicos e mudanças sociais.
        </p>
      </div>

      <template v-if="status === 'pending'">Carregando...</template>
      <div v-else-if="error">Erro: {{ error }}</div>
      <div
        v-else-if="posts"
        class="flex w-full flex-col gap-2 pt-4 md:flex-row">
        <BlogThePost :post="posts[0]" class="flex-1" />
        <BlogThePost :post="posts[1]" class="flex-1" />
        <BlogThePost :post="posts[2]" class="flex-1" />
      </div>
      <div v-else>nenhum post</div>

      <Button asChild class="w-fit">
        <NuxtLink to="/blog"> Acesse nosso Blog </NuxtLink>
      </Button>
    </div>
  </section>
</template>

<script lang="ts" setup>
  const { data: posts, status, error } = await useFetch('/api/posts');
</script>
