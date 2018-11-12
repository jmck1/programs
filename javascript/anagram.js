function anagram(str){
	var ret = [];
	function rana(str){
		for (var i=0; i<str.length; i++){
			var substring = str.substr(0, i) + str.substr(i + 1);
			var arr = anagram(substring);
			for (var j=0; j<arr.length; j++){
				ret.push(str[i] + arr[j]);
			}
		}
	}
	if (str.length == 1){
		ret.push(str);
	}
	else {
		rana(str);
	}
	return ret;
}
console.log(anagram('a'));
console.log(anagram('ab'));
console.log(anagram('abc'));
console.log(anagram('abcd'));
console.log(anagram('abcde'));