function test() {
  const result1 = getFibonacci(2);
  console.log(result1); // should output [1, 1]

  // Test 2
  const result2 = getFibonacci(5);
  console.log(result2); // should output [1, 1, 2, 3, 5]

  // Test 3
  const result3 = getFibonacci();
  console.log(result3); // should output "not allowed"

  // Test 4
  const result4 = getFibonacci(-1);
  console.log(result4); // should output "not allowed"

  // Test 5
  const result5 = getFibonacci(11);
  console.log(result5); // should output "not allowed"
}
