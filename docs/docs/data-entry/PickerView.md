---
title: PickerView 选择器
desc: PickerView 是一个多选一的容器视图，请务必给 PickerView 指定一个宽高，否则无法渲染。
demo: /data-entry/picker-view
---

## 代码演示

> 一个 `PickerView` 即代表一个选择器，在 `PickerView` 中，`selectedValue` 代表当前选中的值，`onValueChange` 是值滑动改变后的回调函数。

### 基础选择器

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

### 多列选择器

```jsx
import { Picker } from 'tuya-panel-kit'

const weeks = [
  {
    key: 'week',
    values: [
      { value: '1', label: '星期一' },
      { value: '2', label: '星期二' },
      { value: '3', label: '星期三' },
      { value: '4', label: '星期四' },
      { value: '5', label: '星期五' },
      { value: '6', label: '星期六' },
      { value: '7', label: '星期日' },
    ],
  },
  {
    key: 'day',
    values: [
      { value: '1', label: '上午' },
      { value: '2', label: '下午' },
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

继承自 [PickerPropsIOS](https://reactnative.dev/docs/picker#props)

<API name="PickerViewIOSProps"></API>

### PickerView (Android)

<API name="PickerViewProps"></API>
