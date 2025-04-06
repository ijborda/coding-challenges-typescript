const orig = [12, 4, 5, 6, 7, 8, 5, 6, 7, 8, 5, 8, 8, 0];

const sortFn = (arr) => {
  let array = [...arr];
  const sorted = [];
  while (array.length !== 0) {
    const batch = Array.from(new Set(array)).sort((a, b) => a - b);
    console.log(batch);
    sorted.push(...batch);
    array = removeFirstMatchesInArray(array, batch);
  }
  return sorted;
};

const removeFirstMatchInArray = (array, item) => {
  const arrayCopy = [...array];
  const index = arrayCopy.indexOf(item);
  if (index > -1) { // only splice array when item is found
    arrayCopy.splice(index, 1); // 2nd parameter means remove one item only
  }
  return arrayCopy;
};

const removeFirstMatchesInArray = (array, items) => {
  let arrayCopy = [...array];
  items.forEach(item => {
    arrayCopy = removeFirstMatchInArray(arrayCopy, item);
  });
  return arrayCopy;
};

console.log(sortFn(orig));
