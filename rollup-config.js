import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify';

export default {
	entry: 'src/aot.ts',
	dest: 'aot/build.js', // output a single application bundle
	sourceMap: true,
	sourceMapFile: 'aot/build.js.map',
	format: 'iife',
	onwarn: function(warning) {
		// Skip certain warnings
		// should intercept ... but doesn't in some rollup versions
		if ( warning.code === 'THIS_IS_UNDEFINED' ) { return; }
		// console.warn everything else
		console.warn( 'onwarn: ' + warning.message );
	},
	plugins: [
		nodeResolve({jsnext: true, module: true}),
		commonjs({
			include: 'node_modules/rxjs/**',
		}),
	uglify()
	]
};
