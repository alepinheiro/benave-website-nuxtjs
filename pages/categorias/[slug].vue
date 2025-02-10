<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="mb-8 text-4xl font-bold">{{ category.name }}</h1>
    <p class="mb-8 text-gray-600">{{ category.description }}</p>

    <!-- Lista de Posts da Categoria -->
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <BlogThePost
        v-for="post in posts"
        :key="post.id"
        :post="post"
        class="flex-1">
      </BlogThePost>
    </div>
  </div>
</template>

<script setup>
  const route = useRoute();
  const category = ref({});
  const posts = ref([]);

  async function fetchCategoryData() {
    try {
      const data = await $fetch(`/api/categories/${route.params.slug}`);
      category.value = data.category;
      posts.value = data.posts;
    } catch (error) {
      console.error('Erro ao buscar post:', error);
    }
  }

  onMounted(() => {
    fetchCategoryData();
  });
</script>
