// Expected result : [[1, 3, 5, 7, 9], [2, 4, 6, 8, 10]]
// Direction : Return nested array first is odd value and second is even array from the array number

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evens = [];
var odds = [];

var evenNumbers = function (number) {
  for (var i = 0; i < number.length; i++) {
    if (number[i] % 2 == 0) {
      evens.push(number[i]);
    } else {
      odds.push(number[i]);
    }
  }
};

evenNumbers(number);
console.log(evens);
console.log(odds);
