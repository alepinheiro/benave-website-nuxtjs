<template>
  <div>
    <BlogHeroSection />
    <BlogMostRead />
    <div class="bg-gradient-to-b from-zinc-200 to-zinc-300 py-12">
      <div class="mx-auto flex max-w-7xl flex-col gap-4 px-5">
        <h2 class="text-4xl font-bold text-primary">
          Todos os artigos sobre Engenharia Elétrica
        </h2>
        <BlogArticlesByCategory
          :category="Categories['automacao-e-controle']" />
        <BlogArticlesByCategory :category="Categories['energia-e-potencia']" />
        <BlogArticlesByCategory :category="Categories['normas-e-seguranca']" />
      </div>
    </div>
    <!-- <LazyHomeTheFooter /> -->
  </div>
</template>

<script setup lang="ts">
  import { Categories } from '~/types/Categories.enum';
  definePageMeta({
    layout: 'blog',
  });
</script>
