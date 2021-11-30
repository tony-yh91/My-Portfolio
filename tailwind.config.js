// const plugin = require('tailwindcss/plugin')
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: 'var(--primary-color)',
      secondary: 'var(--secondary-color)',
      accent: 'var(--accent-color)',
      textPrimary: 'var(--text-primary-color)',
      buttonColor: 'var(--text-btn-color)',
      linkColor: 'var(--text-link-color)',
      bg: 'var(--bg-color)',
      bgBorder: 'var(--glass-card-color)',
    },
  },
  variants: {},
  // plugins: [
  //   plugin(function ({ addVariant, e, postcss }) {
  //     addVariant('firefox', ({ container, separator }) => {
  //       const isFirefoxRule = postcss.atRule({
  //         name: '-moz-document',
  //         params: 'url-prefix()',
  //       })
  //       isFirefoxRule.append(container.nodes)
  //       container.append(isFirefoxRule)
  //       isFirefoxRule.walkRules((rule) => {
  //         rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`
  //       })
  //     })
  //   }),
  //   require('@tailwindcss/forms'),
  // ],
}
