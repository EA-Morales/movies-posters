module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'netflix-primary': '#db0000',
				'netflix-secondary': '#564d4d',
				'netflix-tertiary': '#831010',
				'netflix-background': '#000000',
				'netflix-text': '#ffffff',
			},
			aspectRatio: {
				'2/3': '2 / 3',
			},
		},
	},
	plugins: [],
};
