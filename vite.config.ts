/// <reference types="vitest"/>

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
      alias: {
          '@': resolve(__dirname, 'src'),
      },
  },
  server: {
      open: true,
  },
  test: {
      globals: true,
  },
  build: {
    outDir: './dist',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VueEl',
      formats: ['es','cjs','umd','iife'],
      fileName: (format: string) => `vue-el.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: [
        'vue',
        '@obewds/vue-component-helpers',
        '@obewds/vue-validators',
      ],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          vue: 'Vue',
          '@obewds/vue-component-helpers': 'VueComponentHelpers',
          '@obewds/vue-validators': 'VueValidators',
        },
        //sourcemap: true,
      },
    },
  },
})
