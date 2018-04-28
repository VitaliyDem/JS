function radiansTodegrees (radians) {
	var P = Math.PI;
	var degrees;
	degrees = radians*(180/P);
	return degrees;
	
}

console.log (radiansTodegrees(0.7853981633974483));