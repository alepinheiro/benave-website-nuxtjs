<template>
  <section>
    <div class="mx-auto max-w-7xl px-4 py-8">
      <h1 class="mb-8 text-4xl font-bold">Artigos em destaque</h1>

      <div v-if="featuredPost" class="flex flex-row gap-4">
        <BlogThePost
          :post="featuredPost"
          orientation="column"
          class="w-1/2 shrink">
          <template #description>
            <CardDescription class="line-clamp-4">
              {{ featuredPost.excerpt }}
            </CardDescription>
          </template>
        </BlogThePost>
        <div v-if="posts && posts.length > 0" class="flex w-1/2 flex-col gap-4">
          <BlogThePost
            v-for="post of posts"
            :key="post.id"
            :post="post"
            orientation="row"
            class="flex-1">
          </BlogThePost>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import type { FormattedPost } from '~/server/api/posts';

  const page = ref(1);

  const { data } = await useFetch<Array<FormattedPost>>(
    `/api/posts/?page=${page.value}`,
  );

  const featuredPost = computed(() => {
    if (!data.value) return null;
    const [post] = data.value;
    return post;
  });

  const posts = computed(() => {
    if (!data.value) return null;
    return data.value.slice(1, 4);
  });
</script>
