import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy'
import css from 'rollup-plugin-css-only';

// In and outputs.
let baseInput = 'src/views/'
let baseOutput = 'src/build/'
let fileNameInput = 'main.js'
let fileNameOutput = 'bundle.js'

// Pages to be built.
// Names must be unique.
let inputs = ['home', 'profile']

// Default plugins that will be run for every page.
let defaultPlugins = [
	svelte(),
	css({ output: 'bundle.css' }),
	resolve({ browser: true, dedupe: ['svelte'] }),
	terser()
]

let defaultExport = []

// Generate a list of every page config.
for (let i = inputs.length; i--;) {
	defaultExport[defaultExport.length] = {
		input: baseInput + inputs[i] + '/' + fileNameInput,
		output: {
			sourcemap: false,
			format: 'iife',
			name: inputs[i],
			file: baseOutput + inputs[i] + '/' + fileNameOutput
		},
		plugins: [
			...defaultPlugins,
			copy({ targets: [{
				src: baseOutput + 'template.html',
				dest: baseOutput + inputs[i],
				rename: 'index.html'
			}]})
		]
	}
}

export default defaultExport
