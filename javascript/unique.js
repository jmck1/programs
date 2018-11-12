function unique(str){
	var arr = str.split(' ');
	for (var i=0; i<arr.length; i++){
		var t = false;
		for (var j=i+1; j<arr.length; j++){
			if (arr[i] == arr[j]){
				t = true;
				arr.splice(j, 1);
			}
		}
		if (t){
			arr.splice(i, 1);
			i--;
		}
	}
	return arr.join(' ');
}
console.log(unique('Sing! Sing a song; sing out loud; sing out strong.'));