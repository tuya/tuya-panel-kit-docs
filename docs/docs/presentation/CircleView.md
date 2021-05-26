---
title: CircleView 圆形视图
desc: CircleView 为圆形视图。
---

## 代码演示

### 基础展示

```jsx
<CircleView radius={30} color="red" />
```

### 带边框的圆形视图

```jsx
<CircleView radius={30} color="#ff0" borderWidth={4} borderColor="#00f" />
```

### 内嵌自定义内容的圆形视图

```jsx
<CircleView
  radius={50}
  color="#0f0"
  style={{ alignItems: 'center', justifyContent: 'center' }}
>
  <View
    style={{
      backgroundColor: '#0ff',
      width: 45,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <TYText text="Hello, World" style={{ textAlign: 'center' }} />
  </View>
</CircleView>
```

## API

<Props name="CircleViewProps" />
