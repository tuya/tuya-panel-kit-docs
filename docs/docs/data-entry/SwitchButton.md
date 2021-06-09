---
title: SwitchButton 开关
desc: '`SwitchButton` 是一个开关组件。'
demo: /data-entry/switch-button
---

## 代码演示

### 基础样式一

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

### 基础样式二

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

### 深色模式

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

### 渐变样式

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

### 文本样式

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

### 非受控开关

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

<API name="SwitchButtonProps" />
