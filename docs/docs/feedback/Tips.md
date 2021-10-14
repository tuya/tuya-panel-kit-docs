---
group:
  title: 反馈
title: Tips 气泡
desc: Tips 是一个气泡弹框组件。
demo: /feedback/tips
---

## 代码演示

### 气泡 - 上左

```jsx
import { Tips } from 'tuya-panel-kit'

const [state, setState] = React.useState({
  topLeft: false,
});
const bigTips = {
  width: 110,
  height: 64,
  borderRadius: 16,
};

<Tips
  show={state.topLeft}
  contentStyle={bigTips}
  bgColor="#333333"
  cornerPosition="topLeft"
/>
```

### 气泡 - 上中

```jsx
import { Tips } from 'tuya-panel-kit'

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
  bgColor="#333333"
  cornerPosition="topCenter"
/>
```

### 气泡 - 上右

```jsx
import { Tips } from 'tuya-panel-kit'

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
  bgColor="#333333"
  cornerPosition="topRight"
/>
```

### 气泡 - 下左

```jsx
import { Tips } from 'tuya-panel-kit'

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
  bgColor="#333333"
  cornerPosition="bottomLeft"
/>
```

### 气泡 - 下中

```jsx
import { Tips } from 'tuya-panel-kit'

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
  bgColor="#333333"
  cornerPosition="bottomCenter"
/>
```

### 气泡 - 下右

```jsx
import { Tips } from 'tuya-panel-kit'

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
  bgColor="#333333"
  cornerPosition="bottomRight"
/>
```

## API

<API name="TipsProps" />
