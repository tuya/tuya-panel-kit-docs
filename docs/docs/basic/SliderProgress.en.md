---
title: SliderProgress
desc: '`SliderProgress` is a sliding progress bar component that supports unilateral or bilateral drag to set the progress.'
demo: /basic/slider-progress
---

## Code demo

### Unilateral progress bar

```jsx
import { SliderProgress } from 'tuya-panel-kit'

const [state, set] = React.useState({ value: 6 });
const setState = value => set({ ...state, ...value });
...
<SliderProgress value={state.value} onValueChange={v => setState({ value: v })} />
```

### Bilateral progress bar

```jsx
import { SliderProgress } from 'tuya-panel-kit'

const [state, set] = React.useState({ values: [20, 90] });
const setState = value => set({ ...state, ...value });
...
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
