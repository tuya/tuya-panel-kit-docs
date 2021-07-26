---
title: DatePicker 日期选择器
desc: '`DatePicker` 是一个灵活的支持多种模式的时间日期选择组件。'
demo: /data-entry/date-picker
---

## 代码演示

> 在选择过程中 DatePicker 会将当前选择的值作为 onDateChange 回调的参数传回。<br />
> （1）受控日期选择器，有关受控组件的解释可以参考这里：[Forms](https://reactjs.org/docs/forms.html)。DatePicker 的值取决于传入的 date，因此我们需要将传回的值手动重新传给组件，这样就完成了一次选择。<br />
> （2）非受控日期选择器，有关非受控组件的解释可以参考这里：[Uncontrolled Components](https://reactjs.org/docs/uncontrolled-components.html)。DatePicker 的值取决于内部的 state。

### 受控日期选择器

```jsx
import { DatePicker } from 'tuya-panel-kit'

const [selectDate, setDate] = React.useState(new Date());

<DatePicker
  style={{ marginTop: 30 }}
  date={selectDate}
  onDateChange={selectDate => setDate(selectDate)}
/>
```

### 非受控日期选择器

```jsx
import { DatePicker } from 'tuya-panel-kit'

<DatePicker
  style={{ marginTop: 50 }}
  defaultDate={new Date()}
  onDateChange={date => console.log(date)}
/>
```

## API

继承自 [PickerViewProps](/docs/data-entry/picker-view#api)

<API name="DatePickerProps" />
