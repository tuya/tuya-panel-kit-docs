---
title: CircleView 圆形视图
desc: CircleView 为圆形视图。
demo: /presentation/circle-view
---

## 代码演示

### 基础展示

```jsx
import { CircleView } from 'tuya-panel-kit'

<CircleView radius={30} color="#F9825C" />
```

### 带边框的圆形视图

```jsx
import { CircleView } from 'tuya-panel-kit'

<CircleView radius={30} color="#FCDC9D" borderWidth={2} borderColor="#B8B8B8" />
```

### 内嵌自定义内容的圆形视图

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

继承自 [ViewProps](https://reactnative.dev/docs/view#props)

<API name="CircleViewProps" />
