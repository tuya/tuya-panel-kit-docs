---
title: TYSectionList
desc: '`TYSectionList` is a simple encapsulation based on the **SectionList** component that comes with RN, so this component can reuse all [SectionList properties](https://facebook.github.io/react-native/docs/sectionlist#props).<br/>When you need a list, you only need to pass **sections** to customize the corresponding list item. If there is a **title** field, there will be a default **SectionHeader**, and all the values ​​in the **data** will be used as **props** is passed to the **TYSectionList.Item** component.<br/>If you need to customize the list items, you can override **renderItem** for **TYSectionList**. If the list items of a certain section need to be customized, you can add **renderItem** to **sections** to customize the list items for that section. Only a few items need to be customized, so you can even pass in **renderItem** in the **data** field to customize the list item component.'
---

## Code demo

### Basic list

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
    title: 'Basic list item',
    data: [
      {
        key: 0,
        theme: { descFontColor: '#FF4444' },
        title: `List title`,
        subTitle: `List subtitle`,
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
    title: 'Select box list item',
    data: [
      {
        key: 0,
        theme: { descFontColor: '#7ED321' },
        Action: 'Cleaned successfully',
        title: `April 11th, 23:15`,
        subTitle: `Cleaning 0 square meters | work 5 minutes`,
        checked: state.value === 0,
        onChange: checked => setState({ value: checked ? 0 : -1 }),
      },
    ],
    renderItem: ({ item }) => <TYSectionList.CheckboxItem {...item} />,
  },
  {
    title: 'Slider list item',
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
    title: 'Input box list item',
    data: [
      {
        key: 0,
        title: `Name`,
        value: state.name,
        placeholder: 'Enter name',
        onChangeText: name => setState({ name }),
      },
    ],
    renderItem: ({ item }) => <TYSectionList.InputItem {...item} />,
  },
  {
    title: 'Switch list item adaptation',
    data: [
      {
        key: 0,
        title: 'The situation where the title of the list is too long --- ',
        subTitle:
          'This is the case where the detailed information content of this list is too long',
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
/>;
```

## API

### TYSectionList

extends [SectionListProps](https://reactnative.dev/docs/sectionlist#props)

<API name="TYSectionListProps"></API>

### TYSectionList.Item

extends <HLink to="TYListItem">TYListItemProps</HLink>

<API name="TYListItemProps"></API>

### TYSectionList.InputItem

extends <HLink to="TYListItem#api">TYListItemProps</HLink>、<HLink to="https://reactnative.dev/docs/textinput#props">TextInputProps</HLink>

<API name="TYSectionInputProps"></API>

### TYSectionList.CheckboxItem

extends <HLink to="TYListItem#api">TYListItemProps</HLink>、<HLink to="Checkbox#api">CheckboxProps</HLink>

<API name="TYListItemProps"></API>

### TYSectionList.SliderItem

extends <HLink to="Slider#api">SliderProps</HLink>

<API name="TYSectionSliderProps"></API>

### TYSectionList.SwitchItem

extends <HLink to="TYListItem#api">TYListItemProps</HLink>、<HLink to="SwitchButton#api">SwitchButtonProps</HLink>
