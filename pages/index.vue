<template>
  <main class="relative">
    <NuxtLoadingIndicator />
    <div class="top-0 bg-primary">
      <div
        class="mx-auto hidden w-full max-w-7xl flex-row justify-end gap-2 px-2 py-4 text-white md:flex">
        <Icon :name="$t('icons.whatsapp')" class="h-8 w-8 shrink-0" />
        <Icon :name="$t('icons.instagram')" class="h-8 w-8 shrink-0" />
        <Icon :name="$t('icons.linkedin')" class="h-8 w-8 shrink-0" />
      </div>
    </div>
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
