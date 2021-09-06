---
title: SliderWithLine <Badge>4.6.0+</Badge>
desc: '`SliderWithLine` is a slider selector with a dividing line.'
demo: /data-entry/slider-with-line
---

## Code demo

### Slide the selector horizontally

```jsx
import { SliderWithLine } from 'tuya-panel-kit'

<SliderWithLine
  stepValue={1}
  onSlidingComplete={value => console.log(value, 'res')}
  style={{ marginBottom: 20 }}
  nounWidth={2}
  nounColor="#F84803"
  activeNounColor="#fff"
  backgroundColor="#E5E5E5"
  activeBackgroundColor="#F84803"
/>
<SliderWithLine
  stepValue={10}
  maxValue={80}
  minDisabled={false}
  onSlidingComplete={value => console.log(value, 'res')}
  nounColor="#F84803"
  activeNounColor="#fff"
  backgroundColor="#E5E5E5"
  activeBackgroundColor="#F84803"
/>
```

### Slide the selector vertically

```jsx
import { SliderWithLine, Utils } from 'tuya-panel-kit'

const { convertX: cx } = Utils.RatioUtils;

<SliderWithLine
  horizontal={false}
  onSlidingComplete={value => console.log(value, 'res')}
  nounColor="#F84803"
  activeNounColor="#fff"
  backgroundColor="#E5E5E5"
  activeBackgroundColor="#F84803"
  nounWidth={cx(14)}
  nounHeight={cx(1)}
  width={cx(60)}
  height={cx(327)}
  style={{ marginRight: 20 }}
/>
<SliderWithLine
  minDisabled={false}
  stepValue={10}
  horizontal={false}
  minValue={10}
  nounColor="#F84803"
  activeNounColor="#fff"
  backgroundColor="#E5E5E5"
  activeBackgroundColor="#F84803"
  maxValue={80}
  onSlidingComplete={value => console.log(value, 'res')}
  nounWidth={cx(14)}
  nounHeight={cx(1)}
  width={cx(60)}
  height={cx(327)}
/>
```

## API

<API name="SliderWithLineProps" />
