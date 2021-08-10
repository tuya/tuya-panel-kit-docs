---
group:
  title: Data Entry
title: Checkbox
desc: '`Checkbox` is a single check box.'
demo: /data-entry/checkbox
---

### Basic Usage

```jsx
import { Checkbox, Utils } from 'tuya-panel-kit'

const { convertX: cx } = Utils.RatioUtils;

const [checked, setChecked] = React.useState(false);

<Checkbox
  color="#F84803"
  checked={checked.checked1}
  onChange={value => setChecked({ checked1: value })}
>
  Checkbox1
</Checkbox>
<Checkbox
  color="#F84803"
  checked={checked.checked2}
  style={{ marginTop: cx(8) }}
  onChange={value => setChecked({ checked2: value })}
>
  Checkbox2
</Checkbox>
```

### disable status

```jsx
import { Checkbox, Utils } from 'tuya-panel-kit'

const { convertX: cx } = Utils.RatioUtils;

<Checkbox color="red" checked={true} disabled={true}>
  Checkbox
</Checkbox>
<Checkbox checked={false} disabled={true} style={{ marginTop: cx(8) }}>
  Checkbox
</Checkbox>
```

### Custom color and size

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
  Checkbox1
</Checkbox>
<Checkbox
  size={cx(22)}
  color="#3BEB56"
  checked={checked.checked2}
  style={{ marginTop: cx(8) }}
  onChange={value => setChecked({ checked2: value })}
>
    Checkbox2
</Checkbox>
```

## API

<API name="CheckboxProps"></API>
