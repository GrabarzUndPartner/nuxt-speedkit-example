<template>
  <speedkit-layer class="info-layer">
    <div v-font="[$getFont('Quicksand'), $getFont('Quicksand', 400, 'normal', {selector: 'button'})]">
      <p>
        Sorry, but you will have a limited user experience due to a…
      </p>
      <ul v-font="$getFont('Quicksand', 700, 'normal')">
        <li id="nuxt-speedkit-message-nojs">
          disabled javascript
        </li>
        <li id="nuxt-speedkit-message-unsupported-browser">
          outdated browser
        </li>
        <li id="nuxt-speedkit-message-outdated-device">
          outdated device
        </li>
        <li id="nuxt-speedkit-message-slow-connection">
          slow connection
        </li>
      </ul>
      <div class="info-layer-buttons">
        <button id="nuxt-speedkit-button-init-nojs" class="button-primary">
          <label for="nuxt-speedkit-speedkit-layer-close">
            Continue without Javascript, but with activated fonts.
          </label>
        </button>
        <button id="nuxt-speedkit-button-init-font" class="button-secondary" onclick="window.__NUXT_SPEEDKIT_FONT_INIT__ = true;">
          <label for="nuxt-speedkit-speedkit-layer-close">
            Continue only with fonts
          </label>
        </button>
        <button id="nuxt-speedkit-button-init-app" class="button-primary" onclick="window.__NUXT_SPEEDKIT_AUTO_INIT__ = true;">
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
    return this.$speedkit.head({
      noscript: [
        getStyleDescription('#nuxt-speedkit-speedkit-layer-content { animation-delay: initial !important; } #nuxt-speedkit-speedkit-layer-content > div { animation-delay: initial !important; }', true)
      ],
      __dangerouslyDisableSanitizers: ['noscript']
    });
  }
};
</script>

<style lang="postcss">
#nuxt-speedkit-speedkit-layer-content {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 40%);
  opacity: 0;
  animation-name: fade-in;
  animation-duration: 0.2s;
  animation-delay: 4s;
  backdrop-filter: blur(calc(7 / 16 * 1em));
  animation-fill-mode: forwards;

  & > div {
    padding: 10px;
    color: #e83162;
    text-align: center;
    background: #fff;
    box-shadow: 0 0 calc(10 / 16 * 1em) rgb(0 0 0 / 60%);
    transform: translateY(-100%);
    animation-name: fall-down;
    animation-duration: 0.2s;
    animation-delay: 4s;
    animation-fill-mode: forwards;
  }
}

.nuxt-speedkit-speedkit-layer-visible #nuxt-speedkit-speedkit-layer-content {
  &,
  & > div {
    animation-delay: initial;
  }
}

.info-layer {
  & label {
    cursor: pointer;
  }

  & ul {
    padding: 0;
    margin: 20px 0;
  }

  & ul > li {
    display: none;
  }
}

.info-layer-buttons {
  margin: calc(10 / 16 * 1em) 0;

  & > * {
    margin: 0 calc(5 / 16 * 1em);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fall-down {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0%);
  }
}

</style>
