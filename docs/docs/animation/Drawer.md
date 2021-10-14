---
group:
  title: 动画
title: Drawer 抽屉组件
demo: /animation/drawer
---

<Desc>

`Drawer` 是抽屉组件，在 tuya-panel-kit@4.7.11 版本集成， 也可以单独安装 tuya-panel-animation-drawer 使用。

</Desc>

## 代码演示

### 上边抽屉

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
    <Text style={{ fontSize: 24 }}>我没有遮罩</Text>
  </View>
</Drawer>
```

### 右边抽屉

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
    <Text style={{ fontSize: 24 }}>我有遮罩</Text>
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

### 下边抽屉

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
    <Text style={{ fontSize: 24 }}>我没有遮罩</Text>
  </View>
</Drawer>
```

### 左边抽屉

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
    <Text style={{ fontSize: 24 }}>我有遮罩</Text>
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