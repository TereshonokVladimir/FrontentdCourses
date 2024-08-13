const array = [1,5,45,864,12]

function maxValue(arr) {
  return arr
    .sort((a, b) => a - b)
    .map(item => item * 2)
    .filter(item => item >= 50)
}

console.log(maxValue(array))