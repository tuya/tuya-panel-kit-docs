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

### 基础文本样式

```jsx
const [value1, setValue1] = React.useState(true);
const [value2, setValue2] = React.useState(false);

<View>
  <SwitchButton
    size={{
      activeSize: 18,
      margin: 5,
      width: 52,
      height: 28,
      borderRadius: 10,
    }}
    theme={{ onTintColor: '#57BCFB', onThumbTintColor: '#FFF' }}
    thumbStyle={{ width: 18, height: 18, borderRadius: 6 }}
    value={value1}
    onText="ON"
    offText="OFF"
    onValueChange={v => setValue1(v)}
    style={{ marginRight: 14 }}
  />
  <SwitchButton
    value={value2}
    size={{
      activeSize: 18,
      margin: 5,
      width: 52,
      height: 28,
      borderRadius: 10,
    }}
    theme={{ onTintColor: '#57BCFB', onThumbTintColor: '#FFF' }}
    thumbStyle={{ width: 18, height: 18, borderRadius: 6 }}
    onText="ON"
    offText="OFF"
    onValueChange={v => setValue2(v)}
  />
</View>;
```

### icon 样式

```jsx
const [value1, setValue1] = React.useState(true);
const [value2, setValue2] = React.useState(false);

<View>
  <SwitchButton
    size={{
      activeSize: 40,
      margin: 4,
      width: 92,
      height: 48,
      borderRadius: 10,
    }}
    theme={{
      onTintColor: '#00F',
      onThumbTintColor: '#57BCFB',
      thumbTintColor: '#57BCFB',
    }}
    thumbStyle={{ width: 40, height: 40, borderRadius: 9 }}
    value={value1}
    onText="ON"
    offText="OFF"
    onTextStyle={{ color: '#57BCFB', left: 15 }}
    d={dPath}
    iconColor="#FFF"
    offTextStyle={{ right: 15 }}
    onValueChange={v => setValue1(v)}
    style={{ marginRight: 14 }}
  />
  <SwitchButton
    value={value2}
    size={{
      activeSize: 40,
      margin: 4,
      width: 92,
      height: 48,
      borderRadius: 10,
    }}
    theme={{
      onTintColor: '#00F',
      onThumbTintColor: '#57BCFB',
      thumbTintColor: '#57BCFB',
    }}
    thumbStyle={{ width: 40, height: 40, borderRadius: 9 }}
    onText="ON"
    offText="OFF"
    onTextStyle={{ color: '#57BCFB', left: 15 }}
    d={dPath}
    iconColor="#FFF"
    offTextStyle={{ right: 15 }}
    onValueChange={v => setValue2(v)}
  />
</View>;
```

### 滑块动画样式

```jsx
const [value1, setValue1] = React.useState(true);
const [value2, setValue2] = React.useState(false);

<View>
  <SwitchButton
    size={{
      activeSize: 34,
      margin: 3,
      width: 78,
      height: 40,
      borderRadius: 16,
    }}
    theme={{ onTintColor: '#57BCFB', onThumbTintColor: '#FFF' }}
    thumbStyle={{ width: 34, height: 34, borderRadius: 14 }}
    value={value1}
    switchType="thumbMore"
    onValueChange={v => setValue1(v)}
    style={{ marginRight: 14 }}
  />
  <SwitchButton
    value={value2}
    size={{
      activeSize: 34,
      margin: 3,
      width: 78,
      height: 40,
      borderRadius: 16,
    }}
    theme={{ onTintColor: '#57BCFB', onThumbTintColor: '#FFF' }}
    thumbStyle={{ width: 34, height: 34, borderRadius: 14 }}
    switchType="thumbMore"
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

### 渐变文本样式

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
