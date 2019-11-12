export const slideNext = (carousel, speed) => {
  carousel.current.classList.add("slide");
  carousel.current.style.transform = `translateX(-${carousel.current.firstChild.clientWidth}px)`;
  setTimeout(() => {
    carousel.current.classList.remove("slide");
    carousel.current.style.transform = null;
    carousel.current.insertBefore(
      carousel.current.firstChild,
      carousel.current.lastChild.nextSibling
    );
  }, speed);
};

export const slidePrev = (carousel, speed) => {
  carousel.current.classList.remove("slide");
  carousel.current.style.transform = `translateX(-${carousel.current.firstChild.clientWidth}px)`;
  carousel.current.insertBefore(
    carousel.current.lastChild,
    carousel.current.firstChild
  );
  setTimeout(() => {
    carousel.current.classList.add("slide");
    carousel.current.style.transform = null;
  }, 0);
};
