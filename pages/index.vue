<template>
<div>
  <div class="border-top"></div>
  <div class="border-right"></div>
  <div class="border-bottom"></div>
  <div class="Menu fixed top-0 left-0 bottom-0 flex flex-col justify-between items-center border-r-8 border-l-8 border-black">
    <div class="Sitetitle pt-8 text-lg uppercase tracking-wider"><nuxt-link to="/" class="no-underline text-black">Drew Kramer</nuxt-link></div>
    <button class="absolute transform-center flex justify-center"><span class="text-xs uppercase tracking-widest">Menu</span></button>
    <div class="Pagetitle pb-8 uppercase tracking-wider text-right overflow-hidden"><span>A Simple Palate</span></div>
  </div>
  <div class="Content min-h-screen">
    <div class="Content__grid">
      <div>
        <div class="px-12">
          <div class="container container--small mt-20 mb-16 px-10 mx-auto">
            <div class="mb-8 uppercase text-sm tracking-wider">
              <nuxt-link to="#" class="text-gray-600 hover:text-black">Work</nuxt-link>
              <span class="px-2 text-gray-600">></span>
              <span class="text-black">A Simple Palate</span>
            </div>
            <h1 class="text-4xl text-black mb-3">
              A Simple Palate
            </h1>
            <p class="text-md text-gray-700">
              A Simple Palate is a food blog created and run by my wife Bethany where she develops and shares delicious recipes. The goal of this design was to create an engaging blog site that was user friendly and had a memorable brand experience. This site was developed from the ground up on Wordpress and is an ongoing project. 
            </p>
          </div>
          <div class="container mx-auto">
              <img src="https://picsum.photos/1440/900" alt="picsum" width="1440" height="900" loading="lazy" class="shadow-xl">
          </div>
          <div class="container container--small my-16 px-10 mx-auto">
            <p class="text-md text-gray-700">
              A Simple Palate is a food blog created and run by my wife Bethany where she develops and shares delicious recipes. The goal of this design was to create an engaging blog site that was user friendly and had a memorable brand experience. This site was developed from the ground up on Wordpress and is an ongoing project. 
            </p>
          </div>
          <div class="container mx-auto">
            <img src="https://picsum.photos/1440/900" alt="picsum" width="1440" height="900" loading="lazy" class="shadow-xl">
            <img src="https://picsum.photos/1440/900" alt="picsum" width="1440" height="900" loading="lazy" class="shadow-xl">
          </div>
          <div class="container flex justify-between w-auto mx-auto mt-16 border-t border-black">
            <div></div>
            <div class="my-12 self-end">
              <h5 class="uppercase tracking-wider text-xs text-gray-700 mb-1">Next</h5>
              <nuxt-link to="#">A Simple Palate</nuxt-link>
            </div>
          </div>
        </div>
        <div class="Footer bg-black flex flex-row justify-center px-4 py-8">
          <nuxt-link to="#" class="text-white my-2 mx-6">Instagram</nuxt-link>
          <nuxt-link to="#" class="text-white my-2 mx-6">Instagram</nuxt-link>
          <nuxt-link to="#" class="text-white my-2 mx-6">Instagram</nuxt-link>
        </div>
      </div>
      <div class="Support pt-20 px-8 pb-8 border-l-8 border-r-8 border-black">
        <div class="fixed">
          <div class="mb-8">
            <h5 class="uppercase tracking-wider text-xs text-gray-700 mb-1">Project Name</h5>
            <p>A Simple Palate</p>
          </div>
          <div class="mb-8">
            <h5 class="uppercase tracking-wider text-xs text-gray-700 mb-1">Type</h5>
            <p>Website, Blog</p>
          </div>
          <div class="mb-8">
            <h5 class="uppercase tracking-wider text-xs text-gray-700 mb-1">Role</h5>
            <p>Design, Code</p>
          </div>
          <div class="mb-8">
            <h5 class="uppercase tracking-wider text-xs text-gray-700 mb-1">URL</h5>
            <p><a href="https://asimplepalate.com" target="_blank">asimplepalate.com</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
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

.Content {
  margin-left: 100px;
}

.Content__grid {
  display: grid;
  grid-template-columns: 1fr 260px;
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

.transform-center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.container--small {
  max-width: 800px;
}

img + img {
  @apply mt-12;
}

.Support {
  width: 260px;
  max-width: 100%;
}
</style>
