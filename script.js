// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4)
  
// == HOMEWORK PART 1: Math Problems START ================
//
console.log("Hello world from javascript file");

//
// Check if all numbers are divisible by 5. Cache the
// result in a variable.
  
const isDivis5 = ((n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5)) === 0;
console.log("is divisible by 5 = ", isDivis5);

// Check if the first number is larger than the last. Cache
// the result in a variable.

const isFirstLargerThanLast = (n1 > n4);
console.log("is the first number larger than last", isFirstLargerThanLast);

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.

const mathChainRemainder = ((n2 - n1) * n3) % n4;
console.log("arithmethic chain remainder", mathChainRemainder);

// Change the way that isOver25 calculates so that we do not need to
// use the NOT operator (!) in other logic comparisons. Rename the
// variable as appropriate.

const isUnder26 = n1 < 26 || n2 < 26 || n3 < 26 || n4 < 26;
const isValidV2 = isSum50 && isTwoOdd && isUnder26 && isUnique;
console.log (`The four numbers are valid according to the provided criteria: ${isValidV2}.`);

// == HOMEWORK PART 2 START ===============================
//
// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.

console.log("homework part 2s");

const tripDistance = 1500;
const fuelEfficiency55mph = 30;
const fuelEfficiency60mph = 28;
const fuelEfficiency75mph = 23;
const fuelBudget = 175;
const fuelAveCost = 3;

// How many gallons of fuel will you need for the entire trip?
const gallonsForTripAt55mph = tripDistance / fuelEfficiency55mph;
const gallonsForTripAt60mph = tripDistance / fuelEfficiency60mph;
const gallonsForTripAt75mph = tripDistance / fuelEfficiency75mph;
console.log("Gallons of fuel at 55mph =", gallonsForTripAt55mph);
console.log("Gallons of fuel at 60mph =", gallonsForTripAt60mph);
console.log("Gallons of fuel at 75mph =", gallonsForTripAt75mph);

// Will your budget be enough to cover the fuel expense?
const fuelExpenseForTripAt55mph = gallonsForTripAt55mph * fuelAveCost;
const fuelExpenseForTripAt60mph = gallonsForTripAt60mph * fuelAveCost;
const fuelExpenseForTripAt75mph = gallonsForTripAt75mph * fuelAveCost;
const inFuelBudgetAt55mph = fuelExpenseForTripAt55mph < fuelBudget;
const inFuelBudgetAt60mph = fuelExpenseForTripAt60mph < fuelBudget;
const inFuelBudgetAt75mph = fuelExpenseForTripAt75mph < fuelBudget;

console.log (`Fuel costs at 55 mph = ${fuelExpenseForTripAt55mph}, in budget = ${inFuelBudgetAt55mph}.`);
console.log (`Fuel costs at 60 mph = ${fuelExpenseForTripAt60mph}, in budget = ${inFuelBudgetAt60mph}.`);
console.log (`Fuel costs at 75 mph = ${fuelExpenseForTripAt75mph}, in budget = ${inFuelBudgetAt75mph}.`);

// How long will the trip take, in hours?
const tripTimeAt55mphHours = tripDistance / 55; 
const tripTimeAt60mphHours = tripDistance / 60;
const tripTimeAt75mphHours = tripDistance / 75;
const tripTimeAt55mphMins = (tripDistance % 55) / 55 * 60; 
const tripTimeAt60mphMins = (tripDistance % 60) / 60 * 60;
const tripTimeAt75mphMins = (tripDistance % 75) / 75 * 60;

console.log (`Trip time at 55 mph = ${Math.floor(tripTimeAt55mphHours)} hours, ${Math.floor(tripTimeAt55mphMins)} minutes.`);
console.log (`Trip time at 60 mph = ${Math.floor(tripTimeAt60mphHours)} hours, ${Math.floor(tripTimeAt60mphMins)} minutes.`);
console.log (`Trip time at 75 mph = ${Math.floor(tripTimeAt75mphHours)} hours, ${Math.floor(tripTimeAt75mphMins)} minutes.`);

// = HOMEWORK END ========================================

console.log("Goodbye world from javascript file");

