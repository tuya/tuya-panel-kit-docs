---
group:
  title: 展示
title: Carousel 轮播
desc: Carousel 是一个轮播图组件。
demo: /presentation/carousel
---

## 代码演示

### 基础使用

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

1. 轮播图在安卓上不显示?

轮播组件必须给组件设置高度可以通过给父组件添加 `onLayout={e => this._onLayout(e)}` 获取父元素高度，通过变量设置轮播组件的高度进行自适应。
