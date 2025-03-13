<template>
  <article>
    <Card
      :class="{
        'flex-row': props.orientation === 'row',
        'flex-col': props.orientation === 'column',
      }"
      class="flex h-full overflow-hidden">
      <NuxtLink
        :to="`/blog/post/${post.slug}`"
        :class="{
          'w-48': props.orientation === 'row',
          'w-full': props.orientation === 'column',
        }"
        class="h-auto overflow-hidden">
        <slot name="image">
          <NuxtImg
            width="300"
            height="200"
            :src="post.jetpack_featured_media_url"
            :alt="post.excerpt.rendered"
            :class="{
              'h-full': props.orientation === 'row',
              'max-h-96': props.orientation === 'column',
            }"
            class="w-full object-cover object-center" />
        </slot>
      </NuxtLink>

      <div
        :class="{
          'w-3/4': props.orientation === 'row',
          'h-1/5 w-full': props.orientation === 'column',
        }"
        class="flex grow flex-col justify-around gap-0">
        <CardHeader class="pb-4">
          <NuxtLink :to="`/blog/post/${post.slug}`">
            <slot name="title">
              <CardTitle v-html="post.title.rendered" class="line-clamp-2">
              </CardTitle>
            </slot>
          </NuxtLink>
          <slot name="description">
            <CardDescription
              v-html="post.excerpt.rendered"
              class="line-clamp-2">
            </CardDescription>
          </slot>
        </CardHeader>

        <CardFooter class="pb-4">
          <slot name="footer">
            <Button asChild>
              <NuxtLink :to="`/blog/post/${post.slug}`"> Ler mais </NuxtLink>
            </Button>
          </slot>
        </CardFooter>
      </div>
    </Card>
  </article>
</template>

<script lang="ts" setup>
  import type { PropType } from 'vue';
  import type { WPPost } from '~/types/wordPress';
  const props = defineProps({
    post: {
      type: Object as PropType<WPPost>,
      required: true,
    },
    orientation: {
      type: String as PropType<'row' | 'column'>,
      default: 'row',
    },
  });
</script>
