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
}
