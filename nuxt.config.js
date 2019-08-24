const purgecss = require('@fullhuman/postcss-purgecss')({

// Specify the paths to all of the template files in your project 
content: [
    './src/**/*.html',
    './src/**/*.vue',
    // etc.
],

// Include any special characters you're using in this regular expression
defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=BioRhyme:400,700|Space+Mono:400,400i,700&display=swap' }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn

      plugins: {
        // Disable a plugin by passing false as value 
        'tailwindcss': {},
        'autoprefixer': {},
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    },
    extend (config, ctx) {
    }
  }
}
