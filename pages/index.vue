<template>
  <main class="relative">
    <NuxtLoadingIndicator />
    <HomeTopBar />
    <HomeHeroSection />
    <LazyHomeAboutUs />
    <LazyHomeOurServices />
    <LazyHomeThePortfolio />
    <HomeTheBlog />

    <!-- <ClientOnly fallbackTag="span">
      <HomeTheBlog />
      <template #fallback>
        <p>Loading posts...</p>
      </template>
    </ClientOnly> -->
    <LazyHomeTheTestimonials />
    <LazyHomeCallToAction />
    <LazyHomeTheFooter />
  </main>
</template>

<script setup lang="ts"></script>
