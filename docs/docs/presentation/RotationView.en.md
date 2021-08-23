---
title: RotationView
desc: RotationView encapsulates the view container that needs to rotate animation.
demo: /presentation/rotation-view
---

## Code demo

### Round the edge

```jsx
import { RotationView } from 'tuya-panel-kit'

<RotationView style={{ width: 198, height: 198, marginTop: 20 }} active={true}>
  <Image
    style={{
      width: 198,
      height: 198,
      resizeMode: 'contain',
    }}
    source={{
      uri:
        'https://images.tuyacn.com/rms-static/24872e70-0559-11ec-8caa-bf190bbd93b6-1629864096471.png?tyName=rotate-view-3.png',
    }}
  />
</RotationView>
```

### Circle around the center

```jsx
import { RotationView } from 'tuya-panel-kit'

<RotationView style={{ width: 198, height: 198, marginTop: 20 }} active={true}>
  <Image
    style={{
      width: 198,
      height: 198,
      resizeMode: 'contain',
    }}
    source={{
      uri:
        'https://images.tuyacn.com/rms-static/7ee5cb60-0559-11ec-8caa-bf190bbd93b6-1629864248086.png?tyName=rotate-view-4.png',
    }}
  />
</RotationView>
```

## API

<API name="RotationViewProps" />
