---
group:
  title: Animation
title: Drawer
desc: ' 'Drawer' is a drawer component, integrated in tuya-panel-kit@4.7.11 version, and can also be installed separately using tuya-panel-animation-drawer.'
demo: /animation/drawer
---

## Code demo

### Top drawer

```jsx
import { Drawer, Utils } from 'tuya-panel-kit';
// import Drawer from 'tuya-panel-animation-drawer';

const { viewWidth, convertX: cx } = Utils.RatioUtils;

const [state, setState] = React.useState({
    visible: false,
    placement: 'top',
  });

<Drawer
  width={winWidth}
  height={winHeight / 2}
  hasMask={false}
  placement={state.placement}
  visible={state.visible}
  onMaskPress={() => {
    setState({ visible: false, placement: state.placement });
  }}
  onStateChange={state => {
    console.log(state);
  }}
>
  <View
    style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Text style={{ fontSize: 24 }}>I don't have a mask</Text>
  </View>
</Drawer>
```

### On the right side of the drawer

```jsx
import { Drawer, Utils } from 'tuya-panel-kit';
// import Drawer from 'tuya-panel-animation-drawer';

const { viewWidth, convertX: cx } = Utils.RatioUtils;

const [state, setState] = React.useState({
    visible: false,
    placement: 'right',
  });

<Drawer
  width={winWidth / 2}
  height={winHeight}
  hasMask={true}
  placement={state.placement}
  visible={state.visible}
  onMaskPress={() => {
    setState({ visible: false, placement: state.placement });
  }}
  onStateChange={state => {
    console.log(state);
  }}
>
  <View
    style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Text style={{ fontSize: 24 }}>I have a mask</Text>
    <TouchableOpacity
      style={{
        backgroundColor: '#fff',
        width: 88,
        height: 32,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        zIndex: 10,
      }}
      onPress={() => {
        setState({ visible: false, placement: state.placement });
      }}
    >
      <Text> Click Me</Text>
    </TouchableOpacity>
  </View>
</Drawer>
```

### Bottom drawer

```jsx
import { Drawer, Utils } from 'tuya-panel-kit';
// import Drawer from 'tuya-panel-animation-drawer';

const { viewWidth, convertX: cx } = Utils.RatioUtils;

const [state, setState] = React.useState({
    visible: false,
    placement: 'bottom',
  });

<Drawer
  width={winWidth}
  height={winHeight / 2}
  hasMask={false}
  placement={state.placement}
  visible={state.visible}
  onMaskPress={() => {
    setState({ visible: false, placement: state.placement });
  }}
  onStateChange={state => {
    console.log(state);
  }}
>
  <View
    style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Text style={{ fontSize: 24 }}>I don't have a mask</Text>
  </View>
</Drawer>
```

### On the left side of the drawer

```jsx
import { Drawer, Utils } from 'tuya-panel-kit';
// import Drawer from 'tuya-panel-animation-drawer';

const { viewWidth, convertX: cx } = Utils.RatioUtils;

const [state, setState] = React.useState({
    visible: false,
    placement: 'left',
  });

<Drawer
  width={winWidth / 2}
  height={winHeight}
  hasMask={true}
  placement={state.placement}
  visible={state.visible}
  onMaskPress={() => {
    setState({ visible: false, placement: state.placement });
  }}
  onStateChange={state => {
    console.log(state);
  }}
>
  <View
    style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Text style={{ fontSize: 24 }}>I have a mask</Text>
    <TouchableOpacity
      style={{
        backgroundColor: '#fff',
        width: 88,
        height: 32,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        zIndex: 10,
      }}
      onPress={() => {
        setState({ visible: false, placement: state.placement });
      }}
    >
      <Text> Click Me</Text>
    </TouchableOpacity>
  </View>
</Drawer>
```

## API 

<API src="../../../node_modules/tuya-panel-animation-drawer/lib/index.d.ts" exports='["Drawer"]'>