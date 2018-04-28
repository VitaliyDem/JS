var array;
function reverseString(str) {
	array = str.split ("");
	array.reverse();
	str = array.join('');
	return str;
	
} 

console.log(reverseString("hello world"));