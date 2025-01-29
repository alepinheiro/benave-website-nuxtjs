<template>
  <section>
    <div class="bg-primary px-5 py-12">
      <h2 class="text-center text-2xl font-bold text-white">
        {{ $t('pages.home.callToAction.1.title') }}
      </h2>
    </div>
    <div class="bg-gradient-to-t from-zinc-500 to-zinc-200 px-5 py-12">
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
