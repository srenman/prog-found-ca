// Question 1
var yummyPastry = "Cinnamonbun";

// Question 2
var person = {
  name: "Adam",
  age: 24
};

// Question 3

var outOfStock = true;

if (outOfStock === true) {
  console.log("Out of stock");
} else {
  console.log("In stock");
}

// Question 4

var numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Question 5

for (var i = 15; i <= 25; i++) {
  console.log(i);
}

// Question 6

for (var i = 15; i <= 25; i++)
  if (i === 20) {
    console.log(i);
  } else {
  }

// Question 7

var peopleArray = [
  {
    name: "Ellen",
    age: 18,
    male: false
  },

  {
    name: "Nils",
    age: 37,
    male: true
  }
];

for (var i = 0; i < peopleArray.length; i++) {
  console.log(peopleArray[i].age);
  console.log(peopleArray[i].male);
}

// Question 8

function whatIDontLike(iDisLike) {
  console.log("I don't like " + iDisLike);
}

whatIDontLike("flies");

// Question 9

function subtraction(firstNumber, secondNumber) {
  console.log(firstNumber - secondNumber);
}

subtraction(10, 3);

// Question 10

var testArray = [];

function addArgument(yourArgument) {
  testArray.push(yourArgument);
}

addArgument("Hopefully this works");
