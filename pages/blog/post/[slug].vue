<template>
  <article class="container mx-auto px-4 py-8">
    <!-- Header do Post -->
    <header class="mb-8">
      <h1 class="mb-4 text-4xl font-bold">{{ post.title }}</h1>
      <div class="mb-4 flex items-center text-gray-600">
        <span class="mr-4">{{ $d(post.date) }}</span>
        <NuxtLink
          v-for="category in post.categories"
          :key="category.id"
          :to="`/categorias/${category.slug}`"
          class="mr-2 rounded-full bg-gray-200 px-2 py-1 text-sm hover:bg-gray-300">
          {{ category.name }}
        </NuxtLink>
      </div>
      <NuxtImg
        :src="post.featuredImage"
        :alt="post.title"
        class="h-96 w-full rounded-lg object-cover" />
    </header>

    <div
      class="prose prose-lg flex max-w-none flex-col gap-2"
      v-html="post.content"></div>

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
  <div class="px-5 pb-12">
    <BlogArticlesByCategory :category="Categories['automacao-e-controle']" />
  </div>
</template>

<script setup lang="ts">
  import { Categories } from '~/types/Categories.enum';
  import { FormattedPost } from '~/types/wordPress';

  const route = useRoute();
  definePageMeta({
    layout: 'blog',
  });

  const { data } =
    (await useFetch)<FormattedPost>`/api/posts/${route.params.slug}`;
  const post = computed(() => {
    if (!data.value) return null;
    return data.value;
  });

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
</script>
