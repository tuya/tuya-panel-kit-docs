---
title: UnitText
desc: '`UnitText` can be used to display some bold display text types.'
---

## Code demo

### Basic style

```jsx
<View>
  <UnitText unit="%" unitColor="green" />
  <UnitText unit={TuyaRNSvgs.celsius} unitColor="#9A3253" />
</View>
```

### Custom size

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

### Customize the color of each value of UnitText

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
