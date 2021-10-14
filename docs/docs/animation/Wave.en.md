---
group:
  title: Animation
title: Wave
demo: /animation/wave
---

<Desc>

`Wave` is a wave component, integrated in tuya-panel-kit@4.7.11 version, and can also be installed separately using tuya-panel-animation-wave.

</Desc>

## Code demo

### Basic wave pattern

```jsx
import { Wave } from 'tuya-panel-kit';
// import Wave from 'tuya-panel-animation-wave';

<Wave />
```

### Custom wave styles

```jsx
import { Wave } from 'tuya-panel-kit';
// import Wave from 'tuya-panel-animation-wave';

<Wave
  style={{ width: 120, height: 120, borderRadius: 60 }}
  H={60}
  waveParams={[
    { A: 30, T: 120, fill: '#333' },
    { A: 20, T: 100, fill: '#666' },
  ]}
  animated={true}
/>
```

## API 

<API src="../../../node_modules/tuya-panel-animation-wave/lib/index.d.ts" exports='["Wave"]'>