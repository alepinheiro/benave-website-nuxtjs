<template>
  <main class="relative">
    <NuxtLoadingIndicator />
    <HomeTopBar />
    <HomeHeroSection />
    <LazyHomeAboutUs />
    <LazyHomeOurServices />
    <LazyHomeThePortfolio />

    <ClientOnly fallbackTag="span">
      <LazyHomeTheBlog />
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
