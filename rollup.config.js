import { minify } from 'uglify-es'
import svelte from 'rollup-plugin-svelte'
import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/main.js',
  output: {
    file: 'public/assets/index.js',
    format: 'iife'
  },
  plugins: [
    babel({
      include: ["src/**/*.js"]
    }),
    svelte({
      // css: (css) => {
      //   css.write('public/assets/style.css')
      // }
    }),
    uglify({}, minify)
  ]
}

