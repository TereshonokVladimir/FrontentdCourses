const numbers = [12,1,34,57,2,46,13]

function oddNumbers(n) {
  
  for(let i=0;i<=n;i+=2){
    if(i == 0) continue
    console.log(i)
  }
}

function oddNumbersInArray(arr) {
  const array = []
  arr.filter((num)=>{if(num%2==0) array.push(num)})
return array
}
// slice splice split join concat filter map sort forEach reduce reverse
// oddNumbers(10)// 2 4 6 8 10
// oddNumbers(6)// 2 4 6
console.log(oddNumbersInArray(numbers))// 12,34,57,2,46