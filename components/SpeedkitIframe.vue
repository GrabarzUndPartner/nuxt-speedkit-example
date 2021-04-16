<template>
  <section id="speedkit-iframe" class="speedkit-iframe">
    <SpeedkitIframe class="iframe" v-bind="iframe" />
  </section>
</template>

<script>

import SpeedkitIframe from 'nuxt-speedkit/components/SpeedkitIframe';

export default {
  components: {
    SpeedkitIframe
  },
  data () {
    return {
      iframe: {
        src: 'https://nuxt-speedkit.grabarzundpartner.dev/'
      }
    };
  }
};

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
