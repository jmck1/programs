function balanceIndex(arr){
	for (var i=1; i<arr.length-1; i++){
		var sum1 = 0;
		var sum2 = 0;
		var slice = arr.slice(0, i);
		for (var j=0; j<slice.length; j++){
			sum1 += slice[j];
		}
		for (var j=i+1; j<arr.length; j++){
			sum2 += arr[j];
		}
		if (sum1 == sum2){
			return i;
		}
	}
	return -1;
}
console.log(balanceIndex([1,3,2,4]));