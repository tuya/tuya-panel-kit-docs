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
<Carousel
  style={{ height: 200 }}
  selectedIndex={0}
  autoplay={true}
  loop={true}
  carouselChange={index => console.log(index)}
>
  <View style={{ height: 200, backgroundColor: 'red' }}>
    <TYText style={{ color: '#333' }}>Carousel 1</TYText>
  </View>
  <View style={{ height: 200, backgroundColor: 'blue' }}>
    <TYText style={{ color: '#333' }}>Carousel 2</TYText>
  </View>
  <View style={{ height: 200, backgroundColor: 'yellow' }}>
    <TYText style={{ color: '#333' }}>Carousel 3</TYText>
  </View>
</Carousel>
```

## API

<API name="CarouselProps"></API>

## FAQ

1. The carousel is not displayed on Android?

The carousel component must set the height of the component. You can get the height of the parent element by adding `onLayout={e => this._onLayout(e)}` to the parent component, and set the height of the carousel component through a variable for adaptation.
