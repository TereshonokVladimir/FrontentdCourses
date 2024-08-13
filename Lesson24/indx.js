function sumTo(n) {
  // let sum = 0
  // for (let i = 0; i <= n; i++) {
  //   sum += i
  // }
  // return sum
  if (n == 1){
    return n
  } else {
   return n * sumTo(n - 1)
  }
}


// console.log(sumTo(4))// sumTo(4) > 4 + sumTo(3) > 3 + sumTo(2) > 2 + sumTo(1) > 1 = 4+3+2+1

let name = "John";

const sayHi = () => {
  console.log("Hi, " + name);

}
name = "Pete";

sayHi()

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

console.log( counter2() ); // ?
console.log( counter2() );