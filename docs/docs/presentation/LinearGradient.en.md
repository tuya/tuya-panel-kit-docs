---
title: LinearGradient
desc: LinearGradient mainly provides a linear gradient effect to the child nodes.
demo: /presentation/linear-gradient
---

## Code demo

### Two vertical gradients

```jsx
<LinearGradient
  gradientId="Gradient1"
  style={{
    width: 300,
    height: 200,
    marginLeft: 20,
    marginVertical: 20,
  }}
  x1="0%"
  y1="0%"
  x2="0%"
  y2="100%"
  stops={{
    '0%': 'red',
    '100%': 'yellow',
  }}
>
  <Rect width={300} height={200} />
</LinearGradient>
```

### Oblique three-stage gradient

```jsx
<LinearGradient
  gradientId="Gradient2"
  style={{ width: 300, height: 200, marginLeft: 20, marginVertical: 20 }}
  x1="100%"
  y1="0%"
  x2="0%"
  y2="100%"
  stops={{
    '0%': 'red',
    '30%': 'blue',
    '100%': 'yellow',
  }}
>
  <Rect width={300} height={200} />
</LinearGradient>
```

### Panel background gradient

```jsx
import _ from 'lodash';
import React from 'react';
import { View } from 'react-native';
import { NavigatorLayout } from 'tuya-panel-kit';
import composeLayout from './composeLayout';
import configureStore from './redux/configureStore';
import { routers } from './config';

export const store = configureStore();

class MainLayout extends NavigatorLayout {
  hookRoute(route) {
    return {
      ...route,
      background: {
        '3%': 'red',
        '90%': 'yellow',
      },
    };
  }

  renderScene(route, navigator) {
    let Scene = <View />
    let schema = {};
    let uiConfig = {};
    const { dispatch, devInfo, dpState } = this.props;

    if (!_.isEmpty(devInfo)) {
      schema = devInfo.schema || {};
      uiConfig = devInfo.uiConfig || {};
    }

    const router = routers.find(r => r.id === route.id);

    if (router && router.Scene) {
      const Component = router.Scene;
      Scene = (
        <Component
          dpData={{ state: dpState, schema, uiConfig }}
          dispatch={dispatch}
          navigator={navigator}
          {...route}
        />
      );
    }

    return Scene;
  }
}

export default composeLayout(store, MainLayout);
```

## API

<API name="LinearGradientProps"></API>

## FAQ

1. More Info?

[react-native-svg/LinearGradient](https://github.com/react-native-community/react-native-svg#lineargradient)
