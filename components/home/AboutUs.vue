<template>
  <div>
    <NuxtImg src="http://unsplash.it/800/300?random&gravity=center" />
    <div class="text-smalt p-2">
      <h3 class="font-bold">
        {{ $t('pages.home.aboutUs.tagline') }}
      </h3>
      <h2 class="text-2xl font-bold uppercase">
        {{ $t('pages.home.aboutUs.companyName') }}
      </h2>
      <p>
        {{ $t('pages.home.aboutUs.summary') }}
      </p>
    </div>
  </div>
  <div class="flex flex-col gap-5 bg-zinc-300 p-2 py-10">
    <h3 class="text-smalt text-center text-xl leading-5">
      {{ $t('pages.home.aboutUs.valueProposition.prefix') }}
      <b>
        {{ $t('pages.home.aboutUs.valueProposition.name') }}
      </b>
    </h3>
    <div>
      <ul class="grid grid-rows-4 gap-4">
        <li
          v-for="item of [1, 2, 3, 4]"
          :key="item"
          class="flex rounded-xl bg-black p-4 text-white">
          <p class="my-auto w-full text-center">
            {{ $t('pages.home.aboutUs.valueProposition.highlights.' + item) }}
          </p>
        </li>
      </ul>
    </div>
    <Button class="mx-auto">
      {{ $t('pages.home.aboutUs.cta') }}
    </Button>
  </div>
</template>
<script setup lang="ts"></script>
