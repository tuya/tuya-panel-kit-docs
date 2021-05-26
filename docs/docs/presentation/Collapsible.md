---
title: Collapsible 折叠
desc: Collapsible 用于展示一个折叠下拉的动画效果。
---

## 代码演示

### 基础使用

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
      text="以不变应万变，无招胜有招。"
    />
  </View>
</Collapsible>;
```

## API

<Props name="CollapsibleProps" />
