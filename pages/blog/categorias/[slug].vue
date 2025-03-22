<template>
  <div v-if="category" class="container mx-auto max-w-7xl px-5 py-8">
    <h1 class="mb-8 text-4xl font-bold">{{ category.name }}</h1>
    <p class="mb-8 text-gray-600">{{ category.description }}</p>

    <!-- Lista de Posts da Categoria -->
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <BlogThePost
        v-for="post in posts"
        :key="post.id"
        :post="post"
        class="flex-1"
        orientation="column">
        <template #image>
          <NuxtImg
            :src="post.featuredImage"
            alt="Imagem do post"
            class="h-48 w-full rounded object-cover" />
        </template>
      </BlogThePost>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { FormattedPost } from '~/server/api/posts';

  const route = useRoute();

  definePageMeta({
    layout: 'blog',
  });

  const { data } = await useFetch<{
    category: {
      id: number;
      name: string;
      slug: string;
      description: string;
    };
    posts: Array<FormattedPost>;
  }>(`/api/categories/${route.params.slug}`);
  const posts = computed(() => {
    if (!data.value) return null;
    return data.value.posts;
  });
  const category = computed(() => {
    if (!data.value) return null;
    return data.value.category;
  });
</script>
