function stairs(val){
	var ret = [];
	var arr = [];
	function recur1(val){
		if (val > 1){
			arr.push(2);
			recur1(val - 2);
		}
		if (val == 1){
			arr.splice(0, 0, 1);
			if (arr.length > 1){
			}
		}
	}
	function recur2(arr){
		if (arr[0] == 2){
			var tmp = ret[ret.length - 1].slice();
			tmp.splice(tmp.length - arr.length, 1, 1, 1);
			ret.push(tmp);
		}
		if (arr.length > 1){
			recur2(arr.slice(1));
		}
	}
	function recur3(arr){
		
	}
	if (val < 1){
		return ret;
	}
	recur1(val);
	ret.push(arr);
	recur2(arr);
	return ret;
}
console.log(stairs(1));
console.log(stairs(2));
console.log(stairs(3));
console.log(stairs(4));
console.log(stairs(5));
console.log(stairs(6));
console.log(stairs(12));