function getMaxOfArray (num) {
	var arr = {};
	arr.max = Math.max(...num);
	arr.min = Math.min(...num);
	return arr;
}

var num = [1,92,-5,25];
console.log(getMaxOfArray(num));



