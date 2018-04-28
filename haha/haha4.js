function user_info() {
	var name = prompt("what is your name?", "Petro");
	var date = prompt("What hour could we meet?", "today at 17:00");
	var city = prompt("Where we can meet?", "Milan");
	alert(name + ", has meeting " + date + " , somewhere " + city);
}

user_info();