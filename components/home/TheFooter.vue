<template>
  <section class="bg-zinc-100 px-5 pt-12">
    <div
      class="mx-auto flex max-w-xl flex-col gap-5 md:flex-row md:items-center">
      <TheLogo type="full" class="h-10 w-24 text-primary md:h-16 md:w-48" />

      <p class="pt-4 font-bold text-primary md:pt-0">
        {{ $t('pages.home.footer.tagline') }}
      </p>
    </div>

    <div class="my-10 border-b border-zinc-200"></div>

    <div
      class="mx-auto flex w-full max-w-5xl flex-col items-start justify-between md:flex-row">
      <div>
        <h3 class="font-bold">
          {{ $t('pages.home.footer.about.title') }}
        </h3>
        <ul class="list-inside list-disc">
          <li v-for="item in [1, 2, 3, 4]" :key="item">
            <NuxtLink
              :to="$t('pages.home.footer.about.links.' + item + '.url')"
              target="_blank"
              rel="noopener noreferrer">
              {{ $t('pages.home.footer.about.links.' + item + '.label') }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="pt-4 md:pt-0">
        <h3 class="font-bold">
          {{ $t('pages.home.footer.sitemap.title') }}
        </h3>
        <ul class="list-inside list-disc">
          <li v-for="item in [1, 2, 3, 4]" :key="item">
            <NuxtLink
              :to="$t('pages.home.footer.sitemap.links.' + item + '.url')"
              target="_blank"
              rel="noopener noreferrer">
              {{ $t('pages.home.footer.sitemap.links.' + item + '.label') }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="flex flex-col">
        <div class="pt-4 font-medium">
          <p>
            {{ $t('pages.home.footer.businessInfo.title') }}
          </p>
          <p>
            {{ $t('pages.home.footer.businessInfo.openTime.weekDays') }}
          </p>
          <p>
            {{ $t('pages.home.footer.businessInfo.openTime.open') }}
          </p>
          <p>
            {{ $t('pages.home.footer.businessInfo.openTime.close') }}
          </p>
        </div>

        <div class="pt-4 text-primary">
          <h3 class="font-bold">
            {{ $t('pages.home.footer.social.title') }}
          </h3>
          <ul class="flex w-fit flex-row items-start gap-4 pt-2">
            <li
              v-for="item in [1, 2, 3]"
              :key="item"
              class="h-12 w-12 flex-1 shrink-0 rounded-full bg-white p-2 shadow-lg">
              <a
                class="text-primary"
                :href="$t('pages.home.footer.social.links.' + item + '.url')"
                :title="$t('pages.home.footer.social.links.' + item + '.label')"
                target="_blank"
                rel="noopener noreferrer">
                <Icon
                  :name="$t('pages.home.footer.social.links.' + item + '.icon')"
                  class="h-8 w-8 shrink-0" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="my-10 border-b border-zinc-200"></div>

    <div class="pb-8 text-center text-xs font-medium">
      <p>
        {{ $t('pages.home.footer.legalInfo.socialReason') }}
      </p>
      <br />
      <p class="pb-4">
        {{
          $t('pages.home.footer.legalInfo.year', {
            year: new Date().getFullYear(),
          })
        }}
      </p>
      <a href="#" class="underline">
        {{ $t('pages.home.footer.legalInfo.lgpd') }}
      </a>
    </div>
  </section>
</template>
<script lang="ts" setup></script>
