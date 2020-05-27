export default {
  entry: 'src/index.tsx',
  esm: {
    type: 'rollup',
    importLibToEs: true,
  },
  cjs: 'babel',
  extraBabelPlugins: [['import', { libraryName: 'antd', style: true }]],
};
