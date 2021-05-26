---
group:
  title: 数据录入
title: Checkbox 选择框
desc: Checkbox 为单选框或多选框。
---

## 代码演示

### 基础使用

```jsx
const [checked, setChecked] = React.useState(false);

<Checkbox checked={checked} onChange={checked => setChecked(checked)}>
  复选框
</Checkbox>;
```

### 禁用状态

```jsx
<View>
  <Checkbox color="red" checked={false} disabled={true} hideOnUnselect={true}>
    复选框
  </Checkbox>
  <Checkbox checked={true} disabled={true} style={{ marginLeft: 30 }}>
    复选框
  </Checkbox>
</View>
```

### 自定义颜色和大小

```jsx
const [checked, setChecked] = React.useState(false);

<Checkbox
  size={30}
  color="red"
  checked={checked}
  onChange={checked => setChecked(checked)}
>
  复选框
</Checkbox>;
```

### 翻转图标和子元素位置

```jsx
const [checked, setChecked] = React.useState(false);

<Checkbox
  reverse={true}
  checked={checked}
  onChange={checked => setChecked(checked)}
>
  复选框
</Checkbox>;
```

## API

<Props name="CheckboxProps"></Props>
