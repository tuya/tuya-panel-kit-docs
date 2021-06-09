---
group:
  title: Navigation
title: ControllerBar
desc: '`ControllerBar` is a control bar with one or more buttons；`ControllerBar.Group` is a collection of control bars.'
demo: /navigation/controller-bar
---

## Code demo

### Basic Bottom Bar

```jsx
<ControllerBar
  size={44}
  button={[
    { text: '1', type: 'primary' },
    { text: '2', type: 'primary' },
  ]}
/>
```

### ControllerBar.Group base version

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

### ControllerBar.Group Swiper version

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

### ControllerBar divide version

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

继承自 [ViewProps](https://reactnative.dev/docs/view#props)

<API name="ControllerBarProps" />
