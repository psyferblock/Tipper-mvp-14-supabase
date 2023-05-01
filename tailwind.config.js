// /** @type {import('tailwindcss').Config} */
module.exports = {
  // purge:[],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['var(--font-work)']
      // },
      colors:{
        ruby: "#ff5c5c",
        "ruby-tint":"#ffdede",
        "ruby-shade":"#691c32" ,
        amethyst:"#9e75ff",
        "amethyst-tint":"#ece3ff",
        "amethyst-shade":"#362c77",
        emerald:"#2cc4ae",
        "emerald-tint":"#d5f3ef",
        "emerald-shade":"#003947",
        pearl:"#fff2e5",
        diamond:"#ffffff",
        obsidian:"#151828"

      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  variants:{
    extend:{
      bacgroundColor:["active"],

    },
  },
  plugins: [],
}
