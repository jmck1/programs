var f1 = function(x, y){
	var sum = 0;
	for (var i=x; i<=y; i++){
		sum += i;
	}
	return sum;
}
var f2 = function(arr){
	min = arr[0];
	for (var i=1; i<arr.length; i++){
		if (arr[i] < min){
			min = arr[i];
		}
	}
	return min;
}
var f3 = function(arr){
	var sum = 0;
	for (var i=0; i<arr.length; i++){
		sum += arr[i];
	}
	return sum / arr.length;
}
var obj = {f1:f1, f2:f2, f3:f3};
var arr = [1,2,3,4];
console.log(obj.f1(3,5), obj.f2(arr), obj.f3(arr));