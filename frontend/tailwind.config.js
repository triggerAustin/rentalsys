/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    	colors:{
		green:{
			custom: '#297f70',
		},
	},
	width:{
		90: '22rem',
	},
    },
  },
  plugins: [],
}

