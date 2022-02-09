<template>
  <section id="directive-v-font-b" class="directive-v-font-b">
    <p
      v-font="[
        $getFont('Raleway'),
        $getFont('Raleway', 700, 'italic', {selector: 'em strong, strong em'}),
        $getFont('Raleway', 400, 'italic', {selector: 'em'}),
        $getFont('Raleway', 700, 'normal', {selector: 'strong'})
      ]"
    >
      Font example "Raleway". <strong>strong</strong>, <em>italic</em> and <strong><em>strongItalic</em></strong>
    </p>
  </section>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.directive-v-font-b {
  display: block;

  &::before {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    content: "";
  }
}

p {
  display: inline-block;
  margin: 40px 0;
  font-size: 32px;
}

@media (min-width: 768px) {
  p {
    font-size: 42px;
  }
}
</style>
