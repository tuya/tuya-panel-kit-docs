---
title: ToastView 吐司
desc: ToastView 为吐司，用于提醒用户，不打断操作。
---

## 代码演示

### 成功提示

```jsx
const [successShow, setSuccessShow] = React.useState(false);

<Toast.Success
  show={successShow}
  text="成功文案"
  onFinish={() => setSuccessShow(false)}
/>;
```

### 警示提示

```jsx
const [warningShow, setWarningShow] = React.useState(false);

<Toast.Warning
  show={warningShow}
  text="警示文案"
  onFinish={() => setWarningShow(false)}
/>;
```

### 错误提示

```jsx
const [errorShow, setErrorShow] = React.useState(false);

<Toast.Error
  show={errorShow}
  text="错误文案"
  onFinish={() => setErrorShow(false)}
/>;
```

### 加载提示

```jsx
const [loadingShow, setLoadingShow] = React.useState(false);

<Toast.Loading show={loadingShow} onFinish={() => setLoadingShow(false)} />;
```

### 轻提示

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
