// Write a function that validates whether two strings are identical. Make this validator case insensitive.

// Examples
// match("hello", "hELLo") ➞ true

// match("motive", "emotive") ➞ false

// match("venom", "VENOM") ➞ true

// match("mask", "mAskinG") ➞ false

function match(s1, s2) {
    return s1.toUpperCase() == s2.toUpperCase()
}
match('BoB', 'boB2');