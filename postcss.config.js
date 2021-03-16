//ENABLE FOR DEVELOPMENT
// module.exports = {
//     plugins: [
//         require('tailwindcss')('./tailwind.config.js'),
//         require('autoprefixer'),
//     ],
// };

const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');

module.exports = {
	plugins: [
		require('tailwindcss')('./tailwind.config.js'),
		require('autoprefixer'),
		cssnano({
			preset: 'default'
		}),
		purgecss({
			content: [
				'./src/**/*.html',
				'.src/index.html',
			],
			defaultExtractor: content => content.match(/[A-Za-z0-9-_:./\!$?]+/g) || []
		})
	]
}



