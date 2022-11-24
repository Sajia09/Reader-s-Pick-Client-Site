/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{
    themes: [
      {
        doctortheme:{
          primary: '#be123c',
          secondary: '#e11d48',
          accent: "#f43f5e",
          neutral: "#fce7f3",
          "base-100": "#ffe4e6",
          info: "#0284c7",
          success: "#065f46",           
          warning: "#eab308",          
          error: "#b91c1c",
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}