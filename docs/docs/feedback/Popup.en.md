---
title: Popup
desc: 'Popup is a collection that contains a series of commonly used pop-up layers to display some business-related components.'
demo: /feedback/popup
---

## Code demo

### Countdown popup layer

```jsx
import { Popup } from 'tuya-panel-kit'

const [state, setState] = React.useState({
  countdown: 0,
});

Popup.countdown({
  title: 'Countdown',
  cancelText: 'Cancel',
  confirmText: 'Confirm',
  hourText: 'hour',
  minuteText: 'minute',
  value: state.countdown,
  onMaskPress: ({ close }) => close(),
  onConfirm: (data, { close }) => {
    setState({ countdown: data.hour * 60 + data.minute });
    close();
  },
});
```

### Date selection popup

```jsx
import { Popup } from 'tuya-panel-kit'

const [state, setState] = React.useState({
  date: new Date(),
});

Popup.datePicker({
  title: 'Birthday',
  cancelText: 'Cancel',
  confirmText: 'Confirm',
  hourText: 'hour',
  minuteText: 'minute',
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

### Time period selection pop-up layer

```jsx
import { Popup } from 'tuya-panel-kit'

const [state, setState] = React.useState({
  timerPickerValue: [0, 0],
});

Popup.timerPicker({
  title: 'Time period selection pop-up layer',
  cancelText: 'Cancel',
  confirmText: 'Confirm',
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

### Number selection pop-up layer

```jsx
import { Popup } from 'tuya-panel-kit'

const [state, setState] = React.useState({
  numberValue: 0,
});

Popup.numberSelector({
  title: 'Temperature adjustment (℃)',
  cancelText: 'Cancel',
  confirmText: 'Confirm',
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

### List selection pop-up layer (single selection)

```jsx
import { Popup } from 'tuya-panel-kit'

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
  title: 'single selection',
  subTitle: 'Sub Title',
  cancelText: 'Cancel',
  value: state.listValue,
  footerType: 'singleCancel',
  onMaskPress: ({ close }) => close(),
  onSelect: (value, { close }) => {
    setState({ listValue: value });
    close();
  },
});
```

### List selection pop-up layer (multiple selection)

```jsx
import { Popup } from 'tuya-panel-kit'

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
  title: 'multiple selection',
  subTitle: 'Sub Title',
  cancelText: 'Cancel',
  confirmText: 'Confirm',
  value: state.listValues,
  onMaskPress: ({ close }) => close(),
  onConfirm: (value, { close }) => {
    setState({ listValues: value });
    close();
  },
});
```

### Picker select pop-up layer (single choice)

```jsx
import { Popup } from 'tuya-panel-kit'

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
  cancelText: 'Cancel',
  confirmText: 'Confirm',
  value: state.pickerValue,
  label: 'haha',
  onMaskPress: ({ close }) => close(),
  onConfirm: (value, idx, { close }) => {
    setState({ pickerValue: value });
    close();
  },
});
```

### Picker select pop-up layer (multiple choice)

```jsx
import { Popup } from 'tuya-panel-kit'

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
  cancelText: 'Cancel',
  confirmText: 'Confirm',
  value: state.pickerValues,
  label: ['$', '%'],
  onMaskPress: ({ close }) => close(),
  onConfirm: (value, idx, { close }) => {
    setState({ pickerValues: value });
    close();
  },
})
```

### Costom Popup

```jsx
import { Popup } from 'tuya-panel-kit'

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
  cancelText: 'Cancel',
  confirmText: 'Confirm',
  onMaskPress: ({ close }) => close(),
  onConfirm: (data, { close }) => {
    close();
  },
});
```

### Toast Popup

```jsx
import { Popup } from 'tuya-panel-kit'

Popup.toast({
  message: 'I am Toast',
});
```

## API

### Popup Common

extends <HLink to="Modal#api">ModalProps</HLink>

<API name="PopupProps" ></API>

### Popup.countdown

<API name="PopUpCountdownProps" ></API>

### Popup.datePicker

<API name="PopupDatePickerProps" ></API>

### Popup.list

extends [TYFlatListProps]()

<API name="PopUpListProps" ></API>

### Popup.numberSelector

<API name="PopupNumberSelectorProps" ></API>

### Popup.picker

<API name="PopupPickerProps" ></API>

### Popup.timerPicker

<API name="PopupTimerPickerProps" ></API>

### Popup.custom

<API name="PopupCustomProps" ></API>