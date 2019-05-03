// Create a function that accepts an array and returns the last item in the array.

//     Examples
// getLastItem([1, 2, 3]) ➞ 3

// getLastItem(["cat", "dog", "duck"]) ➞ "duck"

// getLastItem([true, false, true]) ➞ true

function getLastItem(arr) {
    return arr[arr.length - 1]
}

Option2
function getLastItem(arr) {
    return arr.pop();
}
getLastItem(["cat", "dog", "duck"])