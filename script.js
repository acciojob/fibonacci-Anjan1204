function fibonacci(num) {
  if (num === 1) return 0;
  if (num === 2) return 1;

  let a = 0, b = 1, fib;
  for (let i = 3; i <= num; i++) {
    fib = a + b;
    a = b;
    b = fib;
  }
  return b;
}

function calculateFibonacci() {
  const input = document.getElementById('fibInput').value;
  const resultElement = document.getElementById('result');
  const num = parseInt(input);

  if (isNaN(num) || num <= 0) {
    resultElement.textContent = 'Please enter a valid positive integer.';
    return;
  }

  const result = fibonacci(num);
  resultElement.textContent = `Fibonacci number at position ${num} is: ${result}`;
}
