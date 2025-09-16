/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#014174',
        secondary: '#0a8ac6',
        accent: '#0a8ac6',
        'clean-energy': '#f7931e',
        'river-blue': '#3a506b',
      },
    },
  },
  plugins: [],
}