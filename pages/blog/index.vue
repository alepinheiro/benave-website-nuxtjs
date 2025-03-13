<template>
  <div>
    <BlogTopBar />
    <div class="mx-auto max-w-7xl px-4 py-8">
      <h1 class="mb-8 text-4xl font-bold">Artigos em destaque</h1>

      <div class="flex flex-row gap-4">
        <BlogThePost
          v-if="firstPost"
          :key="firstPost.id"
          :post="firstPost"
          orientation="column"
          class="w-1/2 shrink">
          <template #description>
            <CardDescription
              v-html="firstPost.excerpt.rendered"
              class="line-clamp-4">
            </CardDescription>
          </template>
        </BlogThePost>
        <div class="flex w-1/2 flex-col gap-4">
          <BlogThePost
            v-for="post of posts.slice(1, 4)"
            :key="post.id"
            :post="post"
            orientation="row"
            class="flex-1">
          </BlogThePost>
        </div>
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
  </div>
</template>

<script setup>
  const page = ref(1);
  const posts = ref([]);
  const hasMore = ref(false);

  const firstPost = computed(() => {
    const [post] = posts.value;
    return post ?? null;
  });

  async function fetchPosts() {
    try {
      const data = await $fetch(`/api/posts?page=${page.value}`);
      posts.value = data;
      hasMore.value = data.hasMore;
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
    }
  }

  watch(page, () => {
    fetchPosts();
  });

  fetchPosts();
</script>
