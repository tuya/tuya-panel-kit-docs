---
title: TYFlatList 列表
desc: '`TYFlatList` 是基于 RN 自带的 `FlatList` 组件做了一层简单的封装，因此该组件可以复用所有 [FlatList 的属性](https://facebook.github.io/react-native/docs/flatlist#props)。<br/>在需要列表的情况下只需要传递 `data` 即可定制对应列表项，其中 data 中的所有值将会被作为 `props` 传递给 `TYFlatList.Item` 组件。<br/>如果列表项需要定制，给 `TYFlatList` 覆盖 `renderItem` 即可，如果列表项中有单独几个项需要定制，那么您甚至可以在 `data` 字段里面传入 `renderItem` 定制该列表项组件。'
---

## 代码演示

### 基础列表

```jsx
const data = [
  {
    key: 0,
    title: '基础列表',
    value: '详细信息',
    arrow: true,
  },
  {
    key: 1,
    title: '这里是正标题',
    subTitle: '这里是副标题',
    arrow: true,
  },
  {
    key: 2,
    title: '列表标题过长的情况列表标题过长的情况列表标题过长的情况',
    value: true,
  },
  {
    key: 2,
    theme: { subFontColor: '#FF4444' },
    title: '列表副标题和theme的结合',
    subTitle: '警告信息',
  },
  {
    key: 4,
    styles: { valueText: { maxWidth: 250 } },
    title: '列表标题1',
    value: '这个列表项的内容有点长哦',
    arrow: true,
  },
  {
    key: 5,
    title: '列表自定义内容',
    children: (
      <View
        style={{
          alignSelf: 'flex-start',
          marginTop: 4,
          paddingHorizontal: 4,
          borderRadius: 8,
          backgroundColor: '#FF4444',
        }}
      >
        <TYText type="paragraph" size="normal" text="New" color="#fff" />
      </View>
    ),
  },
  {
    key: 6,
    title: '列表自定义Action',
    Action: (
      <View
        style={{
          paddingHorizontal: 4,
          borderRadius: 8,
          backgroundColor: '#FF4444',
        }}
      >
        <TYText type="paragraph" size="normal" text="99+" color="#fff" />
      </View>
    ),
    arrow: true,
  },
  {
    key: 7,
    title: '列表自定义渲染item',
    Action: '清扫成功',
    subTitle: `清扫 0平方米 | 工作 5分钟`,
    theme: { descFontColor: '#7ED321' },
  },
];

<TYFlatList
  style={{
    alignSelf: 'stretch',
    backgroundColor: '#f5f5f5',
    height: 591,
    borderRadius: 8,
  }}
  data={data}
/>;
```

## API

### TYFlatList

<Props name="TYFlatListProps"></Props>

### TYFlatList.Item

<Props name="TYListItemProps"></Props>

### TYFlatList.InputItem

<Props name="TYSectionInputProps"></Props>

### TYFlatList.CheckboxItem

<Props name="TYListItemProps"></Props>

### TYFlatList.SliderItem

<Props name="TYSectionSliderProps"></Props>

### TYFlatList.SwitchItem

<Props language="en-US" otherProps={[
{
name: "TYListItemProps",
link: "/en/components/PresentationComponents_TYListItem"
},
{
name: "SwitchButtonProps",
link: "/en/components/DataEntryComponent_SwitchButton#api"
}
]} />
