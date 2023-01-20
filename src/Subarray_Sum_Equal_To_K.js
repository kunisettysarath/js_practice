function subarraysSumK(num, k) {
  let map = new Map();
  let sum = 0,
    count = 0;

  map.set(0, 1);
  for (let n of num) {
    sum += n;
    let temp = sum - k;
    if (map.has(temp)) {
      count += map.get(temp);
      map.set(sum, map.get(sum) ? map.get(sum) : 0 + 1);
    } else map.set(sum, 1);
  }

  return count;
}

// console.log(subarraysDivByK([3, 4, 7, 2, -3, 1, 4, 2], 7));
console.log(subarraysSumK([1,-1,0], 0));

