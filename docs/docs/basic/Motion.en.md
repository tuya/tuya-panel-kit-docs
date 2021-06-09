---
title: Motion
desc: '`Motion` is a component used to enrich component actions.'
demo: /basic/motion
---

## Code demo

### fade in and fade out

```jsx
const [fadeShow, setFadeShow] = React.useState(false);

<Motion.Fade
  style={{ position: 'absolute', bottom: 50 }}
  show={fadeShow}
  onHide={() => setFadeShow(!fadeShow)}
>
```

### Pull up and down

```jsx
const [pullUpShow, setPullUpShow] = React.useState(false);

<Motion.PullUp
  style={{ position: 'absolute', bottom: 50 }}
  show={pullUpShow}
  onHide={() => setPullUpShow(false)}
>
```

### Zoom in and fade in/out

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

### Zoom in and fade in/down to fade out

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

### Pull-down push

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

### No operation zoom in/out

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

<API name="MotionScalePullDownProps"></API>

### Motion.PushDown

<API name="MotionPushDownProps"></API>

### Motion.Toast

<API name="MotionToastProps"></API>
