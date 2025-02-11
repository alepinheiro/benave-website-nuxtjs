<template>
  <section id="servicos" tabindex="-1">
    <div class="relative w-full">
      <h2
        class="bg-gradient-to-t from-primary to-primary-800 bg-clip-text text-center text-2xl font-bold text-transparent">
        {{ $t('pages.home.services.title') }}
      </h2>
    </div>

    <div class="service" data-aos="fade-in">
      <h3 class="md:hidden">
        {{ $t('pages.home.services.electricPanels.title.prefix') }}
        <b>
          {{ $t('pages.home.services.electricPanels.title.suffix') }}
        </b>
      </h3>
      <NuxtImg :src="$t('pages.home.services.electricPanels.img')" />
      <div class="w-full">
        <div class="flex flex-col items-center gap-4 md:w-5/6">
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
                  {{
                    $t('pages.home.services.electricPanels.services.' + item)
                  }}
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
                  {{
                    $t('pages.home.services.electricPanels.services.' + item)
                  }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="service" data-aos="fade-in">
      <h3 class="md:hidden">
        {{ $t('pages.home.services.electricProjects.title.prefix') }}
        <b>
          {{ $t('pages.home.services.electricProjects.title.suffix') }}
        </b>
      </h3>

      <NuxtImg :src="$t('pages.home.services.electricProjects.img')" />

      <div class="w-full">
        <div class="mx-auto flex flex-col items-center gap-4 md:w-5/6">
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
            <li v-for="item of Array(5).keys()" :key="item">
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
    </div>

    <div class="service" data-aos="fade-in">
      <h3 class="md:hidden">
        {{ $t('pages.home.services.memorialDescription.title.prefix') }}
        <b>
          {{ $t('pages.home.services.memorialDescription.title.suffix') }}
        </b>
      </h3>
      <NuxtImg :src="$t('pages.home.services.memorialDescription.img')" />

      <div class="w-full">
        <div class="flex flex-col items-center gap-4 md:w-5/6">
          <h3 class="hidden md:block">
            {{ $t('pages.home.services.memorialDescription.title.prefix') }}
            <b>
              {{ $t('pages.home.services.memorialDescription.title.suffix') }}
            </b>
          </h3>
          <p class="text-center text-primary">
            {{ $t('pages.home.services.memorialDescription.summary') }}
          </p>
          <ul class="flex w-fit flex-col items-center gap-2 text-center">
            <li
              v-for="item of [1, 2, 3]"
              :key="item"
              class="mx-auto flex flex-row items-center gap-2">
              <Icon
                name="mingcute:check-2-fill"
                class="h-4 w-4 shrink-0 bg-gradient-to-t from-primary to-primary-800" />

              <p>
                {{
                  $t('pages.home.services.memorialDescription.services.' + item)
                }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="service" data-aos="fade-in">
      <h3 class="md:hidden">
        {{ $t('pages.home.services.eletroCenter.title.prefix') }}
        <b>
          {{ $t('pages.home.services.eletroCenter.title.suffix') }}
        </b>
      </h3>
      <NuxtImg :src="$t('pages.home.services.eletroCenter.img')" />

      <div class="w-full">
        <div class="mx-auto flex flex-col items-center gap-4 md:w-5/6">
          <h3 class="hidden md:block">
            {{ $t('pages.home.services.eletroCenter.title.prefix') }}
            <b>
              {{ $t('pages.home.services.eletroCenter.title.suffix') }}
            </b>
          </h3>
          <p class="text-center text-primary">
            {{ $t('pages.home.services.eletroCenter.summary') }}
          </p>
          <ul class="flex w-fit flex-col items-center gap-2 text-center">
            <li
              v-for="item of [1, 2, 3, 4]"
              :key="item"
              class="mx-auto flex flex-row items-center gap-2">
              <Icon
                name="mingcute:check-2-fill"
                class="h-4 w-4 shrink-0 bg-gradient-to-t from-primary to-primary-800" />

              <p>
                {{ $t('pages.home.services.eletroCenter.services.' + item) }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <NuxtImg
      width="900"
      height="1200"
      src="/img/services-background-logo.png"
      class="absolute -bottom-72 -left-40 -z-10 object-contain lg:-bottom-96" />
  </section>
</template>

<style lang="scss">
  #servicos {
    @apply relative z-0 overflow-hidden bg-gradient-to-b from-white to-zinc-200 py-28;

    .service {
      @apply mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 pt-10 md:flex-row-reverse md:odd:flex-row;

      h3 {
        @apply text-xl font-bold text-primary;
      }

      img {
        @apply max-h-60 w-full shrink-0 rounded-2xl object-cover md:h-full md:max-h-96 md:w-1/2;
      }
    }
  }
</style>

<script setup lang="ts">
  const electricPanelServices = ['QGBT', 'CCM', 'QTA', 'QTM', 'QDL', 'QDT'];
</script>
