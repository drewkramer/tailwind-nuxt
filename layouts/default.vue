<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
@font-face {
  font-family: 'Space Grotesk';
  src:  url('~@/static/fonts/SpaceGrotesk-semibold.woff2') format('woff2'),
        url('~@/static/fonts/SpaceGrotesk-semibold.woff') format('woff');
}

html,
body {
  @apply font-body;
}

h1,
h2,
h3 {
  @apply font-display;
}
</style>
