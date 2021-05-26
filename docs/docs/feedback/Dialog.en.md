---
group:
  title: Feedback
title: Dialog
desc: Dialog is a collection containing a series of commonly used dialog boxes, used to display some Native-like components.
---

## Code demo

### Alert Dialog

```jsx
Dialog.alert({
  title: 'Title',
  subTitle: 'Sub Title',
  confirmText: 'Confirm',
  onConfirm: (data, { close }) => {
    close();
  },
});
```

### Confirm Dialog

```jsx
Dialog.confirm({
  title: 'Title',
  subTitle: 'Sub Title',
  cancelText: 'Cancel',
  confirmText: 'Confirm',
  onConfirm: (data, { close }) => {
    close();
  },
});
```

### Prompt Dialog（UnControlled）

```jsx
const [state, setState] = React.useState({
  promptUnControlled: '',
});

Dialog.prompt({
  title: 'UnControlled Prompt',
  subTitle: 'Sub Title',
  cancelText: 'Cancel',
  confirmText: 'Confirm',
  defaultValue: state.promptUnControlled,
  placeholder: 'Password',
  onConfirm: (text, { close }) => {
    setState({ promptUnControlled: text });
    close();
  },
});
```

### Prompt Dialog（Controlled）

```jsx
const [state, setState] = React.useState({
  promptControlled: '',
});

Dialog.prompt({
  title: 'Controlled Prompt',
  subTitle: 'Sub Title',
  cancelText: 'Cancel',
  confirmText: 'Confirm',
  value: state.promptControlled,
  placeholder: 'Password',
  onChangeText: text => {
    // Use value props to make prompt a controlled component and control the content of its input box
    const t = +text;
    if (typeof t === 'number' && !Number.isNaN(t)) {
      return text;
    }
  },
  onConfirm: (text, { close }) => {
    console.log('controlled text :', text);
    setState({ promptControlled: text });
    close();
  },
});
```

### Single Selection Checkbox Dialog

```jsx
const [state, setState] = React.useState({
  checkValueRadio: 'code1',
});

Dialog.checkbox({
  title: 'Required',
  cancelText: 'Cancel',
  confirmText: 'Confirm',
  type: 'radio',
  value: state.checkValueRadio,
  dataSource: [
    {
      value: 'code1',
      title: 'Sensor selection',
    },
    {
      value: 'code2',
      title: 'Room sensor calibration',
    },
    {
      value: 'code3',
      title: 'Floor sensor calibration',
      iconSize: 24,
      Icon: 'warning',
      reverse: true,
      hideOnUnselect: true,
    },
  ],
  onConfirm: (value, { close }) => {
    setState({ checkValueRadio: value });
    close();
  },
});
```

### Multi Selection Checkbox Dialog

```jsx
const [state, setState] = React.useState({
  checkValueSwitch: ['code1'],
});

Dialog.checkbox({
  title: 'Required',
  cancelText: 'Can'ce'l',
  confirmText: 'Confirm',
  type: 'switch',
  value: state.checkValueSwitch,
  dataSource: [
    {
      value: 'code1',
      title: 'Sensor selection',
    },
    {
      value: 'code2',
      title: 'Room sensor calibration',
    },
    {
      value: 'code3',
      title: 'Floor sensor calibration',
    },
    {
      value: 'code4',
      title: 'Adaptive function',
    },
    {
      value: 'code5',
      title: 'Frost protection function',
      iconSize: 20,
      Icon: 'warning',
      reverse: true,
      hideOnUnselect: true,
    },
    {
      value: 'code6',
      title: 'Test the scroll function',
      reverse: true,
    },
  ],
  onConfirm: (value, { close }) => {
    setState({ checkValueSwitch: value });
    close();
  },
});
```

### List Dialog

```jsx
Dialog.list({
  title: 'Ttile',
  subTitle: 'Content',
  dataSource: new Array(6).fill(1).map((_, idx) => ({
    title: idx === 0 ? 'Click for Close' : `option${idx}`,
    onPress: () => {
      idx === 0 && Dialog.close();
      console.log('Press', idx);
    },
  })),
  cancelText: 'Cancel',
  confirmText: 'Confirm',
  onConfirm: (data, { close }) => {
    close();
  },
});
```

### Custom Diglog

```jsx
Dialog.custom({
  title: 'Custom',
  cancelText: 'Cancel',
  confirmText: 'Confirm',
  content: (
    <View
      style={{ height: 300, alignItems: 'center', justifyContent: 'center' }}
    >
      <Text style={{ fontSize: 32, color: '#000' }}>Custom Content</Text>
    </View>
  ),
  onConfirm: (data, { close }) => {
    close();
  },
});
```

## API

### Dialog.alert

<Props name="DialogAlertProps"></Props>

### Dialog.checkbox

<Props name="DialogCheckboxProps"></Props>

### Dialog.confirm

<Props name="DialogConfirmProps"></Props>

### Dialog.list

<Props name="DialogListProps"></Props>

### Dialog.prompt

<Props name="DialogPromptProps"></Props>

### Dialog.custom

<Props name="DialogCustomProps"></Props>
