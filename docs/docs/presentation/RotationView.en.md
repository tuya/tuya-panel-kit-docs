---
group:
  title: Presentation
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
        'https://cdn.jsdelivr.net/gh/tuya/tuya-panel-kit-docs@gh-pages/assets/rotate-view-3.png',
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
        'https://cdn.jsdelivr.net/gh/tuya/tuya-panel-kit-docs@gh-pages/assets/rotate-view-4.png',
    }}
  />
</RotationView>
```

## API

<API name="RotationViewProps" />
