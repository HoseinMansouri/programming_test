const { flattenArray } = require('./1.3');

describe('Flatten Array', () => {
  test('should flatten the nested array into a flattened array', () => {
    const nestedArray = [4, [[5], [6, [7], 8], 9, 10]];
    const flattenedArray = flattenArray(nestedArray);

    expect(flattenedArray).toEqual([4, 5, 6, 7, 8, 9, 10]);
  });
});
