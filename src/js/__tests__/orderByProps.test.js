const orderByProps = require('./orderByProps'); 

test('OrderByProps function works as expected', () => {
  const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
  const sortOrder = ["name", "level"];

  const result = orderByProps(obj, sortOrder);

  expect(result).toEqual([
    { key: "name", value: "мечник" },
    { key: "level", value: 2 },
    { key: "attack", value: 80 },
    { key: "defence", value: 40 },
    { key: "health", value: 10 }
  ]);
});

test('OrderByProps function handles different sort order', () => {
  const obj = { name: 'маг', health: 20, level: 3, attack: 60, defence: 30 };
  const sortOrder = ["attack", "health"];

  const result = orderByProps(obj, sortOrder);

  expect(result).toEqual([
    { key: "attack", value: 60 },
    { key: "health", value: 20 },
    { key: "defence", value: 30 },
    { key: "level", value: 3 },
    { key: "name", value: "маг" }
  ]);
});
