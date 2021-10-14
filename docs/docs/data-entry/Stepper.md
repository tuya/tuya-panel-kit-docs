---
group:
  title: 数据录入
title: Stepper 步进器
desc: '`Stepper` 由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。'
demo: /data-entry/stepper
---

## 代码演示

### 风格一

```jsx
import { Stepper } from 'tuya-panel-kit'

<Stepper value={0} editable={false} />
<Stepper value={21} disabled={true} />'
<Stepper value={93.5} stepValue={0.5} inputStyle={{ width: 40 }} editable={false} />
<Stepper value={99} stepValue={5} />
```

### 风格二

```jsx
import { Stepper } from 'tuya-panel-kit'

<Stepper buttonType="triangle" value={0} editable={false} />
<Stepper value={24} buttonType="triangle" disabled={true} />
<Stepper
  value={93.5}
  stepValue={0.5}
  inputStyle={{ width: 40 }}
  buttonType="triangle"
  editable={false}
/>
<Stepper value={99} stepValue={5} buttonType="triangle" />
```

## API

继承自 [TextInputProps](https://reactnative.dev/docs/textinput#props)

<API name="StepperProps" />
