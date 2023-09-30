/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				navGrey: "#2C2A2A"
			},
			animation: {
				inOut: 'inOut 0.5s forwards linear',
				slideToWidth: 'fadeIn 0.5s forwards linear'
			},
			keyframes: {
				inOut: {
					'0%': { transform: 'translateY(-10vw)' },
					'100%': { transform: 'translateY(0vw)' },
				  },
				  slideToWidth: {
					'0%': { maxHeight: '0px'},
					'100%': { maxHeight: '100px'}
				  }
			}
		},
	},
	plugins: [],
}
