---
group:
  title: Animation
  order: 4
title: Diffusion
demo: /animation/diffusion
---

<Desc>

`Diffusion` is a water ripple component, integrated in tuya-panel-kit@4.7.11 version, and can also be installed separately using tuya-panel-animation-diffusion.

</Desc>

## Code demo

### Basic style

```jsx
import { Diffusion } from 'tuya-panel-kit';
// import Diffusion from 'tuya-panel-animation-diffusion';

<Diffusion />
```

### Customize child components

```jsx
import { View } from 'react-native'
import { Diffusion } from 'tuya-panel-kit';
// import Diffusion from 'tuya-panel-animation-diffusion';

<Diffusion color="#0ff" number={3}>
  <View style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: '#0ff' }} />
</Diffusion>
```

## API 

<API src="../../../node_modules/tuya-panel-animation-diffusion/lib/index.d.ts" exports='["Diffusion"]'>