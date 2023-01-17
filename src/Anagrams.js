let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(arr.toLowerCase());
console.log(aclean(arr));

function aclean(arr) {
  let temp = [];
  let map = new Map();
  let i = 0;
  while (i < arr.length) {
    if (map.has(arr[i].toLowerCase().split("").sort().join(""))) {
    } else {
      map.set(arr[i].toLowerCase().split("").sort().join(""), i);
    }
    i += 1;
  }

  return Array.from(map.values());
}
