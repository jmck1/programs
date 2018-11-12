function flatten(arr){
	var ret = [];
	for (var i=0; i<arr.length; i++){
		if (typeof(arr[i]) == 'object'){
			var obj = flatten(arr[i]);
			for (var j=0; j<obj.length; j++){
				ret.push(obj[j]);
			}
		}
		else {
			ret.push(arr[i]);
		}
	}
	return ret;
}
console.log(flatten([[1,2,[7,8,[9,10],[11,[12,[13,14]]]],[]],[3,4],[[],5,6]]));
