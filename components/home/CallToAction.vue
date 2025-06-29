<template>
  <section id="contato" class="pt-20">
    <div class="gap-2 bg-primary px-5 py-12">
      <div
        class="mx-auto flex max-w-7xl flex-row md:items-center md:justify-around">
        <div class="flex w-full flex-col items-start md:w-1/2">
          <h2 class="text-center text-2xl font-bold text-white md:text-start">
            {{ $t('pages.home.callToAction.1.title') }}
          </h2>
          <Button
            variant="link"
            class="hidden pl-0 md:flex md:text-white"
            asChild>
            <a
              :href="$t('pages.home.footer.social.links.4.url')"
              target="_blank">
              {{ $t('pages.home.callToAction.1.email') }}
            </a>
          </Button>
        </div>
        <Button variant="inverted" class="hidden md:flex" asChild>
          <a :href="$t('pages.home.footer.social.links.1.url')" target="_blank">
            <Icon
              :name="$t('pages.home.footer.social.links.' + 1 + '.icon')"
              class="h-4 w-4 shrink-0" />
            {{ $t('pages.home.callToAction.1.phone') }}
          </a>
        </Button>
      </div>
    </div>
    <div
      class="bg-gradient-to-t from-zinc-500 to-zinc-200 px-5 py-12 md:hidden">
      <div class="flex flex-col gap-5 rounded-xl bg-zinc-800 p-5 text-white">
        <h3 class="text-center text-xl font-bold">
          {{ $t('pages.home.callToAction.1.tagline') }}
        </h3>
        <Button variant="inverted" class="mx-auto w-fit text-center" asChild>
          <a :href="$t('pages.home.footer.social.links.1.url')" target="_blank">
            {{ $t('pages.home.callToAction.1.phone') }}
          </a>
        </Button>
        <Button variant="link" class="text-white" asChild>
          <a :href="$t('pages.home.footer.social.links.4.url')" target="_blank">
            {{ $t('pages.home.callToAction.1.email') }}
          </a>
        </Button>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
