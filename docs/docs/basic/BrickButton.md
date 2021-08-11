---
group:
  title: 通用
nav:
  title: 文档
title: BrickButton 块状按钮
desc: '`BrickButton` 是在原 Button 功能基础上进行的丰富。'
demo: /basic/brick-button
---

## 代码演示

### 文字块状按钮

```jsx
import { BrickButton } from 'tuya-panel-kit'

<BrickButton
  text="按钮"
  wrapperStyle={{ backgroundColor: '#F84803' }}
/>
```

### 渐变背景按钮

```jsx
import { BrickButton } from 'tuya-panel-kit'

<BrickButton
  text="按钮"
  loadingSize="large"
  type="primaryGradient"
  background={{
    x1: '0%',
    y1: '0%',
    x2: '0%',
    y2: '100%',
    stops: {
      '0%': '#F97E05',
      '100%': '#F84803',
    },
  }}
/>
```

## API

<API name="BrickButtonProps"></API>
