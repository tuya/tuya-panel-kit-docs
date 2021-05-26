---
title: Swipeout
desc: Swipeout is a sliding operation component imitating IOS style.
---

## Code demo

### Slide left

```jsx
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
    <TYText style={{ color: '#333' }}>Try sliding left</TYText>
  </View>
</Swipeout>
```

### Slide right

```jsx
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
    <TYText style={{ color: '#333' }}>Try sliding right</TYText>
  </View>
</Swipeout>
```

### Disable sideslip

```jsx
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
    <TYText style={{ color: '#e5e5e5' }}>Disable sideslip</TYText>
  </View>
</Swipeout>
```

## API

<Props name="SwipeoutProps" />
