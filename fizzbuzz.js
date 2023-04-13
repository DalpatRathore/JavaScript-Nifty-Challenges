console.log("FizzBuzz Challenge!");

//= FizzBuzz - print numbers from 1 to 100, multiple of 3 should print “Fizz” and similarly print “Buzz” for multiples of 5 and lastly print “FizzBuzz” for multiples of both 3 and 5
const fizzbuzzFn = () => {
  for (let i = 1; i <= 100; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    if (output === "") output = i;
    console.log(output);
  }
};

fizzbuzzFn();
