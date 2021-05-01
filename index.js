// Add your functions here
// const map = (arr, fn) => {
//   return arr.map((n) => fn(n));
// };

const map = (arr,fn) => {
  let newArr = []
  arr.forEach(n => {
    newArr.push(fn(n))
  })
  return newArr
}
// const reduce = (arr, fn, startingPoint=0) => {
//   return arr.reduce((acc, currentValue) => {
//     return fn(acc, currentValue);
//   }, startingPoint);
// };

const reduce = (arr, fn, startingPoint=0) => {
  let acc = startingPoint
  for(const val of arr){
    acc = fn(acc, val)
  }
  return acc
}
