<template>
  <section
    class="relative overflow-hidden bg-primary p-5 py-12 md:h-auto lg:h-[80vh]">
    <div class="mx-auto flex h-full max-w-7xl flex-col md:flex-row md:pt-24">
      <h1 class="py-8 text-center text-xl leading-5 text-white md:hidden">
        {{ $t('pages.home.heroSection.title') }}
      </h1>
      <div class="my-auto hidden w-1/2 md:block">
        <div class="flex w-5/6 flex-col gap-20">
          <h1 class="text-3xl text-white">
            Transformamos ideias em energia,
            <b> soluções em inovação. </b>
          </h1>
          <h2 class="text-2xl text-white">
            Especialistas em soluções elétricas industriais, com foco em
            sistemas completos e integrados que atendem às mais altas demandas
            do setor.
          </h2>
          <Button variant="inverted" size="lg" class="w-fit"> A Benavê </Button>
        </div>
      </div>

      <div
        class="-right-1/3 left-1/2 -mx-5 my-auto h-60 md:absolute md:bottom-0 md:top-0 md:h-96 xl:-right-[10%]">
        <ClientOnly>
          <swiper-container
            class="h-60 md:h-96"
            :loop="true"
            :effect="'coverflow'"
            :autoplay="true"
            :autoHeight="false"
            :initialSlide="2"
            :spaceBetween="0.5"
            :slidesPerView="1.4"
            :centeredSlides="true"
            :breakpoints="{
              768: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
            }"
            :coverflowEffect="{
              rotate: 0,
              stretch: 0,
              depth: 10,
              modifier: 1,
              slideShadows: false,
              scale: 0.85,
            }">
            <swiper-slide v-for="(slide, idx) in slides" :key="idx">
              <div class="h-60 w-full md:h-96">
                <NuxtImg
                  :src="slide"
                  height="300"
                  width="300"
                  class="h-60 w-full rounded-3xl object-cover md:h-96" />
              </div>
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
      </div>

      <NuxtImg
        src="/img/hero-background@3x.png"
        height="35"
        width="800"
        class="-ml-20 h-fit w-fit object-contain pt-4 md:hidden" />

      <h2 class="py-8 text-center text-xl leading-5 text-white md:hidden">
        {{ $t('pages.home.heroSection.subtitle') }}
        <b>{{ $t('pages.home.heroSection.subtitleBold') }}</b>
      </h2>

      <div class="mx-auto flex w-fit flex-row gap-6 md:hidden">
        <Button variant="inverted">
          {{ $t('pages.home.heroSection.aboutUs') }}
        </Button>
        <Button variant="outline">
          {{ $t('pages.home.heroSection.contactUs') }}
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const slides = [
    'https://unsplash.it/1920/1080?random=1&gravity=center',
    'https://unsplash.it/1920/1080?random=2&gravity=center',
    'https://unsplash.it/1920/1080?random=3&gravity=center',
    'https://unsplash.it/1920/1080?random=4&gravity=center',
    'https://unsplash.it/1920/1080?random=5&gravity=center',
  ];
</script>
