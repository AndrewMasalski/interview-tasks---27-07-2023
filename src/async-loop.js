/*
Implement a function asyncLoop that takes an array of asynchronous functions as input and executes them sequentially.
Each function returns a promise that resolves after a random delay (between 100ms and 500ms).
The asyncLoop function should wait for the completion of one function before starting the next one.
After all functions are executed, it should return an array containing their results in the order of execution.
*/

async function asyncFunction(delay) {
  return new Promise((resolve) => setTimeout(() => resolve(delay), delay));
}

async function asyncLoop(asyncFunctions) {
  // Your implementation
}

const functions = [
  () => asyncFunction(200),
  () => asyncFunction(300),
  () => asyncFunction(100),
];

(async () => {
  const results = await asyncLoop(functions);
  console.log(results); // Output should be an array like [200, 300, 100]
})();
