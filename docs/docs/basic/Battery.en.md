---
group:
  title: Basic
  order: 3
title: Battery
desc: '`Battery` is a battery component, which is generally used in scenarios where the battery percentage needs to be displayed.'
demo: /basic/battery
---

## Code demo

### Base usage

```jsx
import { Battery } from 'tuya-panel-kit'

<Battery value={100} />
<Battery value={50} />
<Battery value={20} />
<Battery value={10} />
```

### Custom theme

```jsx
import { Battery } from 'tuya-panel-kit'

<Battery value={100} theme={{ batteryColor: '#FF4800' }} />
```

### Modify the battery color allocation rules

```jsx
import { Battery } from 'tuya-panel-kit'

const calcColor = (top, highColor, middleColor, lowColor) => {
  // 0-10%: red  10%-60%: black   60%-100%: green
  if (top <= 8.4 && top >= 3) {
    return highColor;
  } else if (top <= 15.6 && top > 8.4) {
    return middleColor;
  }
  return lowColor;
};

<Battery value={60} size={30} onCalcColor={calcColor} middleColor="#999" />
```

## API

<API name="BatteryProps"></API>
