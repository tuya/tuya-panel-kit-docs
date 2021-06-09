---
title: TimerPicker
desc: '`TimerPicker` is a time period selection component, that is, select the start time and end time.'
demo: /data-entry/timer-picker
---

## Code demo

### Basic use of time period selector

```jsx
const [time, setTime] = React.useState({ startTime: 0, endTime: 0 });

<TimerPicker
  style={{ marginTop: 10 }}
  startTime={time.startTime}
  endTime={time.endTime}
  onTimerChange={(startTime, endTime) => setTime({ startTime, endTime })}
/>;
```

### Time period selector with prefix position

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

extends [PickerViewProps](/en/docs/data-entry/picker-view#api)

<API name="TimerPickerProps" />
