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
import { Checkbox, Utils } from 'tuya-panel-kit'

const { convertX: cx } = Utils.RatioUtils;

const [checked, setChecked] = React.useState(false);

<Checkbox
  color="#F84803"
  checked={checked.checked1}
  onChange={value => setChecked({ checked1: value })}
>
  单选框1
</Checkbox>
<Checkbox
  color="#F84803"
  checked={checked.checked2}
  style={{ marginTop: cx(8) }}
  onChange={value => setChecked({ checked2: value })}
>
  单选框2
</Checkbox>
```

### 禁用状态

```jsx
import { Checkbox, Utils } from 'tuya-panel-kit'

const { convertX: cx } = Utils.RatioUtils;

<Checkbox color="red" checked={true} disabled={true}>
  单选框
</Checkbox>
<Checkbox checked={false} disabled={true} style={{ marginTop: cx(8) }}>
  单选框
</Checkbox>
```

### 自定义颜色和大小

```jsx
import { Checkbox, Utils } from 'tuya-panel-kit'

const { convertX: cx } = Utils.RatioUtils;

const [checked, setChecked] = React.useState(false);

<Checkbox
  size={cx(22)}
  color="#3BEB56"
  checked={checked.checked1}
  onChange={value => setChecked({ checked1: value })}
>
 单选框1
</Checkbox>
<Checkbox
  size={cx(22)}
  color="#3BEB56"
  checked={checked.checked2}
  style={{ marginTop: cx(8) }}
  onChange={value => setChecked({ checked2: value })}
>
  单选框2
</Checkbox>
```

## API

<API name="CheckboxProps"></API>
