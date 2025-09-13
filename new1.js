// Function to calculate compound interest
function compoundInterest(principal, rate, time, n) {
  // principal = initial amount
  // rate = annual interest rate in %
  // time = time in years
  // n = number of times interest applied per year

  let amount = principal * Math.pow((1 + (rate / (n * 100))), n * time);
  let interest = amount - principal;

  return {
    totalAmount: amount,
    compoundInterest: interest
  };
}

// Example usage:
let result = compoundInterest(10000, 5, 10, 4);
console.log("Total Amount: " + result.totalAmount.toFixed(2));
console.log("Compound Interest: " + result.compoundInterest.toFixed(2));
