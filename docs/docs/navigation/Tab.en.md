---
title: Tab
desc: '`Tab` is a tab bar component used to allow users to switch between different views.'
demo: /navigation/tab
---

## Code demo

### Basic usage

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
const textArr = ['The prime year does not come again', 'A day is hard to come in the morning', 'Time to encourage yourself', 'Time treats no one']
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
  tabTextStyle={{ fontSize: 16, color: '#A8ACB2' }}
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
    width: 40,
    marginLeft: 26,
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
