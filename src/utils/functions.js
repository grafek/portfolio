export function listItems(arr, Component) {
  const content = arr.map((item, i) => <Component key={i}>{item}</Component>);

  return content;
}

export function debounce(fn, sleep) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn();
    }, sleep);
  };
}

export function getWindowSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}
