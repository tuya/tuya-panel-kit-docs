---
title: IconFont
desc: IconFont is a semantic vector icon。The built-in icon TuyaRNSvgs comes from tuya-panel-kit/src/components/iconfont/svg/defaultSvg。
---

## Code demo

### Basic Usage

```jsx
<View>
  <IconFont name="0" style={{ marginRight: 25 }} />
  <IconFont d={TuyaRNSvgs.plus} />
</View>
```

### Icon Color

```jsx
<View>
  <IconFont name="error" style={{ marginRight: 25 }} />
  <IconFont d={TuyaRNSvgs.error} color="red" />
</View>
```

### Icon Size

```jsx
<View>
  <IconFont name="power" style={{ marginRight: 25 }} />
  <IconFont d={TuyaRNSvgs.power} size={50 * 0.72} />
</View>
```

## API

<Props name="IconFontProps"></Props>

## FAQ

1. More Info?

[react-native-svg/Path](https://github.com/react-native-community/react-native-svg#path)
