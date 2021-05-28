---
title: Popup 弹出层
desc: Popup 是一个包含了一系列常用弹出层的集合，用于显示一些业务相关的组件。
---

## 代码演示

### 倒计时弹出层

```jsx
const [state, setState] = React.useState({
  countdown: 0,
});

Popup.countdown({
  title: '倒计时',
  cancelText: '取消',
  confirmText: '确认',
  hourText: '小时',
  minuteText: '分钟',
  value: state.countdown,
  onMaskPress: ({ close }) => close(),
  onConfirm: (data, { close }) => {
    setState({ countdown: data.hour * 60 + data.minute });
    close();
  },
});
```

### 日期选择弹出层

```jsx
const [state, setState] = React.useState({
  date: new Date(),
});

Popup.datePicker({
  title: '生日',
  cancelText: '取消',
  confirmText: '确认',
  hourText: '小时',
  minuteText: '分钟',
  defaultDate: state.date,
  mode: 'datetime',
  minDate: new Date(1918, 0, 1, 0, 0, 0),
  maxDate: new Date(2018, 11, 31, 23, 59, 59),
  onMaskPress: ({ close }) => close(),
  onConfirm: (date, { close }) => {
    setState({ date });
    close();
  },
});
```

### 时间段选择弹出层

```jsx
const [state, setState] = React.useState({
  timerPickerValue: [0, 0],
});

Popup.timerPicker({
  title: '时间段选择',
  cancelText: '取消',
  confirmText: '确认',
  startTime: state.timerPickerValue[0],
  endTime: state.timerPickerValue[1],
  is12Hours: true,
  onMaskPress: ({ close }) => close(),
  onConfirm: ({ startTime, endTime }, { close }) => {
    setState({ timerPickerValue: [startTime, endTime] });
    close();
  },
});
```

### 数值选择弹出层

```jsx
const [state, setState] = React.useState({
  numberValue: 0,
});

Popup.numberSelector({
  title: '温度调节 (℃)',
  cancelText: '取消',
  confirmText: '确认',
  value: state.numberValue,
  min: 0,
  max: 50,
  onMaskPress: ({ close }) => close(),
  onConfirm: (value, { close }) => {
    setState({ numberValue: value });
    close();
  },
});
```

### 列表选择弹出层（单选）

```jsx
const [state, setState] = React.useState({
  listValue: '1',
});

Popup.list({
  type: 'radio',
  maxItemNum: 7,
  dataSource: [
    {
      key: '0',
      title: '0',
      value: '0',
    },
    {
      key: '1',
      title: '1',
      value: '1',
    },
    {
      key: '2',
      title: '2',
      value: '2',
    },
    {
      key: '3',
      title: '3',
      value: '3',
    },
  ],
  title: '单选',
  subTitle: '副标题',
  cancelText: '取消',
  value: state.listValue,
  footerType: 'singleCancel',
  onMaskPress: ({ close }) => close(),
  onSelect: (value, { close }) => {
    setState({ listValue: value });
    close();
  },
});
```

### 列表选择弹出层（多选）

```jsx
const [state, setState] = React.useState({
  listValues: ['1'],
});

Popup.list({
  type: 'switch',
  dataSource: [
    {
      key: '1',
      title: '1',
      value: '1',
    },
    {
      key: '2',
      title: '2',
      value: '2',
    },
  ],
  title: '多选',
  subTitle: '副标题',
  cancelText: '取消',
  confirmText: '确认',
  value: state.listValues,
  onMaskPress: ({ close }) => close(),
  onConfirm: (value, { close }) => {
    setState({ listValues: value });
    close();
  },
});
```

### Picker 选择弹出层（单选）

```jsx
const [state, setState] = React.useState({
  pickerValue: '1',
});

Popup.picker({
  dataSource: [
    {
      label: '1',
      value: '1',
    },
    {
      label: '2',
      value: '2',
    },
  ],
  title: 'Picker',
  cancelText: '取消',
  confirmText: '确认',
  value: state.pickerValue,
  label: 'haha',
  onMaskPress: ({ close }) => close(),
  onConfirm: (value, idx, { close }) => {
    setState({ pickerValue: value });
    close();
  },
});
```

### Picker 选择弹出层（多选）

```jsx
const [state, setState] = React.useState({
  pickerValues: ['b', '2', 'm'],
});

Popup.picker({
  dataSource: [
    [
      {
        label: 'a',
        value: 'a',
      },
      {
        label: 'b',
        value: 'b',
      },
      {
        label: 'c',
        value: 'c',
      },
    ],
    [
      {
        label: '1',
        value: '1',
      },
      {
        label: '2',
        value: '2',
      },
      {
        label: '3',
        value: '3',
      },
    ],
    [
      {
        label: 'm',
        value: 'm',
      },
      {
        label: 'x',
        value: 'x',
      },
      {
        label: 'd',
        value: 'd',
      },
    ],
  ],
  singlePicker: false,
  title: 'Picker',
  cancelText: '取消',
  confirmText: '确认',
  value: state.pickerValues,
  label: ['$', '%'],
  onMaskPress: ({ close }) => close(),
  onConfirm: (value, idx, { close }) => {
    setState({ pickerValues: value });
    close();
  },
});
```

### 自定义弹出层

```jsx
Popup.custom({
  content: (
    <View
      style={{
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
    >
      <Text style={{ fontSize: 36, color: '#000' }}>Custom Content</Text>
    </View>
  ),
  title: 'Custom',
  cancelText: '取消',
  confirmText: '确认',
  onMaskPress: ({ close }) => close(),
  onConfirm: (data, { close }) => {
    close();
  },
});
```

### Toast 弹出层

```jsx
Popup.toast({
  message: 'I am Toast',
});
```

## API

### Popup 通用

继承自 <HLink to="Modal#api">ModalProps</HLink>

<Props name="PopupProps"></Props>

### Popup.countdown

<Props name="PopUpCountdownProps" ></Props>

### Popup.datePicker

<Props name="PopupDatePickerProps" ></Props>

### Popup.list

<Props name="PopUpListProps" ></Props>

### Popup.numberSelector

<Props name="PopupNumberSelectorProps" ></Props>

### Popup.picker

<Props name="PopupPickerProps" ></Props>

### Popup.timerPicker

<Props name="PopupTimerPickerProps" ></Props>

### Popup.custom

<Props name="PopupCustomProps" ></Props>
