function expand(str){
	var arr = [];
	function rexpand(str){
		for (var i=0; i<str.length; i++){
			if (str[i] == '?'){
				str = str.substring(0,i) + '0' + str.substring(i + 1);
				rexpand(str);
				str = str.substring(0,i) + '1' + str.substring(i + 1);
			}
		}
		arr.push(str);
	}
	rexpand(str);
	return arr;
}
console.log(expand('1'));
console.log(expand('?'));
console.log(expand('??'));
console.log(expand('?1'));
console.log(expand('111'));
console.log(expand('1?1'));
console.log(expand('?11'));
console.log(expand('11?'));
console.log(expand('?1?'));
console.log(expand('1??'));
console.log(expand('??1'));
console.log(expand('???'));
console.log(expand('????'));
console.log(expand('????????1111'));