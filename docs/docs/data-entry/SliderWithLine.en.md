---
title: SliderWithLine
desc: '`SliderWithLine` is a slider selector with a dividing line.'
demo: /data-entry/slider-with-line
---

## Code demo

### Slide the selector horizontally

```jsx
const [value, setValue] = React.useState(20);

 <SliderWithLine
  stepValue={1}
  onSlidingComplete={value => console.log(value, 'res')}
  style={{ marginBottom: 20 }}
  // @ts-ignore
  nounWidth={4}
/>
<SliderWithLine
  stepValue={10}
  // @ts-ignore
  maxValue={80}
  minDisabled={false}
  onSlidingComplete={value => console.log(value, 'res')}
  activeNounColor="#f00"
/>
```

### Slide the selector vertically

```jsx
const [value, setValue] = React.useState(20);
<SliderWithLine
  horizontal={false}
  // onSlidingStart={value => console.log(value, 'res')}
  onSlidingComplete={value => console.log(value, 'res')}
  // @ts-ignore
  activeNounColor="#f00"
  nounWidth={cx(14)}
  nounHeight={cx(1)}
  width={cx(60)}
  height={cx(327)}
  style={{ marginRight: 20 }}
/>
<SliderWithLine
  // @ts-ignore
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
