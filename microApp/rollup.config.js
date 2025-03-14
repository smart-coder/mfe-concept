import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.jsx',
  output: {
    file: 'dist/bundle.js',
    format: 'es',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    }
  },
  external: ['react', 'react-dom'],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      presets: ['@babel/preset-react'],
      babelHelpers: 'bundled',
    }),
  ],
};