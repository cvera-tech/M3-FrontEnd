// given the following series of numbers
// how would you get the nth number in the sequence
// ex) 0, 1, 1, 2, 3, 5, 8, 13, 21
function fibonacci(n) {
    if (n === 0 || n === 1) return n;
    else return fibonacci(n - 2) + fibonacci(n - 1);
}

// O(m * n)
// O(2^n) = Answer!

function fibonacciDynamic(n) {
    if (n === 0 || n === 1) return n;
    else {
        const array = [0, 1];
        for (let i = 2; i <= n; i++) {
            array.push(array[i - 2] + array[i - 1]);
        }
        return array[n];
    }
}

console.log(`Calculating the 50th number in the sequence...`)
const recursionStart = Date.now();
// console.log(fibonacci(0));
// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(5));
// console.log(fibonacci(6));
// console.log(fibonacci(7));
console.log(fibonacci(10));
// console.log(fibonacci(50));
const recursionEnd = Date.now();
console.log(`recursive algorithm: ${recursionEnd - recursionStart} ms`);

// const dynamicStart = Date.now();
// console.log(fibonacciDynamic(0));
// console.log(fibonacciDynamic(1));
// console.log(fibonacciDynamic(2));
// console.log(fibonacciDynamic(3));
// console.log(fibonacciDynamic(4));
// console.log(fibonacciDynamic(5));
// console.log(fibonacciDynamic(6));
// console.log(fibonacciDynamic(7));
// console.log(fibonacciDynamic(50));
// const dynamicEnd = Date.now();
// console.log(`dynamic programming: ${dynamicEnd - dynamicStart} ms`);