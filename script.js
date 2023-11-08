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
