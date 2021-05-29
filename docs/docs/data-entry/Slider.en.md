---
title: Slider
desc: '`Slider` is a sliding selector, generally used inside the panel to process numerical dp points that can be reported and issued.'
---

## Code demo

### Horizontal slider - basic style

```jsx
const [value, setValue] = React.useState(20);

<Slider.Horizontal
  style={{ width: 295 }}
  maximumValue={100}
  minimumValue={0}
  value={value}
  maximumTrackTintColor="rgba(0, 0, 0, 0.1)"
  minimumTrackTintColor="#4397D7"
  onSlidingComplete={v => setValue(Math.round(v))}
/>;
```

### Horizontal slider - custom button

```jsx
const [value, setValue] = React.useState(20);
const sliderView = {
  width: 28,
  height: 28,
  backgroundColor: '#f00',
  borderRadius: 14,
  alignItems: 'center',
  justifyContent: 'center',
};

<Slider.Horizontal
  style={{ width: 295 }}
  maximumValue={100}
  minimumValue={0}
  value={value}
  maximumTrackTintColor="rgba(0, 0, 0, 0.1)"
  minimumTrackTintColor="#f00"
  onSlidingComplete={v => setValue(Math.round(v))}
  renderThumb={() => (
    <View style={sliderView}>
      <TYText text={value} color="#fff" />
    </View>
  )}
/>;
```

### Vertical slider

```jsx
const [value, setValue] = React.useState(20);
const sliderView = {
  width: 28,
  height: 28,
  backgroundColor: '#f00',
  borderRadius: 14,
  alignItems: 'center',
  justifyContent: 'center',
};

<View>
  <Slider.Vertical
    style={{ height: 200 }}
    value={value}
    minimumValue={0}
    maximumValue={100}
    minimumTrackTintColor="#4A90E2"
    onSlidingComplete={v => setValue(Math.round(v))}
  />
  <Slider.Vertical
    style={{ height: 200, marginLeft: 90 }}
    value={value}
    minimumValue={0}
    maximumValue={100}
    maximumTrackTintColor="#f00"
    minimumTrackTintColor="#dfdfdf"
    reverseValue={true}
    onSlidingComplete={v => setValue(Math.round(v))}
    renderThumb={() => (
      <View style={sliderView}>
        <TYText text={value} color="#fff" />
      </View>
    )}
  />
</View>;
```

## API

<API name="SliderProps" />
