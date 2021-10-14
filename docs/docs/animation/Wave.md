---
group:
  title: 动画
title: Wave 波浪组件
demo: /animation/wave
---

<Desc>

`Wave` 是波浪组件，在 tuya-panel-kit@4.7.11 版本集成, 也可以单独安装 tuya-panel-animation-wave 使用

</Desc>

## 代码演示

### 波浪基本样式

```jsx
import { Wave } from 'tuya-panel-kit';
// import Wave from 'tuya-panel-animation-wave';

<Wave />
```

### 自定义波浪样式

```jsx
import { Wave } from 'tuya-panel-kit';
// import Wave from 'tuya-panel-animation-wave';

<Wave
  style={{ width: 120, height: 120, borderRadius: 60 }}
  H={60}
  waveParams={[
    { A: 30, T: 120, fill: '#333' },
    { A: 20, T: 100, fill: '#666' },
  ]}
  animated={true}
/>
```

## API 

<API src="../../../node_modules/tuya-panel-animation-wave/lib/index.d.ts" exports='["Wave"]'>