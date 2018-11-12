function t(num){
	var n = Math.floor(num);
	if (n <= 1){
		return 0;
	}
	else if (n <= 3){
		return 1;
	}
	else{
		return t(n-1) + t(n-2) + t(n-3);
	}
}
console.log(t(1),t(2),t(3),t(4),t(5),t(6),t(7),t(8),t(9),t(10),t(11),t(12),t(13),t(14),t(15),t(16),t(17),t(18),t(19),t(20),t(21));
