<template>
  <section>
    <p>
      {{ $t('pages.home.footer.tagline') }}
    </p>

    <div>
      <h3>
        {{ $t('pages.home.footer.about.title') }}
      </h3>
      <ul>
        <li v-for="item in [1, 2, 3, 4]" :key="item">
          <a
            :href="$t('pages.home.footer.about.links.' + item + '.link')"
            target="_blank"
            rel="noopener noreferrer">
            {{ $t('pages.home.footer.about.links.' + item + '.label') }}
          </a>
        </li>
      </ul>
    </div>

    <div>
      <h3>
        {{ $t('pages.home.footer.sitemap.title') }}
      </h3>
      <ul>
        <li v-for="item in [1, 2, 3, 4]" :key="item">
          <a
            :href="$t('pages.home.footer.sitemap.links.' + item + '.link')"
            target="_blank"
            rel="noopener noreferrer">
            {{ $t('pages.home.footer.sitemap.links.' + item + '.label') }}
          </a>
        </li>
      </ul>
    </div>

    <div>
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

    <div>
      <h3>
        {{ $t('pages.home.footer.social.title') }}
      </h3>
      <ul>
        <li v-for="item in [1, 2, 3]" :key="item">
          <a
            :href="$t('pages.home.footer.social.links.' + item + '.link')"
            target="_blank"
            rel="noopener noreferrer">
            {{ $t('pages.home.footer.social.links.' + item + '.label') }}
          </a>
        </li>
      </ul>
    </div>

    <div>
      <p>
        {{ $t('pages.home.footer.legalInfo.socialReason') }}
      </p>
      <p>
        {{
          $t('pages.home.footer.legalInfo.year', {
            year: new Date().getFullYear(),
          })
        }}
      </p>
      <p>
        {{ $t('pages.home.footer.legalInfo.lgpd') }}
      </p>
    </div>
  </section>
</template>
<script lang="ts" setup></script>
