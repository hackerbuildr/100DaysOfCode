function findNumber(arr, k) {
    var found = arr.find(item => item === k)
    found ? console.log("YES") : console.log("NO");

}

findNumber([2, 3, 4, 5], 0)

