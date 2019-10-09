//JRS Practice Problems
//1
const addNums = () => [5, 6, 7, 8, 9, 10].reduce((x, y) => x + y)
console.log(addNums())
//2
const perim = () => 26
console.log(perim())
//3
const perimGiven = (w, h) => (w * 2) + (h * 2)
console.log(perimGiven(2, 5))
//4
const fToC = f => (f - 32) * (5 / 9)
console.log(fToC(40))
//5
const cToF = c => (c * 1.8) + 32
console.log(cToF(3))
//6
const billAndTip = (b, tp) => (b * (tp / 100)).toFixed(2)
console.log(billAndTip(21, 20))
//7
const addNums2 = num => [...num.toString()].reduce((x, y) => parseInt(x) + parseInt(y))
console.log(addNums2(998))
//8
const addNumsPrompt = () => {
  let p = prompt();
  return [...num.toString()].reduce((x, y) => parseInt(x) + parseInt(y))
}
console.log(addNumsPrompt())
//9
const dayMonthYear = () => `${new Date().getDate() + 1}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
console.log(dayMonthYear());
//10
const myDay = () => `${parseInt((Math.floor((new Date().getDate() + 34) / 31)) * 10)}/${new Date().getMonth() + 2}/${new Date().getFullYear()}`
console.log(myDay());
//11
const mean = arr => arr.reduce((x, y) => x + y) / arr.length
console.log(mean([1, 2, 3]));
//12
const rand = () => {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return months.filter(x => months.indexOf(x) === Math.floor(Math.random() * 11) + 1)
}
console.log(rand());
//13
const order = a => a.sort()
console.log(order([2, 1, 3]));
//14
const palindrome = s => s === [...s].reverse().join('')
console.log(palindrome('3003'));
//15
const isCoerced = (x, y) => x == y && x !== y
console.log(isCoerced(5, '5'));
//16
const isEven = n => n % 2 === 0
//17
const isOdd = n => n % 2 !== 0
//18
const multipleof3 = n => n % 3 === 0
//19
const multiple = (x, y) => x % y === 0
//20
const minimum = n => Math.min(...n)
console.log(minimum([1, 2, 3]));
//21
const largestN = () => {
  let n = 0
  while (n * n < 12000) {
    n = n + 1
  } return n - 1
}
console.log(largestN())
//22
const largestNArgGiven = x => {
  let n = 0
  while (n * n < x) {
    n = n + 1
  } return n - 1
}
console.log(largestNArgGiven(5))
//23
const rev = n => [...n].reverse().join('');
//24
const countOccurances = num => [1,2,2,3,4,5,5].filter(x => x === num).length
console.log(countOccurances(2));
//25
const countOccurances = arr => {
  let count = 0
  let newArr = []
  for (i = 0; i < arr.length; i++) {
    count = arr.filter(x => x === arr[i]).length
    newArr.push([arr[i], count])
  } return newArr.filter((x, y) => arr[y] !== arr[y+1])
}
console.log(countOccurances([1, 2, 2, 2, 2, 3]));
//26
const nonDecreasing = a => {
  for(i=0 ; i < a.length; i++){
    if(a[i] > a[i+1]) return false
  } return true
}
console.log(nonDecreasing([1,2,7,3]));
//27
const increasingOrder = a => {
  let sorted = false
  while(!sorted){
    sorted = true
    for(i = 0; i < a.length; i++){
      if(a[i] > a[i+1]){
        sorted = false
        let tmp = a[i+1]
        a[i+1] = a[i]
        a[i] = tmp
      }
    }
  } return a
}
console.log(increasingOrder([2,1,3,2]));
//28
const sortTwoArrays = (a, b) => {
  a = a.concat(b)
  let sorted = false
  while(!sorted){
    sorted = true
    for(i = 0; i < a.length; i++){
      if(a[i] > a[i+1]){
        sorted = false
        let tmp = a[i+1]
        a[i+1] = a[i]
        a[i] = tmp
      }
    }
  } return a
}
console.log(sortTwoArrays([1,2,3,2,1,0], [3,1,2,6]));
//29
const calculatePi = num => {
  let arr = new Array(num)
  let divider = 1
  let final = 0
  arr = arr.fill(1)
  for(i=0; i< num; i++){
    arr[i] = arr[i] / divider
    divider += 2
  } 
  for(i=0; i < arr.length; i++){
    if(i % 2 === 0) final += arr[i]
    else final -= arr[i]
  } return final * 4
}
console.log(calculatePi(1000))
