<template>
  <section id="services" class="py-12">
    <div class="relative w-full">
      <h2
        class="bg-gradient-to-t from-primary to-primary-800 bg-clip-text text-center text-2xl font-bold text-transparent">
        {{ $t('pages.home.services.title') }}
      </h2>
    </div>

    <div class="service">
      <h3 class="md:hidden">
        {{ $t('pages.home.services.electricPanels.title.prefix') }}
        <b>
          {{ $t('pages.home.services.electricPanels.title.suffix') }}
        </b>
      </h3>
      <NuxtImg :src="$t('pages.home.services.electricPanels.img')" />
      <div class="flex flex-col items-center gap-4">
        <h3 class="hidden md:block">
          {{ $t('pages.home.services.electricPanels.title.prefix') }}
          <b>
            {{ $t('pages.home.services.electricPanels.title.suffix') }}
          </b>
        </h3>
        <p class="text-center text-primary">
          {{ $t('pages.home.services.electricPanels.summary') }}
        </p>

        <ul class="grid grid-cols-2 gap-2 md:hidden">
          <li
            class="bg-zinc-200 p-4"
            v-for="item of electricPanelServices"
            :key="item">
            <div class="flex flex-col gap-2 text-center font-bold">
              <h4 class="text-xl text-primary">
                {{ item }}
              </h4>
              <p>
                {{ $t('pages.home.services.electricPanels.services.' + item) }}
              </p>
            </div>
          </li>
        </ul>

        <ul class="flex flex-col items-center gap-2 text-center">
          <li v-for="item of electricPanelServices" :key="item">
            <div class="flex flex-row items-center gap-2">
              <Icon
                name="mingcute:check-2-fill"
                class="h-4 w-4 shrink-0 bg-gradient-to-t from-primary to-primary-800" />

              <p>
                {{ $t('pages.home.services.electricPanels.services.' + item) }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="service">
      <h3 class="md:hidden">
        {{ $t('pages.home.services.electricProjects.title.prefix') }}
        <b>
          {{ $t('pages.home.services.electricProjects.title.suffix') }}
        </b>
      </h3>

      <NuxtImg :src="$t('pages.home.services.electricProjects.img')" />

      <div class="flex flex-col items-center gap-4">
        <h3 class="hidden md:block">
          {{ $t('pages.home.services.electricProjects.title.prefix') }}
          <b>
            {{ $t('pages.home.services.electricProjects.title.suffix') }}
          </b>
        </h3>
        <p class="text-center text-primary">
          {{ $t('pages.home.services.electricProjects.summary') }}
        </p>
        <ul class="flex flex-col items-center gap-2 text-center">
          <li v-for="item of Array(4).keys()" :key="item">
            <div class="flex flex-row items-center gap-2">
              <Icon
                name="mingcute:check-2-fill"
                class="h-4 w-4 shrink-0 bg-gradient-to-t from-primary to-primary-800" />

              <p>
                {{
                  $t(
                    'pages.home.services.electricProjects.services.' +
                      (item + 1),
                  )
                }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="service">
      <h3 class="md:hidden">
        {{ $t('pages.home.services.memorialDescription.title.prefix') }}
        <b>
          {{ $t('pages.home.services.memorialDescription.title.suffix') }}
        </b>
      </h3>
      <NuxtImg :src="$t('pages.home.services.memorialDescription.img')" />
      <div class="flex flex-col items-center gap-4">
        <h3 class="hidden md:block">
          {{ $t('pages.home.services.memorialDescription.title.prefix') }}
          <b>
            {{ $t('pages.home.services.memorialDescription.title.suffix') }}
          </b>
        </h3>
        <p class="text-center text-primary">
          {{ $t('pages.home.services.memorialDescription.summary') }}
        </p>
        <ul class="flex flex-col items-center gap-2 text-center">
          <li v-for="item of [1, 2, 3]" :key="item">
            <div class="mx-auto flex flex-row items-center gap-2">
              <Icon
                name="mingcute:check-2-fill"
                class="h-4 w-4 shrink-0 bg-gradient-to-t from-primary to-primary-800" />

              <p>
                {{
                  $t('pages.home.services.memorialDescription.services.' + item)
                }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  #services {
    .service {
      @apply mx-auto flex flex-col items-center gap-4 px-5 pt-10 md:flex-row-reverse md:odd:flex-row;

      h3 {
        @apply text-xl font-bold text-primary;
      }

      img {
        @apply shrink-0 rounded-2xl md:h-full md:w-1/2;
      }
    }
  }
</style>

<script setup lang="ts">
  const electricPanelServices = ['QGBT', 'CCM', 'QTA', 'QTM', 'QDL', 'QDT'];
</script>
