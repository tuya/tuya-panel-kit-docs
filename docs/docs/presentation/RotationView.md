---
title: RotationView 旋转视图
desc: RotationView 封装了需要旋转动画的视图容器。
demo: /presentation/rotation-view
---

## 代码演示

### 绕边缘转圈形式

```jsx
import { RotationView } from 'tuya-panel-kit'

<RotationView style={{ width: 198, height: 198, marginTop: 20 }} active={true}>
  <Image
    style={{
      width: 198,
      height: 198,
      resizeMode: 'contain',
    }}
    source={{
      uri:
        'https://images.tuyacn.com/rms-static/24872e70-0559-11ec-8caa-bf190bbd93b6-1629864096471.png?tyName=rotate-view-3.png',
    }}
  />
</RotationView>
```

### 绕中心转圈

```jsx
import { RotationView } from 'tuya-panel-kit'

<RotationView style={{ width: 198, height: 198, marginTop: 20 }} active={true}>
  <Image
    style={{
      width: 198,
      height: 198,
      resizeMode: 'contain',
    }}
    source={{
      uri:
        'https://images.tuyacn.com/rms-static/7ee5cb60-0559-11ec-8caa-bf190bbd93b6-1629864248086.png?tyName=rotate-view-4.png',
    }}
  />
</RotationView>
```

## API

<API name="RotationViewProps" />
