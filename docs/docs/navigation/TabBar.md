---
group:
  title: 导航
title: TabBar 标签栏拆分版
desc: '`TabBar` 为拆分 tab，更细粒度的控制。目前有两种类型，默认是最基础的 Tab。'
demo: /navigation/tab-bar
---

## 代码演示

### 基础类型

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

### radio 类型

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

### radioCircle 类型

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
