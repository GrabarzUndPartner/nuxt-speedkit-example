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

import speedkitLoader from 'nuxt-speedkit/loader';

export default {
  // import components: https://nuxt-speedkit.grabarzundpartner.dev/usage#import-components
  components: {
    Intro: speedkitLoader(() => import('@/components/Intro')),
    DirectiveVFontA: speedkitLoader(() => import('@/components/DirectiveVFontA')),
    DirectiveVFontB: speedkitLoader(() => import('@/components/DirectiveVFontB')),
    SpeedkitPicture: speedkitLoader(() => import('@/components/SpeedkitPicture')),
    SpeedkitIframe: speedkitLoader(() => import('@/components/SpeedkitIframe'))
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
