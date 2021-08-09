---
title: Divider
desc: Divider is the dividing line.
demo: /presentation/divider
---

## Code demo

### Basic form

```jsx
import { Divider, Utils } from 'tuya-panel-kit';

const { convertX: cx } = Utils.RatioUtils;

<View
  style={{
    backgroundColor: 'white',
    height: cx(48),
    display: 'flex',
    justifyContent: 'center',
  }}
>
  <Divider style={{ alignSelf: 'center' }} color="#E5E5E5" width={300} />
</View>
```

## API

<API name="DividerProps" />
