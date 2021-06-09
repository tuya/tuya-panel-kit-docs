---
title: RadialGradient 径向渐变
desc: RadialGradient 为径向渐变，与线性渐变相似，只是它是从一个点开始发散绘制渐变。
demo: /presentation/radial-gradient
---

## 代码演示

### 向外进行由黄色-蓝色的径向渐变

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

### 向外进行由红色-黄色-粉色的径向渐变

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

### 业务中给面板背景添加径向渐变效果

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

<API name="RadialGradientProps"></API>

## FAQ

1. 更多资料?

[react-native-svg/RadialGradient](https://github.com/react-native-community/react-native-svg#radialgradient)
