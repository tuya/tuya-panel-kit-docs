---
group:
  title: Presentation
title: Carousel
desc: Carousel is a carousel component.
demo: /presentation/carousel
---

## Code demo

### Basic Usage

```jsx
import { Carousel, Utils } from 'tuya-panel-kit'

const { convertX: cx } = Utils.RatioUtils;

const Content = ({ backgroundColor, text, textBgColor }) => {
  return (
    <View
      style={{
        height: 200,
        backgroundColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          width: cx(70),
          height: cx(38),
          backgroundColor: textBgColor,
          borderRadius: cx(19),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TYText style={{ color: '#fff' }}>{text}</TYText>
      </View>
    </View>
  );
};

<Carousel
  style={{ height: 200 }}
  selectedIndex={0}
  autoplay={true}
  loop={true}
  carouselChange={index => console.log(index)}
  dotStyle={{
    backgroundColor: '#F9895C',
  }}
>
  <Content text="1" backgroundColor="#F82B00" textBgColor="#F85B0F" />
  <Content text="2" backgroundColor="#F86016" textBgColor="#F97E4C" />
  <Content text="3" backgroundColor="#F82B00" textBgColor="#F85B0F" />
</Carousel>
```

## API

<API name="CarouselProps"></API>

## FAQ

1. The carousel is not displayed on Android?

The carousel component must set the height of the component. You can get the height of the parent element by adding `onLayout={e => this._onLayout(e)}` to the parent component, and set the height of the carousel component through a variable for adaptation.
