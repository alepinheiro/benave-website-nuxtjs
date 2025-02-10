<template>
  <article class="container mx-auto px-4 py-8">
    <!-- Header do Post -->
    <header class="mb-8">
      <h1 class="mb-4 text-4xl font-bold">{{ post.title }}</h1>
      <div class="mb-4 flex items-center text-gray-600">
        <span class="mr-4">{{ formatDate(post.date) }}</span>
        <NuxtLink
          v-for="category in post.categories"
          :key="category.id"
          :to="`/categorias/${category.slug}`"
          class="mr-2 rounded-full bg-gray-200 px-2 py-1 text-sm hover:bg-gray-300">
          {{ category.name }}
        </NuxtLink>
      </div>
      <img
        v-if="post.featuredImage"
        :src="post.featuredImage"
        :alt="post.title"
        class="h-96 w-full rounded-lg object-cover" />
    </header>

    <!-- Conteúdo do Post -->
    <div class="prose prose-lg max-w-none" v-html="post.content"></div>

    <!-- Navegação entre Posts -->
    <nav class="mt-8 flex justify-between">
      <NuxtLink
        v-if="post.previous"
        :to="`/blog/${post.previous.slug}`"
        class="text-blue-600 hover:underline">
        ← {{ post.previous.title }}
      </NuxtLink>
      <NuxtLink
        v-if="post.next"
        :to="`/blog/${post.next.slug}`"
        class="text-blue-600 hover:underline">
        {{ post.next.title }} →
      </NuxtLink>
    </nav>
  </article>
</template>

<script setup>
  const route = useRoute();
  const post = ref({});

  // Busca dados do post
  async function fetchPost() {
    try {
      const data = await $fetch(`/api/posts/${route.params.slug}`);
      post.value = data;
    } catch (error) {
      console.error('Erro ao buscar post:', error);
    }
  }

  // Formata a data
  function formatDate(date) {
    return new Date(date).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  // Define meta tags para SEO
  useHead(() => ({
    title: post.value.title,
    meta: [
      { name: 'description', content: post.value.excerpt },
      { property: 'og:title', content: post.value.title },
      { property: 'og:description', content: post.value.excerpt },
      { property: 'og:image', content: post.value.featuredImage },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }));

  onMounted(() => {
    fetchPost();
  });
</script>
