---
title: TYText 文字
desc: '在 **React Native** 中，`Text` 组件的默认 props 在 Android 和 IOS 上不一致。<br/>`TYText` 在 `Text` 组件上进行了一层封装，保证 IOS 与 Android 表征一致。'
---

## 代码演示

### 基本样式

```jsx
<TYText color="red" text="我是涂鸦er" weight="bold" size={24} />
```

### 搭配 size 和 type 使用

```jsx
<View>
  <TYText size="small" type="paragraph" text="涂小鸭" />
  <TYText
    size="small"
    type="title"
    text="涂小鸭"
    style={{ marginHorizontal: 20 }}
  />
  <TYText size="small" type="heading" text="涂小鸭" />
</View>
```

```jsx
<View>
  <TYText size="normal" type="paragraph" text="涂小鸭" />
  <TYText
    size="normal"
    type="title"
    text="涂小鸭"
    style={{ marginHorizontal: 20 }}
  />
  <TYText size="normal" type="heading" text="涂小鸭" />
</View>
```

```jsx
<View>
  <TYText size="large" type="paragraph" text="涂小鸭" />
  <TYText
    size="large"
    type="title"
    text="涂小鸭"
    style={{ marginHorizontal: 20 }}
  />
  <TYText size="large" type="heading" text="涂小鸭" />
</View>
```

## API

继承自 [TextProps](https://reactnative.dev/docs/text#props)

<Props name="TYTextProps"></Props>
