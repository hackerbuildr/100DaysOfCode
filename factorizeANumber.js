// Create a function that takes a number as its argument and returns an array of all its factors.

// factorize(12) ➞ [1, 2, 3, 4, 6, 12]

// factorize(4) ➞ [1, 2, 4]

// factorize(17) ➞ [1, 17]
// Notes
// The input integer will be positive.
// A factor is a number that evenly divides into another number without leaving a remainder. The second example is a factor of 12, because 12 / 2 = 6, with remainder 0.

// Option1:
// function factorize(num) {
//     // make an array from 1 to num
//     // map over it and create a new array with each num % num in array === 0
//     var factorsArr = [];
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             factorsArr.push(i)
//         }
//     }
//     return console.log(factorsArr);
// }

//Option2:
function factorize(num) {
    console.log(new Array(num)
        .fill()
        .map((x, i) => i + 1)
        .filter(n => num % n === 0)
    );

}

factorize(12) 
