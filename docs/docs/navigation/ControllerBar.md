---
group:
  title: 导航
title: ControllerBar 底部栏
desc: '`ControllerBar` 是有着一个或以上按钮的控制栏；`ControllerBar.Group` 是控制栏的集合。'
---

## 代码演示

### 基础底部栏

```jsx
<ControllerBar
  size={44}
  button={[
    { text: '1', type: 'primary' },
    { text: '2', type: 'primary' },
  ]}
/>
```

### ControllerBar.Group base 版

```jsx
<ControllerBar.Group style={{ marginTop: 20 }}>
  <ControllerBar
    size={44}
    button={[
      { text: '1', type: 'primary' },
      { text: '2', type: 'primary' },
    ]}
  />
  <ControllerBar
    size={44}
    button={[
      { text: '3', type: 'primary' },
      { text: '4', type: 'primary' },
    ]}
  />
</ControllerBar.Group>
```

### ControllerBar.Group Swiper 版

```jsx
<ControllerBar.Group
  type="swiper"
  style={{ marginTop: 20 }}
  swiperConfig={{
    style: { height: 60 },
    dotActiveStyle: { backgroundColor: 'red' },
    dotStyle: { backgroundColor: 'blue' },
  }}
  size={44}
>
  <ControllerBar
    size={44}
    button={[
      { text: '1', type: 'primary' },
      { text: '2', type: 'primary' },
    ]}
  />
  <ControllerBar
    size={44}
    button={[
      { text: '3', type: 'primary' },
      { text: '4', type: 'primary' },
    ]}
  />
</ControllerBar.Group>
```

### ControllerBar divide 版

```jsx
<ControllerBar.Group type="divide" style={{ marginTop: 20 }}>
  <ControllerBar
    size={44}
    button={[
      { text: '1', type: 'primary' },
      { text: '2', type: 'primary' },
    ]}
  />
  <ControllerBar
    size={44}
    button={[
      { text: '3', type: 'primary' },
      { text: '4', type: 'primary' },
    ]}
  />
</ControllerBar.Group>
```

## API

extends [ViewProps](https://reactnative.dev/docs/view#props)

<API name="ControllerBarProps" />
