export const setIndicator = (indicators, index) => {
  indicators.current.childNodes.forEach(i => i.classList.remove("active"));
  indicators.current.children[index].classList.add("active");
};
