const names = [
  { parent: { age: 28, name: 'Tretty' }, name: 'Prateek', age: 5 },
  { parent: { age: 31, name: 'Lolita' }, name: 'Pritisma', age: 27 },
  { parent: { age: 42, name: 'Jhallu' }, name: 'Yamuna', age: 15 },
  { parent: { age: 2, name: 'Wonderland' }, name: 'Alice', age: 35 },
  { parent: { age: 10, name: 'Peb' }, name: 'Zeb', age: 55 },
];

const propGetter = key => object => object[key];

const createSort = treat => (a, b) => treat(a) > treat(b);

const combine = (...fns) => value =>
  fns.reduce((value, fn) => fn(value), value);

const getParent = propGetter('parent');
const getAge = propGetter('age');
const getParentAge = combine(getParent, getAge);

const sortByParentAge = createSort(getParentAge);
names.sort(sortByParentAge);

names;

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
