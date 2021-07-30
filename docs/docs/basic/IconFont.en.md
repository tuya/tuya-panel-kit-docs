---
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
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<View>
  <IconFont name="0" style={{ marginRight: 25 }} />
  <IconFont d={TuyaRNSvgs.plus} />
</View>
```

### Icon Color

```jsx
import { IconFont } from 'tuya-panel-kit'
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<View>
  <IconFont name="error" style={{ marginRight: 25 }} />
  <IconFont d={TuyaRNSvgs.error} color="red" />
</View>
```

### Icon Size

```jsx
import { IconFont } from 'tuya-panel-kit'
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<View>
  <IconFont name="power" style={{ marginRight: 25 }} />
  <IconFont d={TuyaRNSvgs.power} size={50 * 0.72} />
</View>
```

## API

<API name="IconFontProps"></API>

## FAQ

1. More Info?

[react-native-svg/Path](https://github.com/react-native-community/react-native-svg#path)
