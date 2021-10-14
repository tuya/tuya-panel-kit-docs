---
group:
  title: Presentation
title: Progress
desc: Progress is a commonly used component that can control the current progress with gestures, or it can only be used for display.
demo: /presentation/progress
---

## Code demo

### Basic usage

```jsx
import { Progress } from 'tuya-panel-kit'

<Progress
  foreColor={{
    '0%': '#1381FB',
    '100%': '#00C36C',
  }}
  style={{ width: 100, height: 100 }}
  needMaxCircle={true}
  startColor="#1381FB"
  thumbRadius={4}
  value={50}
  startDegree={135}
  andDegree={270}
/>
```

### Spacing form

```jsx
import { Progress } from 'tuya-panel-kit'

<Progress.Space strokeWidth={2} scaleNumber={70} style={{ width: 100, height: 100 }} />
```

### Double drag form

```jsx
import { Progress } from 'tuya-panel-kit'

<Progress.Double
  foreColor={{
    '0%': '#1381FB',
    '100%': '#00C36C',
  }}
  startDegree={170}
  style={{ width: 100, height: 100 }}
/>
```

### Combination form

```jsx
import { Progress } from 'tuya-panel-kit'

<Progress.Compose style={{ width: 100, height: 100 }} />
```

## API

### Progress

extends [ViewProps](https://reactnative.dev/docs/view#props)

<API name="ProgressProps"></API>

### Progress.Space

<API name="SpaceProps"></API>

### Progress.Double

<API name="DoubleProps"></API>

### Progress.Compose

<API name="ComposeProps"></API>
