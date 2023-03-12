function test() {
  const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

  console.log(
    equals(getFibonacci(5), [1, 1, 2, 3, 5]) ? " Passed " : " Failed "
  );
  console.log(equals(getFibonacci(2), [1, 1]) ? " Passed " : " Failed ");
  console.log(
    equals(getFibonacci("abcd"), "not allowed") ? " Passed " : " Failed "
  );
  console.log(
    equals(getFibonacci(20), "not allowed") ? " Passed " : " Failed "
  );
  console.log(
    equals(getFibonacci(-10), "not allowed") ? " Passed " : " Failed "
  );
}
test();
