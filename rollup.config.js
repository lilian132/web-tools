import buble from 'rollup-plugin-buble'

export default {
  entry: 'index.js',
  dest: 'dist/tools.js',
  format: 'umd',
  moduleName: 'tools',
  exports: 'named',
  plugins: [buble()]
}
