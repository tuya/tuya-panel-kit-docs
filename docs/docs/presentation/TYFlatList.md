---
title: TYFlatList 列表
desc: '`TYFlatList` 是基于 RN 自带的 `FlatList` 组件做了一层简单的封装，因此该组件可以复用所有 [FlatList 的属性](https://facebook.github.io/react-native/docs/flatlist#props)。<br/>在需要列表的情况下只需要传递 `data` 即可定制对应列表项，其中 data 中的所有值将会被作为 `props` 传递给 `TYFlatList.Item` 组件。<br/>如果列表项需要定制，给 `TYFlatList` 覆盖 `renderItem` 即可，如果列表项中有单独几个项需要定制，那么您甚至可以在 `data` 字段里面传入 `renderItem` 定制该列表项组件。'
demo: /presentation/tyflat-list
---

## 代码演示

### 基础列表

```jsx
import { TYFlatList } from 'tuya-panel-kit'

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
/>
```

## API

### TYFlatList

继承自 [FlatListProps](https://reactnative.dev/docs/flatlist#props)

<API name="TYFlatListProps"></API>

### TYFlatList.Item

继承自 <HLink to="Modal#api">ModalProps</HLink>

<API name="TYListItemProps"></API>

### TYFlatList.InputItem

继承自 <HLink to="TYListItem#api">TYListItemProps</HLink>、<HLink to="https://reactnative.dev/docs/textinput#props">TextInputProps</HLink>

<API name="TYSectionInputProps"></API>

### TYFlatList.CheckboxItem

继承自 <HLink to="TYListItem#api">TYListItemProps</HLink>、<HLink to="Checkbox#api">CheckboxProps</HLink>

<API name="TYListItemProps"></API>

### TYFlatList.SliderItem

继承自 <HLink to="Slider#api">SliderProps</HLink>

<API name="TYSectionSliderProps"></API>

### TYFlatList.SwitchItem

继承自 <HLink to="TYListItem#api">TYListItemProps</HLink>、<HLink to="SwitchButton#api">SwitchButtonProps</HLink>
