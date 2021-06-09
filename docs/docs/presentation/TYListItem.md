---
title: TYListItem 列表项
desc: '`TYListItem` 是一个列表项组件。'
demo: /presentation/tylist-item
---

## 代码演示

### 基础列表

```jsx
<TYListItem
  theme={{
    fontColor: '#fff',
    subFontColor: '#999',
    descFontColor: 'red',
    cellBg: '#222',
  }}
  title="标题"
  subTitle="副标题"
  Action="Action"
  onPress={() => console.log(111)}
/>
```

### 文案过长适配

```jsx
<TYListItem
  theme={{
    fontColor: '#fff',
    subFontColor: '#999',
    descFontColor: 'red',
    cellBg: '#222',
  }}
  style={{ backgroundColor: '#666' }}
  title="这是一个标题这是一个标题这是一个标题这是一个标题"
  subTitle="副标题"
  arrow={true}
  arrowColor="#fff"
  onPress={() => console.log(111)}
/>
```

### 适配 Icon

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
  title="这是一个标题"
  arrow={true}
  arrowColor="#f00"
  Icon={<IconFont name="power" color="#00f" size="36" />}
  onPress={() => console.log(111)}
/>
```

## API

继承自 [TouchableOpacityProps](https://reactnative.dev/docs/touchableopacity#props)

<API name="TYListItemProps" />
