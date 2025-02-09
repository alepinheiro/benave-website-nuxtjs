<template>
  <section id="contato" class="py-20">
    <div class="gap-2 bg-primary px-5 py-12">
      <div
        class="mx-auto flex max-w-7xl flex-row md:items-center md:justify-around">
        <div class="flex w-full flex-col items-start md:w-1/2">
          <h2 class="text-center text-2xl font-bold text-white md:text-start">
            {{ $t('pages.home.callToAction.1.title') }}
          </h2>
          <Button variant="ghost" class="hidden md:flex md:text-white">
            {{ $t('pages.home.callToAction.1.email') }}
          </Button>
        </div>
        <Button variant="inverted" class="hidden md:flex">
          {{ $t('pages.home.callToAction.1.phone') }}
        </Button>
      </div>
    </div>
    <div
      class="bg-gradient-to-t from-zinc-500 to-zinc-200 px-5 py-12 md:hidden">
      <div class="flex flex-col gap-5 rounded-xl bg-zinc-800 p-5 text-white">
        <h3 class="text-center text-xl font-bold">
          {{ $t('pages.home.callToAction.1.tagline') }}
        </h3>
        <Button variant="inverted" class="mx-auto w-fit text-center">
          {{ $t('pages.home.callToAction.1.phone') }}
        </Button>
        <Button variant="link" class="text-white">
          {{ $t('pages.home.callToAction.1.email') }}
        </Button>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
