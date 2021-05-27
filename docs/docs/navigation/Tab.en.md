---
title: Tab
desc: '`Tab` is a tab bar component used to allow users to switch between different views.'
---

## Code demo

### Basic usage

```jsx
const [state, set] = React.useState({ tab: 'Tab 1' })
const setState = value => set({ ...state, ...value })
const tabPaneArr = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4']
const contentStyle = {
  height: 530,
  backgroundColor: '#f8f8f8',
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

<Props name="TabProps"></Props>

### Tab.TabPane

<Props name="TabPaneProps"></Props>
