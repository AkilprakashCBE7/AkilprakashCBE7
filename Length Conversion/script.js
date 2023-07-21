"strict";

var input = document.getElementById("input1");
var result = document.getElementById("result");
var inputType = document.getElementById("inputType");
var resultType = document.getElementById("resultType");

/*resultType.addEventListener("change", myResult);
inputType.addEventListener("change", myResult);*/
answer.addEventListener("click", myResult);

function myResult() {
  if (validate()) {
    //From kilometer to other
    if (inputType.value === "kilometer" && resultType.value === "meter")
      result.value = input.value * 1000;
    else if (
      inputType.value === "kilometer" &&
      resultType.value === "centimeter"
    )
      result.value = input.value * 100000;
    else if (inputType.value === "kilometer" && resultType.value === "feet")
      result.value = input.value * 3281;
    else if (inputType.value === "kilometer" && resultType.value === "yard")
      result.value = input.value * 1094;
    else if (inputType.value === "kilometer" && resultType.value === "inch")
      result.value = input.value * 3937;
    //from meter to other
    else if (inputType.value === "meter" && resultType.value === "kilometer")
      result.value = input.value * 0.001;
    else if (inputType.value === "meter" && resultType.value === "centimeter")
      result.value = input.value * 100;
    else if (inputType.value === "meter" && resultType.value === "feet")
      result.value = input.value * 3.281;
    else if (inputType.value === "meter" && resultType.value === "yard")
      result.value = input.value * 1.094;
    else if (inputType.value === "meter" && resultType.value === "inch")
      result.value = input.value * 3.937;
    //from centimeter to other
    else if (
      inputType.value === "centimeter" &&
      resultType.value === "kilometer"
    )
      result.value = input.value * 0.000001;
    else if (inputType.value === "centimeter" && resultType.value === "meter")
      result.value = input.value * 0.01;
    else if (inputType.value === "centimeter" && resultType.value === "feet")
      result.value = input.value * 0.03281;
    else if (inputType.value === "centimeter" && resultType.value === "yard")
      result.value = input.value * 0.01094;
    else if (inputType.value === "centimeter" && resultType.value === "inch")
      result.value = input.value * 0.03937;
    //from feet to other
    else if (inputType.value === "feet" && resultType.value === "kilometer")
      result.value = input.value * 0.00003048;
    else if (inputType.value === "feet" && resultType.value === "meter")
      result.value = input.value * 0.3048;
    else if (inputType.value === "feet" && resultType.value === "centimeter")
      result.value = input.value * 30.48;
    else if (inputType.value === "feet" && resultType.value === "yard")
      result.value = input.value * 0.3333;
    else if (inputType.value === "feet" && resultType.value === "inch")
      result.value = input.value * 12;
    //from yard to other
    else if (inputType.value === "yard" && resultType.value === "kilometer")
      result.value = input.value * 0.009144;
    else if (inputType.value === "yard" && resultType.value === "meter")
      result.value = input.value * 0.9144;
    else if (inputType.value === "yard" && resultType.value === "centimter")
      result.value = input.value * 91.44;
    else if (inputType.value === "yard" && resultType.value === "feet")
      result.value = input.value * 3;
    else if (inputType.value === "yard" && resultType.value === "inch")
      result.value = input.value * 36;
    //from inch to other
    else if (inputType.value === "inch" && resultType.value === "kilometer")
      result.value = input.value * 0.000000254;
    else if (inputType.value === "inch" && resultType.value === "meter")
      result.value = input.value * 0.0254;
    else if (inputType.value === "inch" && resultType.value === "centimeter")
      result.value = input.value * 2.54;
    else if (inputType.value === "inch" && resultType.value === "feet")
      result.value = input.value * 0.8333;
    else if (inputType.value === "inch" && resultType.value === "yard")
      result.value = input.value * 0.27778;
  }
}

function validate() {
  if (input.value <= 0) {
    alert("Enter valid number");
    return false;
  }
  return true;
}

function reset() {
  result.value = null;
  input.value = null;
}
