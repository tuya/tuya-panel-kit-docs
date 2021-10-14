---
group:
  title: 展示
title: TYListItem 列表项
desc: '`TYListItem` 是一个列表项组件。'
demo: /presentation/tylist-item
---

## 代码演示

### 基础列表

```jsx
import { TYListItem, IconFont } from 'tuya-panel-kit'

<TYListItem
  theme={{
    fontColor: '#333333',
    subFontColor: '#999',
    descFontColor: 'red',
    cellBg: 'white',
  }}
  title={"标题"}
  subTitle={"副标题"}
  Action={<IconFont color="rgba(0, 0, 0, 0.2)" name="arrow" />}
  onPress={() => console.log(111)}
/>
```

### 文案过长适配

```jsx
import { TYListItem } from 'tuya-panel-kit'

<TYListItem
  theme={{
    fontColor: '#333333',
    subFontColor: '#999',
    descFontColor: 'red',
    cellBg: 'white',
  }}
  title={"主标题超过一行规定的宽度时，文案将自行换行"}
  subTitle={"副标题"}
  arrow={true}
  arrowColor="#fff"
  onPress={() => console.log(111)}
  Action={<IconFont color="rgba(0, 0, 0, 0.2)" name="arrow" />}
/>
```

### 适配 Icon

```jsx
import { TYListItem, IconFont } from 'tuya-panel-kit'

export const Icons = {
  flower: (
    <IconFont
      color="#F84803"
      d="M534.705 7.902c81.466 64.518 140.69 134.02 177.174 208.604 74.666-29.667 163.076-39.294 264.797-29.385 16.18 1.576 29.377 13.644 32.392 29.619 35.505 188.174 7.807 338.161-85.031 447.057C837.65 765.124 711.395 811.463 548.544 803.73l.027 183.698c0 20.197-16.373 36.571-36.571 36.571-17.954 0-32.886-12.937-35.982-29.998l-.59-6.573-.014-183.746c-162.802 7.778-289.061-38.554-375.45-139.886C7.124 554.9-20.574 404.914 14.931 216.74c3.014-15.975 16.212-28.043 32.392-29.619 101.71-9.908 190.126-.285 264.882 29.372 36.39-74.55 95.599-144.053 177.089-208.591 13.303-10.536 32.107-10.536 45.41 0zm399.867 802.812c16.806 11.203 21.347 33.91 10.143 50.715-55.767 83.65-140.466 126-249.858 126-20.198 0-36.571-16.374-36.571-36.572 0-20.198 16.373-36.571 36.571-36.571 85.656 0 147.242-30.793 189-93.43 11.203-16.805 33.91-21.346 50.715-10.142zm-794.425 10.143c41.758 62.636 103.344 93.429 189 93.429 20.198 0 36.571 16.373 36.571 36.571 0 20.198-16.373 36.572-36.571 36.572-109.392 0-194.092-42.35-249.858-126-11.204-16.806-6.663-39.512 10.143-50.715 16.806-11.204 39.512-6.663 50.715 10.143z"
    />
  ),
};

<TYListItem
  theme={{
    fontColor: '#333333',
    subFontColor: '#999',
    descFontColor: 'red',
    cellBg: 'white',
  }}
  arrow={true}
  arrowColor="#f00"
  title={"标题"}
  subTitle={"副标题"}
  Icon={Icons.flower}
  onPress={() => console.log(111)}
  Action={<IconFont color="rgba(0, 0, 0, 0.2)" name="arrow" />}
/>
```

## API

继承自 [TouchableOpacityProps](https://reactnative.dev/docs/touchableopacity#props)

<API name="TYListItemProps" />
