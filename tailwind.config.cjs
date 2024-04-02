const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
],
	theme: {
		extend: {
			colors: {
				'primary': '#002554',
			},
			fontFamily: {
				'sans': ['"Montserrat"', ...defaultTheme.fontFamily.sans],
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
};
