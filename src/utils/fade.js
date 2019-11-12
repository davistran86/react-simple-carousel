export const fadeNext = (carousel, speed) => {
  carousel.current.firstChild.classList.add("fade-in");
  carousel.current.insertBefore(
    carousel.current.firstChild,
    carousel.current.lastChild.nextSibling
  );
  setTimeout(() => {
    carousel.current.children[
      carousel.current.children.length - 1
    ].classList.remove("fade-in");
  }, speed);
};

export const fadePrev = (carousel, speed) => {
  carousel.current.lastChild.classList.add("fade-out");
  setTimeout(() => {
    carousel.current.lastChild.classList.remove("fade-out");
    carousel.current.insertBefore(
      carousel.current.lastChild,
      carousel.current.firstChild
    );
  }, speed);
};
