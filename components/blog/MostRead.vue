<template>
  <section>
    <div class="relative z-0 overflow-hidden bg-primary py-12">
      <div class="mx-auto flex max-w-7xl flex-row items-center gap-8 px-5">
        <div class="flex w-auto flex-col gap-2 text-white">
          <h1 class="text-3xl font-bold">Mais lidas</h1>
          <h2 class="text-2xl">Confira as matérias mais lidas do mês.</h2>
        </div>
        <div class="flex w-3/4 flex-row gap-4">
          <Card v-for="post of posts" :key="post.id" class="w-full">
            <CardHeader class="p-2">
              <NuxtImg
                :src="post.featuredImage"
                alt="Imagem do post"
                class="h-48 w-full rounded object-cover" />
            </CardHeader>
            <CardContent class="p-4 pt-0">
              <CardTitle class="line-clamp-3 text-lg">
                {{ post.title }}
              </CardTitle>
              <CardDescription class="mt-auto">
                {{ $d(new Date(post.createdAt)) }}
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
      <div
        class="absolute -bottom-72 -left-40 -top-72 -z-10 mix-blend-multiply lg:-bottom-96">
        <NuxtImg
          width="900"
          height="1200"
          role="presentation"
          src="/img/services-background-logo.png"
          class="object-contain" />
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
  import type { FormattedPost } from '~/server/api/posts';

  const query = new URLSearchParams({
    page: `${1}`,
    perPage: `${3}`,
    categories: `${['humor']}`,
  });

  const { data } = await useFetch<Array<FormattedPost>>(`/api/posts?${query}`);
  const posts = computed(() => {
    if (!data.value) return null;
    return data.value;
  });
</script>
