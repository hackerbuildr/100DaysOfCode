// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// Examples
// lessThanOrEqualToZero(5) ➞ false

// lessThanOrEqualToZero(0) ➞ true

// lessThanOrEqualToZero(-2) ➞ true

// lessThanOrEqualToZero(1) ➞ false

function lessThanOrEqualToZero(num) {
	if (num < 0 || num === 0) return true
	else return false
}