---
title: Stepper
desc: '`Stepper` is composed of increase button, decrease button and input box, used to input and adjust numbers within a certain range.'
demo: /data-entry/stepper
---

## Code demo

### Style 1

```jsx
import { Stepper } from 'tuya-panel-kit'

<Stepper value={0} editable={false} />
<Stepper value={21} disabled={true} />'
<Stepper value={93.5} stepValue={0.5} inputStyle={{ width: 40 }} editable={false} />
<Stepper value={99} stepValue={5} />
```

### Style 2

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

extends [TextInputProps](https://reactnative.dev/docs/textinput#props)

<API name="StepperProps" />
