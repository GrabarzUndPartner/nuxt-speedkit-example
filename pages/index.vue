<template>
  <div class="page">
    <!-- critical prop for critical components: https://nuxt-speedkit.grabarzundpartner.dev/usage#critical-prop-for-critical-components -->
    <intro critical />
    <DirectiveVFontA />
    <SpeedkitPicture />
    <DirectiveVFontB />
    <ExperimentalSpeedkitPicture />
    <SpeedkitIframe />
  </div>
</template>

<script>

export default {
  // import components: https://nuxt-speedkit.grabarzundpartner.dev/usage#import-components
  speedkitComponents: {
    Intro: () => import('@/components/Intro'),
    DirectiveVFontA: () => import('@/components/DirectiveVFontA'),
    DirectiveVFontB: () => import('@/components/DirectiveVFontB'),
    SpeedkitPicture: () => import('@/components/SpeedkitPicture'),
    ExperimentalSpeedkitPicture: () => import('@/components/ExperimentalSpeedkitPicture'),
    SpeedkitIframe: () => import('@/components/SpeedkitIframe')
  }
};

</script>
