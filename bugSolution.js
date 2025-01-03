function foo(a, b) {
  // Handle null or undefined values
  a = a === null || a === undefined ? 0 : a; 
  b = b === null || b === undefined ? 0 : b; 
  
  //Ensure both inputs are numbers before performing the addition
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0; // Or throw an error: throw new Error('Inputs must be numbers.');
  }
  return a + b; 
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(undefined, 5)); //Output: 5
console.log(foo('hello',5)); //Output: 0