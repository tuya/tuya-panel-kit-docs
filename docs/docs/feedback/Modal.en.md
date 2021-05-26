---
title: Modal
desc: Modal is a mask layer.
---

## Code demo

### Basic Usage

```jsx
const [state, setState] = React.useState({ basicVisible: false });
const textStyle = {
  height: 64,
  color: '#333',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: '#fff',
};

<Modal
  visible={state.basicVisible}
  onMaskPress={() => setState({ basicVisible: false })}
>
  <TYText style={textStyle} text="I am Modal" />
</Modal>;
```

### Countdown popup layer

```jsx
const [state, setState] = React.useState({
  countDownVisible: false,
  countdown: 0,
});
const closeCountDownModal = () => setState({ countDownVisible: false });
const handleCountDownConfirm = ({ hour, minute }) =>
  setState({ countDownVisible: false, countdown: hour * 60 + minute });

<Modal.Countdown
  visible={state.countDownVisible}
  value={state.countdown}
  onMaskPress={closeCountDownModal}
  onCancel={closeCountDownModal}
  onConfirm={handleCountDownConfirm}
  title="Countdown"
  cancelText="Cancel"
  confirmText="Confirm"
  hourText="hour"
  minuteText="minute"
/>;
```

### Date selection popup

```jsx
const [state, setState] = React.useState({
  datePickerVisible: false,
  date: new Date(),
});
const closeDatePickerModal = () => setState({ datePickerVisible: false });
const handleDatePickerConfirm = date =>
  setState({ datePickerVisible: false, date });

<Modal.DatePicker
  visible={state.datePickerVisible}
  onMaskPress={closeDatePickerModal}
  onCancel={closeDatePickerModal}
  onConfirm={handleDatePickerConfirm}
  title="Birthday"
  cancelText="Cancel"
  confirmText="Confirm"
  hourText="hour"
  minuteText="minute"
  date={state.date}
  mode="datetime"
  minDate={new Date(1918, 0, 1, 0, 0, 0)}
  maxDate={new Date(2018, 11, 31, 23, 59, 59)}
/>;
```

### List selection pop-up layer (single selection)

```jsx
const [state, setState] = React.useState({
  listOneVisible: false,
  listValue: '1',
});
const handleListOneConfirm = value =>
  setState({ listOneVisible: false, value });
const closeListOneModal = () => setState({ listOneVisible: false });

<Modal.List
  visible={state.listOneVisible}
  dataSource={dataSource}
  type="radio"
  value={state.listValue}
  onMaskPress={closeListOneModal}
  onCancel={closeListOneModal}
  onConfirm={handleListOneConfirm}
/>;
```

### List selection pop-up layer (multiple selection)

```jsx
const [state, setState] = React.useState({
  listMoreVisible: false,
  listValues: ['1'],
});
const handleListMoreConfirm = value =>
  setState({ listMoreVisible: false, value });
const closeListMoreModal = () => setState({ listMoreVisible: false });

<Modal.List
  visible={state.listMoreVisible}
  dataSource={dataSource}
  type="switch"
  value={state.listValues}
  onMaskPress={closeListMoreModal}
  onCancel={closeListMoreModal}
  onConfirm={handleListMoreConfirm}
/>;
```

### Picker select pop-up layer

```jsx
const [state, setState] = React.useState({
  pickerOneVisible: false,
  pickerValue: '1',
});
const handlePickerOneConfirm = value =>
  setState({ pickerOneVisible: false, value });
const closePickerOneModal = () => setState({ pickerOneVisible: false });

<Modal.Picker
  visible={state.pickerOneVisible}
  dataSource={[
    {
      label: '1',
      value: '1',
    },
    {
      label: '2',
      value: '2',
    },
  ]}
  value={state.pickerValue}
  label="haha"
  onMaskPress={closePickerOneModal}
  onCancel={closePickerOneModal}
  onConfirm={handlePickerOneConfirm}
  onValueChange={value => console.log('onValueChange', value)}
/>;
```

## API

### Modal Common

<Props name="ModalProps"></Props>

### Modal.Countdown

<Props name="PopUpCountdownProps"></Props>

### Modal.DatePicker

<Props name="PopupDatePickerProps"></Props>

### Modal.List

<Props name="PopUpListProps"></Props>

### Modal.Picker

<Props name="PopupPickerProps"></Props>
