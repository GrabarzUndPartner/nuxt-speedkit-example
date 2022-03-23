<template>
  <section id="speedkit-picture" class="speedkit-picture">
    <SpeedkitPicture v-bind="$attrs" class="picture" v-on="$listeners" />
  </section>
</template>

<script>

import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';
import objectFitImages from 'object-fit-images';

export default {
  components: {
    SpeedkitPicture
  },
  inheritAttrs: false,
  mounted () {
    objectFitImages();
  }
};

</script>

<style lang="postcss" scoped>
.speedkit-picture {
  position: relative;

  & .picture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    & >>> img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}

</style>
