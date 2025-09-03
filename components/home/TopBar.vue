<template>
  <nav class="sticky top-0 z-50 px-2 pt-2">
    <div
      class="relative z-30 mx-auto h-full w-full max-w-7xl rounded-xl bg-white px-6 py-2 text-primary shadow-md">
      <div class="flex flex-row items-center justify-between">
        <TheLogo type="full" class="w-fit shrink-0" width="150" height="48" />
        <div class="z-30 flex flex-row items-center gap-4">
          <Icon
            :name="$t('icons.whatsapp')"
            class="h-8 w-8 shrink-0 md:hidden" />
          <div class="md:hidden">
            <div>
              <Button
                size="icon"
                title="Abrir menu"
                variant="ghost"
                @click="menuIsOpen = !menuIsOpen">
                <Icon
                  :name="!menuIsOpen ? $t('icons.menu') : 'iconoir:xmark'"
                  class="h-8 w-8 shrink-0" />
              </Button>
            </div>
          </div>

          <div class="hidden flex-row gap-2 divide-x md:flex">
            <div
              v-for="item in Array(topBarItems).keys()"
              :key="item"
              class="min-w-24 lg:min-w-48">
              <div class="flex flex-row items-center justify-center">
                <NuxtLink
                  :to="'/' + $t(`pages.home.topBar.menu.links.${item + 1}.url`)"
                  :external="true"
                  class="mx-auto">
                  {{ $t(`pages.home.topBar.menu.links.${item + 1}.label`) }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="absolute inset-0 z-20 flex h-screen gap-5 bg-white/80 backdrop-blur-sm md:hidden"
      v-if="menuIsOpen">
      <div
        class="mx-auto flex w-3/4 flex-col items-center justify-center text-primary">
        <h3>
          {{ $t('pages.home.topBar.menu.title') }}
        </h3>

        <div class="w-full">
          <ul class="flex w-full flex-col text-center">
            <li
              v-for="item in Array(topBarItems).keys()"
              key="item"
              class="flex w-full flex-col">
              <NuxtLink
                class="w-full"
                :to="$t(`pages.home.topBar.menu.links.${item + 1}.url`)"
                :external="true"
                @click="menuIsOpen = false">
                {{ $t(`pages.home.topBar.menu.links.${item + 1}.label`) }}
              </NuxtLink>
              <Separator class="my-4 w-full" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
  const menuIsOpen = ref<boolean>(false);
  const topBarItems = 5;
</script>
