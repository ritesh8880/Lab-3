#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * Supports four basic arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 */

const readline = require('readline');

// Calculator functions
const calculator = {
  // Addition: Add two or more numbers
  add: (a, b) => a + b,

  // Subtraction: Subtract numbers
  subtract: (a, b) => a - b,

  // Multiplication: Multiply numbers
  multiply: (a, b) => a * b,

  // Division: Divide numbers (with error handling for division by zero)
  divide: (a, b) => {
    if (b === 0) {
      throw new Error('Error: Division by zero is not allowed');
    }
    return a / b;
  }
};

// Display menu
function displayMenu() {
  console.log('\n--- Calculator Menu ---');
  console.log('1. Addition (+)');
  console.log('2. Subtraction (-)');
  console.log('3. Multiplication (*)');
  console.log('4. Division (/)');
  console.log('5. Exit');
  console.log('----------------------\n');
}

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Helper function to prompt user
function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

// Main calculator loop
async function main() {
  console.log('Welcome to the Node.js CLI Calculator!');

  let running = true;

  while (running) {
    displayMenu();
    const choice = await question('Select an operation (1-5): ');

    if (choice === '5') {
      console.log('Thank you for using the calculator. Goodbye!');
      running = false;
      break;
    }

    if (!['1', '2', '3', '4'].includes(choice)) {
      console.log('Invalid choice. Please select 1-5.');
      continue;
    }

    try {
      const num1 = parseFloat(await question('Enter first number: '));
      const num2 = parseFloat(await question('Enter second number: '));

      if (isNaN(num1) || isNaN(num2)) {
        console.log('Error: Please enter valid numbers.');
        continue;
      }

      let result;
      let operation;

      switch (choice) {
        case '1':
          result = calculator.add(num1, num2);
          operation = 'Addition';
          console.log(`\n${operation}: ${num1} + ${num2} = ${result}`);
          break;
        case '2':
          result = calculator.subtract(num1, num2);
          operation = 'Subtraction';
          console.log(`\n${operation}: ${num1} - ${num2} = ${result}`);
          break;
        case '3':
          result = calculator.multiply(num1, num2);
          operation = 'Multiplication';
          console.log(`\n${operation}: ${num1} * ${num2} = ${result}`);
          break;
        case '4':
          result = calculator.divide(num1, num2);
          operation = 'Division';
          console.log(`\n${operation}: ${num1} / ${num2} = ${result}`);
          break;
      }
    } catch (error) {
      console.log(`\n${error.message}\n`);
    }
  }

  rl.close();
}

// Run the calculator
main().catch(console.error);
