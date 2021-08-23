---
title: Tab 标签栏
desc: '`Tab` 是一个标签栏组件，用于让用户在不同的视图中进行切换。'
demo: /navigation/tab
---

## 代码演示

### 基础展示

```jsx
import { Tab } from 'tuya-panel-kit'

const [state, set] = React.useState({ tab: 'Tab 1' })
const setState = value => set({ ...state, ...value })
const tabPaneArr = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4']
const contentStyle = {
  height: 323,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
}
const textArr = ['盛年不重来', '一日难再晨', '及时宜自勉', '岁月不待人']
const tabPanes = tabPaneArr.map((item, idx) => (
  <Tab.TabPane key={`${item}`} tab={`${item}`}>
    <View style={contentStyle}>
      <TYText>{`This is ${item}: ${textArr[idx]}`}</TYText>
    </View>
  </Tab.TabPane>
))

<Tab
  activeKey={state.tab}
  animated={true}
  onChange={value => setState({ tab: value })}
  tabsContainerStyle={{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  }}
  tabBarBackgroundColor="#F5F5F6"
  tabTextStyle={{ fontSize: 16 }}
  tabStyle={{
    height: 42,
    backgroundColor: '#fff',
    borderTopColor: '#F5F5F6',
    borderTopWidth: 1,
  }}
  tabActiveTextStyle={{
    color: '#FF4800',
  }}
  tabBarUnderlineStyle={{
    backgroundColor: '#FF4800',
    height: 2,
  }}
>
  {tabPanes}
</Tab>
```

## API

### Tab

<API name="TabProps"></API>

### Tab.TabPane

<API name="TabPaneProps"></API>
