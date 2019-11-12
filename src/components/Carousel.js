import React, { useLayoutEffect, useRef } from "react";
import { NextButton, PrevButton } from "./NavButtons";
import {
  Container,
  CarouselWrapper,
  CarouselBody,
  Item,
  Controller,
  ButtonLeft,
  ButtonRight,
  Indicators
} from "./Carousel.styles";

import { setIndicator } from "../utils/indicators";
import { slideNext, slidePrev } from "../utils/slide";
import { fadeNext, fadePrev } from "../utils/fade";

const Carousel = props => {
  const carousel = useRef();
  const indicators = useRef();
  const controller = useRef();

  let autoplay = props.autoplay || false;
  let delay = props.delay || 5000;
  let speed = props.speed || 250;
  let useArrowKey = props.useArrowKey || false;
  let useMouseWheel = props.useMouseWheel || false;
  let effect = props.effect || "slide";
  let hideController = props.hideController || false;
  let hideIndicators = props.hideIndicators || false;
  let itemCount = React.Children.count(props.children);
  let currentSlide = 0;

  useLayoutEffect(() => {
    let _carousel = carousel.current;
    let _controller = controller.current;
    let _indicators = indicators.current;
    setIndicator(indicators, 0);
    hideController && (_controller.style.visibility = "hidden");
    itemCount <= 1 && (_controller.style.visibility = "hidden");
    hideIndicators && (_indicators.style.visibility = "hidden");
    autoplay && autoToNextSlide();
    effect === "fade" &&
      _carousel.insertBefore(
        _carousel.firstChild,
        _carousel.lastChild.nextSibling
      );

    if (useArrowKey) {
      _carousel.addEventListener("mouseenter", () => {
        window.addEventListener("keydown", handleArrowKey);
      });

      _carousel.addEventListener("mouseleave", () => {
        window.removeEventListener("keydown", handleArrowKey);
      });
    }

    return () => {
      if (useArrowKey) {
        _carousel.removeEventListener("mouseenter", () => {
          window.addEventListener("keydown", handleArrowKey);
        });
        _carousel.removeEventListener("mouseleave", () => {
          window.removeEventListener("keydown", handleArrowKey);
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  const slideToNextSlide = () => {
    currentSlide === carousel.current.children.length - 1
      ? (currentSlide = 0)
      : currentSlide++;

    setIndicator(indicators, currentSlide);
    slideNext(carousel, speed);
  };

  const slideToPrevSlide = () => {
    currentSlide === 0
      ? (currentSlide = carousel.current.children.length - 1)
      : currentSlide--;
    setIndicator(indicators, currentSlide);
    slidePrev(carousel, speed);
  };

  const fadeToNextSlide = () => {
    currentSlide === carousel.current.children.length - 1
      ? (currentSlide = 0)
      : currentSlide++;

    setIndicator(indicators, currentSlide);
    fadeNext(carousel, speed);
  };

  const fadeToPrevSlide = () => {
    currentSlide === 0
      ? (currentSlide = carousel.current.children.length - 1)
      : currentSlide--;
    setIndicator(indicators, currentSlide);
    fadePrev(carousel, speed);
  };

  const autoToNextSlide = () => {
    setInterval(() => {
      currentSlide === carousel.current.children.length - 1
        ? (currentSlide = 0)
        : currentSlide++;
      effect === "fade"
        ? fadeNext(carousel, speed)
        : slideNext(carousel, speed);
      setIndicator(indicators, currentSlide);
    }, delay);
  };

  const handleIndicators = index => {
    // times = number of slide to scroll
    let times = index - currentSlide;

    // times < 0 = go to prev slide
    if (times < 0) {
      for (let i = 0; i < Math.abs(times); i++) {
        handleEffects(effect, "prev");
      }
    } else {
      for (let i = 0; i < Math.abs(times); i++) {
        handleEffects(effect, "next");
      }
    }
    currentSlide = index;
    setIndicator(indicators, currentSlide);
  };

  const handleMouseWheel = e => {
    if (e.deltaY < 0) {
      handleEffects(effect, "prev");
    } else {
      handleEffects(effect, "next");
    }
  };

  const handleArrowKey = e => {
    if (e.keyCode === 37) {
      return handleEffects(effect, "prev");
    }
    if (e.keyCode === 39) {
      return handleEffects(effect, "next");
    }
  };

  const handleEffects = (effect, direction) => {
    if (direction === "next") {
      switch (effect) {
        case "fade":
          return fadeToNextSlide();
        default:
          return slideToNextSlide();
      }
    }
    if (direction === "prev") {
      switch (effect) {
        case "fade":
          return fadeToPrevSlide();
        default:
          return slideToPrevSlide();
      }
    }
  };

  return (
    <Container
      width={props.width}
      height={props.height}
      onWheel={e => useMouseWheel && handleMouseWheel(e)}
    >
      <CarouselWrapper speed={speed}>
        <CarouselBody data-name="carousel-body" ref={carousel} effect={effect}>
          {React.Children.map(props.children, (item, index) => {
            return (
              <Item key={index} effect={effect} background={props.background}>
                {item}
              </Item>
            );
          })}
        </CarouselBody>
        <Controller data-name="carousel-controller" ref={controller}>
          <ButtonLeft
            onClick={() => handleEffects(effect, "prev")}
            buttonColor={props.buttonColor}
            buttonPosition={props.buttonPosition}
          >
            <PrevButton />
          </ButtonLeft>
          <ButtonRight
            onClick={() => handleEffects(effect, "next")}
            buttonColor={props.buttonColor}
            buttonPosition={props.buttonPosition}
          >
            <NextButton />
          </ButtonRight>
        </Controller>
        <Indicators
          data-name="carousel-indicators"
          ref={indicators}
          indicatorsColor={props.indicatorsColor}
        >
          {React.Children.map(props.children, (_, index) => {
            return (
              <li key={index} onClick={() => handleIndicators(index)}></li>
            );
          })}
        </Indicators>
      </CarouselWrapper>
    </Container>
  );
};

export default Carousel;
