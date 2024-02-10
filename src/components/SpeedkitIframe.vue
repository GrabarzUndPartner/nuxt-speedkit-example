<template>
  <section id="speedkit-iframe" class="speedkit-iframe">
    <speedkit-iframe class="iframe" v-bind="iframe" />
  </section>
</template>

<script setup>
import { ref } from '#imports';
import SpeedkitIframe from '#speedkit/components/SpeedkitIframe';

const iframe = ref({
  src: 'https://nuxt-speedkit.grabarzundpartner.dev/'
});
</script>

<style lang="postcss" scoped>
.speedkit-iframe {
  position: relative;

  & .iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
