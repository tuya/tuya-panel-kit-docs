---
group:
  title: Basic
title: IconFont
demo: /basic/icon-font
---

<Desc>

`IconFont` is a semantic vector icon。The built-in icon TuyaRNSvgs comes from [tuya-panel-kit/src/components/iconfont/svg/defaultSvg](https://github.com/tuya/tuya-panel-kit/blob/master/packages/tuya-panel-kit/src/components/iconfont/svg/defaultSvg.js)。

</Desc>

## Code demo

### Basic Usage

```jsx
import { IconFont } from 'tuya-panel-kit'

<IconFont name="arrow" />
<IconFont name="backAndroid" />
<IconFont name="backIos" />
<IconFont name="celsius" />
```

### Icon Color

```jsx
import { IconFont } from 'tuya-panel-kit'

<IconFont color="#F84803" name="arrow" />
<IconFont color="#F84803" name="backAndroid" />
<IconFont color="#F84803" name="backIos" />
<IconFont color="#F84803" name="celsius" />
```

### Icon Size

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

1. More Info?

[react-native-svg/Path](https://github.com/react-native-community/react-native-svg#path)
