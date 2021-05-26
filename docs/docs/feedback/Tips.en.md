---
title: Tips
desc: Tips is a bubble box component.
---

## Code demo

### Bubble - top left

```jsx
const [state, setState] = React.useState({
  topLeft: false,
  topCenter: false,
  topRight: false,
  bottomLeft: false,
  bottomCenter: false,
  bottomRight: false,
});
const bigTips = {
  width: 110,
  height: 64,
  borderRadius: 16,
};

<Tips
  show={state.topLeft}
  contentStyle={bigTips}
  bgColor="#00f"
  cornerPosition="topLeft"
/>;
```

### Bubble - top center

```jsx
const [state, setState] = React.useState({
  topCenter: false,
});
const bigTips = {
  width: 110,
  height: 64,
  borderRadius: 16,
};

<Tips
  show={state.topCenter}
  contentStyle={bigTips}
  bgColor="#00f"
  cornerPosition="topCenter"
/>;
```

### Bubble - top right

```jsx
const [state, setState] = React.useState({
  topRight: false,
});
const bigTips = {
  width: 110,
  height: 64,
  borderRadius: 16,
};

<Tips
  show={state.topRight}
  contentStyle={bigTips}
  bgColor="#00f"
  cornerPosition="topRight"
/>;
```

### Bubble -bottom left

```jsx
const [state, setState] = React.useState({
  bottomLeft: false,
});
const bigTips = {
  width: 110,
  height: 64,
  borderRadius: 16,
};

<Tips
  show={state.bottomLeft}
  contentStyle={bigTips}
  bgColor="#00f"
  cornerPosition="bottomLeft"
/>;
```

### Bubble -bottom center

```jsx
const [state, setState] = React.useState({
  bottomCenter: false,
});
const bigTips = {
  width: 110,
  height: 64,
  borderRadius: 16,
};

<Tips
  show={state.bottomCenter}
  contentStyle={bigTips}
  bgColor="#00f"
  cornerPosition="bottomCenter"
/>;
```

### Bubble -bottom right

```jsx
const [state, setState] = React.useState({
  bottomRight: false,
});
const bigTips = {
  width: 110,
  height: 64,
  borderRadius: 16,
};

<Tips
  show={state.bottomRight}
  contentStyle={bigTips}
  bgColor="#00f"
  cornerPosition="bottomRight"
/>;
```

## API

<Props name="TipsProps" />
