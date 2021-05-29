---
title: TimerPicker 时间段选择器
desc: '`TimerPicker` 是一个时间段选择组件，即选择开始时间和结束时间。'
---

## 代码演示

### 时间段选择器基础使用

```jsx
const [time, setTime] = React.useState({ startTime: 0, endTime: 0 });

<TimerPicker
  style={{ marginTop: 10 }}
  startTime={time.startTime}
  endTime={time.endTime}
  onTimerChange={(startTime, endTime) => setTime({ startTime, endTime })}
/>;
```

### 时间段选择器配合前缀位置

```jsx
const [time, setTime] = React.useState({ startTime: 0, endTime: 0 });

<TimerPicker
  style={{ marginTop: 10 }}
  startTime={time.startTime}
  endTime={time.endTime}
  prefixPosition="left"
  onTimerChange={(startTime, endTime) => setTime({ startTime, endTime })}
/>;
```

## API

继承自 [PickerViewProps](/docs/data-entry/picker-view#api)

<API name="TimerPickerProps" />
