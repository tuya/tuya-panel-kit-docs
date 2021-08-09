---
title: Divider 分割线
desc: Divider 为分隔线。
demo: /presentation/divider
---

## 代码演示

### 基础形式

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
