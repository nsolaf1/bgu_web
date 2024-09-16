// User Input Validation:

let userInput = prompt("Enter a number:");
if (isNaN(userInput)) {
  alert("Please enter a valid number.");
} else {
  let number = parseInt(userInput);
  if (number % 2 === 0) {
    alert("The number is even.");
  } else {
    alert("The number is odd.");
  }
}


// BASIC Error Handling:

try {
    let userInput = prompt("Enter a number:");
    if (isNaN(userInput)) {
      throw new Error("Invalid input");
    }
    let number = parseInt(userInput);
    alert("The number is " + (number % 2 === 0 ? "even" : "odd") + ".");
  } catch (error) {
    alert(error.message);
  }
  

//   HW CHECK
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even.");
    } else {
      console.log(i + " is odd.");
    }
  }

  // Functions and Reusability of Above:

function checkOddEven(number) {
  return number % 2 === 0 ? "even" : "odd";
}

for (let i = 1; i <= 10; i++) {
  console.log(i + " is " + checkOddEven(i));
}
