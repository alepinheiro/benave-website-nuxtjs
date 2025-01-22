<template>
  <div class="bg-smalt">
    <h1 class="text-xl text-white">
      {{ $t('pages.home.heroSection.title') }}
    </h1>
    <div class="h-96">
      <ClientOnly>
        <swiper-container
          class="h-96"
          :loop="true"
          :effect="'coverflow'"
          :autoplay="false"
          :autoHeight="false"
          :initialSlide="2"
          :spaceBetween="2"
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
            <div class="h-96 w-full">
              <NuxtImg
                :src="slide"
                height="900"
                width="300"
                class="h-96 w-full rounded-xl object-cover" />
            </div>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>
    <h2>
      {{ $t('pages.home.heroSection.subtitle') }}
      <b>{{ $t('pages.home.heroSection.subtitleBold') }}</b>
    </h2>
    <div class="flex flex-row">
      <Button>
        {{ $t('pages.home.heroSection.aboutUs') }}
      </Button>
      <Button>
        {{ $t('pages.home.heroSection.contactUs') }}
      </Button>
    </div>
  </div>
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
