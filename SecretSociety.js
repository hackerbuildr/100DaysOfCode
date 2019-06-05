// A group of friends have decided to start a secret society.The name will be the first letter of each of their names, sorted in alphabetical order.

// Create a function that takes in an array of names and returns the name of the secret society.

//     Examples
// societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"

// societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"

// societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"

function societyName(friends) {
    //iterate over the array 
    //return only first letters of each name
    //sort them in alphabetical order
    //join them into a string
    return friends.map(name => name[0]).sort().join("");

}

societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])