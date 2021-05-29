---
title: Notification 全局通知
desc: '`Notification` 是通知栏，可以显示成功、警告、错误此类三种信息。'
---

## 代码演示

### 警告通知

```jsx
Notification.show({
  message: '警告提示框',
  onClose: () => {
    Notification.hide();
  },
  theme: {
    successIcon: 'red',
    errorIcon: 'yellow',
    warningIcon: 'black',
  },
});
```

## API

<API name="NotificationProps" />
