<template>
  <Card asChild class="justify-around">
    <article>
      <NuxtImg
        width="300"
        height="200"
        :src="post.jetpack_featured_media_url"
        :alt="post.excerpt.rendered"
        class="h-36 w-full rounded-t-lg object-cover md:h-48"></NuxtImg>
      <CardHeader>
        <CardTitle>
          <h2 v-html="post.title.rendered"></h2>
        </CardTitle>
        <CardDescription>
          <p v-html="post.excerpt.rendered" class="line-clamp-3"></p>
        </CardDescription>
      </CardHeader>

      <CardFooter>
        <Button asChild>
          <NuxtLink :to="`/blog/post/${post.slug}`"> Ler mais </NuxtLink>
        </Button>
      </CardFooter>
    </article>
  </Card>
</template>

<script lang="ts" setup>
  import type { WPPost } from '~/types/wordPress';
  defineProps({
    post: {
      type: Object as PropType<WPPost>,
      required: true,
    },
  });
</script>
