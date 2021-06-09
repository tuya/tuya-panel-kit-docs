---
title: TopBar 头部栏
desc: '`TopBar` 是默认集成在 `FullView` 中的顶部工具栏，在安卓中也称为 `ActionBar`，IOS 中称为 `UINavigationBar`。<br/>新版的 `TopBar` 统一了 IOS 及安卓两端的写法，且拆分出了 [TopBar.Container](#TopBar.Container) 、[TopBar.Content](#TopBar.Content) 以及 [TopBar.Action](#TopBar.Action) 三个组件，若存在高度定制情况，可使用三大组件进行组合构建。<br/>此外我们还封装了一份常用的 [TopBar](#TopBar) 组件，用于较为基础的 TopBar 定制需求。<br/>另外，`TopBar` 的高度在安卓和 IOS 上分别做了适配，可以通过 `TopBar.height` 获取到 `TopBar` 的高度。如果是 IPhoneX 以上机型，高度是 88, 其余 iOS 机型高度是 64， 安卓的 TopBar 高度是 56。'
demo: /navigation/top-bar
---

## 代码演示

### 基础使用 - 拆分版

```jsx
<TopBar.Container background="#000">
  <TopBar.Action name="backIos" color="red" onPress={TYSdk.Navigator.pop} />
  <TopBar.Content title="Title" />
  <TopBar.Action
    name="pen"
    color="yellow"
    onPress={TYSdk.native.showDeviceMenu}
  />
</TopBar.Container>
```

### 基础使用 - 封装版

```jsx
<TopBar
  background="#000"
  title="Title"
  color="red"
  actions={[
    {
      name: 'pen',
      color: 'yellow',
      onPress: () => TYSdk.native.showDeviceMenu(),
    },
  ]}
  onBack={TYSdk.Navigator.pop}
/>
```

### 径向渐变 - 封装版

```jsx
const radialBackground = {
  stops: [
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
  ],
};

<TopBar
  background={radialBackground}
  title="Title"
  onBack={TYSdk.Navigator.pop}
/>;
```

### 线性渐变 - 拆分版

```jsx
const linearBackground = {
  stops: {
    '0%': 'red',
    '100%': 'yellow',
  },
};

<TopBar.Container background={linearBackground}>
  <TopBar.Action name="backIos" onPress={TYSdk.Navigator.pop} />
  <TopBar.Content title="Title" />
</TopBar.Container>;
```

### 多工具栏 - 拆分版

```jsx
<TopBar.Container background="blue">
  <TopBar.Action name="backIos" onPress={TYSdk.Navigator.pop} />
  <TopBar.Action
    source="定时"
    color="red"
    onPress={() => {
      TYSdk.mobile.simpleTipDialog('click 定时', () => {});
    }}
  />
  <TopBar.Content
    title="Very Very Very Very Very Long Title"
    subTitle="SubTitle"
    onPress={() => {
      TYSdk.mobile.simpleTipDialog('click title', () => {});
    }}
  />
  {['plus', 'warning', 'edit'].map(v => (
    <TopBar.Action
      key={v}
      name={v}
      onPress={() => {
        TYSdk.simpleTipDialog(`click ${v}`, () => {});
      }}
    />
  ))}
</TopBar.Container>
```

### 多工具栏变 - 封装版

```jsx
<TopBar
  style={{ marginTop: 24 }}
  background="blue"
  title="Very Very Very Very Very Long Title"
  subTitle="SubTitle"
  onPress={() => TYSdk.mobile.simpleTipDialog('click title', () => {})}
  leftActions={[
    {
      name: 'backIos',
      onPress: TYSdk.Navigator.pop,
    },
    {
      source: '定时',
      color: 'red',
      onPress: () => TYSdk.mobile.simpleTipDialog('click 定时', () => {}),
    },
  ]}
  actions={['plus', 'warning', 'edit'].map(v => ({
    name: v,
    onPress: () => TYSdk.mobile.simpleTipDialog(`click ${v}`, () => {}),
  }))}
/>
```

## API

### TopBar

<API name="TopBarProps"></API>

### TopBar.Container

<API name="TopBarContainerProps"></API>

### TopBar.Content

<API name="TopBarContentProps"></API>

### TopBar.Action

<API name="TopBarActionProps"></API>

## FAQ

1. 为什么 TYSdk.Navigator.pop 不生效？

检查下当前面板是否处于首页，若处于首页，当前路由栈仅一条，无法 pop，如需返回 APP 首页，请使用 TYSdk.mobile.back。
