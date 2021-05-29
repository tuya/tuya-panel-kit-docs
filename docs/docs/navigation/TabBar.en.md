---
title: TabBar
desc: '`TabBar` is for splitting tabs for more fine-grained control. There are currently two types, the default is the most basic Tab.'
---

## Code demo

### Basic usage

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

### radio type

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

<API name="TabBarProps" />
