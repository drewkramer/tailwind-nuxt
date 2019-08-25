<template>
  <div>
    <div class="border-top"></div>
    <div class="border-right"></div>
    <div class="border-bottom"></div>
    <Menu/>
    <nuxt/>
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'

export default {
  components: {
    Menu
  }
}
</script>

<style>
html,
body {
  @apply font-body;
}

.border-top,
.border-right,
.border-bottom {
  @apply fixed;
  background: #000;
}

.border-top {
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
}

.border-right {
    top: 0;
    right: 0;
    height: 100%;
    width: 8px;
}

.border-bottom {
    bottom: 0;
    right: 0;
    height: 8px;
    width: 100%;
}

h1,
h2,
h3 {
  @apply font-sans;
}

.transform-center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.container--small {
  max-width: 800px;
}

.Content {
  margin-left: 100px;
}

.Content__grid {
  display: grid;
  grid-template-columns: 1fr 260px;
}

img + img {
  @apply mt-12;
}

.Support {
  width: 260px;
  max-width: 100%;
}
</style>
