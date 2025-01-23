<template>
  <section>
    <h2>
      {{ $t('pages.home.services.title') }}
    </h2>

    <div>
      <h3>
        {{ $t('pages.home.services.electricPanels.title.prefix') }}
        <b>
          {{ $t('pages.home.services.electricPanels.title.suffix') }}
        </b>
      </h3>
      <NuxtImg :src="$t('pages.home.services.electricPanels.img')" />
      <p>
        {{ $t('pages.home.services.electricPanels.summary') }}
      </p>
      <ul>
        <li v-for="item of electricPanelServices" :key="item">
          <div>
            <h4>{{ item }}</h4>
            <p>
              {{ $t('pages.home.services.electricPanels.services.' + item) }}
            </p>
          </div>
        </li>
      </ul>
    </div>

    <div>
      <h3>
        {{ $t('pages.home.services.electricProjects.title.prefix') }}
        <b>
          {{ $t('pages.home.services.electricProjects.title.suffix') }}
        </b>
      </h3>
      <NuxtImg :src="$t('pages.home.services.electricProjects.img')" />
      <p>
        {{ $t('pages.home.services.electricProjects.summary') }}
      </p>
      <ul>
        <li v-for="item of [1, 2, 3, 4]" :key="item">
          <div>
            <p>
              {{ $t('pages.home.services.electricProjects.services.' + item) }}
            </p>
          </div>
        </li>
      </ul>
    </div>

    <div>
      <h3>
        {{ $t('pages.home.services.memorialDescription.title.prefix') }}
        <b>
          {{ $t('pages.home.services.memorialDescription.title.suffix') }}
        </b>
      </h3>
      <NuxtImg :src="$t('pages.home.services.memorialDescription.img')" />
      <p>
        {{ $t('pages.home.services.memorialDescription.summary') }}
      </p>
      <ul>
        <li v-for="item of [1, 2, 3]" :key="item">
          <div>
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

<script setup lang="ts">
  const electricPanelServices = ['QGBT', 'CCM', 'QTA', 'QTM', 'QDL', 'QDT'];
</script>
