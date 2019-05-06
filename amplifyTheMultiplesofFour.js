// Create a function that takes an integer and returns an array from 1 to the given number, where:

// If the number can be divided evenly by 4, amplify it by 10 (i.e. return 10 times the number).
// If the number cannot be divided evenly by 4, simply return the number.
// Examples
// amplify(4) ➞ [1, 2, 3, 40]

// amplify(3) ➞ [1, 2, 3]

// amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
// Notes
// The given integer will always be equal to or greater than 1.
// Include the number (see example above).

//Option1:
// function amplify(num) {
//     let amplified = []
//     let newArr = [...Array(num + 1).keys()].slice(1);

//     newArr.map(el => {
//         el % 4 === 0 ? amplified.push(el * 10)
//             : amplified.push(el)
//     })
//     return amplified;

// }

//Option2:
// function amplify(num) {
// 	var a = [];
// 	for(var i = 1; i <= num; i++){
// 		if(i % 4 == 0){
// 			a.push(i*10);
// 		}else{
// 			a.push(i);
// 		}
// 	}
// 	return a;
// }

//Option3
function amplify(num) {
    console.log(Array(num)
        .fill(1)
        .map((v, i) => v + i)
        .map(v => v % 4 == 0 ? v * 10 : v)
    );

}
amplify(4)