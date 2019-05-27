// Create a function that returns the number of hashes and pluses in a string.

// Examples
// hashPlusCount("###+") ➞ [3, 1]

// hashPlusCount("##+++#") ➞ [3, 3]

// hashPlusCount("#+++#+#++#") ➞ [4, 6]

// hashPlusCount("") ➞ [0, 0]

//Option1:
function hashPlusCount(str) {
    let obj1 = { hash: 0, plus: 0 };
    for (const i in str.split('')) {
        if (str[i] === "#") { obj1.hash++ }
        else { obj1.plus++ }
    }
    return [obj1.hash, obj1.plus]
}
//Option2
const hashPlusCount = str => [
    (str.match(/#/g) || []).length,
    (str.match(/\+/g) || []).length,
];
hashPlusCount('##+')