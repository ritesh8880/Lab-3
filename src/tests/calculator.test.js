/**
 * Comprehensive Unit Tests for Calculator
 * Tests all four basic arithmetic operations with edge cases
 */

const calculator = require('../calculator-module');

describe('Calculator', () => {
  
  // ==================== ADDITION TESTS ====================
  describe('Addition (add)', () => {
    test('should add two positive numbers correctly', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should add two negative numbers correctly', () => {
      expect(calculator.add(-5, -3)).toBe(-8);
    });

    test('should add a positive and negative number correctly', () => {
      expect(calculator.add(10, -4)).toBe(6);
    });

    test('should handle zero correctly', () => {
      expect(calculator.add(5, 0)).toBe(5);
      expect(calculator.add(0, 0)).toBe(0);
    });

    test('should add decimal numbers correctly', () => {
      expect(calculator.add(2.5, 1.5)).toBe(4);
    });

    test('should add large numbers correctly', () => {
      expect(calculator.add(1000000, 2000000)).toBe(3000000);
    });

    test('should add example from image: 2 + 3', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });
  });

  // ==================== SUBTRACTION TESTS ====================
  describe('Subtraction (subtract)', () => {
    test('should subtract two positive numbers correctly', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('should subtract two negative numbers correctly', () => {
      expect(calculator.subtract(-10, -5)).toBe(-5);
    });

    test('should subtract a negative from a positive', () => {
      expect(calculator.subtract(10, -5)).toBe(15);
    });

    test('should handle zero correctly', () => {
      expect(calculator.subtract(5, 0)).toBe(5);
      expect(calculator.subtract(0, 5)).toBe(-5);
      expect(calculator.subtract(0, 0)).toBe(0);
    });

    test('should subtract decimal numbers correctly', () => {
      expect(calculator.subtract(5.5, 2.5)).toBe(3);
    });

    test('should result in negative number when subtracting larger from smaller', () => {
      expect(calculator.subtract(3, 8)).toBe(-5);
    });

    test('should subtract large numbers correctly', () => {
      expect(calculator.subtract(5000000, 3000000)).toBe(2000000);
    });

    test('should subtract example from image: 10 - 4', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });
  });

  // ==================== MULTIPLICATION TESTS ====================
  describe('Multiplication (multiply)', () => {
    test('should multiply two positive numbers correctly', () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });

    test('should multiply two negative numbers correctly', () => {
      expect(calculator.multiply(-5, -3)).toBe(15);
    });

    test('should multiply a positive and negative number correctly', () => {
      expect(calculator.multiply(10, -3)).toBe(-30);
    });

    test('should handle zero correctly', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
      expect(calculator.multiply(0, 0)).toBe(0);
    });

    test('should multiply decimal numbers correctly', () => {
      expect(calculator.multiply(2.5, 4)).toBe(10);
    });

    test('should multiply by 1 correctly', () => {
      expect(calculator.multiply(42, 1)).toBe(42);
    });

    test('should multiply large numbers correctly', () => {
      expect(calculator.multiply(1000, 2000)).toBe(2000000);
    });

    test('should multiply example from image: 45 * 2', () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });
  });

  // ==================== DIVISION TESTS ====================
  describe('Division (divide)', () => {
    test('should divide two positive numbers correctly', () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });

    test('should divide two negative numbers correctly', () => {
      expect(calculator.divide(-20, -5)).toBe(4);
    });

    test('should divide a positive by a negative correctly', () => {
      expect(calculator.divide(20, -5)).toBe(-4);
    });

    test('should handle dividing zero correctly', () => {
      expect(calculator.divide(0, 5)).toBe(0);
    });

    test('should divide decimal numbers correctly', () => {
      expect(calculator.divide(10, 4)).toBe(2.5);
    });

    test('should divide resulting in decimal correctly', () => {
      expect(calculator.divide(7, 2)).toBe(3.5);
    });

    test('should divide by 1 correctly', () => {
      expect(calculator.divide(42, 1)).toBe(42);
    });

    test('should divide large numbers correctly', () => {
      expect(calculator.divide(1000000, 1000)).toBe(1000);
    });

    test('should divide example from image: 20 / 5', () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });

    // ==================== DIVISION BY ZERO TESTS ====================
    test('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw an error when dividing zero by zero', () => {
      expect(() => calculator.divide(0, 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw an error with correct error type', () => {
      expect(() => calculator.divide(5, 0)).toThrow(Error);
    });
  });

  // ==================== INTEGRATION TESTS ====================
  describe('Integration Tests', () => {
    test('should perform sequential operations correctly', () => {
      let result = calculator.add(10, 5);      // 15
      result = calculator.subtract(result, 3); // 12
      result = calculator.multiply(result, 2); // 24
      result = calculator.divide(result, 4);   // 6
      expect(result).toBe(6);
    });

    test('should handle mixed positive and negative operations', () => {
      let result = calculator.add(100, -30);      // 70
      result = calculator.multiply(result, 2);    // 140
      result = calculator.divide(result, 7);      // 20
      result = calculator.subtract(result, 15);   // 5
      expect(result).toBe(5);
    });

    test('should perform all four operations from image examples', () => {
      expect(calculator.add(2, 3)).toBe(5);
      expect(calculator.subtract(10, 4)).toBe(6);
      expect(calculator.multiply(45, 2)).toBe(90);
      expect(calculator.divide(20, 5)).toBe(4);
    });
  });

  // ==================== MODULO TESTS ====================
  describe('Modulo (modulo)', () => {
    test('should calculate modulo of two positive numbers correctly', () => {
      expect(calculator.modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo with two positive numbers from image: 5 % 2', () => {
      expect(calculator.modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo of two negative numbers correctly', () => {
      expect(calculator.modulo(-10, -3)).toBe(-1);
    });

    test('should calculate modulo with positive and negative numbers', () => {
      expect(calculator.modulo(10, -3)).toBe(1);
      expect(calculator.modulo(-10, 3)).toBe(-1);
    });

    test('should handle zero as dividend correctly', () => {
      expect(calculator.modulo(0, 5)).toBe(0);
    });

    test('should calculate modulo with 1 correctly', () => {
      expect(calculator.modulo(42, 1)).toBe(0);
    });

    test('should calculate modulo with equal numbers', () => {
      expect(calculator.modulo(5, 5)).toBe(0);
    });

    test('should calculate modulo with decimal numbers correctly', () => {
      expect(calculator.modulo(5.5, 2)).toBe(1.5);
    });

    test('should throw an error when modulo by zero', () => {
      expect(() => calculator.modulo(10, 0)).toThrow('Modulo by zero is not allowed');
    });

    test('should throw error type when modulo by zero', () => {
      expect(() => calculator.modulo(5, 0)).toThrow(Error);
    });

    test('should calculate modulo with large numbers correctly', () => {
      expect(calculator.modulo(1000000, 7)).toBe(1000000 % 7);
    });
  });

  // ==================== POWER TESTS ====================
  describe('Power (power)', () => {
    test('should calculate power of two positive numbers correctly', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    test('should calculate power from image: 2 ^ 3', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    test('should calculate power with positive base and negative exponent', () => {
      expect(calculator.power(2, -1)).toBe(0.5);
      expect(calculator.power(2, -2)).toBe(0.25);
    });

    test('should calculate power with zero exponent', () => {
      expect(calculator.power(5, 0)).toBe(1);
      expect(calculator.power(0, 0)).toBe(1);
    });

    test('should calculate power with base of zero', () => {
      expect(calculator.power(0, 5)).toBe(0);
    });

    test('should calculate power with base of 1', () => {
      expect(calculator.power(1, 100)).toBe(1);
    });

    test('should calculate power with negative base and even exponent', () => {
      expect(calculator.power(-2, 2)).toBe(4);
      expect(calculator.power(-3, 4)).toBe(81);
    });

    test('should calculate power with negative base and odd exponent', () => {
      expect(calculator.power(-2, 3)).toBe(-8);
      expect(calculator.power(-5, 1)).toBe(-5);
    });

    test('should calculate power with decimal base and exponent', () => {
      expect(calculator.power(2.5, 2)).toBe(6.25);
    });

    test('should calculate power with fractional exponent (square)', () => {
      expect(calculator.power(9, 0.5)).toBe(3);
    });

    test('should calculate power with large exponents correctly', () => {
      expect(calculator.power(2, 10)).toBe(1024);
    });

    test('should calculate power resulting in decimal', () => {
      expect(calculator.power(10, -1)).toBe(0.1);
    });
  });

  // ==================== SQUARE ROOT TESTS ====================
  describe('Square Root (squareRoot)', () => {
    test('should calculate square root of perfect squares correctly', () => {
      expect(calculator.squareRoot(9)).toBe(3);
    });

    test('should calculate square root from image: √16', () => {
      expect(calculator.squareRoot(16)).toBe(4);
    });

    test('should calculate square root of perfect squares', () => {
      expect(calculator.squareRoot(4)).toBe(2);
      expect(calculator.squareRoot(25)).toBe(5);
      expect(calculator.squareRoot(64)).toBe(8);
      expect(calculator.squareRoot(100)).toBe(10);
    });

    test('should calculate square root of zero', () => {
      expect(calculator.squareRoot(0)).toBe(0);
    });

    test('should calculate square root of 1', () => {
      expect(calculator.squareRoot(1)).toBe(1);
    });

    test('should calculate square root of decimal numbers', () => {
      expect(calculator.squareRoot(2.25)).toBe(1.5);
    });

    test('should calculate square root of non-perfect squares', () => {
      expect(calculator.squareRoot(2)).toBeCloseTo(1.4142135623730951);
      expect(calculator.squareRoot(10)).toBeCloseTo(3.1622776601683795);
    });

    test('should calculate square root of very small decimal', () => {
      expect(calculator.squareRoot(0.0001)).toBe(0.01);
    });

    test('should calculate square root of large numbers', () => {
      expect(calculator.squareRoot(1000000)).toBe(1000);
    });

    test('should throw an error when square root of negative number', () => {
      expect(() => calculator.squareRoot(-1)).toThrow('Square root of negative number is not allowed');
    });

    test('should throw an error for any negative number square root', () => {
      expect(() => calculator.squareRoot(-5)).toThrow('Square root of negative number is not allowed');
      expect(() => calculator.squareRoot(-100)).toThrow('Square root of negative number is not allowed');
    });

    test('should throw error type when square root of negative', () => {
      expect(() => calculator.squareRoot(-4)).toThrow(Error);
    });
  });

  // ==================== EDGE CASES ====================
  describe('Edge Cases', () => {
    test('should handle very small decimal numbers', () => {
      expect(calculator.add(0.0001, 0.0002)).toBeCloseTo(0.0003);
    });

    test('should handle very large numbers', () => {
      const largeNum = 999999999999;
      expect(calculator.add(largeNum, 1)).toBe(1000000000000);
    });

    test('should handle negative zero', () => {
      expect(calculator.add(-0, 5)).toBe(5);
    });

    test('should maintain precision in decimal operations', () => {
      expect(calculator.divide(1, 3)).toBeCloseTo(0.3333333333);
    });

    test('should handle division by very small number', () => {
      const result = calculator.divide(1, 0.00001);
      expect(result).toBeCloseTo(100000, 0);
    });
  });

  // ==================== INTEGRATION TESTS WITH ADVANCED OPERATIONS ====================
  describe('Integration Tests with Advanced Operations', () => {
    test('should combine basic and advanced operations correctly', () => {
      let result = calculator.add(10, 5);              // 15
      result = calculator.power(result, 2);            // 225
      result = calculator.modulo(result, 100);         // 25
      result = calculator.squareRoot(result);          // 5
      expect(result).toBe(5);
    });

    test('should handle all operations from extended operations image', () => {
      expect(calculator.modulo(5, 2)).toBe(1);
      expect(calculator.power(2, 3)).toBe(8);
      expect(calculator.squareRoot(16)).toBe(4);
    });

    test('should calculate complex mathematical expressions', () => {
      // (√16 + 2³) * 5 % 10 = (4 + 8) * 5 % 10 = 60 % 10 = 0
      let result = calculator.squareRoot(16);          // 4
      result = calculator.add(result, calculator.power(2, 3)); // 4 + 8 = 12
      result = calculator.multiply(result, 5);         // 12 * 5 = 60
      result = calculator.modulo(result, 10);          // 60 % 10 = 0
      expect(result).toBe(0);
    });

    test('should handle power with square root chaining', () => {
      // (2² * 3) = 12, √(12 * 3) ≈ 6
      let result = calculator.power(2, 2);             // 4
      result = calculator.multiply(result, 3);         // 12
      result = calculator.multiply(result, 3);         // 36
      result = calculator.squareRoot(result);          // 6
      expect(result).toBe(6);
    });
  });
});
