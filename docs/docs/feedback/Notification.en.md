---
title: Notification
desc: '`Notification` is the notification bar, which can display three types of information: success, warning, and error.'
---

## Code demo

### Warning

```jsx
Notification.show({
  message: 'Warning Notification',
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
