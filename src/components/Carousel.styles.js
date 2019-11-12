import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => (props.height ? props.height : "100%")};
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .active {
    opacity: 1;
  }

  .fade-out {
    opacity: 0;
    animation: fade-out ${props => props.speed}ms linear;
  }

  .fade-in {
    opacity: 1;
    animation: fade-in ${props => props.speed}ms linear;
  }

  .slide {
    transition: transform ${props => props.speed}ms linear;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
`;

export const CarouselBody = styled.div`
  position: ${props => (props.effect === "fade" ? "absolute" : "relative")};
  width: 100%;
  height: 100%;
  display: flex;
  transform: translate3d(0, 0, 0);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  will-change: transform;
`;
export const Item = styled.div`
  overflow: hidden;
  position: inherit;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${props => (props.background ? props.background : "white")};
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    width: ${props => (props.fitWidth ? "100%" : "unset")};
    height: ${props => (props.fitHeight ? "100%" : "unset")};
    object-fit: cover;
  }
`;

export const Controller = styled.div``;
export const ButtonLeft = styled.button`
  z-index: 100;
  position: absolute;
  width: 3rem;
  padding: 0.5rem;
  height: 100%;
  top: 0;
  left: ${props => (props.buttonPosition === "outside" ? "-5%" : "5%")};
  transform: ${props =>
    props.buttonPosition === "outside" ? "translateX(-100%)" : "translateX(0)"};
  cursor: pointer;
  border: none;
  background: transparent;
  :active,
  :focus {
    outline: none;
  }
  svg {
    fill: ${props => (props.buttonColor ? props.buttonColor : "black")};
  }
`;

export const ButtonRight = styled.button`
  z-index: 100;
  position: absolute;
  width: 3rem;
  padding: 0.5rem;
  height: 100%;
  top: 0;
  right: ${props => (props.buttonPosition === "outside" ? "-5%" : "5%")};
  transform: ${props =>
    props.buttonPosition === "outside" ? "translateX(100%)" : "translateX(0)"};
  cursor: pointer;
  border: none;
  background: transparent;
  :active,
  :focus {
    outline: none;
  }
  svg {
    fill: ${props => (props.buttonColor ? props.buttonColor : "black")};
  }
`;

export const Indicators = styled.ol`
  position: absolute;
  right: 0;
  bottom: 3%;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  list-style: none;
  li {
    box-sizing: content-box;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100%;
    margin-right: 2%;
    margin-left: 2%;
    cursor: pointer;
    background-color: ${props =>
      props.indicatorsColor ? props.indicatorsColor : "black"};
    background-clip: padding-box;
    opacity: 0.5;
  }
`;
