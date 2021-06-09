---
title: GlobalToast
desc: '`GlobalToast` is a global prompt attached to FullView with fade-in and fade-out animation effects.'
demo: /feedback/global-toast
---

## Code demo

### Basic Usage

```jsx
GlobalToast.show({
  text: 'Suggestions for suggestive copywriting display up to 16 characters',
  showIcon: false,
  contentStyle: {},
  onFinish: () => {
    console.log('Toast finished');
    GlobalToast.hide();
  },
});
```

### 加载使用

```jsx
GlobalToast.show({
  text: 'Set successfully',
  onFinish: () => {
    console.log('Toast finished');
    GlobalToast.hide();
  },
});
```

## API

<API name="GlobalToastProps" />
