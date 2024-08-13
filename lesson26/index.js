
// function whatType(a) {
//   console.log(typeof a)   
// }

// function ageWarn(age) {
//   return age >= 18
// }

function checkTypeNum(num) {
  return typeof num === "number" ? num : 'Its not a number'
}



// console.log(checkTypeNum(5))//5 
// console.log(checkTypeNum('adfgsd'))//'Its not a number'
// console.log(checkTypeNum(true))
// console.log(checkTypeNum(15))//15 
// console.log(checkTypeNum(null))


// function returnOddNums(n) {
//   for (let i = 1; i <= n && i <= 20; i += 2) {
//     if (i % 3 != 0) {
//       console.log(i)
//     }
//   }
// }

// returnOddNums(5)

// let person = {
//   name:'john',
//   age:30,
//   hasDog: false,
//   adress: {
//     street:'central',
//     house:23,
//     subAddress:{
//       subStreet:'Hi'
//     }
//   }
// }

// function getAllKeys(obj) {
//   for (const key in obj) {
//     if (typeof obj[key] == 'object'){
//       for (const subKey in obj[key]) {
//         console.log(subKey)
//       }
//     }
//     console.log(key)
//   }
//   // console.log(Object.keys(obj))
// }

// getAllKeys(person)

const array = [1,4,5,6,2,5,1,3]

console.log(Array.from(new Set(array)))//[1,4,5,6,2,3]