module.exports = {
	config: {
		tailwindjs: "./tailwind.config.js",
		port: 9050
	},
	paths: {
		root: "./",
		src: {
			base: "./src",
			css: "./src/css",
			js: "./src/js",
			img: "./src/img"
		},
		dist: {
			base: "./dist",
			css: "./dist/css",
			js: "./dist/js",
			img: "./dist/img"
		},
		shopify: {
			base: "./../assets",
			liquid_sections: "./../sections",
			liquid_snippets: "./../snippets"
		},
		build: {
			base: "./build",
			css: "./build/css",
			js: "./build/js",
			img: "./build/img"
		}
	}
}