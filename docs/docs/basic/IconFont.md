---
title: IconFont 图标
desc: '`IconFont` 是语义化的矢量图标。内置图标 TuyaRNSvgs 来自于 `tuya-panel-kit/src/components/iconfont/svg/defaultSvg`。'
demo: /basic/icon-font
---

## 代码演示

### 基础用法

```jsx
<View>
  <IconFont name="0" style={{ marginRight: 25 }} />
  <IconFont d={TuyaRNSvgs.plus} />
</View>
```

### 图标颜色

```jsx
<View>
  <IconFont name="error" style={{ marginRight: 25 }} />
  <IconFont d={TuyaRNSvgs.error} color="red" />
</View>
```

### 图标大小

```jsx
<View>
  <IconFont name="power" style={{ marginRight: 25 }} />
  <IconFont d={TuyaRNSvgs.power} size={50 * 0.72} />
</View>
```

## API

<API name="IconFontProps"></API>

## FAQ

1. 更多资料?

[react-native-svg/Path](https://github.com/react-native-community/react-native-svg#path)
