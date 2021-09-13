---
group:
  title: 反馈
title: Dialog 对话框
desc: Dialog 是一个包含了一系列常用对话框的集合，用于显示一些类似 Native 效果的组件。
demo: /feedback/dialog
---

## 代码演示

### 警告框

```jsx
import { Dialog } from 'tuya-panel-kit'

Dialog.alert({
  title: '标题',
  subTitle: '副标题',
  confirmText: '确认',
  onConfirm: (data, { close }) => {
    close();
  },
});
```

### 提示框

```jsx
import { Dialog } from 'tuya-panel-kit'

Dialog.confirm({
  title: '标题',
  subTitle: '副标题',
  cancelText: '取消',
  confirmText: '确认',
  onConfirm: (data, { close }) => {
    close();
  },
});
```

### 输入对话框（非受控）

```jsx
import { Dialog } from 'tuya-panel-kit'

const [state, setState] = React.useState({
  promptUnControlled: '',
});

Dialog.prompt({
  title: '输入对话框（非受控）',
  cancelText: '取消',
  confirmText: '确认',
  defaultValue: state.promptUnControlled,
  placeholder: 'Password',
  onConfirm: (text, { close }) => {
    setState({ promptUnControlled: text });
    close();
  },
});
```

### 输入对话框（受控）

```jsx
import { Dialog } from 'tuya-panel-kit'

const [state, setState] = React.useState({
  promptControlled: '',
});

Dialog.prompt({
  title: '输入对话框（受控）',
  cancelText: '取消',
  confirmText: '确认',
  value: state.promptControlled,
  placeholder: 'Password',
  onChangeText: text => {
    // 使用value props 可令prompt成为受控组件，控制其输入框内容
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

### 单选对话框

```jsx
import { Dialog } from 'tuya-panel-kit'

const [state, setState] = React.useState({
  checkValueRadio: 'code1',
});

Dialog.checkbox({
  title: 'Required',
  cancelText: '取消',
  confirmText: '确认',
  type: 'radio',
  value: state.checkValueRadio,
  dataSource: [
    {
      value: 'code1',
      title: '传感器选择',
    },
    {
      value: 'code2',
      title: '房间传感器校准',
    },
    {
      value: 'code3',
      title: '地板传感器校准',
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

### 多选对话框

```jsx
import { Dialog } from 'tuya-panel-kit'

const [state, setState] = React.useState({
  checkValueSwitch: ['code1'],
});

Dialog.checkbox({
  title: 'Required',
  cancelText: '取消',
  confirmText: '确认',
  type: 'switch',
  value: state.checkValueSwitch,
  dataSource: [
    {
      value: 'code1',
      title: '传感器选择',
    },
    {
      value: 'code2',
      title: '房间传感器校准',
    },
    {
      value: 'code3',
      title: '地板传感器校准',
    },
    {
      value: 'code4',
      title: '自适应功能',
    },
    {
      value: 'code5',
      title: '防冻保护功能',
      iconSize: 20,
      Icon: 'warning',
      reverse: true,
      hideOnUnselect: true,
    },
    {
      value: 'code6',
      title: '测试滚动功能',
      reverse: true,
    },
  ],
  onConfirm: (value, { close }) => {
    setState({ checkValueSwitch: value });
    close();
  },
});
```

### 列表对话框

```jsx
import { Dialog } from 'tuya-panel-kit'

Dialog.list({
  title: '这是标题',
  subTitle: '这是内容',
  dataSource: new Array(6).fill(1).map((_, idx) => ({
    title: idx === 0 ? '点我关闭' : `选项${idx}`,
    onPress: () => {
      idx === 0 && Dialog.close();
      console.log('Press', idx);
    },
  })),
  cancelText: '取消',
  confirmText: '确认',
  onConfirm: (data, { close }) => {
    close();
  },
});
```

### 自定义对话框

```jsx
import { Dialog } from 'tuya-panel-kit'

Dialog.custom({
  title: 'Custom',
  cancelText: '取消',
  confirmText: '确认',
  content: (
    <View
      style={{ height: 300, alignItems: 'center', justifyContent: 'center' }}
    >
      <Text style={{ fontSize: 32, color: '#000' }}>自定义内容</Text>
    </View>
  ),
  onConfirm: (data, { close }) => {
    close();
  },
});
```

## API

### Dialog.alert

<API name="DialogAlertProps"></API>

### Dialog.checkbox

继承自 [TYFlatListProps](/docs/presentation/tyflat-list#tyflatlist)

<API name="DialogCheckboxProps"></API>

### Dialog.confirm

<API name="DialogConfirmProps"></API>

### Dialog.list

继承自 [TYFlatListProps](/docs/presentation/tyflat-list#tyflatlist)

<API name="DialogListProps"></API>

### Dialog.prompt

继承自 [TextInputProps](https://reactnative.dev/docs/textinput#props)

<API name="DialogPromptProps"></API>

### Dialog.custom

<API name="DialogCustomProps"></API>
