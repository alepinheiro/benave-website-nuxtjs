<template>
  <main class="relative">
    <div class="top-0 bg-primary">
      <div
        class="sticky top-0 z-50 mx-auto hidden w-full max-w-7xl flex-row justify-end gap-2 px-2 py-4 text-white md:flex">
        <a
          :href="$t('pages.home.footer.social.links.1.url')"
          target="_blank"
          rel="noopener noreferrer">
          <Icon :name="$t('icons.whatsapp')" class="h-8 w-8 shrink-0" />
        </a>
        <a
          :href="$t('pages.home.footer.social.links.2.url')"
          target="_blank"
          rel="noopener noreferrer">
          <Icon :name="$t('icons.instagram')" class="h-8 w-8 shrink-0" />
        </a>
        <a
          :href="$t('pages.home.footer.social.links.3.url')"
          target="_blank"
          rel="noopener noreferrer">
          <Icon :name="$t('icons.linkedin')" class="h-8 w-8 shrink-0" />
        </a>
      </div>
    </div>
    <HomeTopBar />
    <div class="relative -mt-20 bg-primary">
      <HomeHeroSection class="z-10" />
      <div class="absolute inset-0 -mt-20 overflow-hidden">
        <NuxtImg
          role="presentation"
          src="/img/bg-background-left.png"
          class="absolute -left-48 -top-24 hidden h-[90vh] md:block" />
        <NuxtImg
          role="presentation"
          src="/img/bg-background-right.png"
          class="absolute -bottom-24 -right-96 hidden h-[90vh] md:block" />
      </div>
    </div>
    <LazyHomeAboutUs />
    <LazyHomeOurServices />
    <LazyHomeThePortfolio v-if="false" />
    <ClientOnly fallbackTag="span" v-if="false">
      <LazyHomeTheBlog />
      <template #fallback>
        <p>Loading posts...</p>
      </template>
    </ClientOnly>
    <LazyHomeTheTestimonials />
    <LazyHomeCallToAction />
  </main>
</template>

<script setup lang="ts">
  const isDevelopment = process.env.NODE_ENV === 'development';
</script>
