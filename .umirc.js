export default {
  title: 'log-diff',
  mode: 'site',
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
  navs: [
    null,
    { title: 'GitHub', path: 'https://github.com/fridaydream/log-diff' },
  ],
  hash: true,
  base: '/log-diff',
  publicPath: '/log-diff/',
  exportStatic: {},
};
