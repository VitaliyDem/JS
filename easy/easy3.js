var arr = [1, 4, 2];

function avg (arr) {
  var result = 0;
    for (var x = 0; x < arr.length; x++) {
      result += arr[x];
    }
     return result / arr.length;
 }

console.log(avg(arr));