<template>
  <section class="bg-primary py-12">
    <div class="flex flex-row items-center justify-center gap-2">
      <NuxtImg height="27" width="20" src="/img/logo-benave.png" />
      <div class="flex w-fit flex-col">
        <h2
          class="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-center text-2xl font-bold text-transparent">
          {{ $t('pages.home.portfolio.title') }}
        </h2>
        <div class="h-1 bg-primary-600"></div>
      </div>
    </div>

    <h3 class="py-6 text-center text-xl font-bold text-white">
      {{ $t('pages.home.portfolio.tagline') }}
    </h3>
    <div class="mx-5 h-72">
      <ClientOnly>
        <swiper-container
          class="h-72"
          :loop="true"
          :effect="'coverflow'"
          :autoplay="true"
          :autoHeight="false"
          :initialSlide="2"
          :spaceBetween="0"
          :slidesPerView="1"
          :centeredSlides="true"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :breakpoints="{
            768: {
              slidesPerView: 3,
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
          <swiper-slide v-for="(slide, idx) in [1, 2, 3, 4]" :key="idx">
            <div class="flex h-72 flex-col gap-8 lg:h-96">
              <NuxtImg
                :src="$t('pages.home.portfolio.cases.' + slide + '.img')"
                height="600"
                width="300"
                class="h-72 w-full rounded-3xl object-cover lg:h-56" />
              <h4
                class="mx-auto w-3/4 text-center text-lg font-bold leading-5 text-white">
                {{ $t('pages.home.portfolio.cases.' + slide + '.title') }}
              </h4>
            </div>
          </swiper-slide>
          <div
            slot="container-end"
            class="absolute bottom-0 z-10 flex w-full -translate-y-1/2 justify-between">
            <div class="swiper-button-prev">
              <Icon
                name="tabler:arrow-left"
                class="h-6 w-6 shrink-0 text-primary-500" />
            </div>
            <div class="swiper-button-next">
              <Icon
                name="tabler:arrow-right"
                class="h-6 w-6 shrink-0 text-primary-500" />
            </div>
          </div>
        </swiper-container>
      </ClientOnly>
    </div>
  </section>
</template>
