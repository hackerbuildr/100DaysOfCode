// Create a function to convert an array of percentages to their decimal equivalents.

//     Examples
// convertToDecimal(["1%", "2%", "3%"]) ➞[0.01, 0.02, 0.03]

// convertToDecimal(["45%", "32%", "97%", "33%"]) ➞[0.45, 0.32, 0.97, 0.33]

// convertToDecimal(["33%", "98.1%", "56.44%", "100%"]) ➞[0.33, 0.981, 0.5644, 1]


function convertToDecimal(perc) {
    // map over array and turn strings into numbers
    // remove % symbol
    // turn a string into a number
    // divide the number by 100
    function convertToDecimal(perc) {
        return perc.map(el => parseFloat(el.substring(0, el.length - 1)) / 100)
    }
    convertToDecimal(["1%", "56.44%", "33%"])