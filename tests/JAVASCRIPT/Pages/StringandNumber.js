var s = "JayaPriya Arun"

//charAt() - method is used to get the character at a specific index in a string.
// console.log(s.charAt(6))

//concat() - method is used to join (combine) two or more strings
// console.log(s.concat(" Arun"))

//replace() - method is used to replace part of a string with another string. does not change the original string.
// console.log(s.replace("JayaPriya","Arun"))
// console.log(s)

//substring() - method is used to extract a part of a string. check in note for detials
// console.log(s.substring(0,4))

//toLowerCase & toUpperCase
// console.log(s.toLowerCase())//convert all to lowecase letter
// console.log(s.toUpperCase())//convert to uppercase letter

//split() -used to split a string into an array. It does not change the original string.
let l = s.split(' ')//[ 'JayaPriya', 'Arun' ]
console.log(l[0])
console.log(l)

//trim() - method is used to remove whitespace from the beginning and end of a string.
// let value = "       Heloo!!  "
// console.log(value.trim())

// Using Number as main method
// let x,y,z
// x = 58
// y = 78.22
// z = "arun"
//isInteger()-is used to check whether a value is an integer
// console.log(Number.isInteger(x)) //True
// console.log(Number.isInteger(y)) //False
// console.log(Number.isInteger(z)) //False

//parseInt()-used to convert a value into an integer means the type willbe change if z ="arun" it is a string if we use parseInt the string will be change as number 
// console.log(typeof(parseInt(z)))

//toString()-is used to convert a value into a string.
// console.log(typeof(Number.toString(x)))