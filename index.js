console.log("hello world!");
//bai1
document.getElementById("btnListNumber").onclick = function () {
  var num1 = document.getElementById("num1").value * 1;
  var num2 = document.getElementById("num2").value * 1;
  var num3 = document.getElementById("num3").value * 1;
  var bigestNum = 0;
  var secondNum = 0;
  var thirdNum = 0;

  if (num1 > num2 && num2 > num3) {
    bigestNum = num1;
    secondNum = num2;
    thirdNum = num3;
    // result = "<p>thu tu" + num1 + num2 + num3 + "</p>";
  } else if (num1 > num3 && num3 > num2) {
    bigestNum = num1;
    secondNum = num3;
    thirdNum = num2;
  } else if (num2 > num3 && num3 > num1) {
    bigestNum = num2;
    secondNum = num3;
    thirdNum = num1;
  } else if (num2 > num1 && num1 > num3) {
    bigestNum = num2;
    secondNum = num1;
    thirdNum = num3;
  } else if (num3 > num2 && num2 > num1) {
    bigestNum = num3;
    secondNum = num2;
    thirdNum = num1;
  } else {
    bigestNum = num3;
    secondNum = num1;
    thirdNum = num2;
  }
  document.getElementById("showNumber").innerHTML =
    "Thứ tự các số sau là " + bigestNum + "-" + secondNum + "-" + thirdNum;
  document.getElementById("showNumber").className =
    "bg-warning text-center text-danger";
};
//bai2
document.getElementById("btnHiFamily").onclick = function () {
  var choosen = document.getElementById("selectName").value;
  var sayHi;
  if (choosen == "B") {
    sayHi = "<p>Xin chào bố !</p>";
  } else if (choosen == "M") {
    sayHi = "<p>Xin chào mẹ  !</p>";
  } else if (choosen == "A") {
    sayHi = "<p>Xin chào anh trai  !</p>";
  } else {
    sayHi = "<p>Xin chào em gái !</p>";
  }

  document.getElementById("hiFamily").innerHTML = sayHi;
  document.getElementById("hiFamily").className =
    "bg-warning text-center text-danger";
};

//bai4
document.getElementById("btnTriangle").onclick = function () {
  var side1 = document.getElementById("side1").value;
  var side2 = document.getElementById("side2").value;
  var side3 = document.getElementById("side3").value;
  var triangle;
  if (side1 == side2 && side2 == side3) {
    triangle = "Đây là tam giác đều ";
  } else if (
    (side1 == side2 && side2 !== side3) ||
    (side1 == side3 && side2 !== side3) ||
    (side2 == side3 && side2 !== side1)
  ) {
    triangle = "Đây là tam giác cân ";
  } else if (
    side1 * side1 == side2 * side2 + side3 * side3 ||
    side2 * side2 == side1 * side1 + side3 * side3 ||
    side3 * side3 == side2 * side2 + side1 * side1
  ) {
    triangle = "Đây là tam giác vuông";
  } else {
    triangle = "Đây là tam giác thường";
  }
  document.getElementById("showTriangle").innerHTML = triangle;
  document.getElementById("showTriangle").className =
    "bg-light text-center text-warning fs-3";
};

//bai3
document.getElementById("btnCheck").onclick = function () {
  var const1 = document.getElementById("const1").value;
  var const2 = document.getElementById("const2").value;
  var const3 = document.getElementById("const3").value;
  var check;
  if (const1 % 2 == 0 && const2 % 2 == 0 && const3 % 2 == 0) {
    check = "Có 3 số chẵn";
  } else if (const1 % 2 !== 0 && const2 % 2 !== 0 && const3 % 2 !== 0) {
    check = "Có 3 số lẻ";
  } else if (
    (const1 % 2 == 0 && const2 % 2 == 0 && const3 % 2 !== 0) ||
    (const1 % 2 == 0 && const2 % 2 !== 0 && const3 % 2 == 0) ||
    (const1 % 2 !== 0 && const2 % 2 == 0 && const3 % 2 == 0)
  ) {
    check = "Có 2 số chẵn và 1 số lẻ";
  } else {
    check = "Có 2 số lẻ và 1 số chẵn ";
  }
  console.log(check);
};
