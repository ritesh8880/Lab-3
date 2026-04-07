#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * Supports arithmetic and advanced math operations:
 * Basic:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/) with error handling for division by zero
 * Advanced:
 * - Modulo (%) - returns remainder of division
 * - Power (^) - returns base raised to exponent
 * - Square Root (√) - returns square root with error handling for negative numbers
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
  },

  // Modulo: Returns the remainder of a divided by b
  modulo: (a, b) => {
    if (b === 0) {
      throw new Error('Error: Modulo by zero is not allowed');
    }
    return a % b;
  },

  // Power: Returns base raised to the exponent
  power: (base, exponent) => Math.pow(base, exponent),

  // Square Root: Returns the square root of n with error handling for negative numbers
  squareRoot: (n) => {
    if (n < 0) {
      throw new Error('Error: Square root of negative number is not allowed');
    }
    return Math.sqrt(n);
  }
};

// Display menu
function displayMenu() {
  console.log('\n--- Calculator Menu ---');
  console.log('Basic Operations:');
  console.log('1. Addition (+)');
  console.log('2. Subtraction (-)');
  console.log('3. Multiplication (*)');
  console.log('4. Division (/)');
  console.log('\nAdvanced Operations:');
  console.log('5. Modulo (%)');
  console.log('6. Power (^)');
  console.log('7. Square Root (√)');
  console.log('\n8. Exit');
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
    const choice = await question('Select an operation (1-8): ');

    if (choice === '8') {
      console.log('Thank you for using the calculator. Goodbye!');
      running = false;
      break;
    }

    if (!['1', '2', '3', '4', '5', '6', '7'].includes(choice)) {
      console.log('Invalid choice. Please select 1-8.');
      continue;
    }

    try {
      let result;
      let operation;

      // Handle Square Root separately (only needs one number)
      if (choice === '7') {
        const num = parseFloat(await question('Enter a number: '));

        if (isNaN(num)) {
          console.log('Error: Please enter a valid number.');
          continue;
        }

        result = calculator.squareRoot(num);
        operation = 'Square Root';
        console.log(`\n${operation}: √${num} = ${result}`);
      } else {
        // All other operations need two numbers
        const num1 = parseFloat(await question('Enter first number: '));
        const num2 = parseFloat(await question('Enter second number: '));

        if (isNaN(num1) || isNaN(num2)) {
          console.log('Error: Please enter valid numbers.');
          continue;
        }

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
          case '5':
            result = calculator.modulo(num1, num2);
            operation = 'Modulo';
            console.log(`\n${operation}: ${num1} % ${num2} = ${result}`);
            break;
          case '6':
            result = calculator.power(num1, num2);
            operation = 'Power';
            console.log(`\n${operation}: ${num1} ^ ${num2} = ${result}`);
            break;
        }
      }
    } catch (error) {
      console.log(`\n${error.message}\n`);
    }
  }

  rl.close();
}

// Run the calculator
main().catch(console.error);
