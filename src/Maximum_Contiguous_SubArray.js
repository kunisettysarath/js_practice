function maxContiguousSubArraySum(arr, k) {
    let s = 0, e = 0, max = Number.MIN_VALUE, temp = 0;
    for(let i = 0; i<arr.length; i++) {
        temp += arr[i]
        if(i >= k-1) {
            max = Math.max(max, temp)
            temp -= arr[i - (k-1)]
        }
    }
console.log(max);
return max;
}

maxContiguousSubArraySum([4,2,1,7,8,1,2,8,1,0], 3)