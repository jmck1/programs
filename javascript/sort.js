function selectSort(arr){
	for (var i=0; i<arr.length; i++){
		var b = true;
		for (var j=i+1; j<arr.length; j++){
			if (arr[j] < arr[i]){
				var tmp = arr[i];
				b = false;
				arr[i] = arr[j];
				arr[j] = tmp;
			}
		}
		if (b) {
			break;
		}
	}
}
function insertSort(arr){
	for (var i=1; i<arr.length; i++){
		var move = arr[i];
		for (var j=i-1; j>=0; j--){
			if (move > arr[j]){
				break;
			}
			arr[j+1] = arr[j];
			arr[j] = move;
		}
	}
}
function combine(arr1, arr2){
	var arr = [];
	var ind1 = 0;
	var ind2 = 0;
	while (ind1 + ind2 < arr1.length + arr2.length){
		if (ind1 == arr1.length){
			arr.push(arr2[ind2]);
			ind2++;
		}
		else if (ind2 == arr2.length){
			arr.push(arr1[ind1]);
			ind1++;
		}
		else if (arr1[ind1] < arr2[ind2]){
			arr.push(arr1[ind1]);
			ind1++;
		}
		else {
			arr.push(arr2[ind2]);
			ind2++;
		}
	}
	return arr;
}
function mergeSort(arr){
	if (arr.length <= 1){
		return arr;
	}
	var arr1 = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
	var arr2 = mergeSort(arr.slice(Math.floor(arr.length / 2)));
	return combine(arr1, arr2);
}
var arr = [9,7,5,3,1,2,4,6,5,8];
console.log(arr);
insertSort(arr);
console.log(arr);
console.log(combine([1,2,3], [4,5,6]));
var arr = [9,7,5,3,1,2,4,6,5,8];
console.log(mergeSort(arr));
var foo = [];
console.log(foo ? true : false);
foo = '';
console.log(foo ? true : false);
