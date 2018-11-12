function encode(str){
	var ret = '';
	var tmp = str[0];
	var count = 1;
	for (var i=1; i<str.length; i++){
		if (str[i] == tmp){
			count++;
			if (i == str.length - 1){
				ret += tmp + count;
			}
		}
		else {
			ret += tmp + count;
			count = 1;
			tmp = str[i];
		}
	}
	return ret;
}
console.log(encode('aaaabbcddd'));
console.log(encode('abcde'));