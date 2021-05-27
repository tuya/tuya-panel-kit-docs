---
title: TabBar 标签栏拆分版
desc: '`TabBar` 为拆分 tab，更细粒度的控制。目前有两种类型，默认是最基础的 Tab。'
---

## 代码演示

### 基础类型

```jsx
const [tab, setTab] = React.useState('2');
const tabs = Array.from(Array(10), (v, k) => k + 1).map(v => {
  return { key: `${v}`, title: `Tab${v}` };
});

<TabBar
  tabs={tabs}
  activeKey={tab}
  onChange={value => setTab(value)}
  underlineStyle={{ width: 20 }}
/>;
```

### radio 类型

```jsx
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
    borderColor: 'red',
    backgroundColor: '#000',
    height: 54,
    borderRadius: 27,
    marginTop: 10,
  }}
/>;
```

## API

<Props name="TabBarProps" />
