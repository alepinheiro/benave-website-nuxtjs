<template>
  <div class="bg-smalt p-5 pt-12">
    <h1
      class="font-plusJakartaSans py-8 text-center text-xl leading-5 text-white">
      {{ $t('pages.home.heroSection.title') }}
    </h1>
    <div class="-mx-5 h-72">
      <ClientOnly>
        <swiper-container
          class="h-72"
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
            <div class="h-72 w-full">
              <NuxtImg
                :src="slide"
                height="300"
                width="300"
                class="h-72 w-full rounded-3xl object-cover" />
            </div>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>

    <h2
      class="font-plusJakartaSans py-8 text-center text-xl leading-5 text-white">
      {{ $t('pages.home.heroSection.subtitle') }}
      <b>{{ $t('pages.home.heroSection.subtitleBold') }}</b>
    </h2>

    <div class="mx-auto flex w-2/3 flex-row justify-between">
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
