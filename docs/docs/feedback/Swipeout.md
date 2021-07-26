---
title: Swipeout 侧滑
desc: Swipeout 是一个仿 IOS 样式的侧滑操作组件。
demo: /feedback/swipeout
---

## 代码演示

### 左侧滑

```jsx
import { Swipeout } from 'tuya-panel-kit'

<Swipeout
  autoClose={true}
  left={[
    {
      text: 'action',
      type: 'primary',
      fontStyle: { color: '#fff', fontSize: 16 },
    },
  ]}
>
  <View
    style={{
      height: 44,
      backgroundColor: '#f99',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16,
    }}
  >
    <TYText style={{ color: '#333' }}>试试左滑</TYText>
  </View>
</Swipeout>
```

### 右侧滑

```jsx
import { Swipeout } from 'tuya-panel-kit'

<Swipeout
  autoClose={true}
  right={[
    {
      text: 'delete',
      type: 'delete',
      fontStyle: { color: '#fff', fontSize: 16 },
    },
  ]}
>
  <View
    style={{
      height: 44,
      backgroundColor: '#66f',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16,
    }}
  >
    <TYText style={{ color: '#333' }}>试试右滑</TYText>
  </View>
</Swipeout>
```

### 禁用侧滑

```jsx
import { Swipeout } from 'tuya-panel-kit'

<Swipeout
  autoClose={true}
  disabled={true}
  right={[
    {
      text: 'delete',
      type: 'delete',
      fontStyle: { color: '#fff', fontSize: 16 },
    },
  ]}
>
  <View
    style={{
      height: 44,
      backgroundColor: '#333',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16,
    }}
  >
    <TYText style={{ color: '#e5e5e5' }}>禁用侧滑</TYText>
  </View>
</Swipeout>
```

## API

<API name="SwipeoutProps" />
