// Get the current hour //
const currentHour = new Date().getHours();

// Prompt the user for their current hour //
let currenthour = prompt("Please enter your current hour:");

// Check the time and print the appropriate greeting //
if (currentHour >= 9 && currentHour < 17) {
    console.log("Good morning");
} else if (currentHour >= 15 && currentHour < 20) {
    console.log("Good afternoon");
} else {
    console.log("Good evening");
}
