---
title: Collapsible
desc: Collapsible is used to show the animation effect of a collapsed drop-down.
---

## Code demo

### Basic Usage

```jsx
const [collapsed, setCollapsed] = React.useState(false);

<Collapsible
  collapsed={collapsed}
  onChange={() => {}}
  align="top"
  style={{
    width: 375,
    height: 260,
    backgroundColor: '#ff0',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  <View
    style={{
      width: 308,
      height: 185,
      borderRadius: 28,
      backgroundColor: '#ddd',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <TYText
      style={{
        textAlign: 'center',
        color: '#666',
        fontSize: 20,
      }}
      text="Talk is cheap, show me the code."
    />
    <TYText
      style={{
        marginTop: 30,
        textAlign: 'center',
        color: '#666',
        fontSize: 16,
      }}
      text="Respond to ever-changing things with no change, no tricks."
    />
  </View>
</Collapsible>;
```

## API

<API name="CollapsibleProps" />
