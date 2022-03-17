<template>
  <div class="page">
    <!-- critical prop for critical components: https://nuxt-speedkit.grabarzundpartner.dev/usage#critical-prop-for-critical-components -->
    <intro critical />
    <DirectiveVFontA />
    <SpeedkitPicture v-bind="speedkitPictureLight" />
    <DirectiveVFontB />
    <SpeedkitPicture v-bind="speedkitPictureDark" />
    <SpeedkitIframe />
  </div>
</template>

<script>

import speedkitHydrate from 'nuxt-speedkit/hydrate';

export default {
  // import components: https://nuxt-speedkit.grabarzundpartner.dev/usage#import-components
  components: {
    Intro: speedkitHydrate(() => import('@/components/Intro')),
    DirectiveVFontA: speedkitHydrate(() => import('@/components/DirectiveVFontA')),
    DirectiveVFontB: speedkitHydrate(() => import('@/components/DirectiveVFontB')),
    SpeedkitPicture: speedkitHydrate(() => import('@/components/SpeedkitPicture')),
    SpeedkitIframe: speedkitHydrate(() => import('@/components/SpeedkitIframe'))
  },
  data () {
    return {
      speedkitPictureLight: {
        sources: [
          { src: '/img/light-landscape.jpg', sizes: { sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' }, media: '(orientation: landscape)' },
          { src: '/img/light-portrait.jpg', sizes: { default: '100vw', xxs: '100vw', xs: '100vw' }, media: '(orientation: portrait)' }
        ],
        title: 'Image Light',
        alt: 'Image Light'
      },
      speedkitPictureDark: {
        sources: [
          { src: '/img/dark-landscape.jpg', sizes: { sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' }, media: '(orientation: landscape)' },
          { src: '/img/dark-portrait.jpg', sizes: { default: '100vw', xxs: '100vw', xs: '100vw' }, media: '(orientation: portrait)' }
        ],
        title: 'Image Dark',
        alt: 'Image Dark'
      }
    };
  }
};

</script>
