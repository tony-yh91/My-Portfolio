// const plugin = require('tailwindcss/plugin')
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    colors: {
      textPrimary: 'var(--color-text-primary)',
      textSecondary: 'var(--color-text-secondary)',
      textNavPrimary: 'var(--color-text-nav-primary)',
      buttonPrimary: 'var(--color-button-primary)',
      buttonPrimaryHover: 'var(--color-button-primary-hover)',
      buttonSecondary: 'var(--color-button-secondary)',
      backgroundPrimary: 'var(--color-background-primary)',
      backgroundSecondary: 'var(--color-background-secondary)',
      borderPrimary: 'var(--color-border-primary)',
      borderSecondary: 'var(--color-border-secondary)',
      iconPrimary: 'var(--color-icon-background-primary)',
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
