<template>
  <section id="services" class="py-12">
    <div class="relative w-full">
      <h2
        class="to-primary-800 bg-gradient-to-t from-primary bg-clip-text text-center text-2xl font-bold text-transparent">
        {{ $t('pages.home.services.title') }}
      </h2>
    </div>

    <div class="service">
      <h3>
        {{ $t('pages.home.services.electricPanels.title.prefix') }}
        <b class="text-black">
          {{ $t('pages.home.services.electricPanels.title.suffix') }}
        </b>
      </h3>
      <NuxtImg :src="$t('pages.home.services.electricPanels.img')" />
      <p class="text-center text-primary">
        {{ $t('pages.home.services.electricPanels.summary') }}
      </p>
      <ul class="grid grid-cols-2 gap-2">
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
    </div>

    <div class="service">
      <h3>
        {{ $t('pages.home.services.electricProjects.title.prefix') }}
        <b>
          {{ $t('pages.home.services.electricProjects.title.suffix') }}
        </b>
      </h3>
      <NuxtImg :src="$t('pages.home.services.electricProjects.img')" />
      <p class="text-center text-primary">
        {{ $t('pages.home.services.electricProjects.summary') }}
      </p>
      <ul class="flex flex-col items-center gap-2 text-center">
        <li v-for="item of [1, 2, 3, 4]" :key="item">
          <div class="flex flex-row items-center gap-2">
            <Icon
              name="mingcute:check-2-fill"
              class="to-primary-800 h-4 w-4 shrink-0 bg-gradient-to-t from-primary" />

            <p>
              {{ $t('pages.home.services.electricProjects.services.' + item) }}
            </p>
          </div>
        </li>
      </ul>
    </div>

    <div class="service">
      <h3>
        {{ $t('pages.home.services.memorialDescription.title.prefix') }}
        <b>
          {{ $t('pages.home.services.memorialDescription.title.suffix') }}
        </b>
      </h3>
      <NuxtImg :src="$t('pages.home.services.memorialDescription.img')" />
      <p class="text-center text-primary">
        {{ $t('pages.home.services.memorialDescription.summary') }}
      </p>
      <ul class="flex flex-col items-center gap-2 text-center">
        <li v-for="item of [1, 2, 3]" :key="item">
          <div class="mx-auto flex flex-row items-center gap-2">
            <Icon
              name="mingcute:check-2-fill"
              class="to-primary-800 h-4 w-4 shrink-0 bg-gradient-to-t from-primary" />

            <p>
              {{
                $t('pages.home.services.memorialDescription.services.' + item)
              }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
  #services {
    .service {
      @apply mx-auto flex flex-col items-center gap-4 px-5 pt-10;

      h3 {
        @apply text-xl font-bold text-primary;

        b {
          @apply text-black;
        }
      }

      img {
        @apply rounded-2xl;
      }
    }
  }
</style>

<script setup lang="ts">
  const electricPanelServices = ['QGBT', 'CCM', 'QTA', 'QTM', 'QDL', 'QDT'];
</script>
