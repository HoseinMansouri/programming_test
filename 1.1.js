const transformArrayDeclarative = (numbers, transformFn) => {
    return numbers.map(transformFn);
}

const transformArrayImperative = (numbers, transformFn) => {
    const transformedArray = [];

    for (let i = 0; i < numbers.length; i++) {
        const transformedItem = transformFn(numbers[i]);
        transformedArray.push(transformedItem);
    }

    return transformedArray;
}


module.exports = {
    transformArrayDeclarative,
    transformArrayImperative

}

// Manual Test 
const numbers = [1, 2, 3, 4, 5];

function square(number) {
  return number * number;
}

const declarativeResult = transformArrayDeclarative(numbers, square);
console.log('Declarative Result:', declarativeResult);

const imperativeResult = transformArrayImperative(numbers, square);
console.log('Imperative Result:', imperativeResult);