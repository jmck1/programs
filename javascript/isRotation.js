function isRotation(str, str1){
	for (var i=0; i<str.length; i++){
		if (str == str1){
			return true;
		}
		var tmp = str1[0];
		str1 = str1.slice(1);
		str1 = str1 + tmp;
	}
	return false
}
console.log(isRotation('true', 'fals'));
console.log(isRotation('true', 'etru'));
console.log(isRotation('true', 'ruet'));
console.log(isRotation('frublur', 'blurfru'));

function badchar(str, str1){
	var dict = {};
	var len = str1.length;
	str = str1 + str;
	for (var i=0; i<str.length; i++){
		if (i<len){
			dict[str[i]] = 0;
		}
		else {
			if (str[i] in dict){
				str = str.slice(0, i) + str.slice(i + 1);
				i--;
			}
		}
	}
	return str.slice(len);
}

function badchar1(str, str1){
	for (var i=0; i<str.length; i++){
		for (var j=0; j<str.length; j++){
			if (str[i] == str1[j]){
				str = str.slice(0, i) + str.slice(i + 1);
				i--;
				break;
			}
		}
	}
	return str;
}
console.log(badchar('toobadyou', 'bad'));
console.log(badchar('toobadyou', 't'));
console.log(badchar('toobadyou', 'u'));
console.log(badchar('toobadyou', 'o'));
console.log(badchar('toobadyou', 'filse'));
console.log(badchar1('toobadyou', 'bad'));
console.log(badchar1('toobadyou', 't'));
console.log(badchar1('toobadyou', 'u'));
console.log(badchar1('toobadyou', 'o'));
console.log(badchar1('toobadyou', 'filse'));
