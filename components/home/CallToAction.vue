<template>
  <section>
    <h2>
      {{ $t('pages.home.callToAction.1.title') }}
    </h2>
    <div>
      <h3>
        {{ $t('pages.home.callToAction.1.tagline') }}
      </h3>
      <Button>
        {{ $t('pages.home.callToAction.1.phone') }}
      </Button>
      <Button>
        {{ $t('pages.home.callToAction.1.email') }}
      </Button>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
