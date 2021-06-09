---
title: DatePicker
desc: '`DatePicker` is a flexible time and date selection component that supports multiple modes.'
demo: /data-entry/date-picker
---

## Code demo

> During the selection process, DatePicker will return the currently selected value as the parameter of the onDateChange callback.<br />
> （1）Controlled date picker, for the explanation of controlled components, please refer to here：[Forms](https://reactjs.org/docs/forms.html). The value of DatePicker depends on the date passed in, so we need to manually re-pass the returned value to the component, thus completing a selection.<br />
> （2）Uncontrolled date picker, for the explanation of uncontrolled components, please refer to here：[Uncontrolled Components](https://reactjs.org/docs/uncontrolled-components.html). The value of DatePicker depends on the internal state.

### Controlled date picker

```jsx
const [selectDate, setDate] = React.useState(new Date());

<DatePicker
  style={{ marginTop: 30 }}
  date={selectDate}
  onDateChange={selectDate => setDate(selectDate)}
/>;
```

### Uncontrolled date picker

```jsx
<DatePicker
  style={{ marginTop: 50 }}
  defaultDate={new Date()}
  onDateChange={date => console.log(date)}
/>
```

## API

extends [PickerViewProps](/docs/data-entry/picker-view#api)
<API name="DatePickerProps" />
