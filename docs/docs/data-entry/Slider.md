---
title: Slider 滑动选择器
desc: Slider 是滑动选择器，一般在面板内部用于处理可上报下发的数值型 dp 点。
---

## 代码演示

### 水平滑动条 - 基础样式

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

### 水平滑动条 - 自定义按钮

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

### 竖直滑动条

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

<Props name="SliderProps" />
