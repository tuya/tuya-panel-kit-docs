---
title: SliderProgress 滑动进度条
desc: '`SliderProgress` 是一个滑动进度条组件，支持单边或双边拖动进行设置进度。'
demo: /basic/slider-progress
---

## 代码演示

### 单边进度条

```jsx
import { SliderProgress } from 'tuya-panel-kit'

const [state, set] = React.useState({ value: 6 });
const setState = value => set({ ...state, ...value });

<SliderProgress value={state.value} onValueChange={v => setState({ value: v })} />
```

### 双边进度条

```jsx
import { SliderProgress } from 'tuya-panel-kit'

const [state, set] = React.useState({ values: [20, 90] });
const setState = value => set({ ...state, ...value });

<SliderProgress
  value={state.values}
  style={{ width: 300, height: 33 }}
  onValueChange={({ minValue, maxValue }) => {
    setState({
      values: [minValue, maxValue],
    });
  }}
/>
```

## API

<API name="SliderProgressProps"></API>
