const _array = [4, [[5], [6, [7], 8], 9, 10]];
const flattenArray = () => {
    const flattenedArray = [];

    function flattenHelper(array) {
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                flattenHelper(array[i]);
            } else {
                flattenedArray.push(array[i]);
            }
        }
    }

    flattenHelper(_array);

    return flattenedArray;
}

module.exports = {
    flattenArray
}

// Manual Test
const nestedArray = [4,[[5],[6,[7],8],9,10]];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray)