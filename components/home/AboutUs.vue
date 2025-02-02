<template>
  <section class="relative z-0 pb-12">
    <div
      class="mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 md:flex-row md:py-12">
      <NuxtImg
        src="/img/about-featured.png"
        height="200"
        width="300"
        class="relative z-0 h-48 w-full object-cover md:hidden" />
      <NuxtImg
        src="/img/about-featured.png"
        height="600"
        width="600"
        class="relative z-0 hidden h-full w-1/3 rounded-2xl object-cover md:block md:h-80" />

      <div class="flex flex-col md:w-3/4">
        <div class="relative z-10 w-10/12">
          <NuxtImg
            src="/img/about-logo.png"
            height="160"
            width="900"
            class="h-fit w-full md:h-full md:w-3/4" />
        </div>

        <div class="-mt-10 flex w-full flex-col gap-2 p-2 px-5 text-primary">
          <div>
            <h3 class="font-bold">
              {{ $t('pages.home.aboutUs.tagline') }}
            </h3>
            <h2 class="text-2xl font-bold uppercase">
              {{ $t('pages.home.aboutUs.companyName') }}
            </h2>
          </div>
          <div
            class="w-full md:w-3/4"
            v-html="$t('pages.home.aboutUs.summary')"></div>
        </div>
      </div>
    </div>
  </section>
  <div class="radial-gradient p-2 py-10">
    <div class="mx-auto flex w-3/4 flex-col gap-5">
      <h3 class="text-center text-2xl leading-5 text-primary">
        {{ $t('pages.home.aboutUs.valueProposition.prefix') }}
        <br class="md:hidden" />
        <b>
          {{ $t('pages.home.aboutUs.valueProposition.name') }}
        </b>
      </h3>
      <ul
        class="grid grid-rows-4 gap-4 md:grid-cols-2 md:grid-rows-1 lg:mx-auto lg:max-w-xl">
        <li
          v-for="item of [1, 2, 3, 4]"
          :key="item"
          class="flex rounded-2xl bg-zinc-800 p-4 text-white">
          <p class="my-auto w-full text-center text-lg">
            {{ $t('pages.home.aboutUs.valueProposition.highlights.' + item) }}
          </p>
        </li>
      </ul>
      <Button class="mx-auto">
        {{ $t('pages.home.aboutUs.cta') }}
      </Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .radial-gradient {
    background: conic-gradient(
      from 180deg at 50% 50%,
      #ada9a9 0deg,
      #949494 97.13deg,
      #d3d3d3 269.14deg,
      #ada9a9 360deg
    );
  }
</style>

<script setup lang="ts"></script>
