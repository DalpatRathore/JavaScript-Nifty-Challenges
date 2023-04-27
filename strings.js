console.log("Strings Challenges!");

//= CapitalizeLetters - In a given sentence capitalize first letter of each word in the sentence.
const capitalizeLetters = str => {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(" ");
};

console.log(
  capitalizeLetters("I love JavaScript,it is awesome programming language")
);
console.log(
  capitalizeLetters("I woke up early today and straight went for walk")
);
