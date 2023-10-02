//Arrays 
// KATA 1 7kyu
// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript
const sortByLength= array => {
  return array.sort((a,b) => a.length - b.length)
}

console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));

// KATA 2 8kyu
// https://www.codewars.com/kata/573f5c61e7752709df0005d2/train/javascript
//[1, 3, 5], [2, 4, 6]
const mergeArrays = (a,b) => [...new Set([...a, ...b])].sort((a,b) => a - b);

 console.log(mergeArrays([1, 3, 5], [2, 4, 6]));


// KATA 3 7kyu
// https://www.codewars.com/kata/5a5915b8d39ec5aa18000030/train/javascript
const findMissing = (arr1, arr2) => {
  arr1.sort()
  arr2.sort()
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return arr1[i]
    }
  }
}

console.log(findMissing([1, 2, 3], [1, 3])); 
console.log(findMissing(['a', 'b', 'c'], ['a', 'b'])); 

// KATA 4 8kyu
// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
const squareSum = numArr => numArr.map(num => num**2).reduce((ttl,cv) => ttl + cv, 0);

console.log(squareSum([1,2]));
console.log(squareSum([0, 3, 4, 5]));

// KATA 5 7kyu
// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript
const firstNonConsecutive = arr => {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i]
    let prev = arr[i -1]

    if (curr - prev > 1) {
      return curr;
    }
  }
  return null;
}

console.log(firstNonConsecutive([1,2,3,4,6,7,8]));

