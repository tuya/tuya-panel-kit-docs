---
group:
  title: 通用
  order: 2
nav:
  title: 文档
title: BrickButton 块状按钮
desc: BrickButton 是在原 Button 功能基础上进行的丰富。
---

## 代码演示

### 文字块状按钮

```jsx
<BrickButton text="loading" loading={true} />
```

### 渐变背景按钮

```jsx
<BrickButton
  loading={true}
  loadingSize="large"
  type="primaryGradient"
  background={{
    x1: '0%',
    y1: '0%',
    x2: '0%',
    y2: '100%',
    stops: {
      '0%': 'red',
      '30%': 'blue',
      '100%': 'yellow',
    },
  }}
/>
```

## API

<Props name="BrickButtonProps"></Props>
