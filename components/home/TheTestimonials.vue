<template>
  <section class="py-12">
    <h2 class="mx-auto w-3/4 text-center text-xl font-extrabold text-primary">
      {{ $t('pages.home.testimonials.title') }}
    </h2>

    <div class="px-5 pt-6 md:mx-auto md:max-w-5xl">
      <ClientOnly>
        <swiper-container
          class=""
          :loop="true"
          :autoplay="true"
          :autoHeight="false"
          :initialSlide="2"
          :spaceBetween="5"
          :pagination="true"
          :slidesPerView="1"
          :centeredSlides="true"
          :breakpoints="{
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
              centeredSlides: false,
            },
          }"
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
          <swiper-slide
            v-for="(slide, idx) in [1, 2, 1, 2, 1, 2]"
            :key="idx"
            class="mb-16">
            <article
              class="flex h-full flex-col justify-center gap-8 rounded-2xl bg-primary p-5 text-white">
              <div class="flex flex-row items-center gap-2">
                <NuxtImg
                  :src="$t('pages.home.testimonials.' + slide + '.img')"
                  height="80"
                  width="80"
                  class="h-12 w-12 rounded-full object-cover" />
                <div class="flex flex-col overflow-hidden">
                  <h4 class="truncate text-xl font-bold">
                    {{ $t('pages.home.testimonials.' + slide + '.name') }}
                  </h4>
                  <p class="truncate text-sm">
                    {{ $t('pages.home.testimonials.' + slide + '.job') }}
                  </p>
                  <p class="truncate text-sm">
                    {{ $t('pages.home.testimonials.' + slide + '.company') }}
                  </p>
                </div>
              </div>
              <div class="flex flex-row gap-1">
                <div class="h-12 w-12 shrink-0">
                  <Icon name="ri:double-quotes-l" class="h-full w-full" />
                </div>
                <p>
                  {{ $t('pages.home.testimonials.' + slide + '.quote') }}
                </p>
              </div>
            </article>
          </swiper-slide>
          <div
            slot="container-end"
            class="absolute -bottom-0 z-10 flex w-full -translate-y-1/2 justify-between">
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
<script setup lang="ts"></script>
