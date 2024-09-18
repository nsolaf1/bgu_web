function guessOddOrEven(input) {
    try {
      let number = Number(input);
  
      if (isNaN(number)) {
        throw new Error("Input is not a valid number.");
      }
  
      if (number % 2 === 0) {
        console.log(number + " is even.");
      } else {
        console.log(number + " is odd.");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
  guessOddOrEven("10"); 
  guessOddOrEven("7");  
  guessOddOrEven("abc");

//   Functions Chapter 3: 39p