<template>
  <div v-if="post" class="mx-auto max-w-7xl px-2">
    <NuxtImg
      :src="post.featuredImage"
      :alt="post.title"
      class="mx-auto mt-4 h-96 w-full rounded-lg object-cover" />

    <div class="mx-auto flex max-w-7xl flex-row gap-4 px-5 py-8">
      <article class="container mx-auto flex grow flex-col gap-4 px-4 md:w-2/4">
        <header class="mb-8 flex flex-col gap-4">
          <h1 class="mb-4 text-4xl font-bold">{{ post.title }}</h1>
          <div class="mb-4 flex items-center text-gray-600">
            <span class="mr-4">{{ $d(post.date) }}</span>
            <NuxtLink
              v-for="category in post.categories"
              :key="category.id"
              :to="`/blog/categorias/${category.slug}`"
              class="mr-2 rounded-full bg-gray-200 px-2 py-1 text-sm hover:bg-gray-300">
              {{ category.name }}
            </NuxtLink>
          </div>
          <p
            class="prose prose-lg flex max-w-none flex-col gap-2"
            v-html="post.excerpt"></p>
          <hr class="h-1 w-full bg-zinc-200" />
        </header>

        <p
          class="prose prose-lg flex max-w-none flex-col gap-2"
          v-html="post.content"></p>

        <!-- <nav class="mt-8 flex justify-between">
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
        </nav> -->
      </article>
      <div class="hidden w-1/4 flex-col items-center gap-4 md:flex">
        <p>Compartilhe esse artigo</p>
        <div class="h-96 w-full bg-zinc-200"></div>
      </div>
    </div>

    <div class="mx-auto max-w-7xl px-5 pb-12">
      <LazyBlogArticlesByCategory
        :category="Categories['automacao-e-controle']" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Categories } from '~/types/Categories.enum';
  import type { FormattedPost } from '~/types/wordPress';

  definePageMeta({
    layout: 'blog',
  });
  const route = useRoute();

  const { data } = await useFetch<FormattedPost>(
    `/api/posts/${route.params.slug}`,
  );

  const post = computed(() => {
    if (!data.value) return null;
    return data.value;
  });

  useHead(() => ({
    title: post.value?.title,
    meta: [
      { name: 'description', content: post.value?.excerpt },
      { property: 'og:title', content: post.value?.title },
      { property: 'og:description', content: post.value?.excerpt },
      { property: 'og:image', content: post.value?.featuredImage },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }));
</script>
