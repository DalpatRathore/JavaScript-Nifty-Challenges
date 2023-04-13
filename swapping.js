console.log("Swapping Challenge!");

//= Swapping - two variables values, with and without additional memory and also with ES6 destructuring feature.

let a = 3;
let b = 6;
console.log("Before - a >>: ", a);
console.log("Before - b >>: ", b);

// Swapping method 1 with additional memory

let temp = a;
a = b;
b = temp;
console.log("After - a >>: ", a);
console.log("After - b >>: ", b);

// Swapping method 2 without additional memory

a = a + b;
b = a - b;
a = a - b;
console.log("After - a >>: ", a);
console.log("After - b >>: ", b);

// Swapping method 3 ES6 destructuring

[b, a] = [a, b];
console.log("After - a >>: ", a);
console.log("After - b >>: ", b);
