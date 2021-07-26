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
  height: 530,
  backgroundColor: '#f8f8f8',
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
    height: 60,
    width: 375,
    alignItems: 'center',
    justifyContent: 'center',
  }}
  style={{ backgroundColor: '#fff' }}
  tabBarBackgroundColor="#e5e5e5"
  tabTextStyle={{ fontSize: 16 }}
  >
  {tabPanes}
</Tab>
```

## API

### Tab

<API name="TabProps"></API>

### Tab.TabPane

<API name="TabPaneProps"></API>
