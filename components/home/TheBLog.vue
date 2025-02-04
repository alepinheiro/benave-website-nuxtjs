<template>
  <section class="px-5 py-12">
    <div class="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row">
      <ClientOnly>
        <!-- Estado de carregamento -->
        <template v-if="status === 'pending'">
          <div>Carregando...</div>
        </template>

        <!-- Estado de erro -->
        <template v-else-if="error">
          <div>Erro ao carregar posts</div>
        </template>

        <!-- Estado com dados -->
        <template v-else>
          <div v-if="posts?.length">
            <div v-for="post in posts" :key="post.id">
              <!-- Renderize o conteúdo do post aqui -->
              <h2>{{ post.title }}</h2>
            </div>
          </div>
          <div v-else>Nenhum post encontrado</div>
        </template>
      </ClientOnly>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import type { WPPost } from '~/types/wordPress';

  // Use composable para fetch
  const {
    data: posts,
    status,
    error,
  } = await useFetch('/api/posts', {
    // Garante que o estado inicial seja consistente
    default: () => [],
    // Transforma os dados para evitar problemas de reatividade
    transform: (response) => {
      return response || [];
    },
  });
</script>
