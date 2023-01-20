//brute force method not working for large array size
// var subarraysDivByK = function (nums, k) {
//   let out = [];
//   for (let i = 0; i < nums.length; i++) {
//     let count = 0;
//     for (let j = i; j < nums.length; j++) {
//       count += nums[j];
//       if (count % k == 0) {
//         out.push(nums.slice(i, j + 1));
//       }
//     }
//   }
//   console.log(out.length);
//  return out;
// };

function subarraysDivByK(num, k) {
  let map = new Map();
  let sum = 0,
    res = 0;
  map.set(0, 1);
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
    let rem = (sum % k + k) % k; // adding and mod with k to avoid negative reminders
    if (map.has(rem)) {
      res += map.get(rem);
      map.set(rem, map.get(rem) + 1);
    } else map.set(rem, 1);
  }
  console.log(res);
  return res;
}

subarraysDivByK([-1, 2, 9], 2);
