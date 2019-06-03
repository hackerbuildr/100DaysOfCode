// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Examples
// minMax([1, 2, 3, 4, 5]) ➞[1, 5]

// minMax([2334454, 5]) ➞[5, 2334454]

// minMax([1]) ➞[1, 1]

function minMax(arr) {
    let newArr = arr.sort((a, b) => a - b);
    return [newArr[0], newArr[newArr.length - 1]]
}


// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]