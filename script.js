function fibonacci(num) {
  if (num === 0) return 0;
  if (num === 1) return 0;
  if (num === 2) return 1;

  let a = 0, b = 1, fib = 1;
  for (let i = 3; i <= num; i++) {
    fib = a + b;
    a = b;
    b = fib;
  }
  return fib;
}

function showFibonacci() {
  const input = document.getElementById("inputN").value;
  const n = parseInt(input);

  if (isNaN(n) || n < 0 || n > 50) {
    document.getElementById("result").innerText = "Please enter a valid number between 0 and 50.";
    return;
  }

  const fib = fibonacci(n);
  document.getElementById("result").innerText = `Fibonacci(${n}) = ${fib}`;
}
