---
title: TYSectionList 分组列表
desc: '`TYSectionList` 是基于 RN 自带的 `SectionList` 组件做了一层简单的封装，因此该组件可以复用所有 [SectionList 的属性](https://facebook.github.io/react-native/docs/sectionlist#props)。<br/>在需要列表的情况下只需要传递 `sections` 即可定制对应列表项，其中如果有 `title` 字段则会有默认的 `SectionHeader` ，另外其中的 `data` 中的所有值将会被作为 `props` 传递给 `TYSectionList.Item` 组件。<br/>如果需要定制列表项，给 `TYSectionList` 覆盖 `renderItem` 即可，如果某一区块的列表项需要定制则可以给 `sections` 中添加 `renderItem` 给该区块定制列表项，如果列表项中只有单独几个项需要定制，那么您甚至可以在 `data` 字段里面传入 `renderItem` 定制该列表项组件。'
demo: /presentation/tysection-list
---

## 代码演示

### 基础列表

```jsx
const [state, set] = React.useState({
  value: -1,
  sliderValue: 50,
  name: '',
  switchValue: true,
});
const setState = value => set({ ...state, ...value });
const sections = [
  {
    title: '基础列表项',
    data: [
      {
        key: 0,
        theme: { descFontColor: '#FF4444' },
        title: `列表标题`,
        subTitle: `列表副标题`,
        value: 'New',
        arrow: true,
        Action: (
          <View
            style={{
              paddingHorizontal: 4,
              borderRadius: 8,
              backgroundColor: '#FF4444',
            }}
          >
            <TYText type="paragraph" size="normal" text="New" color="#fff" />
          </View>
        ),
      },
    ],
    renderItem: ({ item }) => <TYSectionList.Item {...item} />,
  },
  {
    title: '选择框列表项',
    data: [
      {
        key: 0,
        theme: { descFontColor: '#7ED321' },
        Action: '清扫成功',
        title: `04月11日 23:15`,
        subTitle: `清扫 0平方米 | 工作 5分钟`,
        checked: state.value === 0,
        onChange: checked => setState({ value: checked ? 0 : -1 }),
      },
    ],
    renderItem: ({ item }) => <TYSectionList.CheckboxItem {...item} />,
  },
  {
    title: '滑动条列表项',
    data: [
      {
        key: 0,
        actionType: 'iconfont',
        Icon: 'volume-sharp-off',
        Action: 'volume-sharp-max',
        value: state.sliderValue,
        minimumValue: 0,
        maximumValue: 100,
        canTouchTrack: true,
        onSlidingComplete: sliderValue => setState({ sliderValue }),
      },
    ],
    renderItem: ({ item }) => <TYSectionList.SliderItem {...item} />,
  },
  {
    title: '输入框列表项',
    data: [
      {
        key: 0,
        title: `名字`,
        value: state.name,
        placeholder: '输入名字',
        onChangeText: name => setState({ name }),
      },
    ],
    renderItem: ({ item }) => <TYSectionList.InputItem {...item} />,
  },
  {
    title: '开关列表项适配',
    data: [
      {
        key: 0,
        title: '列表标题过长的情况列表标题过长的情况列表标题过长的情况',
        subTitle:
          '这是这个列表的详细信息内容过长的情况这是这个列表的详细信息内容过长的情况',
        value: state.switchValue,
        onValueChange: value => setState({ switchValue: value }),
      },
    ],
    renderItem: ({ item }) => <TYSectionList.SwitchItem {...item} />,
  },
];

<TYSectionList
  style={{ alignSelf: 'stretch' }}
  sections={sections}
  renderItem={({ item }) => <TYSectionList.CheckboxItem {...item} />}
/>
```

## API

### TYSectionList

继承自 [SectionListProps](https://reactnative.dev/docs/sectionlist#props)

<API name="TYSectionListProps"></API>

### TYSectionList.Item

继承自 <HLink to="TYListItem">TYListItemProps</HLink>

<API name="TYListItemProps"></API>

### TYSectionList.InputItem

继承自 <HLink to="TYListItem#api">TYListItemProps</HLink>、<HLink to="https://reactnative.dev/docs/textinput#props">TextInputProps</HLink>

<API name="TYSectionInputProps"></API>

### TYSectionList.CheckboxItem

继承自 <HLink to="TYListItem#api">TYListItemProps</HLink>、<HLink to="Checkbox#api">CheckboxProps</HLink>

<API name="TYListItemProps"></API>

### TYSectionList.SliderItem

继承自 <HLink to="Slider#api">SliderProps</HLink>

<API name="TYSectionSliderProps"></API>

### TYSectionList.SwitchItem

继承自 <HLink to="TYListItem#api">TYListItemProps</HLink>、<HLink to="SwitchButton#api">SwitchButtonProps</HLink>
