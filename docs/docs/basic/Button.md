---
group:
  title: 通用
title: Button 按钮
desc: '`Button` 是一个最常用的组件，用于一些纯文本、图片、Icon 等需要点击的场合。'
demo: /basic/button
---

## 代码演示

### 纯文本按钮

```jsx
import { Button } from 'tuya-panel-kit'

<Button text="点我一下" />
```

### 纯 Icon 按钮

```jsx
import { Button, Utils } from 'tuya-panel-kit'

const { convertX: cx } = Utils.RatioUtils;

const powerPath = `M874.039 149.961c199.948 199.949 199.948 524.13 0 724.078-199.949 199.948-524.13 199.948-724.078 0-199.948-199.949-199.948-524.13 0-724.078 19.995-19.995 52.413-19.995 72.408 0 19.995 19.995 19.995 52.413 0 72.408-159.959 159.959-159.959 419.303 0 579.262 159.959 159.959 419.303 159.959 579.262 0 159.959-159.959 159.959-419.303 0-579.262-19.995-19.995-19.995-52.413 0-72.408 19.995-19.995 52.413-19.995 72.408 0zM562.2 0a1 1 0 0 1 1 1v510a1 1 0 0 1-1 1H461.8a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h100.4z`;

<Button
  iconColor="#fff"
  size={24}
  style={{
    width: cx(48),
    height: cx(48),
    backgroundColor: '#1C1D1E',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  }}
  wrapperStyle={{
    alignSelf: 'flex-start',
  }}
  iconPath={powerPath}
/>
```

### 带 Icon 文字的按钮

```jsx
import { Button, Utils } from 'tuya-panel-kit'

const { convertX: cx } = Utils.RatioUtils;

const powerPath = `M874.039 149.961c199.948 199.949 199.948 524.13 0 724.078-199.949 199.948-524.13 199.948-724.078 0-199.948-199.949-199.948-524.13 0-724.078 19.995-19.995 52.413-19.995 72.408 0 19.995 19.995 19.995 52.413 0 72.408-159.959 159.959-159.959 419.303 0 579.262 159.959 159.959 419.303 159.959 579.262 0 159.959-159.959 159.959-419.303 0-579.262-19.995-19.995-19.995-52.413 0-72.408 19.995-19.995 52.413-19.995 72.408 0zM562.2 0a1 1 0 0 1 1 1v510a1 1 0 0 1-1 1H461.8a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h100.4z`;

<Button
  iconColor="#fff"
  size={24}
  style={{
    width: cx(48),
    height: cx(48),
    backgroundColor: '#1C1D1E',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  }}
  iconPath={powerPath}
  text={'开关'}
/>
<Button
  iconColor="#fff"
  textDirection="right"
  size={24}
  iconPath={powerPath}
  style={{
    width: cx(48),
    height: cx(48),
    backgroundColor: '#1C1D1E',
  }}
  textStyle={{
    color: '#fff',
    marginLeft: 0,
    marginRight: cx(15),
  }}
  wrapperStyle={{
    backgroundColor: '#1C1D1E',
    borderRadius: cx(12),
    marginLeft: cx(27),
    position: 'relative',
    top: cx(-12),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  }}
  text={'开关'}
/>
```

### 图标按钮（带背景渐变）

```jsx
import { Button } from 'tuya-panel-kit'

<Button
  textDirection="right"
  size={40}
  icon="selected"
  iconSize={24}
  iconColor="#fff"
  text="文字"
  background={{
    x1: '20%',
    y1: '20%',
    x2: '30%',
    y2: '100%',
    stops: {
      '0%': '#ffff00',
      '100%': '#000',
    },
  }}
/>
```

## API

继承自 [TouchableOpacityProps](https://reactnative.dev/docs/touchableopacity#props)

<API name="ButtonProps"></API>
