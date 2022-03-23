import pkg from './package.json';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  server: {
    host: getHost(),
    port: getPort()
  },

  build: {

    transpile: ['@nuxt/image', 'image-meta'],

    postcss: {
      plugins: {
        'postcss-nesting': {},
        'postcss-object-fit-images': {}
      }
    }

  },

  generate: {
    dir: process.env.DIST_PATH
  },

  router: {
    base: getBasePath()
  },

  plugins: [
    { src: '@/plugins/polyfills.js', mode: 'client' }
  ],

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  speedkit: {
    fonts: [{
      family: 'Quicksand',
      fallback: ['sans-serif'],
      variances: [
        {
          style: 'normal',
          weight: 300,
          sources: [
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-300.woff', type: 'woff' },
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-300.woff2', type: 'woff2' }
          ]
        }, {
          style: 'normal',
          weight: 400,
          sources: [
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-regular.woff', type: 'woff' },
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-regular.woff2', type: 'woff2' }
          ]
        }, {
          style: 'normal',
          weight: 500,
          sources: [
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-500.woff', type: 'woff' },
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-500.woff2', type: 'woff2' }
          ]
        }, {
          style: 'normal',
          weight: 600,
          sources: [
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-600.woff', type: 'woff' },
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-600.woff2', type: 'woff2' }
          ]
        }, {
          style: 'normal',
          weight: 700,
          sources: [
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-700.woff', type: 'woff' },
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-700.woff2', type: 'woff2' }
          ]
        }
      ]
    }, {
      family: 'Open Sans',
      fallback: ['sans-serif'],
      variances: [
        {
          style: 'normal',
          weight: 300,
          sources: [
            { src: '@/assets/fonts/open-sans-v18-latin/open-sans-v18-latin-300.woff', type: 'woff' },
            { src: '@/assets/fonts/open-sans-v18-latin/open-sans-v18-latin-300.woff2', type: 'woff2' }
          ]
        }, {
          style: 'italic',
          weight: 300,
          sources: [
            { src: '@/assets/fonts/open-sans-v18-latin/open-sans-v18-latin-300italic.woff', type: 'woff' },
            { src: '@/assets/fonts/open-sans-v18-latin/open-sans-v18-latin-300italic.woff2', type: 'woff2' }
          ]
        }, {
          style: 'normal',
          weight: 400,
          sources: [
            { src: '@/assets/fonts/open-sans-v18-latin/open-sans-v18-latin-regular.woff', type: 'woff' },
            { src: '@/assets/fonts/open-sans-v18-latin/open-sans-v18-latin-regular.woff2', type: 'woff2' }
          ]
        }, {
          style: 'italic',
          weight: 400,
          sources: [
            { src: '@/assets/fonts/open-sans-v18-latin/open-sans-v18-latin-italic.woff', type: 'woff' },
            { src: '@/assets/fonts/open-sans-v18-latin/open-sans-v18-latin-italic.woff2', type: 'woff2' }
          ]
        }, {
          style: 'normal',
          weight: 700,
          sources: [
            { src: '@/assets/fonts/open-sans-v18-latin/open-sans-v18-latin-700.woff', type: 'woff' },
            { src: '@/assets/fonts/open-sans-v18-latin/open-sans-v18-latin-700.woff2', type: 'woff2' }
          ]
        }, {
          style: 'italic',
          weight: 700,
          sources: [
            { src: '@/assets/fonts/open-sans-v18-latin/open-sans-v18-latin-700italic.woff', type: 'woff' },
            { src: '@/assets/fonts/open-sans-v18-latin/open-sans-v18-latin-700italic.woff2', type: 'woff2' }
          ]
        }
      ]
    }, {
      family: 'Raleway',
      fallback: ['sans-serif'],
      variances: [
        {
          style: 'normal',
          weight: 300,
          sources: [
            { src: '@/assets/fonts/raleway-v19-latin/raleway-v19-latin-300.woff', type: 'woff' },
            { src: '@/assets/fonts/raleway-v19-latin/raleway-v19-latin-300.woff2', type: 'woff2' }
          ]
        }, {
          style: 'italic',
          weight: 300,
          sources: [
            { src: '@/assets/fonts/raleway-v19-latin/raleway-v19-latin-300italic.woff', type: 'woff' },
            { src: '@/assets/fonts/raleway-v19-latin/raleway-v19-latin-300italic.woff2', type: 'woff2' }
          ]
        }, {
          style: 'normal',
          weight: 400,
          sources: [
            { src: '@/assets/fonts/raleway-v19-latin/raleway-v19-latin-regular.woff', type: 'woff' },
            { src: '@/assets/fonts/raleway-v19-latin/raleway-v19-latin-regular.woff2', type: 'woff2' }
          ]
        }, {
          style: 'italic',
          weight: 400,
          sources: [
            { src: '@/assets/fonts/raleway-v19-latin/raleway-v19-latin-italic.woff', type: 'woff' },
            { src: '@/assets/fonts/raleway-v19-latin/raleway-v19-latin-italic.woff2', type: 'woff2' }
          ]
        }, {
          style: 'normal',
          weight: 700,
          sources: [
            { src: '@/assets/fonts/raleway-v19-latin/raleway-v19-latin-700.woff', type: 'woff' },
            { src: '@/assets/fonts/raleway-v19-latin/raleway-v19-latin-700.woff2', type: 'woff2' }
          ]
        }, {
          style: 'italic',
          weight: 700,
          sources: [
            { src: '@/assets/fonts/raleway-v19-latin/raleway-v19-latin-700italic.woff', type: 'woff' },
            { src: '@/assets/fonts/raleway-v19-latin/raleway-v19-latin-700italic.woff2', type: 'woff2' }
          ]
        }
      ]
    }]
  },

  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ],

  modules: [
    'nuxt-speedkit'
  ]

};

function getBasePath () {
  return process.env.npm_config_base || process.env.BASE_PATH || '/';
}

function getHost () {
  return process.env.npm_config_host || process.env.HOST || 'localhost';
}

function getPort () {
  return process.env.npm_config_port || process.env.PORT || 3000;
}
