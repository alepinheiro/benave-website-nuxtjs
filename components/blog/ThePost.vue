import { WPPost } from '../../types/wordPress';
<template>
  <Card asChild>
    <article>
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
