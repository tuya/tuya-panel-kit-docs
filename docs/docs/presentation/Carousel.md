---
group:
  title: 展示
title: Carousel 轮播
desc: Carousel 是一个轮播图组件。
---

## 代码演示

### 基础使用

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

1. 轮播图在安卓上不显示?

轮播组件必须给组件设置高度可以通过给父组件添加 `onLayout={e => this._onLayout(e)}` 获取父元素高度，通过变量设置轮播组件的高度进行自适应。
