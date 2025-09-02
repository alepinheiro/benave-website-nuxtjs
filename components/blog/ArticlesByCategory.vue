<template>
  <section>
    <div class="flex flex-col gap-2">
      <div class="flex flex-row gap-1.5 text-clip">
        <div class="mb-1 mt-1.5 w-1 bg-primary"></div>
        <h3 class="text-2xl font-bold text-primary">
          {{ categoryName }}
        </h3>
      </div>
      <div
        class="mx-auto flex w-full flex-col items-stretch gap-8 md:flex-row md:gap-2">
        <article v-for="post in posts" class="flex flex-1 flex-col gap-2">
          <NuxtLink :to="`/blog/post/${post.slug}`">
            <NuxtImg
              :src="post.featuredImage"
              alt="Imagem do post"
              class="h-48 w-full rounded object-cover" />
          </NuxtLink>
          <h4 class="line-clamp-2 font-bold">
            {{ post.title }}
          </h4>
          <Button asChild class="mt-auto w-fit">
            <NuxtLink :to="`/blog/post/${post.slug}`"> Ler mais </NuxtLink>
          </Button>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import type { Categories } from '~/types/Categories.enum';
  import type { FormattedPost } from '~/types/wordPress';

  const props = defineProps<{
    category: Categories;
  }>();

  const query = new URLSearchParams({
    page: `${1}`,
    perPage: `${3}`,
    categories: `${props.category}`,
  });

  const { data } = await useFetch<Array<FormattedPost>>(`/api/posts?${query}`);
  const posts = computed(() => {
    if (!data.value) return null;
    return data.value;
  });
  const categoryName = computed(() => {
    if (!posts.value) return null;
    const [firstPost] = posts.value;

    return firstPost.categories[0].name;
  });
</script>
