
<h1 align="center">log-diff</h1>

<div align="center">

🏆 log detail compare!

</div>


[![](https://img.shields.io/npm/dw/log-diff.svg)](https://www.npmjs.com/package/log-diff) [![npm package](https://img.shields.io/npm/v/log-diff.svg?style=flat-square?style=flat-square)](https://www.npmjs.com/package/log-diff) [![](https://img.shields.io/github/issues/fridaydream/log-diff.svg)](https://github.com/fridaydream/log-diff/issues) [![Dependencies](https://img.shields.io/david/fridaydream/log-diff.svg?style=flat-square)](https://david-dm.org/fridaydream/log-diff) [![DevDependencies](https://img.shields.io/david/dev/fridaydream/log-diff.svg?style=flat-square)](https://david-dm.org/fridaydream/log-diff?type=dev)


```tsx | inline
import React from 'react';
import GitHubButton from 'react-github-btn';

export default () => (
  <div>
    <h1 align="center">Ant Design Pro</h1>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
      }}
    >
      <GitHubButton
        href="https://github.com/ant-design/ant-design-pro-layout"
        data-color-scheme="no-preference: light; light: light; dark: light;"
        data-size="large"
        data-show-count="true"
        aria-label="Star ant-design/ant-design-pro-layout on GitHub"
      >
        Star
      </GitHubButton>
      <div
        style={{
          margin: '0 8px',
        }}
      />
      <GitHubButton
        href="https://github.com/ant-design/ant-design-pro-layout/issues"
        data-color-scheme="no-preference: light; light: light; dark: light;"
        data-size="large"
        data-show-count="true"
        aria-label="Issue ant-design/ant-design-pro-layout on GitHub"
      >
        Issue
      </GitHubButton>
    </div>

    <div align="center">
      开箱即用的中台前端/设计解决方案。此仓库是 Ant Design Pro 的 layout,
      是为了方便快速的使用 layout 而开发。
    </div>
    <br />
    <img
      style={{
        maxWidth: '100%',
      }}
      src="https://gw.alipayobjects.com/zos/antfincdn/raCkHezMns/Kapture%2525202019-11-25%252520at%25252019.15.12.gif"
    />
  </div>
);
```
# API

log-diff基于antd进行日志详情对比，参考antd的form表单。对后台返回的2种数据类型进行对比，支持嵌套和组合的方式对比。

```
# 安装log-diff
npm i log-diff -S
```

```tsx | pure
// LogDiff注入初始值
<LogDiff
  data={{
    before: {},
    after: {},
    constants: {},
  }}
>
</LogDiff>
```

---

| 子组件 | 描述 | 属性 | 属性类型 |
| --- | --- | --- | --- |
| LogDiff.Input | 文本比较 | label：标签 name：嵌套的参数 | label：string name：数组和多维数组 |
| LogDiff.Image | 图片比较 | label：标签 name：嵌套的参数 | label：string name：数组和多维数组 |
| LogDiff.Radio | 映射比较 | label：标签 name：嵌套的参数 | label：string name：数组 |

