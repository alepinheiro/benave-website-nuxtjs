<template>
  <div class="bg-smalt">
    <h1 class="text-xl text-white">
      {{ $t('pages.home.heroSection.title') }}
    </h1>
    <div>
      <swiper-container ref="containerRef">
        <swiper-slide
          v-for="(slide, idx) in [1, 2, 3, 4, 5]"
          :key="idx"
          style="background-color: rgb(32, 233, 70); color: white">
          Slide {{ idx + 1 }}
        </swiper-slide>
      </swiper-container>
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

<script setup lang="ts"></script>
