---
title: Motion 动效
desc: '`Motion` 是一个用于丰富组件动作的组件。'
---

## 代码演示

### 淡入淡出

```jsx
  const [fadeShow, setFadeShow] = React.useState(false);

<Motion.Fade
  style={{ position: 'absolute', bottom: 50 }}
  show={fadeShow}
  onHide={() => setFadeShow(!fadeShow)}
>
```

### 上拉下滑

```jsx
  const [pullUpShow, setPullUpShow] = React.useState(false);

<Motion.PullUp
  style={{ position: 'absolute', bottom: 50 }}
  show={pullUpShow}
  onHide={() => setPullUpShow(false)}
>
```

### 放大淡入/缩小淡出

```jsx
const [scaleFadeInShow, setScaleFadeInShow] = React.useState(false);
const contentStyles = {
  width: 375,
  height: 200,
  backgroundColor: '#f0f',
};

<Motion.ScaleFadeIn
  style={{ position: 'absolute', bottom: 50 }}
  show={scaleFadeInShow}
  onHide={() => setScaleFadeInShow(false)}
>
  <View style={contentStyles} />
</Motion.ScaleFadeIn>;
```

### 放大淡入/下滑淡出

```jsx
const [scalePullDownShow, setScalePullDownShow] = React.useState(false);
const contentStyles = {
  width: 375,
  height: 200,
  backgroundColor: '#f0f',
};

<Motion.ScalePullDown
  show={scalePullDownShow}
  onHide={() => setScalePullDownShow(false)}
>
  <View style={contentStyles} />
</Motion.ScalePullDown>;
```

### 下拉上推

```jsx
const [pushDownShow, setPushDownShow] = React.useState(false);
const contentStyles = {
  width: 375,
  height: 200,
  backgroundColor: '#f0f',
};

<Motion.PushDown
  style={{ position: 'absolute', bottom: 100 }}
  show={pushDownShow}
  onHide={() => setPushDownShow(false)}
  dropHeight={100}
>
  <View style={contentStyles} />
</Motion.PushDown>;
```

### 无操作放大淡入/缩小淡出

```jsx
const [toastShow, setToastShow] = React.useState(false);
const contentStyles = {
  width: 375,
  height: 200,
  backgroundColor: '#f0f',
};

<Motion.Toast
  style={{ position: 'absolute', bottom: 50 }}
  show={toastShow}
  onHide={() => setToastShow(false)}
>
  <View style={contentStyles} />
</Motion.Toast>;
```

## API

### Motion.Fade

<API name="MotionFadeProps"></API>

### Motion.PullUp

<API name="MotionPullUpProps"></API>

### Motion.ScaleFadeIn

<API name="MotionScaleFadeInProps"></API>

### Motion.ScalePullDown

<API name="MotionScalePullDownProps" ></API>

### Motion.PushDown

<API name="MotionPushDownProps" ></API>

### Motion.Toast

<API name="MotionToastProps"></API>
