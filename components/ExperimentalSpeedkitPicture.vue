<template>
  <section id="experimental-speedkit-picture" class="experimental-speedkit-picture">
    <ExperimentalSpeedkitPicture class="picture" v-bind="picture" />
  </section>
</template>

<script>

import ExperimentalSpeedkitPicture from 'nuxt-speedkit/components/experimental/SpeedkitPicture';

export default {
  components: {
    ExperimentalSpeedkitPicture
  },
  data () {
    return {
      picture: {
        sources: [
          { src: 'https://nuxt-speedkit.grabarzundpartner.dev/example/img/image-content-1/landscape.jpg', sizes: '1024:1024,1280:1280,1680:1680,1920:1920' },
          { src: 'https://nuxt-speedkit.grabarzundpartner.dev/example/img/image-content-1/portrait.jpg', sizes: '768:768' },
          { src: 'https://nuxt-speedkit.grabarzundpartner.dev/example/img/image-content-1/landscape.jpg', sizes: '576:576' },
          { src: 'https://nuxt-speedkit.grabarzundpartner.dev/example/img/image-content-1/portrait.jpg', sizes: '414' }
        ]
      }
    };
  }
};

</script>

<style scoped>
.experimental-speedkit-picture {
  position: relative;
}

.experimental-speedkit-picture .picture {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
