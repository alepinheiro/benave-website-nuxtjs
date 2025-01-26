<template>
  <section class="py-12">
    <h2>
      {{ $t('pages.home.testimonials.title') }}
    </h2>
    <div>
      <ClientOnly>
        <swiper-container
          class="h-72"
          :loop="true"
          :effect="'coverflow'"
          :autoplay="true"
          :autoHeight="false"
          :initialSlide="2"
          :spaceBetween="0"
          :pagination="true"
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
          <swiper-slide v-for="(slide, idx) in [1, 2]" :key="idx">
            <article class="flex flex-col gap-8 bg-smalt p-5 text-white">
              <div class="flex flex-row gap-5">
                <NuxtImg
                  :src="$t('pages.home.testimonials.' + slide + '.img')"
                  height="80"
                  width="80"
                  class="h-20 w-20 rounded-full object-cover" />
                <div class="flex flex-col">
                  <h4 class="">
                    {{ $t('pages.home.testimonials.' + slide + '.name') }}
                  </h4>
                  <p>
                    {{ $t('pages.home.testimonials.' + slide + '.job') }}
                  </p>
                  <p>
                    {{ $t('pages.home.testimonials.' + slide + '.company') }}
                  </p>
                </div>
              </div>
              <div class="flex flex-row gap-5">
                <div class="h-12 w-12">
                  <Icon name="ri:double-quotes-l" height="80" width="80" />
                </div>
                <p>
                  {{ $t('pages.home.testimonials.' + slide + '.quote') }}
                </p>
              </div>
            </article>
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
<script setup lang="ts"></script>
