<template>
  <section id="speedkit-picture" class="speedkit-picture">
    <speedkit-picture v-bind="$attrs" class="picture" />
  </section>
</template>

<script setup>
import SpeedkitPicture from '#speedkit/components/SpeedkitPicture';

defineOptions({
  inheritAttrs: false
});
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

    & :deep(img) {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
