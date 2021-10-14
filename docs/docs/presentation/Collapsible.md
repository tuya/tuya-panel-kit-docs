---
group:
  title: 展示
title: Collapsible 折叠
desc: Collapsible 用于展示一个折叠下拉的动画效果。
demo: /presentation/collapsible
---

## 代码演示

### 基础使用

```jsx
import { Button, Collapsible, Utils } from 'tuya-panel-kit';

const { convertX: cx } = Utils.RatioUtils;

const [collapsed, setCollapsed] = React.useState(false);

<Button
  stretch={true}
  onPress={() => setCollapsed(!collapsed)}
  text="点击展开"
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
