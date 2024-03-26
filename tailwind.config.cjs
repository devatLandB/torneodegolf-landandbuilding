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
				'sans-serif': ['Montserrat'],
				'sans': ['Montserrat'],
			},
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
};
