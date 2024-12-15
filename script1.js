// Function to check if the number is positive, negative, or zero //
function checkNumber(num) {
    if (num > 0) {
        console.log("The number is positive.");
    } else if (num < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}

// Test the function //
let number = prompt("Enter a number:");  
number = parseFloat(number);  

checkNumber(number);  









    
