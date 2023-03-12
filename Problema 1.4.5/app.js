$(document).ready(function () {
  $("#add").click(function () {
    var firstNumber = parseInt($("#firstNumber").val());
    var secondNumber = parseInt($("#secondNumber").val());
    var result = firstNumber + secondNumber;
    $("#result").html(result);
  });

  $("#subtract").click(function () {
    var firstNumber = parseInt($("#firstNumber").val());
    var secondNumber = parseInt($("#secondNumber").val());
    var result = firstNumber - secondNumber;
    $("#result").html(result);
  });

  $("#multiply").click(function () {
    var firstNumber = parseInt($("#firstNumber").val());
    var secondNumber = parseInt($("#secondNumber").val());
    var result = firstNumber * secondNumber;
    $("#result").html(result);
  });

  $("#divide").click(function () {
    var firstNumber = parseInt($("#firstNumber").val());
    var secondNumber = parseInt($("#secondNumber").val());
    var result = firstNumber / secondNumber;
    $("#result").html(result);
  });

  $("#modulus").click(function () {
    var firstNumber = parseInt($("#firstNumber").val());
    var secondNumber = parseInt($("#secondNumber").val());
    var result = firstNumber % secondNumber;
    $("#result").html(result);
  });
});
