const clock = document.getElementById("time");

function printTime() {
	var time = new Date();
	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();

	if (hours.toString().length == 1) {
		hours = "0" + time.gethours();
	}

	if (minutes.toString().length == 1) {
		minutes = "0" + time.getminutes();
	}

	if (seconds.toString().length == 1) {
		seconds = "0" + time.getSeconds();
	}

	clock.innerHTML = hours + ":" + minutes + ":" + seconds;
}

setInterval(printTime, 1000);
