export function getWindowSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export function generateSubarrays<T>(arr: T[], chunkSize: number): T[][] {
  const subarrays: T[][] = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    subarrays.push(arr.slice(i, i + chunkSize));
  }

  return subarrays;
}

export function debounce(fn: Function, sleep = 200) {
  let timer: string | number | NodeJS.Timeout | undefined;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
      fn();
    }, sleep);
  };
}
