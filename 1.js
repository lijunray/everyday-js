// Implement map() by reduce()

const list = [1, 2, 3, 4, 5];
const mapExample = list.map(element => element * 2); // [2, 4, 6, 8, 10]
const reduceExample = list.reduce((newList, element) => { newList.push(element * 2); }, []); // [2, 4, 6, 8, 10]

