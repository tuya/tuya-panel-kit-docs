---
group:
  title: 数据录入
title: Checkbox 选择框
desc: '`Checkbox` 为单选框。'
demo: /data-entry/checkbox
---

## 代码演示

### 基础使用

```jsx
import { Checkbox } from 'tuya-panel-kit'

const [checked, setChecked] = React.useState(false);

<Checkbox checked={checked} onChange={checked => setChecked(checked)}>
  单选框
</Checkbox>
```

### 禁用状态

```jsx
import { Checkbox } from 'tuya-panel-kit'

<View>
  <Checkbox color="red" checked={false} disabled={true} hideOnUnselect={true}>
    单选框
  </Checkbox>
  <Checkbox checked={true} disabled={true} style={{ marginLeft: 30 }}>
    单选框
  </Checkbox>
</View>
```

### 自定义颜色和大小

```jsx
import { Checkbox } from 'tuya-panel-kit'

const [checked, setChecked] = React.useState(false);

<Checkbox
  size={30}
  color="red"
  checked={checked}
  onChange={checked => setChecked(checked)}
>
  单选框
</Checkbox>
```

### 翻转图标和子元素位置

```jsx
import { Checkbox } from 'tuya-panel-kit'

const [checked, setChecked] = React.useState(false);

<Checkbox
  reverse={true}
  checked={checked}
  onChange={checked => setChecked(checked)}
>
  单选框
</Checkbox>
```

## API

<API name="CheckboxProps"></API>
