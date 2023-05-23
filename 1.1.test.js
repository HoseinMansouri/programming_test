const {
    transformArrayDeclarative,
    transformArrayImperative
  } = require('./1.1');
  
  describe('Transform Array', () => {
    const numbers = [1, 2, 3, 4, 5];
  
    // Declarative Approach
    describe('Declarative Approach', () => {
      test('should square each number in the array', () => {
        const square = jest.fn((number) => number * number);
        const result = transformArrayDeclarative(numbers, square);
  
        expect(result).toEqual([1, 4, 9, 16, 25]);
        expect(square).toHaveBeenCalledTimes(numbers.length);
        expect(square).toHaveBeenCalledWith(numbers[0]);
        expect(square).toHaveBeenCalledWith(numbers[1]);
        expect(square).toHaveBeenCalledWith(numbers[2]);
        expect(square).toHaveBeenCalledWith(numbers[3]);
        expect(square).toHaveBeenCalledWith(numbers[4]);
      });
    });
  
    // Imperative Approach
    describe('Imperative Approach', () => {
      test('should square each number in the array', () => {
        const square = jest.fn((number) => number * number);
        const result = transformArrayImperative(numbers, square);
  
        expect(result).toEqual([1, 4, 9, 16, 25]);
        expect(square).toHaveBeenCalledTimes(numbers.length);
        expect(square).toHaveBeenCalledWith(numbers[0]);
        expect(square).toHaveBeenCalledWith(numbers[1]);
        expect(square).toHaveBeenCalledWith(numbers[2]);
        expect(square).toHaveBeenCalledWith(numbers[3]);
        expect(square).toHaveBeenCalledWith(numbers[4]);
      });
    });
  });
  