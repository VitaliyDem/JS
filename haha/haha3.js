function celsiusTofahrenheit(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var result = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(result);
}

function fahrenheitTocelsius(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var result = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(result);
} 
celsiusTofahrenheit (35);
fahrenheitTocelsius(79);