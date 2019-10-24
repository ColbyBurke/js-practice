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
  return [...p.toString()].reduce((x, y) => parseInt(x) + parseInt(y))
}
console.log(addNumsPrompt())
//8
const secondsToYears = s => s / 31536000
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
const countOccurances = num => [1, 2, 2, 3, 4, 5, 5].filter(x => x === num).length
console.log(countOccurances(2));
//25
const countOccurances2 = arr => {
  arr.sort((x, y) => x - y)
  let count = 0
  let newArr = []
  for (i = 0; i < arr.length; i++) {
    count = arr.filter(x => x === arr[i]).length
    newArr.push([arr[i], count])
  } return newArr.filter((x, y) => arr[y] !== arr[y + 1])
}
console.log(countOccurances2([1, 2, 2, 2, 2, 3, 2]))

//26
const nonDecreasing = a => {
  for (i = 0; i < a.length; i++) {
    if (a[i] > a[i + 1]) return false
  } return true
}
console.log(nonDecreasing([1, 2, 7, 3]))
//27
const increasingOrder = a => {
  let sorted = false
  while (!sorted) {
    sorted = true
    for (i = 0; i < a.length; i++) {
      if (a[i] > a[i + 1]) {
        sorted = false
        let tmp = a[i + 1]
        a[i + 1] = a[i]
        a[i] = tmp
      }
    }
  } return a
}
console.log(increasingOrder([2, 1, 3, 2]));
//28
const sortTwoArrays = (a, b) => {
  a = a.concat(b)
  let sorted = false
  while (!sorted) {
    sorted = true
    for (i = 0; i < a.length; i++) {
      if (a[i] > a[i + 1]) {
        sorted = false
        let tmp = a[i + 1]
        a[i + 1] = a[i]
        a[i] = tmp
      }
    }
  } return a
}
console.log(sortTwoArrays([1, 2, 3, 2, 1, 0], [3, 1, 2, 6]));
//29
const calculatePi = num => {
  let arr = new Array(num)
  let divider = 1
  let final = 0
  arr = arr.fill(1)
  for (i = 0; i < num; i++) {
    arr[i] = arr[i] / divider
    divider += 2
  }
  for (i = 0; i < arr.length; i++) {
    if (i % 2 === 0) final += arr[i]
    else final -= arr[i]
  } return final * 4
}
console.log(calculatePi(1000))

//high-order functions exercises
const double = a => a.map(x => x * 2)
console.log(double([1, 2, 3]))

//create and object in which you can push and pop
//num isnt necessary, instead could use length key-value pair
let num = 0
let obj = new Object()
obj['length'] = Object.keys(obj).length
obj["push"] = function (n) {
  obj[num] = n
  num += 1
  obj.length += 1
}
obj["pop"] = function () {
  delete obj[num - 1]
  num -= 1
  obj.length -= 1
}
obj.push('zero')
obj.push('one')
obj.pop()
obj.push('one')
console.log(obj);

//create own versions of .map() .filter() and .forEach()
const myMap = (arr, action) => {
  for (i = 0; i < arr.length; i++) {
    arr[i] = action(arr[i])
  } return arr
}
const myFilter = (arr, action) => {
  let newArr = []
  for (i = 0; i < arr.length; i++) {
    if (action(arr[i])) newArr.push(arr[i])
  } return newArr
}
const myForEach = (arr, action) => {
  for (i = 0; i < arr.length; i++) {
    arr[i] = action(arr[i])
  }
}
function filt(x) {
  return x > 2
}
console.log(myFilter([1, 2, 2, 3, 4], filt))

//fibonacci recursive function
const fibonacci = n => {
  if (n <= 1) return 1
  else {
    console.log('num' + ' = ' + n);
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}
console.log(fibonacci(5));

//factorial iterative function
function factorial(n) {
  let count = 1
  for (i = 1; i <= n; i++) {
    count *= i
  } return count
}
console.log(factorial(5));

//Recursion practice problems
//1
const factorialRecursive = n => {
  if (n === 1) {
    return 1
  }
  else {
    console.log(n + ' ' + (n - 1));
    return n * factorialRecursive(n - 1)
  }
}
console.log(factorialRecursive(4));
//2
const gcd = (x, y) => !y ? x : gcd(y, x % y)
console.log(gcd(36, 18));
//3
const range = (x, y) => {
  if (y - x === 2) {
    console.log(`${y} is y ${x} is x`)
    return [x + 1]
  } else {
    let arr = range(x, y - 1)
    console.log(arr + ' arr assignment')
    arr.push(y - 1)
    console.log(arr + ' arr after push')
    return arr
  }
}
console.log(range(2, 8));
//4
const sumAll = arr => {
  if (arr.length === 1) {
    return arr[0]
  } else {
    return arr[0] + sumAll(arr.slice(1, arr.length))
  }
}
console.log(sumAll([22, 22]))
//5
const power = (base, exp) => {
  if (exp === 1) {
    return base
  } else {
    return base * power(base, exp - 1)
  }
}
console.log(power(8, 2));
//6
const fibonacci = n => n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
console.log(fibonacci(3));
//7
const isEvenRecursive = n => {
  if (n === 0) return true
  else if (Math.abs(n) === 1) return false
  else return isEvenRecursive(n - 2)
}
console.log(isEvenRecursive(2));
//8
var final = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const binarySearch = (num, arr) => {
  let newArr = arr
  //middle is an index not a value
  let middle = Math.floor(newArr.length / 2)
  if (num === newArr[middle]) {
    console.log('answer');
    return final.indexOf(newArr[middle])
  } else if (newArr[middle] > num) {
    console.log('greater than');
    newArr = newArr.slice(0, middle)
    return binarySearch(num, newArr)
  } else {
    console.log('less than');
    newArr = newArr.slice(middle + 1, arr.length)
    return binarySearch(num, newArr)
  }
}
console.log(binarySearch(8, final))
//9
const final = [1, 5, 2, 4]
const middle1 = Math.floor(final.length / 2)
let left1 = final.slice(0, middle1)
let right1 = final.slice(middle1)
let newArr = []
const mergeSort = (left, right) => {
  let leftIndex = 0
  let rightIndex = 0
  if (right.length === 0) {
    newArr.push(left[0])
    return newArr
  } else if (left.length === 0) {
    newArr.push(right[0])
    return newArr
  } else if (left[leftIndex] < right[rightIndex]) {
    newArr.push(left[leftIndex])
    leftIndex++
    return mergeSort(left.slice(1), right)
  } else if (left[leftIndex] > right[rightIndex]) {
    newArr.push(right[rightIndex])
    rightIndex++
    return mergeSort(left, right.slice(1))
  }
}
console.log(mergeSort(left1, right1));

//writing a reduce function
const myReduce = (arr, func) => {
  let total = 0
  for (i = 0; i < arr.length; i++) {
    total = func(total, arr[i])
  }
  return total
}
const add = (acc, el) => {
  return acc + el
}
const max = (acc, el) => {
  return Math.max(acc, el)
}
console.log(myReduce([1, 2, 3], add));

//Map problems
//1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 99, -2]
const converter = require('number-to-words')
console.log(numbers.map((x, y) => converter.toWords(numbers[y])))
//2
const addTen = arr => arr.map(x => x + 10)
console.log(addTen([1, 2, 3]));
//3
const h = require('hyperscript')
const buzzwords = require('buzzwords')
const li = (w) => {
  let words = w.map(x => h('li', x))
  return words
}
console.log(h('ul', li(buzzwords)).outerHTML)
//4
const convert = require('color-convert')
const cssColorList = require('css-color-list')
console.log(cssColorList().map(x => convert.keyword.rgb(x)))
//5
const h = require('hyperscript')
const request = require('request')
const search = (query, callback) => {
  request({
    method: 'GET',
    json: true,
    url: 'http://www.omdbapi.com/?r=json&s=' + query
  }, (e, r, b) => callback(e, b))
}
const img = (url) => h('img', { src: url })
console.log(img(request.url));

search('batman', (e, b) => {
  // map over results and show movie posters

})

//Filter problems
//1
const showEvenFilter = arr => arr.filter(x => x % 2 === 0)
console.log(showEvenFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//2
const showDivisibleBy5 = arr => arr.filter(x => x % 5 === 0)
//3
const h = require('hyperscript')
const buzzwords = require('buzzwords')
const li = (w) => h('li', w)
console.log(Object.entries(h('ul', buzzwords)).filter(x => x.includes('childNodes')))

//Reduce problems
//1
const addReduce = arr => arr.reduce((x, y) => x + y)
//2
const countTrueReduce = arr => arr.reduce((x, y) => !y ? x : x + 1, 0)
console.log(countTrueReduce([false, true, false, true, true]));
//3
const addToObjReduce = arr => {
  let obj = {}
  arr.forEach(x => x.reduce((x, y) => {
    obj[x] = y
  }))
  return obj
}
console.log(addToObjReduce([['name', 'Larry'], ['type', 'person'], ['address', '123 Main Street']]));
//4
const concatReduce = (...args) => args.reduce((x, y) => x.concat(y))
console.log(concatReduce([1, 2, 3], [4, 5, 6], [7, 8, 9]));
//5
function filter(fn, list) {
  let newArr = []
  list.reduce((x, y) => {
    if (fn(x)) newArr.push(x)
    if (fn(y)) newArr.push(y)
  })
  return newArr
}
console.log(filter(v => v % 2 === 0, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
//6
function reject(fn, list) {
  let newArr = []
  if (!fn(list[0])) newArr.push(list[0])
  list.reduce((x, y, z) => {
    if (!fn(list[z])) newArr.push(list[z])
  })
  return newArr
}
// reject even numbers
console.log(reject(v => v % 2 === 0, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
//7
function find(fn, list) {
  let index = 0
  list.reduce((x, y) => {
    if (fn(y)) {
      index = x
    } else return x + 1
  }, 0)
  return index
}
console.log(find(v => v === 'Curly', ['Larry', 'Curly', 'Moe', 'Waldo', 'Jim', 'Harry']))

//callback canyon practice problems
//equals
const myEquals = (x, y) => x === y
//add
const myAdd = (x, y) => x + y
//subtract 
const mySub = (x, y) => x - y
//multiply
const myMultiply = (x, y) => x * y
//divide
const myDivide = (x, y) => x / y
//prop
const obj1 = { 'name': 'joe' }
const myProp = (x, y) => y[x]
console.log(myProp('name', obj1));
//path
const myPath = (arr, obj) => {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== null) return obj[arr[i]]
  }
}
console.log(myPath(['name'], obj1));
//inc
const myInc = num => myAdd(num, 1)
//dec
const myDec = num => mySub(num, 1)
//identity
const myIdentity = val => val
//always
const myAlways = val => () => val
//gt
const myGt = (arr, i) => {
  let newArr = []
  arr.forEach(x => {
    if (arr.indexOf(x) > i) newArr.push(x)
  })
  return newArr
}
console.log(myGt([1, 2, 3, 4], 1));
//lt
const myLt = (arr, i) => {
  let newArr = []
  arr.forEach(x => {
    if (arr.indexOf(x) < i) newArr.push(x)
  })
  return newArr
}
console.log(myLt([1, 2, 3, 4], 1));
//gte
const myGte = (arr, i) => {
  let newArr = []
  arr.forEach(x => {
    if (arr.indexOf(x) >= i) newArr.push(x)
  })
  return newArr
}
console.log(myGte([1, 2, 3, 4], 1));
//lte
const myLte = (arr, i) => {
  let newArr = []
  arr.forEach(x => {
    if (arr.indexOf(x) <= i) newArr.push(x)
  })
  return newArr
}
console.log(myLte([1, 2, 3, 4], 1));
//slice
const mySlice = (arr, start, end) => {
  let newArr = []
  for (i = 0; i < arr.length; i++) {
    if (i >= start && i < end - 1) newArr.push(arr[i])
  }
  return newArr
}
console.log(mySlice([1, 2, 3, 4], 0, 3));
//split
const mySplit = (str, el) => {
  let strArr = ['']
  let j = 0
  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) == el) {
      j++;
      strArr.push('');
    } else {
      strArr[j] += str.charAt(i);
    }
  }
  return strArr
}
console.log(mySplit('aabcdef', 'b'));

//join
const myJoin = (arr, seperator) => {
  let newArr = []
  let str = ''
  for (i = 0; i < arr.length; i++) {
    str += (arr[i])
    if (arr[i] !== arr.length) str += (seperator)
  }
  return str
}
console.log(myJoin([1, 2, 3], '+'));
//head
const myHead = arr => arr[0]
//tail
const myTail = arr => arr.slice(1)
console.log(myTail([1, 2, 3]));
//nth
const myNth = (arr, n) => arr[n]
//indexOf
const myIndexOf = (arr, x) => {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === x) return i
  }
}
//isNil
const myIsNil = n => n === undefined || n === null
//last
const myLast = arr => arr[arr.length - 1]
//match
const myMatch = (str, ...inp) => {
  let newArr = []
  for (i = 0; i < inp.length; i++) {
    if (str.includes(inp[i])) newArr.push(inp[i])
  } return newArr
}
console.log(myMatch('hello', 'o', 'h', 'he'));
//memoize
const addNow = (x, y) => x + y
var obj = {}
let subObj = {}
const myMemoize = (arg, ...x) => {
  let combinedArgs = [...x].join(',')
  let result = arg(...x)
  const memo = (result, x) => {
    subObj[combinedArgs] = result
    return subObj
  }
  obj[arg.name] = memo(result, ...x)
  return JSON.stringify(obj);
}
myMemoize(addNow, 1, 2)
myMemoize(addNow, 2, 2)
console.log(obj);
//not 
const myNot = (arr, not) => arr.filter(x => !x.toString().includes(not))
console.log(myNot([1, 2, 3], 2));
// pathOr
//propOr
//pathEq
//propEq
//pick
const obj = { 'a': 5, 'b': 6, 'c': 7 };
const myPick = (...x) => {
  let newObj = {}
  x.forEach(x => newObj[x] = obj[x])
  return newObj
}
console.log(pick('a', 'c'));
//pluck
const obj = [{ 'a': 5, 'b': 6, 'c': 7 }, { 'a': 3 }];
const myPluck = (list, prop) => list.map(x => x[prop])
console.log(pluck(obj, 'a'));
//sort
const mySort = (arr, func) => {
  return func(arr)
}
const ascend = a => {
  let sorted = false
  while (!sorted) {
    sorted = true
    for (i = 0; i < a.length; i++) {
      if (a[i] > a[i + 1]) {
        sorted = false
        let tmp = a[i + 1]
        a[i + 1] = a[i]
        a[i] = tmp
      }
    }
  } return a
}
console.log(mySort([1, 3, 2, 4], ascend));
//sortBy
const mySortBy = (arr, func) => {
  arr = arr.sort((x, y) => x - y)
  return func(arr)
}
//toUpper
const myToUpper = (str, index) => {
  return [...str].map(x => str.indexOf(x) === index ? x.toUpperCase() : x).join('')
}
console.log(myToUpper('abc', 2));
//toLower
const myToLower = (str, index) => {
  return [...str].map(x => str.indexOf(x) === index ? x.toLowerCase() : x).join('')
}
console.log(myToLower('abC', 2));
//capitalize
const myCapitalize = str => str.toUpperCase()
//take
const myTake = (arr, n) => arr.slice(0, n + 1)
//uniq
const myUniq = arr => [...new Set(arr)]
//frompairs
const myFromPairs = arr => {
  let obj = {}
  arr.forEach(x => obj[x[0]] = x[1])
  return obj
}
console.log(myFromPairs([['a', 1], ['b', 2]]))
//topairs
const myToPairs = obj => {
  let keyArr = [...Object.keys(obj)]
  let arr = []
  keyArr.forEach(x => arr[keyArr.indexOf(x)] = [x, obj[x]])
  return arr
}
console.log(myToPairs({ a: 1, b: 2 }));
//zip
const myZip = (...args) => {
  let arrs = [...args]
  let final = []
  for(i = 0; i < arrs.length; i++){
    final.push(arrs[i].map((x,y) => arrs[y][i]))
  }
  return final
}
console.log(myZip(['a', 'b', 'c'],
  ['1', '2', '3'],
  ['x', 'y', 'z']));
//union
const myUnion = (a, b) => [...new Set([...a, ...b])]
console.log(myUnion([1,2,3], [2,4]));
//intersection
const myIntersection = (a, b) => a.filter(value => -1 !== b.indexOf(value))
console.log(myIntersection([1,2,3], [2]));
//test
const myTest = (str, val) => str.includes(val)
console.log(myTest('hello', 'o'));
//replace
const myReplace = (str, x, y) => {
  let arr = [...str]
  for(i = 0; i < arr.length; i++){
    if(arr[i] === x) arr[i] = y
  }
  return arr.join('')
}
console.log(myReplace('hello', 'l', '1'));
//range 
const myRange = (arr, start, end) => arr.slice(start, end + 1)
//omit
const myOmit = (arr, start, end) => {
  let left = arr.slice(0, start)
  let right = arr.slice(end)
  return left.concat(right)
}
console.log(myOmit([1,2,3,4], 2, 3));
//where
const myWhere = (arr, func1, func2) => {
  let newArr = arr 
  return newArr.map(x => {
    if(func1(x)) return func2(x)
    else return x
  })
} 
console.log(myWhere([1,2,3,4,5], (x) => x > 2, (x) => x * 10));
//T
const myT = func => func
//F
const myF = func => func
//comparator
const myComparator = (x, y) => {
  if(x < y) return x - y
  else if(x > y) return y - x
  else return 0
}




function sayHello() {
  console.log('hello');
}
setTimeout(sayHello(), 1000)
console.log('me first');

//promises 
function display(data){
  console.log(data);
}
let futureData = fetch('')
futureData.then(display)
console.log('me first');














