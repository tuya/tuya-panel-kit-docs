---
group:
  title: 通用
title: Button 按钮
---

# Button 按钮

## 简介

`Button` 是一个最常用的组件，用于一些纯文本、图片、Icon 等需要点击的场合。

## 代码演示

### 纯文本按钮

```jsx
<Button text="点我一下" />
```

### 纯 Icon 按钮

```jsx
<Button icon="power" />
```

### 带 Icon 文字的按钮

```jsx
<Button icon="selected" iconSize={24} text="文字" />
```

### 图标按钮（带背景渐变）

```jsx
<Button
  textDirection="right"
  size={40}
  icon="selected"
  iconSize={24}
  iconColor="#fff"
  text="文字"
  background={{
    x1: '20%',
    y1: '20%',
    x2: '30%',
    y2: '100%',
    stops: {
      '0%': '#ffff00',
      '100%': '#000',
    },
  }}
/>
```

## API

继承自 [TouchableOpacityProps](https://reactnative.dev/docs/touchableopacity#props)

<Props name="ButtonProps"></Props>
