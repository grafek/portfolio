export default function debounce(fn, sleep) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn();
    }, sleep);
  };
}
