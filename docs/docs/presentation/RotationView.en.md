---
title: RotationView
desc: RotationView encapsulates the view container that needs to rotate animation.
---

## Code demo

### Round the edge

```jsx
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

### Circle around the center

```jsx
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
