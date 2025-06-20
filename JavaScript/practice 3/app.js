const english = 54;
const maths = 34;
const testName = "MERN";
const userName = "unrohit";

const result1 =
  userName +
  " got a total of " +
  (english + maths) +
  " marks in " +
  testName +
  " exam";

const result2 = `${userName} got a total of ${
  english + maths
} marks in ${testName} exam`;

const result3 = `${userName} got a total of ${english} in ${testName} exam`;

console.log(result1);
console.log(result2);
console.log(result3);
