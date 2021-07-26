---
title: UnitText
desc: '`UnitText` can be used to display some bold display text types.'
demo: /basic/unit-text
---

## Code demo

### Basic style

```jsx
import { UnitText } from 'tuya-panel-kit'
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<View>
  <UnitText unit="%" unitColor="green" />
  <UnitText unit={TuyaRNSvgs.celsius} unitColor="#9A3253" />
</View>
```

### Custom size

```jsx
import { UnitText } from 'tuya-panel-kit'
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

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
import { UnitText } from 'tuya-panel-kit'
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

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

<API name="UnitTextProps"></API>
