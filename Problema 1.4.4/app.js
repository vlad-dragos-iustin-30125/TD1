function getFibonacci(n) {
  if (typeof n !== "number" || n < 1 || n > 10) {
    return "not allowed";
  }
  if (n === 1) {
    return [1];
  }
  if (n === 2) {
    return [1, 1];
  }
  const result = [1, 1];
  for (let i = 2; i < n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result;
}
