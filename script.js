'use strict';

/*********** Simple Array Methods ************/
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log('----- SLICE: return new array -----');
console.log(arr.slice(2)); // [ "c", "d", "e" ]
console.log(arr.slice(2, 4)); // [ "c", "d" ]
console.log(arr.slice(-2)); // [ "d", "e" ]
console.log(arr.slice(-1)); // [ "e" ]
console.log(arr.slice(1, -2)); // [ "b", "c" ]
console.log(arr.slice()); // [ "a", "b", "c", "d", "e" ]
console.log([...arr]); // [ "a", "b", "c", "d", "e" ]

console.log('----- SPLICE: mutate the original array -----');
// console.log(arr.splice(2)); // [ "c", "d", "e" ]
console.log(arr.splice(-1)); // [ "e" ]
console.log(arr); // [ "a", "b", "c", "d" ]
console.log(arr.splice(1, 2)); // [ "b", "c" ]
console.log(arr); // [ "a", "d" ]

console.log('----- REVERSE: mutate the original array -----');
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // [ "f", "g", "h", "i", "j" ]
console.log(arr2); // [ "f", "g", "h", "i", "j" ]

console.log('----- CONCAT -----');
const letters = arr.concat(arr2);
console.log(letters); // [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j" ]
console.log([...arr, ...arr2]); // [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j" ]

console.log('----- JOIN -----');
console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j

console.log('----- AT -----');
arr = [23, 11, 64];
console.log(arr[0]); // 23
console.log(arr.at(0)); // 23
// getting last array element
console.log(arr[arr.length - 1]); // 64
console.log(arr.slice(-1)[0]); // 64
console.log(arr.at(-1)); // 64
console.log('jonas'.at(0)); // j
console.log('jonas'.at(-1)); // s

console.log('---- Looping Arrays ----');
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- Looping Arrays: FOREACH ----');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

// Movement 1: You deposited 200
// Movement 2: You deposited 450
// Movement 3: You withdrew 400
// Movement 4: You deposited 3000
// Movement 5: You withdrew 650
// Movement 6: You withdrew 130
// Movement 7: You deposited 70
// Movement 8: You deposited 1300

console.log('---- forEach on Maps ----');
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// USD: United States dollar
// EUR: Euro
// GBP: Pound sterling

console.log('---- forEach on Sets ----');
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique); // Set(3) [ "USD", "GBP", "EUR" ]
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

// USD: USD
// GBP: GBP
// EUR: EUR

/************* Coding Challenge #1 *************/

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  console.log(dogsJuliaCorrected);
  const both = dogsJuliaCorrected.concat(dogsKate);
  console.log(both);
  both.forEach(function (age, i) {
    if (age >= 3)
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
    else console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);



console.log("----- The map Method -----");
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map((mov) => mov * eurToUsd);

console.log(movements); // [ 200, 450, -400, 3000, -650, -130, 70, 1300 ]
console.log(movementsUSD); // [ 220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002 ]

// using for of loop
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor); // [ 220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002 ]

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);
// [ "Movement 1: You deposited 200", "Movement 2: You deposited 450", "Movement 3: You withdrew 400", "Movement 4: You deposited 3000", "Movement 5: You withdrew 650", "Movement 6: You withdrew 130", "Movement 7: You deposited 70", "Movement 8: You deposited 1300" ]

console.log("----- The filter Method -----");
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements); // [ 200, 450, -400, 3000, -650, -130, 70, 1300 ]
console.log(deposits); // [ 200, 450, 3000, 70, 1300 ]

// using for of loop
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals); // [ -400, -650, -130 ]

console.log("----- The reduce Method -----");
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance); // 3840

// using for of loop
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2); // 3840

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max); // 3000

/**********  Coding Challenge #2 ***********/

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = function (dogs) {
  const humanAges = dogs.map((dog) => (dog <= 2 ? dog * 2 : dog * 4 + 16));
  console.log(humanAges);

  const adults = humanAges.filter((dog) => dog > 18);
  console.log(adults);

  // const avg = adults.reduce((acc, dog) => acc + dog, 0) / adults.length;
  const avg = adults.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  return avg;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])); // 44
// humanAges = [ 36, 4, 32, 2, 76, 48, 28 ]
// adults = [ 36, 32, 76, 48, 28 ]

console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])); // 47.333333
// humanAges = [ 80, 40, 56, 36, 40, 2, 32 ]
// adults = [ 80, 40, 56, 36, 40, 32 ]
