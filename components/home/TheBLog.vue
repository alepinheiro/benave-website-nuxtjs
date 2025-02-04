<template>
  <section class="px-5 py-12">
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
      <!-- <ClientOnly> -->
      <div v-if="statusData === 'pending'">Carregando...</div>
      <div v-else-if="errorData">Erro: {{ errorData }}</div>
      <div
        v-else-if="computedPosts"
        class="flex max-w-xl flex-col gap-2 pt-4 md:max-w-3xl md:flex-row">
        <BlogThePost :post="computedPosts[0]"> </BlogThePost>
        <BlogThePost :post="computedPosts[1]"> </BlogThePost>
      </div>
      <div v-else>nenhum post</div>
      <!-- </ClientOnly> -->
    </div>
  </section>
</template>
<script lang="ts" setup async>
  import type { WPPost } from '~/types/wordPress';

  const { public: config } = useRuntimeConfig();
  const posts = ref<Array<WPPost> | null>(null);
  const errorData = ref<any>();
  const statusData = ref<any>();
  const computedPosts = computed(() => posts.value);
  // if (import.meta.client) {
  const { data, status, error } = await useFetch('/api/posts');
  posts.value = data.value;
  statusData.value = status.value;
  errorData.value = error.value;
  // }
</script>
