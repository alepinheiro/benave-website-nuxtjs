<template>
  <section class="bg-smalt py-24">
    <h2>
      {{ $t('pages.home.portfolio.title') }}
    </h2>
    <h3>
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
          :coverflowEffect="{
            rotate: 0,
            stretch: 0,
            depth: 10,
            modifier: 1,
            slideShadows: false,
            scale: 0.85,
          }">
          <swiper-slide v-for="(slide, idx) in [1, 2, 3, 4, 5]" :key="idx">
            <div class="flex h-72 flex-col gap-8">
              <NuxtImg
                :src="$t('pages.home.portfolio.cases.' + slide + '.img')"
                height="300"
                width="300"
                class="h-48 w-full rounded-3xl object-cover" />
              <h4 class="mx-auto w-3/4 text-center text-lg leading-5">
                {{ $t('pages.home.portfolio.cases.' + slide + '.title') }}
              </h4>
            </div>
          </swiper-slide>
          <div
            slot="container-end"
            class="absolute bottom-0 z-10 flex w-full -translate-y-1/2 justify-between">
            <div class="swiper-button-prev">⬅️</div>
            <div class="swiper-button-next">➡️</div>
          </div>
        </swiper-container>
      </ClientOnly>
    </div>
  </section>
</template>
