/**
 * Calculator Module
 * Provides arithmetic and advanced math operations:
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
  },

  // Modulo: Returns the remainder of a divided by b
  modulo: (a, b) => {
    if (b === 0) {
      throw new Error('Modulo by zero is not allowed');
    }
    return a % b;
  },

  // Power: Returns base raised to the exponent
  power: (base, exponent) => Math.pow(base, exponent),

  // Square Root: Returns the square root of n with error handling for negative numbers
  squareRoot: (n) => {
    if (n < 0) {
      throw new Error('Square root of negative number is not allowed');
    }
    return Math.sqrt(n);
  }
};

module.exports = calculator;
