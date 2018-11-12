function uneven(val){
	var counter = 0;
	var ret = 0;
	function runeven(val){
		var digit = val % 10;
		if (digit % 2 == 1){
			ret = ret + digit * Math.pow(10, counter);
			counter++;
		}
		if (val >= 10){
			runeven(Math.floor(val / 10));
		}
	}
	runeven(Math.abs(val));
	if (val < 0){
		return ret * -1;
	}
	return ret;
}
console.log(uneven(357));
console.log(uneven(234));
console.log(uneven(-1845));
console.log(uneven(79));
console.log(uneven(2222222));
console.log(uneven(0));
console.log(uneven(404));
console.log(uneven(111111));
console.log(uneven(123456789));
