function containerWithMoreWater(arr) {
console.log(arr);
let start = 1; 
let end = arr.length;
let max_area = 0
for(let i=0; i< arr.length; i++) {
    let temp = Math.min(arr[start-1],arr[end-1]) * (end - start)
    console.log(temp);
    max_area = (temp > max_area) ? temp : max_area;
     if(arr[start-1] > arr[end-1]) end-=1 
     else start+=1
     if(start===end) break;
}
console.log(max_area);
return max_area

}



// containerWithMoreWater([1,8,6,2,5,4,8,3,7])
containerWithMoreWater([2,3,4,5,18,17,6])