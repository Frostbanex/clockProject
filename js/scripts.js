const clock = document.getElementById("time");
var crono = false;
var intervalCrono = null;
var hours = "00";
var minutes = "00";
var seconds = "00";
var secondsSum = 0;
var minutesSum = 0;
var hoursSum = 0;
const startButton = document.getElementById("startIcon");

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

function startTime() {
	if (crono == true) {
		crono = false;
		clearInterval(intervalCrono);
		console.log("Cronómetro desactivado");
	} else {
		crono = true;
		intervalCrono = setInterval(cronometer, 1000);
		console.log("Cronómetro activado");
	}
}

function cronometer() {
	if (seconds.toString().length == 2) {
		seconds = "0" + (secondsSum + 1);
	}
	if (seconds.toString().length == 3) {
		seconds = secondsSum + 1;
	}
	secondsSum++;

	if (seconds == 60) {
		secondsSum = 0;
		seconds = "00";
		if (minutes.toString().length == 2) {
			minutes = "0" + (minutesSum + 1);
		}
		if (minutes.toString().length == 3) {
			minutes = minutesSum + 1;
		}
		minutesSum++;
	}

	if (minutes == 60) {
		minutesSum = 0;
		minutes = "00";
		if (hours.toString().length == 2) {
			hours = "0" + (hoursSum + 1);
		}
		if (hours.toString().length == 3) {
			hours = hoursSum + 1;
		}
		hoursSum++;
	}
	clock.innerHTML = hours + ":" + minutes + ":" + seconds;
}
