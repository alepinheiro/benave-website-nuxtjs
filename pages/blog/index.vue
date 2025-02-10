<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="mb-8 text-4xl font-bold">Artigos em destaque</h1>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <BlogThePost
        v-for="post in posts"
        :key="post.id"
        :post="post"
        class="flex-1 first:row-span-3">
      </BlogThePost>
    </div>

    <div class="mt-8 flex justify-center">
      <button
        v-if="page > 1"
        @click="page--"
        class="mr-2 rounded-lg bg-blue-600 px-4 py-2 text-white">
        Anterior
      </button>
      <button
        v-if="hasMore"
        @click="page++"
        class="rounded-lg bg-blue-600 px-4 py-2 text-white">
        Próximo
      </button>
    </div>
  </div>
</template>

<script setup>
  const page = ref(1);
  const posts = ref([]);
  const hasMore = ref(false);

  // Função para buscar posts do WordPress
  async function fetchPosts() {
    try {
      const data = await $fetch(`/api/posts?page=${page.value}`);
      posts.value = data;
      hasMore.value = data.hasMore;
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
    }
  }

  // Observa mudanças na página
  watch(page, () => {
    fetchPosts();
  });

  // Busca inicial
  onMounted(() => {});
  fetchPosts();
</script>
