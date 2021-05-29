---
title: TYListItem
desc: '`TYListItem` is a list item component.'
---

## Code demo

### Basic list

```jsx
<TYListItem
  theme={{
    fontColor: '#fff',
    subFontColor: '#999',
    descFontColor: 'red',
    cellBg: '#222',
  }}
  title="Title"
  subTitle="SubTitle"
  Action="Action"
  onPress={() => console.log(111)}
/>
```

### Long copy adaptation

```jsx
<TYListItem
  theme={{
    fontColor: '#fff',
    subFontColor: '#999',
    descFontColor: 'red',
    cellBg: '#222',
  }}
  style={{ backgroundColor: '#666' }}
  title="This is an adaptive English title with a long copy"
  subTitle="SubTitle"
  arrow={true}
  arrowColor="#fff"
  onPress={() => console.log(111)}
/>
```

### Adapt Icon

```jsx
<TYListItem
  theme={{
    fontColor: '#346734',
    subFontColor: '#999',
    descFontColor: 'red',
    cellBg: '#222',
    cellRadius: 8,
  }}
  style={{ backgroundColor: '#452389' }}
  title="This is a title"
  arrow={true}
  arrowColor="#f00"
  Icon={<IconFont name="power" color="#00f" size="36" />}
  onPress={() => console.log(111)}
/>
```

## API

extends [TouchableOpacityProps](https://reactnative.dev/docs/touchableopacity#props)

<API name="TYListItemProps" />
