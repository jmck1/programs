var _ = {
	map: function(arr, callback){
		var ret = [];
		for (var i=0; i<arr.length; i++){
			ret.push(callback(arr[i]));
		}
		return ret;
	},
	reduce: function(arr, callback, memo){
		if (arguments.length == 2){
			memo = arr[0];
			arr = arr.slice(1);
		}
		for (var i=0; i<arr.length; i++){
			memo = callback(memo, arr[i]);
		}
		return memo;
	},
	find: function(arr, callback){
		for (var i=0; i<arr.length; i++){
			if (callback(arr[i])){
				return arr[i];
			}
		}
		return undefined;
	},
	filter: function(arr, callback){
		var ret = [];
		for (var i=0; i<arr.length; i++){
			if (callback(arr[i])){
				ret.push(arr[i]);
			}
		}
		return ret;
	},
	reject: function(arr, callback){
		var ret = [];
		for (var i=0; i<arr.length; i++){
			if (!callback(arr[i])){
				ret.push(arr[i]);
			}
		}
		return ret;
	}
}
console.log(_.reduce([1, 2, 3, 4], function(memo, num){ return memo * num;}));
console.log(_.reduce([1, 2, 3, 4], function(memo, num){ return memo * num;}, 2));
console.log(_.map([1, 2, 3, 4], function(num){ return num * num;}))



