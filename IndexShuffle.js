// Create a function takes all even - indexed characters and odd - indexed characters from a string and concatenates them together.

// To illustrate:
// indexShuffle("abcd") ➞ "acbd"
// // "ac" (even-indexed) + "bd" (odd-indexed)
// Examples
// indexShuffle("abcdefg") ➞ "acegbdf"
// indexShuffle("holiday") ➞ "hldyoia"
// indexShuffle("maybe") ➞ "myeab"

//Option1
function indexShuffle(str) {
    // make 2 empty strings (one for odd and one for even-indexed letters)
    //use filter method to filter out eve and odd-indexed letters
    //add appropriate letters to a string of choice
    //concat two strings together

    let str1 = "";
    let str2 = "";
    [...str].filter((el, i) => i % 2 === 0 ? str1 += el : str2 += el)

    console.log(`${str1}${str2}`);
}

//Option2
function indexShuffle(str) {
    let evens = [...str].filter((ch, i) => i % 2 === 0);
    let odds = [...str].filter((ch, i) => i % 2 === 1);
    return [...evens, ...odds].join('')
}

indexShuffle("it was a beautiful day")