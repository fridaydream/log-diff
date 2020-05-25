
<h1 align="center">log-diff</h1>

<div align="center">

🏆 log detail compare!

</div>

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

