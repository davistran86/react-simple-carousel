# Simple Carousel

![](https://i.imgur.com/Om8m2Py.jpg)

A simple react carousel with infinite loop 🎉

```
https://www.npmjs.com/package/@davistran86/carousel
```

## Demo

Comming soon...

## Installation

npm

```
npm i @davistran86/carousel
```

yarn

```
yarn add @davistran86/carousel
```

## Basic Usage

Simply import the package to your react web app and start using it.

```javascript
import React from "react";
import ReactDOM from "react-dom";
import Carousel from "@davistran86/carousel";

const images = [
  "https://scontent-iad3-1.cdninstagram.com/vp/ccde6818ebdfd3c3b7adc7560c530acb/5E4E076F/t51.2885-15/e35/p1080x1080/70689682_376385253254078_5229751774392621716_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=102",
  "https://scontent-iad3-1.cdninstagram.com/vp/abcdbf2da90524f3a86c2df4ec3833e5/5E59BF8E/t51.2885-15/e35/p1080x1080/69866420_1201968029995574_3061494835534077307_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=102",
  "https://scontent-iad3-1.cdninstagram.com/vp/92c9ca9081e1acfb632a6d62dbbea6f8/5E5E3670/t51.2885-15/e35/p1080x1080/70890914_170814634050132_6309691029590448199_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=100",
  "https://scontent-iad3-1.cdninstagram.com/vp/df768c309299c9c4a9b5f15a42e7f7d4/5E5D3206/t51.2885-15/e35/p1080x1080/67897824_113471973161444_1774742288689415740_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=108"
];

function App() {
  return (
    <div className="App">
      <Carousel>
        {images.map((image, index) => {
          return <img key={index} alt="images" src={image} />;
        })}
      </Carousel>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## Advanced Usage

### Effect

There are 2 effects can be used: slide, fade.

| Option | Type   | Default | Value      | Info                                  |
| ------ | ------ | ------- | ---------- | ------------------------------------- |
| effect | string | slide   | slide,fade | Effect showing when go to other slide |

```javascript
<Carousel effect="fade">...</Carousel>
```

### Speed

| Option | Type   | Default | Info                                                                     |
| ------ | ------ | ------- | ------------------------------------------------------------------------ |
| speed  | number | 250     | Changing slide speed. Default 250 means 250ms or 0.25s (Animation speed) |

```javascript
<Carousel speed={500}>...</Carousel>
```

### Width & Height

| Option | Type   | Default | Info                                                              |
| ------ | ------ | ------- | ----------------------------------------------------------------- |
| width  | string | 100%    | Carousel width. Support any value can be used with width in css   |
| height | string | 100%    | Carousel height. Support any value can be used with height in css |

```javascript
<Carousel width="800px" height="600px">
  ...
</Carousel>
```

### Background

| Option     | Type   | Default | Info                                                                             |
| ---------- | ------ | ------- | -------------------------------------------------------------------------------- |
| background | string | #ffffff | Background color of slides. Support any value can be used with background in css |

### Autoplay

| Option           | Type    | Default | Info                                                                   |
| ---------------- | ------- | ------- | ---------------------------------------------------------------------- |
| autoplay         | boolean | false   | Auto go to next slide                                                  |
| delay            | number  | 5000    | Waiting time before go to next slide\. Default 5000 means 5000ms or 5s |
| pauseOnMouseOver | boolean | false   | Pause autoplay when mouse over the Carousel                            |

```javascript
<Carousel autoplay={true} pauseOnMouseOver={true} delay={3000}>
  ...
</Carousel>
```

### Controller

| Option         | Type    | Default | Value          | Info                                                        |
| -------------- | ------- | ------- | -------------- | ----------------------------------------------------------- |
| useArrowKey    | boolean | false   | true,false     | Use arrow key to move to next or previous slide             |
| useMouseWheel  | boolean | false   | true,false     | Use mouse wheel to move to next or previous slide           |
| hideController | boolean | false   | true,false     | Hide next and previous button                               |
| buttonColor    | string  | \#000   | any            | Support any value can be used with color in css             |
| buttonPosition | string  | inside  | inside,outside | Next and previous button are inside or outside the carousel |

```javascript
<Carousel
  useArrowKey={true}
  useMouseWheel={true}
  hideController={true}
  buttonColor="red"
  buttonPosition="outside"
>
  ...
</Carousel>
```

### Indicators

| Option          | Type    | Default | Value      | Info                                            |
| --------------- | ------- | ------- | ---------- | ----------------------------------------------- |
| hideIndicators  | boolean | false   | true,false | Hide the indicators                             |
| indicatorsColor | string  | \#000   | any        | Support any value can be used with color in css |

```javascript
<Carousel hideIndicators={true} indicatorsColor="red">
  ...
</Carousel>
```
