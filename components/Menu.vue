<template>
  <div class="Menu fixed top-0 left-0 bottom-0 flex flex-col justify-between items-center border-r-8 border-l-8 border-black">
    <div class="Sitetitle pt-8 text-lg uppercase tracking-wider">
        <nuxt-link to="/" class="no-underline text-black">Drew Kramer</nuxt-link>
    </div>
    <button class="absolute transform-center flex justify-center">
        <span class="text-xs uppercase tracking-widest">Menu</span>
    </button>
    <div class="Pagetitle pb-8 uppercase tracking-wider text-right overflow-hidden">
        <span>A Simple Palate</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Menu'
}
</script>

<style scoped>
.Menu {
width: 100px;
}

.Menu button span:before {content: "";position: absolute;top: 0;left: 0;width: 100%;background: black;height: 4px;}

.Menu button span:after {content: "";position: absolute; bottom: 0;left: 0;width: 100%;background: black;height: 4px;}

.Menu button {
    height:  36px;
    text-align: center;
    justify-content: center;
}

.Menu button:hover span:before {
    top: 2px;
}

.Menu button:hover span:after {
    bottom: 2px;
}

.Sitetitle,
.Pagetitle {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

.Pagetitle {
  max-height: 200px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>