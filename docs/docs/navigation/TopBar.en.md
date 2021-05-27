---
title: TopBar
desc: '`TopBar` is the top toolbar integrated in **FullView** by default. It is also called **ActionBar** in Android and **UINavigationBar** in IOS.<br/>The new version of `TopBar` unifies the writing of both IOS and Android, and splits out [TopBar.Container](#TopBar.Container), [TopBar.Content](#TopBar.Content) and [TopBar.Action](#TopBar.Action) Three components, if there is a high degree of customization, you can use the three components to build a combination.<br/>In addition, we also encapsulated a commonly used [TopBar](#TopBar) component for basic TopBar customization requirements.<br/>In addition, the height of `TopBar` is adapted on Android and IOS respectively, and the height of `TopBar` can be obtained through **TopBar.height**. If the model is IPhoneX or higher, the height is 88, the other iOS models are 64, and the Android TopBar is 56.'
---

## Code demo

### Basic usage - split version

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

### Basic use - package version

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

### Radial Gradient - package version

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

### Linear gradient - split version

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

### Multi toolbar - split version

```jsx
<TopBar.Container background="blue">
  <TopBar.Action name="backIos" onPress={TYSdk.Navigator.pop} />
  <TopBar.Action
    source="timing"
    color="red"
    onPress={() => {
      TYSdk.mobile.simpleTipDialog('click timing', () => {});
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

### Multi toolbar change - package version

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
      source: 'timing',
      color: 'red',
      onPress: () => TYSdk.mobile.simpleTipDialog('click timing', () => {}),
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

<Props name="TopBarProps"></Props>

### TopBar.Container

<Props name="TopBarContainerProps"></Props>

### TopBar.Content

<Props name="TopBarContentProps"></Props>

### TopBar.Action

<Props name="TopBarActionProps"></Props>

## FAQ

1. Why does **TYSdk.Navigator.pop** not take effect?

Check whether the current panel is on the homepage. If it is on the homepage, there is only one routing stack and cannot be popped. If you need to return to the APP homepage, please use **TYSdk.mobile.back**.
