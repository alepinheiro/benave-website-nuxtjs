<template>
  <div class="relative">
    <div
      class="sticky top-0 flex flex-row justify-between bg-white p-5 drop-shadow">
      <div
        class="flex flex-row gap-2 rounded-md border border-primary p-4 text-primary">
        <img src="https://stylish-gen.web.app/iconesclaros/28.svg" />
        <span style="font-family: 'Montserrat'; text-transform: capitalize">
          Stylish Gen
        </span>
      </div>
      <button>
        <Icon name="material-symbols:menu-rounded" class="h-8 w-8" />
      </button>
    </div>

    <div class="flex w-full items-center p-2">
      <ClientOnly>
        <div v-if="status === 'pending'">Carregando...</div>
        <div v-else-if="error">Erro: {{ error }}</div>
        <div v-else class="flex max-w-xl flex-col gap-2">
          <Card v-for="post of posts" :key="post.id">
            <CardHeader>
              <NuxtImg
                :src="post.jetpack_featured_media_url"
                class="rounded-lg"></NuxtImg>
              <CardTitle>
                <h2 v-html="post.title.rendered"></h2>
              </CardTitle>
              <CardDescription>
                <p v-html="post.excerpt.rendered"></p>
              </CardDescription>
            </CardHeader>

            <CardFooter>
              <Button asChild>
                <NuxtLink :to="`/posts/${post.slug}`"> Ler mais </NuxtLink>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { data: posts, status, error } = await usePosts();
</script>
