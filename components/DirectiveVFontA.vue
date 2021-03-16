<template>
  <section id="directive-v-font-a" class="directive-v-font-a">
    <p
      v-font="[
        $getFont('Open Sans'),
        $getFont('Open Sans', 700, 'italic', {selector: 'em strong, strong em'}),
        $getFont('Open Sans', 400, 'italic', {selector: 'em'}),
        $getFont('Open Sans', 700, 'normal', {selector: 'strong'})
      ]"
    >
      Font example "Open Sans" <strong>strong</strong>, <em>italic</em> and <strong><em>strongItalic</em></strong>
    </p>
  </section>
</template>

<style scoped>
.directive-v-font-a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

p {
  margin: 40px 0;
  font-size: 32px;
}

@media (min-width: 768px) {
  p {
    font-size: 42px;
  }
}
</style>
