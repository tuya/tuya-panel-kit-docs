---
group:
  title: Data Entry
title: PickerView
desc: PickerView is a multiple-choice container view，Be sure to specify a width and height for PickerView, otherwise it will not be rendered。
demo: /data-entry/picker-view
---

## Code demo

> A `PickerView` represents a selector. In `PickerView`, `selectedValue` represents the currently selected value, and `onValueChange` is the callback function after the value slide changes.

### Basice Usage

```jsx
import { Picker } from 'tuya-panel-kit'

const languages = ['杭州', '温州', '宁波', '绍兴', '嵊州', '金华'];
const [value, setValue] = React.useState('宁波');

<Picker
  style={{
    width: 375,
    height: 225,
  }}
  selectedValue={value}
  onValueChange={value => setValue(value)}
>
  {languages.map(value => (
    <Picker.Item key={value} value={value} label={value} />
  ))}
</Picker>
```

### Multiple column selector

```jsx
import { Picker } from 'tuya-panel-kit'

const weeks = [
  {
    key: 'week',
    values: [
      { value: '1', label: 'Monday' },
      { value: '2', label: 'Tuesday' },
      { value: '3', label: 'Wednesday' },
      { value: '4', label: 'Thursday' },
      { value: '5', label: 'Friday' },
      { value: '6', label: 'Saturday' },
      { value: '7', label: 'Sunday' },
    ],
  },
  {
    key: 'day',
    values: [
      { value: '1', label: 'Morning' },
      { value: '2', label: 'Afternoon' },
    ],
  },
];
const [day, setDay] = React.useState(['3', '1']);

<View>
  {weeks.map((pItem, pIndex) => (
    <Picker
      key={pItem.key}
      style={{
        width: 200,
        height: 225,
      }}
      selectedValue={day[pIndex]}
    >
      {pItem.values.map(item => (
        <Picker.Item
          key={`${pItem.key}_${item.value}`}
          value={item.value}
          label={item.label}
        />
      ))}
    </Picker>
  ))}
</View>
```

## API

### PickerView (IOS)

extends [PickerPropsIOS](https://reactnative.dev/docs/picker#props)

<API name="PickerViewIOSProps" />

### PickerView (Android)

<API name="PickerViewProps"></API>
