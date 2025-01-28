<template>
  <section class="bg-smalt p-5 py-12">
    <h1 class="py-8 text-center text-xl leading-5 text-white">
      {{ $t('pages.home.heroSection.title') }}
    </h1>

    <div class="-mx-5 h-60">
      <ClientOnly>
        <swiper-container
          class="h-60"
          :loop="true"
          :effect="'coverflow'"
          :autoplay="true"
          :autoHeight="false"
          :initialSlide="2"
          :spaceBetween="0.5"
          :slidesPerView="1.4"
          :centeredSlides="true"
          :coverflowEffect="{
            rotate: 0,
            stretch: 0,
            depth: 10,
            modifier: 1,
            slideShadows: false,
            scale: 0.85,
          }">
          <swiper-slide v-for="(slide, idx) in slides" :key="idx">
            <div class="h-60 w-full">
              <NuxtImg
                :src="slide"
                height="300"
                width="300"
                class="h-60 w-full rounded-3xl object-cover" />
            </div>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>

    <NuxtImg
      src="/img/hero-background@3x.png"
      height="35"
      width="800"
      class="-ml-20 h-fit w-fit object-contain pt-4" />

    <h2 class="py-8 text-center text-xl leading-5 text-white">
      {{ $t('pages.home.heroSection.subtitle') }}
      <b>{{ $t('pages.home.heroSection.subtitleBold') }}</b>
    </h2>

    <div class="mx-auto flex w-fit flex-row gap-6">
      <Button variant="inverted">
        {{ $t('pages.home.heroSection.aboutUs') }}
      </Button>
      <Button variant="outline">
        {{ $t('pages.home.heroSection.contactUs') }}
      </Button>
    </div>
  </section>
</template>

<script setup lang="ts">
  const slides = [
    'http://unsplash.it/1920/1080?random=1&gravity=center',
    'http://unsplash.it/1920/1080?random=2&gravity=center',
    'http://unsplash.it/1920/1080?random=3&gravity=center',
    'http://unsplash.it/1920/1080?random=4&gravity=center',
    'http://unsplash.it/1920/1080?random=5&gravity=center',
  ];
</script>
