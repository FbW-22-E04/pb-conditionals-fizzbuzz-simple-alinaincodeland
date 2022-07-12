/* 
Let's play mini FizzBuzz! For any given number, if the number is:

    divisible by 3, print "Fizz".
    divisible by "5", print "Buzz".
    divisible by both 3 and 5, print "FizzBuzz".

That is, if any of the above conditions apply, print the above words instead of the number.

    Otherwise, just print the number.

*/


for (var n = 1; n <= 100; n++)

if (n%3 == 0) {
    console.log("Fizz");
}
else if (n%5 == 0) {
    console.log("Buzz");
}
else if (n%15 == 0) {
    console.log("FizzBuzz");
}
else {
    console.log(n)
}
