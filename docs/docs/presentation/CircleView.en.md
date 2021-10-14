---
group:
  title: Presentation
title: CircleView
desc: CircleView is a circular view.
demo: /presentation/circle-view
---

## Code demo

### Basic Usage

```jsx
import { CircleView } from 'tuya-panel-kit'

<CircleView radius={30} color="#F9825C" />
```

### CircleView with border

```jsx
import { CircleView } from 'tuya-panel-kit'

<CircleView radius={30} color="#FCDC9D" borderWidth={2} borderColor="#B8B8B8" />
```

### CircleView with embedded custom content

```jsx
import { CircleView } from 'tuya-panel-kit'

<CircleView
  radius={50}
  color="#F98553"
  style={{ alignItems: 'center', justifyContent: 'center' }}
>
  <IconFont name="edit" size={24} />
</CircleView>
```

## API

extends [ViewProps](https://reactnative.dev/docs/view#props)

<API name="CircleViewProps" />
