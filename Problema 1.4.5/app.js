$("#add").click(function () {
  var firstNumber = parseInt($("#firstNumber").val());
  var secondNumber = parseInt($("#secondNumber").val());
  var result = firstNumber + secondNumber;
  $("#result").text(result);
});

$("#subtract").click(function () {
  var firstNumber = parseInt($("#firstNumber").val());
  var secondNumber = parseInt($("#secondNumber").val());
  var result = firstNumber - secondNumber;
  $("#result").text(result);
});

$("#multiply").click(function () {
  var firstNumber = parseInt($("#firstNumber").val());
  var secondNumber = parseInt($("#secondNumber").val());
  var result = firstNumber * secondNumber;
  $("#result").text(result);
});

$("#divide").click(function () {
  var firstNumber = parseInt($("#firstNumber").val());
  var secondNumber = parseInt($("#secondNumber").val());
  var result = firstNumber / secondNumber;
  $("#result").text(result);
});

$("#modulo").click(function () {
  var firstNumber = parseInt($("#firstNumber").val());
  var secondNumber = parseInt($("#secondNumber").val());
  var result = firstNumber % secondNumber;
  $("#result").text(result);
});
