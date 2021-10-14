---
group:
  title: 展示
title: LinearGradient 线性渐变
desc: LinearGradient 主要是给子节点提供一个线性渐变的效果。
demo: /presentation/linear-gradient
---

## 代码演示

### 垂直两段渐变

```jsx
import { LinearGradient } from 'tuya-panel-kit'

<LinearGradient
  gradientId="Gradient1"
  style={{
    width: 300,
    height: 200,
    marginLeft: 24,
  }}
  x1="0%"
  y1="0%"
  x2="0%"
  y2="100%"
  stops={{
    '0%': '#F99833',
    '100%': '#F84803',
  }}
>
  <Rect width={300} height={200} />
</LinearGradient>
```

### 斜向三段渐变

```jsx
import { LinearGradient } from 'tuya-panel-kit'

<LinearGradient
  gradientId="Gradient2"
  style={{ width: 300, height: 200, marginLeft: 24 }}
  x1="100%"
  y1="0%"
  x2="0%"
  y2="100%"
  stops={{
    '0%': '#61FF00',
    '60%': '#FFC600',
    '100%': '#FF4800',
  }}
>
  <Rect width={300} height={200} />
</LinearGradient>
```

### 面板背景渐变

```jsx
import { LinearGradient } from 'tuya-panel-kit'

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

1. 更多资料?

[react-native-svg/LinearGradient](https://github.com/react-native-community/react-native-svg#lineargradient)
