// Function to check voting eligibility //
function checkVotingEligibility() {
    
    // Prompt the user for their age //
    let age = prompt("Please enter your age:");

    // Convert the age input to a number //
    age = Number(age);

    // Check if the age is 18 or older //
    if (age >= 18) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
    }
}

// Call the function //
checkVotingEligibility();