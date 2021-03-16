<template>
  <speedkit-layer class="info-layer">
    <div v-font="[$getFont('Quicksand'), $getFont('Quicksand', 400, 'normal', {selector: 'button'})]">
      <p>
        Sorry, but you will have a limited user experience due to a…
      </p>
      <ul v-font="$getFont('Quicksand', 700, 'normal')">
        <li id="nuxt-speedkit__message__nojs">
          disabled javascript
        </li>
        <li id="nuxt-speedkit__message__unsupported-browser">
          outdated browser
        </li>
        <li id="nuxt-speedkit__message__outdated-device">
          outdated device
        </li>
        <li id="nuxt-speedkit__message__slow-connection">
          slow connection
        </li>
      </ul>
      <div class="info-layer__buttons">
        <button class="button--primary" id="nuxt-speedkit__button__init-nojs">
          <label for="nuxt-speedkit__speedkit-layer__close">
            Continue without Javascript, but with activated fonts.
          </label>
        </button>
        <button class="button--secondary" id="nuxt-speedkit__button__init-font" onclick="window.__NUXT_SPEEDKIT_FONT_INIT__ = true;">
          <label for="nuxt-speedkit__speedkit-layer__close">
            Continue only with fonts
          </label>
        </button>
        <button class="button--primary" id="nuxt-speedkit__button__init-app" onclick="window.__NUXT_SPEEDKIT_AUTO_INIT__ = true;">
            Continue with fully working app
        </button>
      </div>
    </div>
  </speedkit-layer>
</template>

<script>

import SpeedkitLayer from 'nuxt-speedkit/components/SpeedkitLayer';
import { getStyleDescription } from 'nuxt-speedkit/utils/description';

export default {
  components: {
    SpeedkitLayer
  },
  data () {
    return {
      hydrate: false
    };
  },
  head () {
    return {
      noscript: [
        getStyleDescription('.info-layer > div { animation-delay: initial !important; }', true)
      ],
      __dangerouslyDisableSanitizers: ['noscript']
    };
  }
};
</script>

<style>
#nuxt-speedkit__speedkit-layer__content {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 25%);
  opacity: 0;
  animation-name: fade-in;
  animation-duration: 0.2s;
  /* animation-delay: 3s; */
  backdrop-filter: blur(calc(7 / 16 * 1em));
  animation-fill-mode: forwards;
}
#nuxt-speedkit__speedkit-layer__content  > div {
  padding: 10px;
  color: #e83162;
  text-align: center;
  background: #fff;
  box-shadow: 0 0 calc(10 / 16 * 1em) rgb(0 0 0 / 60%);
  transform: translateY(-100%);
  animation-name: fall-down;
  animation-duration: 0.2s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
}

.nuxt-speedkit__speedkit-layer--visible  >>> #nuxt-speedkit__speedkit-layer__content {
  animation-delay: initial;
}

.info-layer label {
  cursor: pointer;
}

.info-layer ul {
  padding: 0;
  margin: 20px 0;
}

.info-layer ul > li {
  display: none;
}

.info-layer__buttons {
  margin: calc(10 / 16 * 1em) 0;
}
.info-layer__buttons > * {
  margin: 0 calc(5 / 16 * 1em);
}

@keyframes fade-in {
  100% {
    opacity: 1;
  }
}

@keyframes fall-down {
  100% {
    transform: translateY(0%);
  }
}

</style>
