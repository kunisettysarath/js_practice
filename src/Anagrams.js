let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));

function aclean(arr) {
  let map = new Map();
  let i = 0;
  while (i < arr.length) {
    if (!map.has(arr[i].toLowerCase().split("").sort().join(""))) {
      map.set(arr[i].toLowerCase().split("").sort().join(""), i);
    }
    i += 1;
  }

  return Array.from(map.values());
}
