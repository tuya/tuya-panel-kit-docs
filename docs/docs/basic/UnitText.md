---
title: UnitText 字体单位
desc: UnitText 可用于显示一些加粗的展示型文字类型。
---

## 代码演示

### 基本样式

```jsx
<View>
  <UnitText unit="%" unitColor="green" />
  <UnitText unit={TuyaRNSvgs.celsius} unitColor="#9A3253" />
</View>
```

### 自定义大小

```jsx
<View>
  <UnitText size={88} unit="%" unitColor="green" />
  <UnitText
    size={48}
    unit="fahrenheit"
    unitColor="#f0f"
    style={{ marginHorizontal: 40 }}
  />
  <UnitText size={66} unit={TuyaRNSvgs.celsius} unitColor="#9A3253" />
</View>
```

### 自定义 UnitText 每个值的颜色

```jsx
<View>
  <UnitText
    value="032"
    size={36}
    unit={TuyaRNSvgs.fahrenheit}
    valueColor="red"
    valueColors={['rgba(0, 0, 0, 0.3)', undefined, 'blue']}
    unitColor="red"
  />
</View>
```

## API

<Props name="UnitTextProps"></Props>
