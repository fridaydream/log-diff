<h1 align="center">log-diff</h1>

<div align="center">

🏆 log detail compare!

</div>

<div align="center">

[![](https://img.shields.io/npm/dw/log-diff.svg)](https://www.npmjs.com/package/log-diff) [![npm package](https://img.shields.io/npm/v/log-diff.svg?style=flat-square?style=flat-square)](https://www.npmjs.com/package/log-diff) [![](https://img.shields.io/github/issues/fridaydream/log-diff.svg)](https://github.com/fridaydream/log-diff/issues) [![Dependencies](https://img.shields.io/david/fridaydream/log-diff.svg?style=flat-square)](https://david-dm.org/fridaydream/log-diff) [![DevDependencies](https://img.shields.io/david/dev/fridaydream/log-diff.svg?style=flat-square)](https://david-dm.org/fridaydream/log-diff?type=dev)

</div>

![展示效果](http://iuap-tenat-market.oss-cn-beijing.aliyuncs.com/0012881219992-9922-11/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_596cd906-40f8-4758-8c2c-9419ae040faa.png)

# API

log-diff 基于 antd 进行日志详情对比，参考 antd 的 form 表单。对后台返回的 2 种数据类型进行对比，支持嵌套和组合的方式对比。

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
></LogDiff>
```

---

| 子组件        | 描述     | 属性                         | 属性类型                           |
| ------------- | -------- | ---------------------------- | ---------------------------------- |
| LogDiff.Input | 文本比较 | label：标签 name：嵌套的参数 | label：string name：数组和多维数组 |
| LogDiff.Image | 图片比较 | label：标签 name：嵌套的参数 | label：string name：数组和多维数组 |
| LogDiff.Radio | 映射比较 | label：标签 name：嵌套的参数 | label：string name：数组           |
