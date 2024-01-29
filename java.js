// Function to greet the user
function greetUser(userName) {
    return "Hello, " + userName + "! Welcome to our program.";
}

// Prompt the user for their name
var userName = prompt("Enter your name:");

// Call the greetUser function and display the greeting
var greeting = greetUser(userName);
console.log(greeting);


// Function to check if a number is prime
function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

// Prompt the user for a number
const userInput = prompt("Enter a positive integer:");

// Convert the user input to a number
const number = parseInt(userInput);

// Check if the number is prime using the isPrime function
if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
} else {
    console.log(`${number} is not a prime number.`);
}
