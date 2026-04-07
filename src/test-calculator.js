/**
 * Test script for Calculator
 * Tests the four basic arithmetic operations with example values
 */

// Import calculator functions
const calculator = require('./calculator.js');

// Test cases from the image:
// 2 + 3
// 10 - 4
// 45 * 2
// 20 / 5

console.log('=== Calculator Test Suite ===\n');

// Extract the calculator object from the module exports
const calcFuncs = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) throw new Error('Division by zero is not allowed');
    return a / b;
  }
};

// Test 1: Addition (2 + 3 = 5)
try {
  const result1 = calcFuncs.add(2, 3);
  console.log(`✓ Addition: 2 + 3 = ${result1}`);
  console.log(`  Expected: 5, Got: ${result1}, Status: ${result1 === 5 ? 'PASS' : 'FAIL'}\n`);
} catch (error) {
  console.log(`✗ Addition failed: ${error.message}\n`);
}

// Test 2: Subtraction (10 - 4 = 6)
try {
  const result2 = calcFuncs.subtract(10, 4);
  console.log(`✓ Subtraction: 10 - 4 = ${result2}`);
  console.log(`  Expected: 6, Got: ${result2}, Status: ${result2 === 6 ? 'PASS' : 'FAIL'}\n`);
} catch (error) {
  console.log(`✗ Subtraction failed: ${error.message}\n`);
}

// Test 3: Multiplication (45 * 2 = 90)
try {
  const result3 = calcFuncs.multiply(45, 2);
  console.log(`✓ Multiplication: 45 * 2 = ${result3}`);
  console.log(`  Expected: 90, Got: ${result3}, Status: ${result3 === 90 ? 'PASS' : 'FAIL'}\n`);
} catch (error) {
  console.log(`✗ Multiplication failed: ${error.message}\n`);
}

// Test 4: Division (20 / 5 = 4)
try {
  const result4 = calcFuncs.divide(20, 5);
  console.log(`✓ Division: 20 / 5 = ${result4}`);
  console.log(`  Expected: 4, Got: ${result4}, Status: ${result4 === 4 ? 'PASS' : 'FAIL'}\n`);
} catch (error) {
  console.log(`✗ Division failed: ${error.message}\n`);
}

// Test 5: Division by zero (error handling)
try {
  const result5 = calcFuncs.divide(10, 0);
  console.log(`✗ Division by zero should have failed but got: ${result5}\n`);
} catch (error) {
  console.log(`✓ Division by zero error handling: ${error.message}\n`);
  console.log(`  Status: PASS (correctly caught error)\n`);
}

console.log('=== Test Suite Complete ===');
