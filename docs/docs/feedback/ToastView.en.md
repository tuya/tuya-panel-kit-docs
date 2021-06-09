---
title: ToastView
desc: ToastView is toast, used to remind the user without interrupting the operation.
demo: /feedback/toast-view
---

## Code demo

### Success tips

```jsx
const [successShow, setSuccessShow] = React.useState(false);

<Toast.Success
  show={successShow}
  text="Successful Text"
  onFinish={() => setSuccessShow(false)}
/>;
```

### Warning tips

```jsx
const [warningShow, setWarningShow] = React.useState(false);

<Toast.Warning
  show={warningShow}
  text="Warning Text"
  onFinish={() => setWarningShow(false)}
/>;
```

### Error tips

```jsx
const [errorShow, setErrorShow] = React.useState(false);

<Toast.Error
  show={errorShow}
  text="Error Text"
  onFinish={() => setErrorShow(false)}
/>;
```

### Loading tips

```jsx
const [loadingShow, setLoadingShow] = React.useState(false);

<Toast.Loading show={loadingShow} onFinish={() => setLoadingShow(false)} />;
```

### Light prompt

```jsx
const [show, setShow] = React.useState(false);

<Toast show={show} text="I'm toastView!!!" onFinish={() => setShow(false)} />;
```

## API

### ToastView

<API name="ToastProps"></API>

### ToastView.Success

<API name="ToastSuccessProps"></API>

### ToastView.Warning

<API name="ToastWarningProps"></API>

### ToastView.Error

<API name="ToastErrorProps"></API>

### ToastView.Loading

<API name="ToastLoadingProps"></API>
