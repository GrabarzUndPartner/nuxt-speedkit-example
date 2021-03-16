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

<style scoped>
.directive-v-font-b {
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
