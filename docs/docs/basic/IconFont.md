---
group:
  title: 通用
title: IconFont 图标
demo: /basic/icon-font
---

<Desc>

`IconFont` 是语义化的矢量图标。内置图标 TuyaRNSvgs 来自于 [tuya-panel-kit/src/components/iconfont/svg/defaultSvg](https://github.com/tuya/tuya-panel-kit/blob/master/packages/tuya-panel-kit/src/components/iconfont/svg/defaultSvg.js)。

</Desc>

## 代码演示

### 基础用法

```jsx
import { IconFont } from 'tuya-panel-kit'

<IconFont name="arrow" />
<IconFont name="backAndroid" />
<IconFont name="backIos" />
<IconFont name="celsius" />
```

### 图标颜色

```jsx
import { IconFont } from 'tuya-panel-kit'

<IconFont color="#F84803" name="arrow" />
<IconFont color="#F84803" name="backAndroid" />
<IconFont color="#F84803" name="backIos" />
<IconFont color="#F84803" name="celsius" />
```

### 图标大小

```jsx
import { IconFont, Utils } from 'tuya-panel-kit';

const { convertX: cx } = Utils.RatioUtils;

<IconFont color="#F84803" size={cx(14)} name="arrow" />
<IconFont color="#F84803" size={cx(24)} name="backAndroid" />
<IconFont color="#F84803" size={cx(34)} name="backIos" />
<IconFont color="#F84803" size={cx(44)} name="celsius" />
```

## API

<API name="IconFontProps"></API>

## FAQ

1. 更多资料?

[react-native-svg/Path](https://github.com/react-native-community/react-native-svg#path)
