/**
 * Calculator Module
 * Provides basic arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/) with error handling for division by zero
 */

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
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  }
};

module.exports = calculator;
