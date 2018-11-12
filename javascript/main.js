function runningLogger(){
	console.log('I am running!');
}

function multiplyByTen(n){
	return n * 10;
}
console.log(multiplyByTen(5));

function stringReturnOne(){
	return 'One';
}
function stringReturnTwo(){
	return 'Two';
}

function caller(func){
	if (typeof(func) == 'function'){
		func();
	}
}

function myDoubleConsoleLog(f1, f2){
	if ((typeof(f1) == 'function') && (typeof(f2) == 'function')){
		console.log(f1(), f2());
	}
}
myDoubleConsoleLog(stringReturnTwo, runningLogger);

function caller2(f){
	if (typeof(f) == 'function'){
		console.log('Starting....');
		setTimeout(f, 4000, stringReturnOne, stringReturnTwo);
		console.log('Ending?')
	}
	return 'Interesting'
}
console.log(caller2(myDoubleConsoleLog));
