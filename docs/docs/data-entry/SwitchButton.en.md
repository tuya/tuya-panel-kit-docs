---
title: SwitchButton
desc: SwitchButton is a switch component.
---

## Code demo

### Basic style 1

```jsx
const [value1, setValue1] = React.useState(true);
const [value2, setValue2] = React.useState(false);

<View>
  <SwitchButton
    value={value1}
    onValueChange={v => setValue1(v)}
    style={{ marginRight: 14 }}
  />
  <SwitchButton value={value2} onValueChange={v => setValue2(v)} />
</View>;
```

### Basic style 2

```jsx
const [value1, setValue1] = React.useState(true);
const [value2, setValue2] = React.useState(false);

<View>
  <SwitchButton
    value={value1}
    size={{ height: 18 }}
    theme={{ margin: 0 }}
    onValueChange={v => setValue1(v)}
    style={{ marginRight: 14 }}
  />
  <SwitchButton
    value={value2}
    size={{ height: 18 }}
    theme={{ margin: 0 }}
    onValueChange={v => setValue2(v)}
  />
</View>;
```

### Dark mode

```jsx
const [value1, setValue1] = React.useState(true);
const [value2, setValue2] = React.useState(false);

<View>
  <SwitchButton
    value={value1}
    tintColor="rgba(255,255,255,.2)"
    onValueChange={v => setValue1(v)}
    style={{ marginRight: 14 }}
  />
  <SwitchButton
    value={value2}
    tintColor="rgba(255,255,255,.2)"
    onValueChange={v => setValue2(v)}
  />
</View>;
```

### Gradient style

```jsx
const [value1, setValue1] = React.useState(true);
const [value2, setValue2] = React.useState(false);

<View>
  <SwitchButton
    value={value1}
    onText=""
    offText=""
    tintColor="#E5E5E5"
    onTintColor={{
      '0%': '#FA709A',
      '100%': '#FEDD44',
    }}
    onValueChange={v => setValue1(v)}
    style={{ marginRight: 14 }}
  />
  <SwitchButton
    value={value2}
    onText=""
    offText=""
    tintColor="#E5E5E5"
    onTintColor={{
      '0%': '#FA709A',
      '100%': '#FEDD44',
    }}
    onValueChange={v => setValue2(v)}
  />
</View>;
```

### Text style

```jsx
const [value1, setValue1] = React.useState(true);
const [value2, setValue2] = React.useState(false);

<View>
  <SwitchButton
    value={value1}
    onValueChange={v => setValue1(v)}
    tintColor="#E5E5E5"
    onTintColor={{
      '0%': '#FA709A',
      '100%': '#FEDD44',
    }}
    style={{ marginRight: 14 }}
  />
  <SwitchButton
    value={value2}
    onValueChange={v => setValue2(v)}
    tintColor="#E5E5E5"
    onTintColor={{
      '0%': '#FA709A',
      '100%': '#FEDD44',
    }}
  />
</View>;
```

### Uncontrolled switch

```jsx
<View>
  <SwitchButton
    defaultValue={true}
    onValueChange={value => console.log(value)}
    style={{ marginRight: 14 }}
  />
  <SwitchButton
    defaultValue={false}
    onValueChange={value => console.log(value)}
  />
</View>
```

## API

<Props name="SwitchButtonProps" />
