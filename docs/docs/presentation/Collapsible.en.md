---
title: Collapsible
desc: Collapsible is used to show the animation effect of a collapsed drop-down.
demo: /presentation/collapsible
---

## Code demo

### Basic Usage

```jsx
import { Button, Collapsible, Utils } from 'tuya-panel-kit';

const { convertX: cx } = Utils.RatioUtils;

const [collapsed, setCollapsed] = React.useState(false);

<Button
  stretch={true}
  onPress={() => setCollapsed(!collapsed)}
  text="Click expand"
  textStyle={{
    fontSize: cx(14),
  }}
  style={{
    height: 40,
    backgroundColor: '#fff',
    width: '100%',
    borderColor: '#F5F5F6',
    borderTopWidth: 1,
  }}
/>
<Collapsible
  collapsed={collapsed}
  align="top"
  style={{
    height: 260,
    backgroundColor: '#fff',
  }}
/>
```

## API

<API name="CollapsibleProps" />
