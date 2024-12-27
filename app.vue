<template>
  <div>
    <div class="flex flex-row justify-between p-5">
      <div style="border-radius: 6px; padding: 34px; background-color: #03163b">
        <img src="https://stylish-gen.web.app/iconesclaros/28.svg" />
        <span
          style="
            color: #dddddd;
            font-family: 'Montserrat';
            font-size: 27px;
            text-transform: capitalize;
          ">
          Stylish Gen
        </span>
      </div>
      <button>menu</button>
    </div>

    <div class="flex w-full items-center p-2">
      <div v-if="pending">Carregando...</div>
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
    </div>
  </div>
</template>

<script setup lang="ts">
  const { data: posts, pending, error } = await usePosts();
</script>

