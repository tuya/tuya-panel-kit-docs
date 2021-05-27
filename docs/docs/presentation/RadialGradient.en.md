---
title: RadialGradient
desc: RadialGradient is a radial gradient, similar to a linear gradient, except that it diverges and draws a gradient from a point.
---

## Code demo

### Radial gradient from yellow to blue outwards

```jsx
<RadialGradient
  gradientId="Gradient1"
  style={{ width: 300, height: 200, marginLeft: 10 }}
  stops={[
    {
      offset: '0%',
      stopColor: '#ff0',
      stopOpacity: '1',
    },
    {
      offset: '100%',
      stopColor: '#00f',
      stopOpacity: '1',
    },
  ]}
  rx="50%"
  ry="50%"
  fx="50%"
  fy="50%"
  cx="50%"
  cy="50%"
/>
```

### Radial gradient from red-yellow-pink outward

```jsx
<RadialGradient
  gradientId="Gradient2"
  style={{ width: 300, height: 200, marginLeft: 10 }}
  stops={[
    {
      offset: '0%',
      stopColor: 'red',
      stopOpacity: '1',
    },
    {
      offset: '50%',
      stopColor: 'yellow',
      stopOpacity: '1',
    },
    {
      offset: '100%',
      stopColor: 'pink',
      stopOpacity: '1',
    },
  ]}
  rx="50%"
  ry="50%"
  fx="100%"
  fy="50%"
  cx="50%"
  cy="50%"
/>
```

### Add a radial gradient effect to the panel background in the business

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
        stops: [
          {
            offset: '0%',
            stopColor: 'yellow',
            stopOpacity: '1',
          },
          {
            offset: '100%',
            stopColor: 'red',
            stopOpacity: '1',
          },
        ],
      },
    };
  }
  renderScene(route, navigator) {
    let Scene = <View />;
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

<Props name="RadialGradientProps"></Props>

## FAQ

1. more info?

[react-native-svg/RadialGradient](https://github.com/react-native-community/react-native-svg#radialgradient)
