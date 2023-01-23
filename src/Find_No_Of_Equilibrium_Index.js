function findEquilibriumIndex(arr) {
  let map = new Map();
  let sum = 0;
  let out = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    map.set(i, sum)
  }
  console.log(map);
  for (let i = 0; i < arr.length; i++) {
    let left = (i-1<0) ? 0 : map.get(i-1); 
    let right = (i+1>=arr.length) ? 0 : map.get(arr.length-1) - map.get(i);
    if(left===right) out +=1
    
  }
  console.log(out);
}

findEquilibriumIndex([-7, 1, 5, 2, -4, 3, 0]);
findEquilibriumIndex([-3,2,4,-1]);
