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