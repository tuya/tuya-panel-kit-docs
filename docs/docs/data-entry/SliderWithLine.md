---
title: SliderWithLine 滑动选择器 <Badge>4.6.0+</Badge>
desc: '`SliderWithLine` 是带刻度的滑动选择器。'
demo: /data-entry/slider-with-line
---

## 代码演示

### 水平滑动选择器

```jsx
 <SliderWithLine
  stepValue={1}
  onSlidingComplete={value => console.log(value, 'res')}
  style={{ marginBottom: 20 }}
  nounWidth={4}
/>
<SliderWithLine
  stepValue={10}
  maxValue={80}
  minDisabled={false}
  onSlidingComplete={value => console.log(value, 'res')}
  activeNounColor="#f00"
/>
```

### 竖直滑动选择器

```jsx
<SliderWithLine
  horizontal={false}
  // onSlidingStart={value => console.log(value, 'res')}
  onSlidingComplete={value => console.log(value, 'res')}
  activeNounColor="#f00"
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
