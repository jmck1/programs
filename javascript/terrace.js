function water_start(arr, begin){
	for (var i=begin; i<arr.length-1; i++){
		if (arr[i] > arr[i+1]){
			return i;
		}
	}
	return -1;
}
function possible_end(arr, begin){
	min = arr[begin + 1];
	for (var i=begin+2; i<arr.length; i++){
		if (arr[i] < min){
			min = arr[i];
		}
		if (arr[i] > min){
			return i;
		}
	}
	return -1;
}
function actual_end(arr, begin, end){
	var left = arr[begin];
	var max = end;
	for (var i=end; i<arr.length; i++){
		if (arr[max] < arr[i]){
			max = i;
		}
		if (left <= arr[i]){
			return i;
		}
	}
	return max;
}
function water(arr, left, right){
	var height = arr[left] < arr[right] ? arr[left] : arr[right];
	var sum = 0;
	for (var i=left+1; i<right; i++){
		var tmp = height - arr[i];
		if (tmp < 0){
			tmp = 0;
		}
		sum += tmp;
	}
	return sum;
}
function rain_terrace(arr){
	if (arr.length < 3) return 0;
	var sum = 0;
	var left = water_start(arr, 0);
	var right = possible_end(arr, left);
	if (arr.length - left < 3) return 0;

	while ((left != -1) && (right != -1)){
		right = actual_end(arr, left, right);
		sum += water(arr, left, right);
		left = water_start(arr, right);
		if (left != -1){
			right = possible_end(arr, left);
		}
	}
	return sum;
}
console.log(rain_terrace([4,3,2,1,2,3,4]));
console.log(rain_terrace([1,2,3,4,4]));
console.log(rain_terrace([3,3,2,1,1]));
console.log(rain_terrace([1,2,3,2,1]));
console.log(rain_terrace([2,1,2,1,2,1]));
console.log(rain_terrace([3,2,3,1,0,3]));
console.log(rain_terrace([2,3,4,3,2,2,3,1,0,5,5,3,2,0,1,0]));
console.log(rain_terrace([2,3,4,3,2,2,3,1,0,5,5,3,2,0,1,0,6,8]));
console.log(rain_terrace([2,3,4,3,2,2,3,1,0,5,5,3,2,0,1,0,1,0]));
