<template>
  <div>
    <Nuxt />
    <!-- critical prop for critical components: https://nuxt-speedkit.grabarzundpartner.dev/usage#critical-prop-for-critical-components -->
    <InfoLayer critical />
  </div>
</template>

<script>

// Usage SpeedkitLayer: https://nuxt-speedkit.grabarzundpartner.dev/components/speedkit-layer
import InfoLayer from '@/components/InfoLayer';

export default {
  components: { InfoLayer }
}
</script>

<style>
html {
  box-sizing: border-box;
  font-size: 16px;
  background: #e83162;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 0 15px;
  margin: 20px 0;
  text-align: center;
  background: #fff;
}

section:first-child {
  margin-top: 0;
}

section:last-child {
  margin-bottom: 0;
}

.button--primary, .button--secondary {
  appearance: none;
  border:none;
  background: none;
  cursor: pointer;
  font-size: 16px;
}

.button--primary {
  display: inline-block;
  padding: 10px 30px;
  color: #e83162;
  text-decoration: none;
  border: 1px solid #e83162;
  border-radius: 4px;
}

.button--primary:hover {
  color: #fff;
  background-color: #e83162;
}

a {
  color: #e83162;
}

.button--secondary {
  display: inline-block;
  padding: 10px 30px;
  margin-left: 15px;
  color: #e83162;
  text-decoration: none;
  border: 1px solid #e83162;
  border-radius: 4px;
}

.button--secondary:hover {
  color: #fff;
  background-color: #e83162;
}
</style>
