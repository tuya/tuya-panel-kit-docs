---
group:
  title: Basic
nav:
  title: Docs
title: BrickButton
desc: '`BrickButton` is enriched on the basis of the original Button function.'
demo: /basic/brick-button
---

## Code demo

### Text BrickButton

```jsx
import { BrickButton } from 'tuya-panel-kit'

<BrickButton
  text="button"
  wrapperStyle={{ backgroundColor: '#F84803' }}
/>
```

### Gradient background button

```jsx
import { BrickButton } from 'tuya-panel-kit'

<BrickButton
  text="button"
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
