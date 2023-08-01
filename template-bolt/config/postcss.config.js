const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './node_modules/@hyas/*/layouts/**/*.html',
        './themes/my-bolt-theme/layouts/**/*.html',
        './content/**/*.html',
        './content/**/*.md',
      ],
      safelist: [
        'lazyloaded',
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
        'h1',
        'h2',
        'h3',
        'img-fluid',
        'lazyload',
        'blur-up',
        'input',
        'type',
        'checkbox',
        'dt',
        'dd',
        ...whitelister([
          './node_modules/@hyas/core/assets/scss/app.scss',
          './node_modules/@hyas/bolt-core/assets/scss/components/_images.scss',
        ]),
      ],
    }),
  ],
}
