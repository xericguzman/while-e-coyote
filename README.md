# `while-e-coyote`

> An assignment with `while` loops. This assignment has two parts.

## Part 1: `sum-args.js`

In the `sum-args.js` file, write code such that any numbers that are given to the program as arguments are added together, then console.logged.

**Examples:**

```
node sum-args.js
> 0

node sum-args.js 1 2 3
> 6

node sum-args.js -20 30 1 2 9
> 22
```

This program should work for any number of arguments!

Hints:
* Use the `getInput` function
* Use a while loop
* You will not need to define any functions (you can if you want though)

## Part 2: `pin-code.js`

In the `pin-code.js` file, a user should be able to input any number of pin codes via command line arguments. The program reads each pin code one by one.
If the pin code is equal to the correct pin code (let's use `'1234'`), the program tells the user they got the pin code correct as well as how many guesses it took.
If the none of the pin codes are correct, the program tells the user that all the pin codes were incorrect.

**Examples:**

```
node pin-code.js 1234
> That is correct. You took 1 guess(es).

node pin-code.js 0030 1112 1234
> That is correct. You took 3 guess(es).

node pin-code.js 1234 0030 1112
> That is correct. You took 1 guess(es).

node pin-code.js 0000 1112
> None of the entered pin codes are correct.
```

Just like the previous challenge, this code should work for any number of arguments.

Hints:
* Use the `getInput` function
* Use a while loop
* You will not need to define any functions (you can if you want though)
* If a user enters the pin code correctly, we're done and do not process any subsequent pin codes


