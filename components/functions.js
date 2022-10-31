export function listItems(arr, Component) {
  const content = arr.map((item, i) => <Component key={i}>{item}</Component>);

  return content;
}
