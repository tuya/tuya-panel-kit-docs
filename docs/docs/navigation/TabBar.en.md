---
group:
  title: Navigation
title: TabBar
desc: '`TabBar` is for splitting tabs for more fine-grained control. There are currently two types, the default is the most basic Tab.'
demo: /navigation/tab-bar
---

## Code demo

### Basic usage

```jsx
import { TabBar } from 'tuya-panel-kit'

const [tab, setTab] = React.useState('2');

const tabs = Array.from(Array(10), (v, k) => k + 1).map(v => {
  return { key: `${v}`, title: `Tab${v}` };
});

<TabBar
  tabs={tabs}
  activeKey={tab}
  onChange={value => setTab(value)}
  underlineStyle={{ width: 20, backgroundColor: '#F84803' }}
  tabActiveTextStyle={{
    color: '#F84803',
  }}
  tabTextStyle={{ color: 'rgba(41, 50, 61, 0.4)' }}
/>
```

### radio type

```jsx
import { TabBar, Utils } from 'tuya-panel-kit'

const { convertX: cx } = Utils.RatioUtils;

const [tabRadio, setTabRadio] = React.useState('2');

const tabRadios = Array.from(Array(3), (v, k) => k + 1).map(v => {
  return {
    key: `${v}`,
    title: `Tab${v}`,
    tabStyle: { alignItems: 'center', justifyContent: 'center' },
    textStyle: { fontSize: 16 },
  };
});

<TabBar
  type="radio"
  tabs={tabRadios}
  activeKey={tabRadio}
  onChange={value => setTabRadio(value)}
  style={{
    marginTop: 10,
    height: cx(42),
    borderRadius: cx(21),
    backgroundColor: '#E5E5E5',
  }}
  tabActiveTextStyle={{
    color: '#F84803',
  }}
/>
```

### radioCircle type

```jsx
import { TabBar } from 'tuya-panel-kit'

const [tabRadioCircle, setTabRadioCircle] = React.useState('2');
const tabRadiosCircle = Array.from(Array(3), (v, k) => k + 1).map(v => {
  return {
    key: `${v}`,
    title: `Tab${v}`,
    activeTextStyle: { color: '#FFF' },
  };
});

<TabBar
  type="radioCircle"
  tabs={tabRadiosCircle}
  activeKey={tabRadioCircle}
  onChange={value => setTabRadioCircle(value)}
  activeColor="#57BCFB"
  style={{ marginTop: 10 }}
/>
```

## API

<API name="TabBarProps" />
