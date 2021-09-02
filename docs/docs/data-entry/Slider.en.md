---
title: Slider
desc: '`Slider` is a sliding selector, generally used inside the panel to process numerical dp points that can be reported and issued.'
demo: /data-entry/slider
---

## Code demo

### Horizontal slider - basic style

```jsx
import { Slider } from 'tuya-panel-kit'

const [value, setValue] = React.useState(25);

<Slider.Horizontal
  theme={{
    width: 318,
    height: 6,
    trackRadius: 3,
    trackHeight: 6,
    thumbSize: 26,
    thumbRadius: 26,
    thumbTintColor: '#FFF',
    minimumTrackTintColor: '#F84803',
    maximumTrackTintColor: '#E5E5E5',
  }}
  maximumValue={100}
  minimumValue={0}
  style={{ marginBottom: 10 }}
  value={value}
  onSlidingComplete={v => setValue(Math.round(v))}
/>
```

### Horizontal parcel type slider

```jsx
import { Slider } from 'tuya-panel-kit'

const [value, setValue] = React.useState(25);

<Slider.Horizontal
  theme={{
    width: 318,
    height: 36,
    trackRadius: 18,
    trackHeight: 36,
    thumbSize: 20,
    thumbRadius: 20,
    thumbTintColor: '#FFF',
    minimumTrackTintColor: '#E5E5E5',
    maximumTrackTintColor: '#E5E5E5',
  }}
  trackStyle={{
    height: 35,
    borderRadius: 18,
  }}
  maximumValue={100}
  minimumValue={0}
  thumbTouchSize={{ width: 36, height: 36 }}
  value={value}
  style={{ marginBottom: 10 }}
  type="parcel"
  renderMinimumTrack={() => (
    <View
      style={{
        height: 27,
        borderRadius: 15,
        backgroundColor: '#F84803',
        marginHorizontal: 3,
      }}
    />
  )}
  onSlidingComplete={v => setValue(Math.round(v))}
/>
```

### Horizontal parcel custom thumb Slider

```jsx
import { Slider } from 'tuya-panel-kit'

const [value, setValue] = React.useState(25);

<Slider.Horizontal
  theme={{
    width: 318,
    height: 46,
    trackRadius: 16,
    trackHeight: 46,
    thumbSize: 20,
    thumbRadius: 20,
    thumbTintColor: '#F84803',
    minimumTrackTintColor: '#E5E5E5',
    maximumTrackTintColor: '#E5E5E5',
  }}
  trackStyle={{
    height: 35,
    borderRadius: 8,
  }}
  value={value}
  maximumValue={100}
  minimumValue={0}
  style={{ marginBottom: 10 }}
  thumbTouchSize={{ width: 46, height: 46 }}
  thumbStyle={{
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
  }}
  type="parcel"
  renderMinimumTrack={() => (
    <View
      style={{
        height: 27,
        borderRadius: 8,
        backgroundColor: '#F84803',
        marginHorizontal: 4,
      }}
    />
  )}
  renderThumb={() => (
    <View
      style={{
        height: 14,
        borderRadius: 5.5,
        width: 3,
        backgroundColor: '#FFF',
      }}
    />
  )}
  onSlidingComplete={v => setValue(Math.round(v))}
/>
```

### Horizontal package with graduated slider

```jsx
import { Slider } from 'tuya-panel-kit'

const [value, setValue] = React.useState(25);

<Slider.Horizontal
  theme={{
    width: 318,
    height: 46,
    trackRadius: 16,
    trackHeight: 46,
    thumbSize: 20,
    thumbRadius: 20,
    thumbTintColor: '#F84803',
    minimumTrackTintColor: '#F84803',
    maximumTrackTintColor: '#E5E5E5',
  }}
  trackStyle={{
    height: 35,
    borderRadius: 8,
  }}
  value={value}
  style={{ marginBottom: 10 }}
  thumbTouchSize={{ width: 46, height: 46 }}
  stepValue={25}
  thumbStyle={{
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }}
  type="parcel"
  useNoun={true}
  maximumValue={100}
  minimumValue={0}
  minNounStyle={{ backgroundColor: 'white' }}
  maxNounStyle={{ backgroundColor: '#F84803' }}
  onSlidingComplete={v => setValue(Math.round(v))}
/>
```

### Horizontal graduated slider

```tsx
import { Slider } from 'tuya-panel-kit'

const [value, setValue] = React.useState(25);

<Slider.Horizontal
  theme={{
    width: 318,
    height: 6,
    trackRadius: 3,
    trackHeight: 6,
    thumbSize: 26,
    thumbRadius: 26,
    thumbTintColor: '#FFF',
    minimumTrackTintColor: '#F84803',
    maximumTrackTintColor: '#E5E5E5',
  }}
  trackStyle={{ height: 12, borderRadius: 8 }}
  value={value}
  stepValue={25}
  useNoun={true}
  thumbStyle={{ height: 22, width: 22 }}
  minNounStyle={{
    backgroundColor: 'white',
    height: 5,
    width: 5,
    borderRadius: 2.5,
  }}
  maxNounStyle={{
    backgroundColor: '#F84803',
    height: 5,
    width: 5,
    borderRadius: 2.5,
  }}
  type="parcel"
  maximumValue={100}
  minimumValue={0}
  onValueChange={value => setValue(value)}
/>
```

### Vertical slider

```jsx
import { Slider } from 'tuya-panel-kit'

const [value, setValue] = React.useState(25);

{/* 1 */}
<Slider.Vertical
  theme={{
    thumbSize: 26,
    thumbRadius: 26,
    thumbTintColor: '#FFF',
    minimumTrackTintColor: '#E5E5E5',
    maximumTrackTintColor: '#F84803',
  }}
  maximumValue={100}
  minimumValue={0}
  reverseValue={true}
  trackStyle={{ width: 6, height: 200, borderRadius: 3 }}
  value={value}
  onSlidingComplete={v => setValue(Math.round(v))}
/>
{/* 2 */}
<Slider.Vertical
  theme={{
    thumbSize: 20,
    thumbRadius: 20,
    thumbTintColor: '#FFF',
    maximumTrackTintColor: '#E5E5E5',
    minimumTrackTintColor: '#E5E5E5',
  }}
  type="parcel"
  maximumValue={100}
  minimumValue={0}
  reverseValue={true}
  trackStyle={{ width: 35, height: 200, borderRadius: 18 }}
  style={{ marginHorizontal: 15 }}
  value={value}
  thumbTouchSize={{ width: 36, height: 36 }}
  renderMinimumTrack={() => (
    <View
      style={{
        width: 27,
        borderRadius: 15,
        backgroundColor: '#F84803',
        marginVertical: 3,
        flex: 1,
      }}
    />
  )}
  onSlidingComplete={v => setValue(Math.round(v))}
/>
{/* 3 */}
<Slider.Vertical
  theme={{
    maximumTrackTintColor: '#E5E5E5',
    minimumTrackTintColor: '#E5E5E5',
  }}
  type="parcel"
  trackStyle={{ width: 35, height: 200, borderRadius: 8 }}
  style={{ marginHorizontal: 15 }}
  value={value}
  maximumValue={100}
  minimumValue={0}
  reverseValue={true}
  thumbTouchSize={{ width: 46, height: 46 }}
  thumbStyle={{
    width: 14,
    height: 3,
    borderRadius: 5.5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }}
  renderMinimumTrack={() => (
    <View
      style={{
        width: 27,
        borderRadius: 8,
        backgroundColor: '#F84803',
        marginVertical: 4,
        flex: 1,
      }}
    />
  )}
  renderThumb={() => (
    <View
      style={{
        height: 3,
        borderRadius: 5.5,
        width: 14,
        backgroundColor: '#FFF',
        flex: 1,
      }}
    />
  )}
  onSlidingComplete={v => setValue(Math.round(v))}
/>
{/* 4 */}
<Slider.Vertical
  theme={{
    thumbSize: 20,
    thumbRadius: 20,
    thumbTintColor: '#F84803',
    minimumTrackTintColor: '#F84803',
    maximumTrackTintColor: '#E5E5E5',
  }}
  type="parcel"
  maximumValue={100}
  minimumValue={0}
  reverseValue={true}
  trackStyle={{ width: 35, height: 200, borderRadius: 8 }}
  thumbTouchSize={{ width: 46, height: 46 }}
  style={{ marginHorizontal: 15 }}
  value={value}
  thumbStyle={{
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }}
  useNoun={true}
  stepValue={25}
  minNounStyle={{ backgroundColor: 'white' }}
  maxNounStyle={{ backgroundColor: '#F84803' }}
  onSlidingComplete={v => setValue(Math.round(v))}
/>
{/* 5 */}
<Slider.Vertical
  theme={{
    thumbSize: 26,
    thumbRadius: 26,
    thumbTintColor: '#FFF',
    minimumTrackTintColor: '#F84803',
    maximumTrackTintColor: '#E5E5E5',
  }}
  trackStyle={{ width: 12, height: 200, borderRadius: 8 }}
  style={{ marginHorizontal: 15 }}
  value={value}
  maximumValue={100}
  minimumValue={0}
  reverseValue={true}
  useNoun={true}
  stepValue={25}
  thumbStyle={{ height: 22, width: 22 }}
  minNounStyle={{ backgroundColor: 'white', height: 5, width: 5, borderRadius: 2.5 }}
  type="parcel"
  maxNounStyle={{
    backgroundColor: '#F84803',
    height: 5,
    width: 5,
    borderRadius: 2.5,
  }}
  onSlidingComplete={v => setValue(Math.round(v))}
/>
```

## API

<API name="SliderProps" />
