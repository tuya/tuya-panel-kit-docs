---
group:
  title: 动画
  order: 4
title: Diffusion 水波纹组件
desc: '`Diffusion` 是水波纹组件，在 tuya-panel-kit@4.7.11 版本集成, 也可以单独安装 tuya-panel-animation-diffusion 使用'
demo: /animation/diffusion
---

## 代码演示

### 基础样式

```jsx
import { Diffusion } from 'tuya-panel-kit';
// import Diffusion from 'tuya-panel-animation-diffusion';

<Diffusion />
```

### 自定义子组件

```jsx
import { View } from 'react-native'
import { Diffusion } from 'tuya-panel-kit';
// import Diffusion from 'tuya-panel-animation-diffusion';

<Diffusion color="#0ff" number={3}>
  <View style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: '#0ff' }} />
</Diffusion>
```

## API 

<API src="../../../node_modules/tuya-panel-animation-diffusion/lib/index.d.ts" exports='["Diffusion"]'>