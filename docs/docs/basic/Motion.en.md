---
title: Motion
desc: '`Motion` is a component used to enrich component actions.'
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

<Props name="MotionFadeProps"></Props>

### Motion.PullUp

<Props name="MotionPullUpProps"></Props>

### Motion.ScaleFadeIn

<Props name="MotionScaleFadeInProps"></Props>

### Motion.ScalePullDown

<Props name="MotionScalePullDownProps"></Props>

### Motion.PushDown

<Props name="MotionPushDownProps"></Props>

### Motion.Toast

<Props name="MotionToastProps"></Props>
