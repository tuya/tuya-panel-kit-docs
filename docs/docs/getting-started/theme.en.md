---
group:
  title: Guides
title: Theme
order: 3
---

<Desc>

tuya-panel-kit designed normatively and support flexible style customization, meet the diverse visual needs of the business and brand. Including but not limited to global style (main color, rounded corners, border) and visual customization of specified components.

</Desc>

## Feature

1. Unified management of global styles
1. Convenient style reuse and expansion
1. Reduce excessive style props passing

## Custom theme

> You can in the local theme configuration file（`src/config/theme.js`） cover all theme configurations（All theme variables can be seen in the theme quick reference table at the bottom of the document），Of course, you can also expand the theme configuration in the project by yourself。

```javascript
export default {
  // Override local default theme variables
  global: {
    brand: '#ff0000',
  },
  switchButton: {
    margin: 2,
    width: 40,
    height: 24,c
    thumbSize: 20,
  },
  // Expand theme configuration
  myExtendTheme: {
    customKey: 'blue',
  },
};
```

## API

<h3 id = 'h3Title'>1. Inject the global theme</h3>

> Add **Theme(ThemeProvider)** to the top of the application，Pass the theme to the React component tree。Then, we can access the subject object in the following three ways.

```jsx
import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { TYSdk, Theme } from 'tuya-panel-kit';
import { actions, ReduxState } from '@models';
import DebugView from './components/DebugView';

const TYEvent = TYSdk.event;
const TYDevice = TYSdk.device;

const composeLayout = (store, component) => {
  const NavigatorLayoutContainer = connect(_.identity)(component);
  const ThemeContainer = connect(({ theme }) => ({ theme }))(Theme);
  const { dispatch } = store;

  TYEvent.on('deviceDataChange', data => {
    switch (data.type) {
      case 'dpData':
        dispatch(actions.common.responseUpdateDp(data.payload));
        break;
      default:
        dispatch(actions.common.deviceChange(data.payload));
        break;
    }
  });

  TYEvent.on('networkStateChange', data => {
    dispatch(actions.common.deviceChange(data));
  });

  class PanelComponent extends Component {
    static propTypes = {
      // eslint-disable-next-line
      devInfo: PropTypes.object.isRequired,
    };

    constructor(props) {
      super(props);

      if (props && props.devInfo && props.devInfo.devId) {
        TYDevice.setDeviceInfo(props.devInfo);
        TYDevice.getDeviceInfo().then(data => dispatch(devInfoChange(data)));
        // eslint-disable-next-line
      } else if (props.preload) {
        // do something
      } else {
        TYDevice.getDeviceInfo().then(data => dispatch(devInfoChange(data)));
      }
    }

    render() {
      return (
        <Provider store={store}>
          <ThemeContainer>
            <View style={{ flex: 1 }}>
              <NavigatorLayoutContainer />
              <DebugView />
            </View>
          </ThemeContainer>
        </Provider>
      );
    }
  }

  return PanelComponent;
};

export default composeLayout;
```

<h3 id = 'h3Title'>2. Get global theme</h3>

- Access the theme through components wrapped by **styled** in **styled-components**

```typescript
import styled from 'styled-components/native';

const defaultColor = '#333';

export const StyledTitle = styled(TYText).attrs({
  type: 'title',
  size: 'small',
})`
  color: ${props => getTheme(props, 'list.fontColor', '#333')};
  color: ${props =>
    props.fontColor ||
    props.theme.list.fontColor ||
    props.theme.list.light.fontColor ||
    '#333'};
`;
```

- withTheme: Access the theme through components wrapped by **withTheme** higher-order functions

```typescript
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Utils } from 'tuya-panel-kit';

const { withTheme } = Utils.ThemeUtils;

const ThemedView = props => {
  const { theme } = props;
  return <View style={{ backgroundColor: theme.global.brand }} />
};

ThemedView.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme(ThemedView);
```

- ThemeConsumer: Receive the theme via the **ThemeConsumer** component

```typescript
import { Utils } from 'tuya-panel-kit';

const { ThemeConsumer } = Utils.ThemeUtils;

export const StyledIconFont = props => {
  return (
    <ThemeConsumer>
      {theme => {
        const propsWithTheme = { ...props, theme };
        return (
          <IconFont
            color={getTheme(
              propsWithTheme,
              'list.iconColor',
              DEFAULT_THEME.iconColor,
            )}
            {...props}
          />
        );
      }}
    </ThemeConsumer>
  );
};
```

## Theme cheat sheet

```javascript
import { Platform } from 'react-native';
import { CoreUtils, RatioUtils } from '../../utils';

const { get } = CoreUtils;
const { convertX: cx } = RatioUtils;

/**
 * General auxiliary functions
 */
const getBrandColor = props => get(props, 'theme.global.brand', global.brand);
const getDividerColor = props =>
  get(props, 'theme.global.dividerColor', global.dividerColor);
const getTypedFontColor = (props, reverse = false) => {
  let type = get(props.theme, 'type', 'light');
  if (reverse) type = type === 'light' ? 'dark' : 'light';
  const path = `global.text.${type}`;
  return get(props.theme, path, global.text[type]);
};

// Adjust the font size according to the global font benchmark ratio
const normalizeFont = (props, fontSize, lineHeight) => {
  const baseline = get(props, 'theme.global.fontSizeBase', global.fontSizeBase);
  return {
    fontSize: fontSize * baseline,
    lineHeight: Math.round(lineHeight * baseline), // Mi will crash if it is not an integer
  };
};

export default {
  type: 'light',

  /**
   * Global basic variables
   */
  global: {
    brand: '#FF4800', // Brand color (theme color)
    bgColor: '#f8f8f8', // Background color
    fontSizeBase: 1, // Font base ratio
    dividerColor: '#e5e5e5', // Divider color
    success: '#00C800', // Success color
    warning: '#FAAE17', // Warning color
    error: '#F4182C', // failure
    // info, // Information color (not yet open to use)
    // disabled, // Disable transparency (not yet open to use)
    mask: 'rgba(0, 0, 0, 0.7)', // Mask color
    text: {
      light: '#333', // The color of the font under light
      dark: '#fff', // The color of the font under dark
    },
  },

  /**
   * Font size variable
   */
  text: {
    heading: {
      // The font size corresponding to type as heading and size as small
      small: props => normalizeFont(props, 28, 40),
      normal: props => normalizeFont(props, 40, 56),
      large: props => normalizeFont(props, 72, 100),
    },
    title: {
      // The font size corresponding to type as title and size as small
      small: props => normalizeFont(props, 16, 22),
      normal: props => normalizeFont(props, 17, 24),
      large: props => normalizeFont(props, 20, 28),
    },
    paragraph: {
      // The font size corresponding to type as paragraph and size as small
      small: props => normalizeFont(props, 10, 14),
      normal: props => normalizeFont(props, 12, 17),
      large: props => normalizeFont(props, 14, 20),
    },
  },

  /**
   * Picker scroll picker variable
   */
  picker: {
    fontSize: 16, // Picker font size
    fontColor: '#000', // Picker font color
    dividerColor: getDividerColor, // IOS Reserved, not currently supported
    unitFontSize: 16, // Picker unit size
    unitFontColor: '#000', // Picker unit color
  },

  /**
   * Button variable
   */
  button: {
    margin: [0, 0, 0, 0], // Button container margin (up/right/down/left)
    fontSize: 10, // font size
    fontColor: getTypedFontColor, // font color
    iconSize: 24, // Icon size
    iconColor: props => getTypedFontColor(props, props.type === 'primary'), // Icon 颜色
    bgWidth: null, // Button background width, internally adaptive
    bgHeight: null, // Button background height, internally adaptive
    bgRadius: null, // Button background rounded corners, internally adaptive
    bgColor: getBrandColor, // Button background color, follow the main color by default
  },

  /**
   * TopBar variable
   */
  topbar: {
    background: '#fff', // TopBar background
    color: '#000', // TopBar font color（include icon color）
  },

  /**
   * SwitchButton variable
   */
  switchButton: {
    width: 50, // Button width
    height: Platform.select({
      // button height
      web: 28,
      ios: 28,
      android: 14,
    }),
    thumbSize: 26, // thumb height and width size
    margin: Platform.select({
      // thumb margin
      web: 1,
      ios: 1,
      android: 0,
    }),
    tintColor: '#e5e5e5', // Background color when closed
    onTintColor: '#4CD964', // Background color when opened
    thumbTintColor: '#fff', // Thumb background color when closed
    onThumbTintColor: '#fff', // Thumb background color when opened
  },

  /**
   * Slider variable
   */
  slider: {
    width: null, // Follow the parent container by default (slider width)
    trackRadius: 2, // Slider border radius
    trackHeight: 4, // Slider height
    minimumTrackTintColor: getBrandColor, // color for minimum text
    maximumTrackTintColor: '#e5e5e5', // color for maximum text
    thumbSize: 24,
    thumbRadius: 14,
    thumbTintColor: '#fff', // thumb color
  },

  /**
   * Checkbox variable
   */
  checkbox: {
    size: 28, // Checkbox size
    fontColor: '#333', // Checkbox font color
    activeColor: '#3388FF', // Color when Checkbox is activated
    disabledColor: '#333', // Color when Checkbox is disabled
  },

  /**
   * List variable
   */
  list: {
    boardBg: '#f8f8f8', // The container background color of the list
    iconColor: 'rgba(51, 51, 51, 0.5)', // Icon text color
    fontColor: '#333', // title color
    subFontColor: 'rgba(51, 51, 51, 0.5)', // subtitle text color
    descFontColor: 'rgba(51, 51, 51, 0.5)', // description text color
    cellLine: 'rgba(51, 51, 51, 0.1)', // divider line color
    cellBg: '#fff', // cell background color
    cellRadius: 0, // cell border radius
    margin: [0, 0, 0, 0], // cell margin
    padding: [12, cx(16), 12, cx(16)], // cell padding
  },

  /**
   * BrickButton variable
   */
  brickButton: {
    fontSize: 12,
    fontColor: '#fff',
    bgRadius: 24, // background border radius
    bgColor: getBrandColor,
    bgBorder: 'transparent', // background border
    bgBorderWidth: 0, // background border width
    loadingColor: '#fff', // loading text color
    loadingBackground: 'rgba(0,0,0,.1)', // loading text background
  },

  /**
   * Dialog variable
   */
  dialog: {
    width: cx(315), // dialog container width
    bg: '#fff', // dialog background
    radius: cx(8), // dialog container border radius
    cellHeight: 56, // cell height(header/footer)
    lineColor: '#e5e5e5', // divider line color
    titleFontSize: 18, // title font size
    titleFontColor: '#333', // title font color
    subTitleFontSize: 16, // subtitle font size
    subTitleFontColor: '#999', // subtitle font color
    cancelFontSize: 16, // footer cancel font size
    cancelFontColor: '#666', // footer cancel font color
    confirmFontSize: 16, // footer confirm font size
    confirmFontColor: '#333', // footer confirm font color
    prompt: {
      bg: '#f8f8f8', // prompt background
      radius: cx(4), // prompt border radius
      padding: '12px 16px', // prompt padding
      placeholder: '#d6d6de', // placeholder text
    },
  },

  /**
   * Popup variable
   */
  popup: {
    cellHeight: 48, // cell height
    cellBg: '#fff', // cell background
    titleRadius: cx(8), // header border radius
    footerRadius: 0, // footer border radius
    bottomBg: '#f5f5f5', // footer background
    lineColor: '#e5e5e5', // divider line color
    titleFontSize: 14, // header title font size
    titleFontColor: '#999', // header title font color
    cancelFontSize: 16, // footer cancel text font size
    cancelFontColor: '#666', // footer cancel text font color
    confirmFontSize: 16, // footer confirm text font size
    confirmFontColor: '#333', // footer confirm text font color
  },
};
```
