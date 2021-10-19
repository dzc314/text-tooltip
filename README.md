# text-tooltip
## 说明
text-tooltip是一个基于element-ui的tooltip组件封装的文本溢出省略，并启用tooltip悬浮提示的小组件，且可支持多行文本溢出隐藏。

## 通过NPM安装
```
npm i text-tooltip -S
```

### 引入组件
```
import 'text-tooltip'
import 'text-tooltip/dist/text-tooltip.css'
```

### 使用
```
<!-- 单行文本 -->
<TextTooltip
  :content="content"
/>
<!-- 多行文本 -->
<TextTooltip
  :content="content"
  :line="3"
/>
```

### 组件props属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content|文本内容 | String | 无|
| line| 行数 | Number | 1 |
| placement|气泡框位置， 可选：<br>`top`  `top-left` `top-right` `left` `left-top` `left-bottom` <br>`right` `right-top` `right-bottom` `bottom` `bottom-left` `bottom-right` | String | top|
| popperClass| tooltip的悬浮样式类 | String | 无 |