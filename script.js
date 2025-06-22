function fibonacci(num) {
  if (num === 1) return 0;
  if (num === 2) return 1;

  let a = 0, b = 1;
  for (let i = 3; i <= num; i++) {
    let next = a + b;
    a = b;
    b = next;
  }
  return b;
}

function showFibonacci() {
  const input = document.getElementById("fibInput").value;
  const num = parseInt(input);

  if (isNaN(num) || num < 1 || num > 50) {
    document.getElementById("result").textContent = "Please enter a valid number between 1 and 50.";
    return;
  }

  const fibValue = fibonacci(num);
  document.getElementById("result").textContent = `Fibonacci(${num}) = ${fibValue}`;
}
