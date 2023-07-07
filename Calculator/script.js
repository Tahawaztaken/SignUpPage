// const add = function(num1, num2) {
// 	return num1 + num2
// };

// const subtract = function(num1, num2) {
//   return num1 - num2
// };

// const sum = function(myArray) {
//   let sumArray = 0
//   for (let i = 0; i < myArray.length; i++){
//     sumArray += myArray[i]
//   }
//   return sumArray
// };

// const multiply = function(num1, ...numN) {
//   let sum = num1;
//   for (let i = 0; i < numN.length; i++) {
//     sum *= numN[i]
//   }
//   return sum
// };

// const power = function(num1, num2) {
// 	return num1 ** num2
// };

// const factorial = function(x) {
//     return (x > 1) ? x * factorial(x-1) : 1;
// };


// //Event handlers
// window.onload=function(){
//   var selectedButton = 0;
//   let btns = document.querySelectorAll('button');
//   var selectedDisplayVal = document.querySelector("#displayScreen span:last-child");
//   var calculatedLine = document.querySelector("#displayScreen span:first-child");
//   var selectedOperator = "";

//   for (button of btns) {
//     button.addEventListener('click', function(){
//       if (this.classList.contains("operant")) {
//         if (selectedOperator == "") {
//           calculatedLine.innerHTML = `${selectedDisplayVal.innerHTML} ${this.innerHTML}`
//           selectedOperator = this.innerHTML
//         }
//         else {
          
//         }
//       }
//       else {
//         selectedButton = parseInt(this.innerHTML)
//         selectedDisplayVal.innerHTML = this.innerHTML
//         console.log(selectedButton);
//       }
//    });
//   }
// }

const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const multiply = function(num1, ...numN) {
	let product = num1;
	for (let i = 0; i < numN.length; i++) {
		product *= numN[i];
	}
	return product;
};

const divide = function(num1, num2) {
	return num1 / num2;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(x) {
	return x > 1 ? x * factorial(x - 1) : 1;
};

// Event handlers
window.onload = function() {
  let selectedButton = 0;
  let btns = document.querySelectorAll('button');
  let selectedDisplayVal = document.querySelector("#displayScreen span:last-child");
  let calculatedLine = document.querySelector("#displayScreen span:first-child");
  let selectedOperator = "";

  for (let button of btns) {
    button.addEventListener('click', function() {
      if (this.classList.contains("operant")) {
        if (selectedOperator === "") {
          calculatedLine.innerHTML = `${selectedDisplayVal.innerHTML} ${this.innerHTML}`;
          selectedOperator = this.innerHTML;
        } else {
          if (this.innerHTML === "=" && selectedOperator === "=") {
            return; // Skip execution if equal button is double-clicked
          }
          
          const num1 = parseInt(calculatedLine.innerHTML);
          const num2 = parseInt(selectedDisplayVal.innerHTML);
          let result;
          switch (selectedOperator) {
            case "+":
              result = add(num1, num2);
              break;
            case "-":
              result = subtract(num1, num2);
              break;
            case "x":
              result = multiply(num1, num2);
              break;
            case "/":
              result = divide(num1, num2);
              break;
            case "^":
              result = power(num1, num2);
              break;
            case "=":
              result = num2; // If previous operator is '=', the result is the current number
              break;
          }
          calculatedLine.innerHTML = `${num1} ${selectedOperator} ${num2} =`;
          selectedDisplayVal.innerHTML = result;
          selectedOperator = this.innerHTML;
        }
      } else {
        selectedButton = parseInt(this.innerHTML);
        selectedDisplayVal.innerHTML = this.innerHTML;
        console.log(selectedButton);
      }
    });
  }
};

