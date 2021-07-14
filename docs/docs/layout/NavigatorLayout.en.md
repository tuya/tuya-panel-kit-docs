---
group:
  title: Layout
title: NavigatorLayout
---

<Desc>

Tuya device control panel will hardly consist of a single page, And `NavigatorLayout` is a basic layout that provides navigation routing and can easily handle switching between panel pages. Its internal bottom layer uses [React Native Navigator](https://archive.reactnative.dev/docs/0.43/navigator#docsNav), and integrates the `FullView` component built-in.

</Desc>

## Basic Usage

> Can refer to [basic demp `src/main.js` file](https://github.com/tuya/tuya-panel-demo/blob/master/examples/basic/src/main.js)

Use `NavigatorLayout`, The following steps are required:

1. Write a `React` component that inherits the `NavigatorLayout` provided by `tuya-panel-kit`.
2. Override the `renderScene` method to render the user's own page, which needs to return a valid `React` component
3. If you need to achieve more refined routing control, such as page title, page background and other functions, you can override the `hookRoute` method to achieve.

## Code demo

<h3 id="h3Title">Jump between two pages</h3>

> Can run our [demo](https://github.com/tuya/tuya-panel-kit/tree/master/demos/navigator-layout/basic-jump) on Github for preview

First define a routing configuration, and then write a component inherited from `NavigatorLayout`.

Here we define routing tables for two pages (`routers`), They are `page1` and `page2`, In the `renderScene` method, we can get the `Navigator` and the current routing object. Then when we render the page, we look for the correspnoding page in the routing table according to the id of the current route, If there is no corresponding page, we render the default home page.

```jsx
import React from 'react';
import { NavigatorLayout, Theme } from 'tuya-panel-kit';
import Page from './page';
import Home from './home';

const routers = [
  {
    id: 'page1',
    title: 'page1',
    Scene: props => <Page {...props} num={1} />,
  },
  {
    id: 'page2',
    title: 'page2',
    Scene: props => <Page {...props} num={2} />,
  },
];

class MainLayout extends NavigatorLayout {
  hookRoute(route) {
    const theRoute = routers.find(r => r.id === route.id);
    return {
      ...route,
      topbarStyle: { backgroundColor: '#ff6024' },
      topbarTextStyle: { color: '#fff' },
      showOfflineView: false, // The offline mask of the device is turned off for basic function debugging, and the production environment needs to be turned on
      title: route.id === 'main' ? 'Basic Jump Usage' : theRoute.title,
    };
  }

  renderScene(route, navigator) {
    let Scene = <Home navigator={navigator} />;

    const router = routers.find(r => r.id === route.id);
    if (router && router.Scene) {
      const Component = router.Scene;
      Scene = <Component navigator={navigator} {...route} />;
    }

    return Scene;
  }
}

const ThemedMainLayout = props => (
  <Theme theme={{}}>
    <MainLayout {...props} />
  </Theme>
);

export default ThemedMainLayout;
```

The following is the implementation of `page` and `home`, through the `push` method of `Navigator`, we can **jump to a certain page**, and through the `pop` method, **return to the previous page **.

<center>
  <p align="center">
    <img
      src="https://images.tuyacn.com/fe-static/docs/img/3a6c3053-3eb5-43f7-b17f-6a08b4e467c5.gif"
      width="50%"
      height="50%"
    />
  </p>
</center>

```jsx
// page.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'tuya-panel-kit';

export default ({ num, navigator }) => (
  <View style={[styles.container, styles.center]}>
    <Text style={styles.welcomeTxt}>This is Page {num}</Text>
    <Button style={styles.btnStyle} onPress={() => navigator.pop()}>
      <Text style={styles.navTxt}>Click to go back!</Text>
    </Button>
  </View>
);
```

```jsx
// home.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'tuya-panel-kit';

export default ({ navigator }) => (
  <View style={[styles.container, styles.center]}>
    <Text style={styles.welcomeTxt}>
      Welcome to basic usage of NavigatorLayout
    </Text>
    {[1, 2].map(v => (
      <Button
        style={styles.btnStyle}
        key={v}
        onPress={() => navigator.push({ id: `page${v}` })}
      >
        <Text style={styles.navTxt}>Go to page {v}</Text>
      </Button>
    ))}
  </View>
);
```

<h3 id="h3Title">Custom transition animation effect</h3>

> Can run our [demo](https://github.com/tuya/tuya-panel-kit/tree/master/demos/navigator-layout/screen-transition) on github for preview

`NavigatorLayout` uses the **default page transition animation configuration**, and the behavior will be: **New pages are displayed from left to right, and fallbacks are displayed from right to left**.

```jsx
const SceneConfigs = {
  ...Navigator.SceneConfigs.HorizontalSwipeJump,
  gestures: {
    pop: {
      ...Navigator.SceneConfigs.FloatFromRight.gestures.pop,
    },
  },
};
```

If you want to customize the page transition animation configuration, we can modify the parameters passed in `navigator.push` to customize the transition animation.

Below we use the effects `VerticalUpSwipeJump` and `SwipeFromLeft`, the following is the effect diagram:

<center>
  <p align="center">
    <img
      src="https://images.tuyacn.com/fe-static/docs/img/f43e3d45-725d-415b-abca-3206cd0d5e0b.gif"
      width="50%"
      height="50%"
    />
  </p>
</center>

If you have other transition animation needs, can refer to [React Native Navigator Transition](https://archive.reactnative.dev/docs/0.43/navigator#configurescene) to configure the transition animation effect you want.

```jsx
// home.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'tuya-panel-kit';
import { Navigator } from '@tuya-rn/react-native-deprecated-custom-components';

const sceneConfig = {
  ...Navigator.SceneConfigs.HorizontalSwipeJump,
  gestures: {
    pop: {
      ...Navigator.SceneConfigs.FloatFromRight.gestures.pop,
    },
  },
};

const RouterConfig = [
  {
    txt: `VerticalUpSwipeJump to page 1`,
    transition: {
      ...sceneConfig,
      ...Navigator.SceneConfigs.VerticalUpSwipeJump,
    },
  },
  {
    txt: `SwipeFromLeft to page 2`,
    transition: {
      ...sceneConfig,
      ...Navigator.SceneConfigs.SwipeFromLeft,
    },
  },
];

export default ({ navigator }) => (
  <View style={[styles.container, styles.center]}>
    <Text style={styles.welcomeTxt}>Screen Transition Example!</Text>
    {[1, 2].map(v => (
      <Button
        style={styles.btnStyle}
        key={v}
        onPress={() =>
          navigator.push({
            id: `page${v}`,
            sceneConfigs: RouterConfig[v - 1].transition,
          })
        }
      >
        <Text style={styles.navTxt}>{RouterConfig[v - 1].txt}</Text>
      </Button>
    ))}
  </View>
);
```

## API

```typescript
class NavigatorLayout<P = {}, S = {}> extends React.Component<
  P,
  { modalVisible: boolean } & S
> {
  hookRoute(route: DeprecatedNavigatorRoute): NavigationOptions;
  renderScene(
    route: DeprecatedNavigatorRoute,
    navigator: DeprecatedNavigator,
  ): JSX.Element | undefined;
}
```

<h3 id="h3Title">hookRoute</h3>

> Used to control common page UI, see previous type signature. `hookRoute` receives a parameter `route` and needs to return a legal `NavigationOptions`, Inside `NavigatorLayout`, the return value of `hookRoute` will be used to render the relevant UI of the current page.

```typescript
// The routing information of the page, the home page is a fixed value, and the other pages are determined by the parameters attached when the user passes `navigator.push`
interface DeprecatedNavigatorRoute {
  id: string;
  [routeProp: string]: any;
}

interface NavigationOptions {
  /**
   * @desc Custom panel background
   * number: render local image
   * string: render color
   * { uri: string }: render network image
   * RadialGradientBackground: render radial gradient
   * LinearGradientBackground: render linear gradient
   *
   */
  background?:
    | number
    | string
    | { uri: string }
    | RadialGradientBackground
    | (LinearGradientBackground & LinearGradientBackgroundOffset);
  /**
   * @desc Custom header bar style
   */
  topbarStyle?: StyleProp<ViewStyle>;
  /**
   * @desc Custom header text style
   */
  topbarTextStyle?: StyleProp<TextStyle>;
  /**
   * @desc Custom panel background style
   */
  backgroundStyle?: StyleProp<ViewStyle>;
  /**
   * @desc Custom header bar title
   */
  title?: string;
  hideTopbar?: boolean;
  /**
   * @desc Control whether to show offline mask
   * @default true
   */
  showOfflineView?: boolean;
  gesture?: boolean;
  /**
   * @desc Whether to enable homepage gestures to return to the app list page
   * @default true
   */
  enablePopGesture?: boolean;
  /**
   * @desc Bluetooth offline prompt whether to cover the entire panel (except for the header bar)
   * @default true
   */
  isBleOfflineOverlay?: boolean;
  /**
   * @desc Custom rendering header bar
   */
  renderTopBar?: () => JSX.Element;
  /**
   * @desc Custom rendering status bar
   */
  renderStatusBar?: () => JSX.Element;
}
```

<h3 id="h3Title">renderScene</h3>

> Used to render page components, see the previous type signature, `renderScene` receives two parameters, `route` and `navigator`, and needs to return a valid `JSXElement`.
>
> The specific type signatures of the parameters are shown below. Note that the `route.id` on the home page is fixed to `main`.

```typescript
// The routing information of the page, the home page is a fixed value, and the other pages are determined by the parameters attached when the user passes navigator.push
interface DeprecatedNavigatorRoute {
  id: string;
  [routeProp: string]: any;
}

// The Navigator api provided by React Native
interface DeprecatedNavigator {
  getCurrentRoutes(): DeprecatedNavigatorRoute[];
  immediatelyResetRouteStack(nextRouteStack: DeprecatedNavigatorRoute[]): void;
  jumpBack(): void;
  jumpForward(): void;
  jumpTo(route: DeprecatedNavigatorRoute): void;
  pop(): void;
  popN(n: number): void;
  popToRoute(route: DeprecatedNavigatorRoute): void;
  popToTop(): void;
  push(route: DeprecatedNavigatorRoute): void;
  replace(route: DeprecatedNavigatorRoute): void;
  replaceAtIndex(route: DeprecatedNavigatorRoute, index: number): void;
  replacePrevious(route: DeprecatedNavigatorRoute): void;
}
```
