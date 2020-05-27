---
title: API
order: 0
sidemenu: false
nav:
  title: API
  order: 0
  key: 0

hero:
  title: log-diff
  desc: 🏆 log detail compare!.
  actions:
    - text: 快速开始 →
      link: /example

footer: Open-source MIT Licensed | Copyright © 2020-present
---

<br/>

<div align="center">

[![](https://img.shields.io/npm/dw/log-diff.svg)](https://www.npmjs.com/package/log-diff) [![npm package](https://img.shields.io/npm/v/log-diff.svg?style=flat-square?style=flat-square)](https://www.npmjs.com/package/log-diff) [![](https://img.shields.io/github/issues/fridaydream/log-diff.svg)](https://github.com/fridaydream/log-diff/issues) [![Dependencies](https://img.shields.io/david/fridaydream/log-diff.svg?style=flat-square)](https://david-dm.org/fridaydream/log-diff) [![DevDependencies](https://img.shields.io/david/dev/fridaydream/log-diff.svg?style=flat-square)](https://david-dm.org/fridaydream/log-diff?type=dev)

</div>

```tsx | inline
import React from 'react';
import GitHubButton from 'react-github-btn';

export default () => (
  <div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
      }}
    >
      <GitHubButton
        href="https://github.com/fridaydream/log-diff"
        data-color-scheme="no-preference: light; light: light; dark: light;"
        data-size="large"
        data-show-count="true"
        aria-label="Star log-diff on GitHub"
      >
        Star
      </GitHubButton>
      <div
        style={{
          margin: '0 8px',
        }}
      />
      <GitHubButton
        href="https://github.com/fridaydream/log-diff/issues"
        data-color-scheme="no-preference: light; light: light; dark: light;"
        data-size="large"
        data-show-count="true"
        aria-label="Issue log-diff on GitHub"
      >
        Issue
      </GitHubButton>
    </div>
  </div>
);
```

# API

log-diff 基于 antd 进行日志详情对比，参考 antd 的 form 表单。对后台返回的 2 种数据类型进行对比，支持嵌套和组合的方式对比。

```
# 安装log-diff
npm i log-diff -S
```

---

```tsx | pure
// LogDiff注入初始值
<LogDiff
  data={{
    before: {},
    after: {},
    constants: {},
  }}
></LogDiff>
```

---

| 子组件        | 描述     | 属性                         | 属性类型                           |
| ------------- | -------- | ---------------------------- | ---------------------------------- |
| LogDiff.Input | 文本比较 | label：标签 name：嵌套的参数 | label：string name：数组和多维数组 |
| LogDiff.Image | 图片比较 | label：标签 name：嵌套的参数 | label：string name：数组和多维数组 |
| LogDiff.Radio | 映射比较 | label：标签 name：嵌套的参数 | label：string name：数组           |
