---
group:
  title: basic
title: BrickButton
---

# BrickButton

## Introduction

`BrickButton` is enriched on the basis of the original Button function.

## Code demo

### Text BrickButton

```jsx
<BrickButton text="loading" loading={true} />
```

### Gradient background button

```jsx
<BrickButton
  loading={true}
  loadingSize="large"
  type="primaryGradient"
  background={{
    x1: '0%',
    y1: '0%',
    x2: '0%',
    y2: '100%',
    stops: {
      '0%': 'red',
      '30%': 'blue',
      '100%': 'yellow',
    },
  }}
/>
```

## API

<Props name="BrickButtonProps"></Props>
