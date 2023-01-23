// function maxSumSubarray(arr) {
// let max = arr[0], curr = arr[0];
// for(let i=1; i<arr.length;i++) {
//     curr = curr+arr[i]>arr[i]?(curr+arr[i]):arr[i]
//     max = curr>max?curr:max
// }
// console.log(max)
// return max
// }

//brute force method
function maxSumSubarray(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    
    for (let j = i; j < arr.length; j++) {
        let temp = 0;
      for (let k = i; k <= j; k++) {
        temp += arr[k];
      }
      max = temp > max ? temp : max;
    }
    
  }
  console.log(max);
}

maxSumSubarray([5,4,-1,7,8]);
// maxSumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
