// for (let i = 0; i < 3; i++) {
//   console.log( `number ${i}!` )
// }

// let i = 0
// while (i<3){
//   console.log( `number ${i}!` )
//   i++
// }
let n = 50;

nextPrime:
for (let i = 2; i <= n; i++) { //2345678910
  for (let j = 2; j < i; j++) { //i=6 ,j =2
    if (i % j == 0) continue nextPrime; 
  }
  console.log( i ); // простое число
}