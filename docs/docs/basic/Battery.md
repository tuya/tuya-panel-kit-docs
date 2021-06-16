---
title: Battery 电池
desc: '`Battery` 是电池组件，一般用于需要展示电池百分比的场景。'
demo: /basic/battery
---

## 代码演示

### 基础使用

```jsx
<Battery value={60} />
```

### 本地主题

```jsx
<Battery value={40} size={30} theme={{ batteryColor: 'rgba(167,98,43,.5)' }} />
```

### 修改电量颜色分配规则

```jsx
const calcColor = (top, highColor, middleColor, lowColor) => {
  // 0-10%: 红色   10%-60%: 黑色    60%-100%: 绿色
  if (top <= 8.4 && top >= 3) {
    return highColor;
  } else if (top <= 15.6 && top > 8.4) {
    return middleColor;
  }
  return lowColor;
};
...
<Battery value={60} size={30} onCalcColor={calcColor} middleColor="#999" />
```

## API

<API name="BatteryProps"></API>
