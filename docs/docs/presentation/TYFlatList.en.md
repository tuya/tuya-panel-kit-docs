---
title: TYFlatList
desc: '`TYFlatList` is a simple package based on the **FlatList** component that comes with RN, so this component can reuse all [FlatList attributes](https://facebook.github.io/react-native/docs/flatlist#props).<br/>When you need a list, you only need to pass **data** to customize the corresponding list item, where all the values ​​in data will be passed to the **TYFlatList.Item** component as **props**.<br/>If the list item needs to be customized, just override the **renderItem** for **TYFlatList**. If there are several items in the list item that need to be customized, you can even pass in **renderItem** in the **data** field to customize the list item component.'
---

## Code demo

### Basic list

```jsx
const data = [
  {
    key: 0,
    title: 'Basic list',
    value: 'details',
    arrow: true,
  },
  {
    key: 1,
    title: 'Here is the title',
    subTitle: 'Here is the subtitle',
    arrow: true,
  },
  {
    key: 2,
    title: 'The situation where the title of the list is too long --- ',
    value: true,
  },
  {
    key: 2,
    theme: { subFontColor: '#FF4444' },
    title: 'Combination of list subtitle and theme',
    subTitle: 'Warning message',
  },
  {
    key: 4,
    styles: { valueText: { maxWidth: 250 } },
    title: 'List title 1',
    value: 'The content of this list item is a bit long',
    arrow: true,
  },
  {
    key: 5,
    title: 'List custom content',
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
    title: 'List custom Action',
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
    title: 'List custom rendering item',
    Action: 'Cleaned successfully',
    subTitle: `Cleaning 0 square meters | work 5 minutes`,
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

extends [FlatListProps](https://reactnative.dev/docs/flatlist#props)

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
