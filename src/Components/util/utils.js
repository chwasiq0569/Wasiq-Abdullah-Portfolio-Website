export const changeRouteOne = (route, wait, props) => {
  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";

  //before pushing it will wait 600ms
  // props.history.push(route);
  setTimeout(() => props.history.push(route), wait);
};
