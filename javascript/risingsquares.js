function risque(num, iter){
	iter = iter || 1;
	if ((num >= iter) && (iter > 0)){
		console.log(iter*iter);
		risque(num, iter + 2);
	}
	else if ((num % 2 == 0) && (iter > 0)){
		iter = -1;
	}
	else if (iter > 0){
		num--;
		iter = -1;
	}
	if ((num >= 2) && (iter == -1)){
		console.log(num*num);
		risque(num - 2, iter);
	}
}
risque(1);
risque(2);
risque(3);
risque(4);
risque(5);
risque(6);
risque(7);
risque(8);
risque(100);