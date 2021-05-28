---
title: Tabs
desc: 'The Tabs tab bar is written by pure gestures, which solves the nesting problem caused by the previous implementation of ScrollView. In addition, the function of **lazy loading** is added, and the **TabContent** component is split out, which can be used separately.'
---

## Code demo

### Basic Tabs

> One screen displays four Tab labels by default. You can customize the number of tabs displayed on one screen through **maxItem**; <br />If the dataSource length exceeds **maxItem**, it will automatically become multi-screen;

```jsx
const [state, setState] = React.useState({
  activeKey1: '1',
  d1: [
    { value: '1', label: 'Detector' },
    { value: '2', label: 'Remote control' },
    { value: '3', label: 'Emulator' },
    { value: '4', label: 'Limited detector' },
  ],
});

<Tabs
  activeKey={state.activeKey1}
  dataSource={state.d1}
  onChange={tab => setState({ ...state, activeKey1: tab.value })}
/>;
```

### Multi-screen Tabs

```jsx
const [state, setState] = React.useState({
  activeKey2: '3',
  d2: [
    { value: '1', label: 'Name' },
    { value: '2', label: 'Age' },
    { value: '3', label: 'Home address' },
    { value: '4', label: 'Home' },
    { value: '5', label: 'Community' },
    { value: '6', label: 'Unit' },
    { value: '7', label: 'Graduated school' },
    { value: '8', label: 'Domicile' },
  ],
});

<Tabs
  activeKey={state.activeKey2}
  dataSource={state.d2}
  onChange={tab => setState({ ...state, activeKey2: tab.value })}
/>;
```

### Basic Tabs（Stateless component）

```jsx
const [state, setState] = React.useState({
  d2: [
    { value: '1', label: 'Name' },
    { value: '2', label: 'Age' },
    { value: '3', label: 'Home address' },
    { value: '4', label: 'Home' },
    { value: '5', label: 'Community' },
    { value: '6', label: 'Unit' },
    { value: '7', label: 'Graduated school' },
    { value: '8', label: 'Domicile' },
  ]
});

<Tabs dataSource={state.d2} />,
```

### Use TabContent alone-swipe left and right

```jsx
const [state, setState] = React.useState({
  activeIndex: 0,
  d1: [
    { value: '1', label: 'Detector' },
    { value: '2', label: 'Remote control' },
    { value: '3', label: 'Emulator' },
    { value: '4', label: 'Limited detector' },
  ],
});
const handleRelease = (gestureState, index) =>
  setState({ ...state, activeIndex: index });

<Tabs.TabContent
  preload={false}
  activeIndex={state.activeIndex}
  onRelease={handleRelease}
>
  {state.d1.map((data, idx) => (
    <Panel key={idx} title={`The ${idx} Page`} />
  ))}
</Tabs.TabContent>;
```

### Tabs with TabContent

```jsx
const [state, setState] = React.useState({
  activeKey1: '1',
  d1: [
    { value: '1', label: 'Detector' },
    { value: '2', label: 'Remote control' },
    { value: '3', label: 'Emulator' },
    { value: '4', label: 'Limited detector' },
  ],
});

<Tabs
  activeKey={state.activeKey1}
  dataSource={state.d1}
  swipeable={true}
  onChange={tab => setState({ ...state, activeKey1: tab.value })}
>
  <Tabs.TabPanel>
    {new Array(2).fill(0).map((_, n) => (
      <TYListItem key={n} title={`Practice_${n}`} />
    ))}
  </Tabs.TabPanel>
  <Tabs.TabPanel>
    {new Array(2).fill(0).map((_, n) => (
      <TYListItem key={n} title={`Test_${n}`} />
    ))}
  </Tabs.TabPanel>
  <Tabs.TabPanel>
    {new Array(2).fill(0).map((_, n) => (
      <TYListItem key={n} title={`School building_${n}`} />
    ))}
  </Tabs.TabPanel>
  <Tabs.TabPanel>
    {new Array(2).fill(0).map((_, n) => (
      <TYListItem key={n} title={`Stencil_${n}`} />
    ))}
  </Tabs.TabPanel>
</Tabs>;
```

### Tabs with content on multiple screens

```jsx
const [state, setState] = React.useState({
  activeKey2: '3',
  d2: [
    { value: '1', label: 'Name' },
    { value: '2', label: 'Age' },
    { value: '3', label: 'Home address' },
    { value: '4', label: 'Home' },
    { value: '5', label: 'Community' },
    { value: '6', label: 'Unit' },
    { value: '7', label: 'Graduated school' },
    { value: '8', label: 'Domicile' },
  ],
});
const Panel = ({ title, largeData, ...rest }) => {
  return (
    <Tabs.TabPanel {...rest}>
      {largeData ? (
        new Array(99)
          .fill(0)
          .map((_, idx) => <TYListItem key={idx} title={`${title}_${idx}`} />)
      ) : (
        <TYListItem title={title} />
      )}
    </Tabs.TabPanel>
  );
};

<Tabs
  activeKey={state.activeKey2}
  dataSource={state.d2}
  onChange={tab => setState({ ...state, activeKey2: tab.value })}
>
  {state.d2.map((data, idx) => (
    <Panel key={idx} title={data.label} />
  ))}
</Tabs>;
```

### Nested Tabs

```jsx
const [state, setState] = React.useState({
  activeKey1: '1',
  activeKey2: '3',
  d1: [
    { value: '1', label: 'Detector' },
    { value: '2', label: 'Remote control' },
    { value: '3', label: 'Emulator' },
    { value: '4', label: 'Limited detector' },
  ],
});

<Tabs
  tabPosition="bottom"
  underlineStyle={{ backgroundColor: 'transparent' }}
  activeKey={state.activeKey1}
  dataSource={state.d1}
  swipeable={false}
  onChange={tab => setState({ ...state, activeKey1: tab.value })}
>
  <Tabs.TabPanel background="#fff">
    <Tabs
      activeKey={state.activeKey2}
      dataSource={state.d2}
      onChange={tab => setState({ ...state, activeKey2: tab.value })}
    >
      {state.d2.map((data, idx) => (
        <Panel key={idx} title={data.label} />
      ))}
    </Tabs>
  </Tabs.TabPanel>
  <Tabs.TabPanel background="#fff">
    <TYListItem title="Remote control" />
  </Tabs.TabPanel>
  <Tabs.TabPanel background="#fff">
    <TYListItem title="Emulator" />
  </Tabs.TabPanel>
  <Tabs.TabPanel background="#fff">
    <TYListItem title="Limited detector" />
  </Tabs.TabPanel>
</Tabs>;
```

## API

### Tabs

<Props name="TabsProps"></Props>

### Tabs.TabContent

<Props name="TabContentProps"></Props>

### Tabs.TabPanel

extends [ViewProps](https://reactnative.dev/docs/view#props)

<Props name="TabPanelProps"></Props>
