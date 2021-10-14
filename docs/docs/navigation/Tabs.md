---
group:
  title: 导航
title: Tabs 纯手势标签栏
desc: Tabs 标签栏通过纯手势编写，解决了之前 ScrollView 实现导致的互相嵌套出现的问题，此外增加了**懒加载**的功能，拆分出了 **TabContent** 组件，可单独使用。
demo: /navigation/tabs
---

## 代码演示

### 基础 Tabs

> 一屏默认显示四个 Tab 标签，可通过 **maxItem** 自定义控制一屏显示数量；<br />如果 dataSource 长度超过 **maxItem** 则会自动成为多屏；

```jsx
import { Tabs } from 'tuya-panel-kit'

const [state, setState] = React.useState({
  activeKey1: '1',
  d1: [
    { value: '1', label: '探测器' },
    { value: '2', label: '遥控器' },
    { value: '3', label: '模拟器' },
    { value: '4', label: '有限探测器' },
  ],
});

<Tabs
  activeKey={state.activeKey1}
  dataSource={state.d1}
  onChange={tab => setState({ ...state, activeKey1: tab.value })}
/>
```

### 多屏 Tabs

```jsx
import { Tabs } from 'tuya-panel-kit'

const [state, setState] = React.useState({
  activeKey2: '3',
  d2: [
    { value: '1', label: '姓名' },
    { value: '2', label: '年龄' },
    { value: '3', label: '家庭住址' },
    { value: '4', label: '房间' },
    { value: '5', label: '小区' },
    { value: '6', label: '单元' },
    { value: '7', label: '毕业院校' },
    { value: '8', label: '户籍' },
  ],
});

<Tabs
  activeKey={state.activeKey2}
  dataSource={state.d2}
  onChange={tab => setState({ ...state, activeKey2: tab.value })}
/>
```

### 基础 Tabs（无状态组件）

```jsx
import { Tabs } from 'tuya-panel-kit'

const [state, setState] = React.useState({
  d2: [
    { value: '1', label: '姓名' },
    { value: '2', label: '年龄' },
    { value: '3', label: '家庭住址' },
    { value: '4', label: '房间' },
    { value: '5', label: '小区' },
    { value: '6', label: '单元' },
    { value: '7', label: '毕业院校' },
    { value: '8', label: '户籍' },
  ]
});

<Tabs dataSource={state.d2} />,
```

### 单独使用 TabContent - 左右滑动

```jsx
import { Tabs } from 'tuya-panel-kit'

const [state, setState] = React.useState({
  activeIndex: 0,
  d1: [
    { value: '1', label: '探测器' },
    { value: '2', label: '遥控器' },
    { value: '3', label: '模拟器' },
    { value: '4', label: '有限探测器' },
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
    <Panel key={idx} title={`第 ${idx} 页`} />
  ))}
</Tabs.TabContent>
```

### 标签页配合 TabContent

```jsx
import { Tabs } from 'tuya-panel-kit'

const [state, setState] = React.useState({
  activeKey1: '1',
  d1: [
    { value: '1', label: '探测器' },
    { value: '2', label: '遥控器' },
    { value: '3', label: '模拟器' },
    { value: '4', label: '有限探测器' },
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
      <TYListItem key={n} title={`测试_${n}`} />
    ))}
  </Tabs.TabPanel>
  <Tabs.TabPanel>
    {new Array(2).fill(0).map((_, n) => (
      <TYListItem key={n} title={`Test_${n}`} />
    ))}
  </Tabs.TabPanel>
  <Tabs.TabPanel>
    {new Array(2).fill(0).map((_, n) => (
      <TYListItem key={n} title={`校舍_${n}`} />
    ))}
  </Tabs.TabPanel>
  <Tabs.TabPanel>
    {new Array(2).fill(0).map((_, n) => (
      <TYListItem key={n} title={`模版_${n}`} />
    ))}
  </Tabs.TabPanel>
</Tabs>
```

### 多屏存在内容的 Tabs

```jsx
import { Tabs } from 'tuya-panel-kit'

const [state, setState] = React.useState({
  activeKey2: '3',
  d2: [
    { value: '1', label: '姓名' },
    { value: '2', label: '年龄' },
    { value: '3', label: '家庭住址' },
    { value: '4', label: '房间' },
    { value: '5', label: '小区' },
    { value: '6', label: '单元' },
    { value: '7', label: '毕业院校' },
    { value: '8', label: '户籍' },
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
</Tabs>
```

### 嵌套的 Tabs

```jsx
import { Tabs } from 'tuya-panel-kit'

const [state, setState] = React.useState({
  activeKey1: '1',
  activeKey2: '3',
  d1: [
    { value: '1', label: '探测器' },
    { value: '2', label: '遥控器' },
    { value: '3', label: '模拟器' },
    { value: '4', label: '有限探测器' },
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
    <TYListItem title="遥控器" />
  </Tabs.TabPanel>
  <Tabs.TabPanel background="#fff">
    <TYListItem title="模拟器" />
  </Tabs.TabPanel>
  <Tabs.TabPanel background="#fff">
    <TYListItem title="有限探测器" />
  </Tabs.TabPanel>
</Tabs>
```

## API

### Tabs

<API name="TabsProps"></API>

### Tabs.TabContent

<API name="TabContentProps"></API>

### Tabs.TabPanel

继承自 [ViewProps](https://reactnative.dev/docs/view#props)

<API name="TabPanelProps"></API>
