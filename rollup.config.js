import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/react-flag-pack.cjs.js',
    format: 'cjs'
  },
  external: [
    'react', 
    'react-proptypes'
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}