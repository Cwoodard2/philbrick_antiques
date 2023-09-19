/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				navGrey: "#2C2A2A"
			},
			animation: {
				inOut: 'fadeIn 2s forwards linear'
			},
			keyframes: {
				inOut: {
					'0%': { transform: 'translateY(-10vw)' },
					'100%': { transform: 'translateY(0vw)' },
				  },
			}
		},
	},
	plugins: [],
}
