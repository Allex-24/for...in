function orderByProps(obj, sortOrder) {
  const orderedProps = [];
  const remainingProps = [];

  for (const prop in obj) {
    if (sortOrder.includes(prop)) {
      orderedProps.push({ key: prop, value: obj[prop] });
    } else {
      remainingProps.push({ key: prop, value: obj[prop] });
    }
  }

  orderedProps.sort((a, b) => sortOrder.indexOf(a.key) - sortOrder.indexOf(b.key));
  remainingProps.sort((a, b) => a.key.localeCompare(b.key));

  return orderedProps.concat(remainingProps);
}

const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
const sortOrder = ["name", "level"];

const result = orderByProps(obj, sortOrder);
console.log(result);
