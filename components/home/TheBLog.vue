<template>
  <section class="blog px-5 py-12">
    <div class="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row">
      <div v-if="status === 'pending'">Carregando...</div>
      <div v-if="status === 'success' && posts && posts.length > 0">
        <div>
          <p class="text-red-500" v-html="posts[0].title.rendered"></p>
          <p class="text-primary-500" v-html="posts[0].title.rendered"></p>
        </div>
      </div>
      <div v-else-if="status === 'error'">
        {{ error }}
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  // ✅ Use o useFetch diretamente para funcionar no SSR e CSR
  const {
    data: posts,
    status,
    error,
  } = await useFetch('/api/posts', {
    lazy: true,
    server: false,
  });
  console.log({ posts });
  console.log({ status });
  console.log({ error });

  // Remove o computed desnecessário
</script>
