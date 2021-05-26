---
title: CircleView
desc: CircleView is a circular view.
---

## Code demo

### Basic Usage

```jsx
<CircleView radius={30} color="red" />
```

### CircleView with border

```jsx
<CircleView radius={30} color="#ff0" borderWidth={4} borderColor="#00f" />
```

### CircleView with embedded custom content

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
