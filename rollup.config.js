import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';

let defaultPlugins = [
	svelte(),
	css({output:'bundle.css'}),
	resolve({browser:true, dedupe:['svelte']}),
	terser()
]

export default [{
	input: 'src/views/home/main.js',
	output: {
		sourcemap: false,
		format: 'iife',
		name: 'home',
		file: 'src/build/home/bundle.js'
	},
	plugins: defaultPlugins
},
{
	input: 'src/views/profile/main.js',
	output: {
		sourcemap: false,
		format: 'iife',
		name: 'profile',
		file: 'src/build/profile/bundle.js'
	},
	plugins: defaultPlugins
}]
