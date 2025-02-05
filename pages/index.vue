<template>
  <main class="relative">
    <HomeTopBar />
    <HomeHeroSection />
    <LazyHomeAboutUs />
    <LazyHomeOurServices />
    <LazyHomeThePortfolio />
    <LazyHomeTheBlog />
    <NuxtIsland>
      <HomeTheBlog />
    </NuxtIsland>
    <ClientOnly fallbackTag="span">
      <HomeTheBlog />
      <template #fallback>
        <p>Loading posts...</p>
      </template>
    </ClientOnly>
    <LazyHomeTheTestimonials />
    <LazyHomeCallToAction />
    <LazyHomeTheFooter />
  </main>
</template>

<script setup lang="ts"></script>
