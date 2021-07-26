---
title: RotationView 旋转视图
desc: RotationView 封装了需要旋转动画的视图容器。
demo: /presentation/rotation-view
---

## 代码演示

### 绕边缘转圈形式

```jsx
import { RotationView } from 'tuya-panel-kit'

<RotationView
  style={{ width: 160, height: 160, marginLeft: 80, marginTop: 20 }}
  active={true}
>
  <View
    style={{
      width: 160,
      height: 160,
      borderRadius: 80,
      backgroundColor: '#0ff',
      justifyContent: 'center',
    }}
  >
    <IconFont name="power" size={48} color="#ff0" />
  </View>
</RotationView>
```

### 绕中心转圈

```jsx
import { RotationView } from 'tuya-panel-kit'

<RotationView
  style={{ width: 160, height: 160, marginLeft: 100, marginTop: 40 }}
  active={true}
>
  <View
    style={{
      width: 140,
      height: 140,
      backgroundColor: 'red',
      justifyContent: 'center',
    }}
  >
    <TYText style={{ textAlign: 'center' }}>Rotation!!!</TYText>
  </View>
</RotationView>
```

## API

<API name="RotationViewProps" />
