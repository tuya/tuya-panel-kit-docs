---
group:
  title: Data Entry
title: Checkbox
desc: '`Checkbox` is a single check box.'
demo: /data-entry/checkbox
---

### Basic Usage

```jsx
const [checked, setChecked] = React.useState(false);

<Checkbox checked={checked} onChange={checked => setChecked(checked)}>
  Checkbox
</Checkbox>;
```

### disable status

```jsx
<View>
  <Checkbox color="red" checked={false} disabled={true} hideOnUnselect={true}>
    Checkbox
  </Checkbox>
  <Checkbox checked={true} disabled={true} style={{ marginLeft: 30 }}>
    Checkbox
  </Checkbox>
</View>
```

### Custom color and size

```jsx
const [checked, setChecked] = React.useState(false);

<Checkbox
  size={30}
  color="red"
  checked={checked}
  onChange={checked => setChecked(checked)}
>
  Checkbox
</Checkbox>;
```

### Flip icon and child element position

```jsx
const [checked, setChecked] = React.useState(false);

<Checkbox
  reverse={true}
  checked={checked}
  onChange={checked => setChecked(checked)}
>
  Checkbox
</Checkbox>;
```

## API

<API name="CheckboxProps"></API>
