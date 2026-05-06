# Coffee Pricing Calculator

Sureify does not need to handle a massive amount of data very quickly. Sureify does not need
to handle massive amounts of traffic very quickly. Instead we focus on reducing defects and
development costs. We strive to find errors early in the development process – ideally errors are
discovered during compilation or testing.

In this exercise we’re asking you to write TypeScript code that is easy to maintain. We are not
looking for code that is efficient with time or space. We make heavy use of immutability as a way
to achieve maintainability. Make your code as immutable as you can. Avoid casting. Bonus
points if you solve the problem without using classes.

## The exercise
We’re building an automated coffee vending machine. This machine might be found at a train
station or a large office building. The user interface for this coffee vending machine presents the
user with options. The user can change their options many times before they choose the
purchase. Your job is to write a function that provides an updated price each time an option is
selected. This function is deep inside the coffee vending machine, this function is not exposed
as an HTTP API. All other parts of the coffee vending machine have already been built. The
interface for this function has already been defined. You cannot change the signature of the
function even though there may be a better way to design the function.

The following variables affect the price of the coffee: size and creamer.

The prices are:

**Size**
Small: $1.00<br>
Medium: $1.50<br>
Large: $2.00<br>

**Creamer**
None: $0.00<br>
Dairy: $0.25<br>
Non-Dairy: $0.50<br>

## Installation

```bash
npm install
```

## Running Tests

The project uses [Vitest](https://vitest.dev/) for testing.

```bash
npm test
```

## Test result

```bash
 ✓ calculator.spec.ts (1 test) 1ms
   ✓ provides the latest price given the options selected so far 1ms

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  19:59:01
   Duration  90ms (transform 22ms, setup 0ms, import 32ms, tests 1ms, environment 0ms)

 PASS  Waiting for file changes...
       press h to show help, press q to quit

```