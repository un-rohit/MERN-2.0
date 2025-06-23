let fruits = ["apple", "banana", "mango", "orange"];

// length
console.log(fruits.length); // 4

// toString()
console.log(fruits.toString()); // "apple,banana,mango,orange"

// at()
console.log(fruits.at(2)); // "mango"

// join()
console.log(fruits.join(" - ")); // "apple - banana - mango - orange"

// pop()
let last = fruits.pop();
console.log(last); // "orange"
console.log(fruits); // ["apple", "banana", "mango"]

// push()
fruits.push("grape");
console.log(fruits); // ["apple", "banana", "mango", "grape"]

// shift()
let first = fruits.shift();
console.log(first); // "apple"
console.log(fruits); // ["banana", "mango", "grape"]

// unshift()
fruits.unshift("kiwi");
console.log(fruits); // ["kiwi", "banana", "mango", "grape"]

// delete
delete fruits[1];
console.log(fruits); // ["kiwi", undefined, "mango", "grape"]

// concat()
let vegetables = ["carrot", "tomato"];
let food = fruits.concat(vegetables);
console.log(food); // ["kiwi", undefined, "mango", "grape", "carrot", "tomato"]

// copyWithin()
let numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(1, 3);
console.log(numbers); // [1, 4, 5, 4, 5]

// flat()
let nested = [1, 2, [3, 4, [5]]];
let flattened = nested.flat(2);
console.log(flattened); // [1, 2, 3, 4, 5]

// slice()
let someFruits = fruits.slice(1, 3);
console.log(someFruits); // [undefined, "mango"]

// splice()
fruits.splice(1, 1, "berry", "pineapple");
console.log(fruits); // ["kiwi", "berry", "pineapple", "mango", "grape"]

// toSpliced()
let newFruits = fruits.toSpliced(2, 2, "melon");
console.log(newFruits); // ["kiwi", "berry", "melon", "grape"]
console.log(fruits);     // Original not changed: ["kiwi", "berry", "pineapple", "mango", "grape"]
