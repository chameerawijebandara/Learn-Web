var timer;

var maxMins = 0;
var maxSecs = 5;
	
var mins = maxMins;
var secs = maxSecs;

var backColor = "white";
var soundTrack = "bell.mp3"
	
function btnStartOnClick(btnStart) {
	
	console.log("Start btn clicked");
	
	
	if (btnStart.innerHTML.toUpperCase() =="START")
	{
		
		btnStart.innerHTML = "Pause";
		timer = setInterval(timeOut,1000);
	} 
   else
    {
		btnStart.innerHTML = "Start";	
		clearInterval(timer);
	} 
	
};

function btnStopOnClick(btnStop) {
	clearInterval(timer);
	document.getElementById("btn_start").innerHTML = "Start";	
	mins = maxMins;
	secs = maxSecs;
	displayTime();
};

function btnSettingsClick() {
	window.location.href = "settings.html";
}
function timeOut() {
	console.log("Timer tics");
	secs--;
	if(secs < 0)
	{
		mins--;
		
		secs = 59; 
	}
	
	displayTime();
	
	if(mins + secs == 0)
	{
		var audio = new Audio(soundTrack);
		audio.play();
		alert("Time Passed");
		clearInterval(timer);
	}
   
	
};


function formatTime() {
	if(mins < 10)
	{
		if(secs < 10)
		{
			return "0" + mins + " : " + "0" + secs;
		}
		else
		{
			return "0" + mins + " : " + secs;
		}
	}
	else
	{
		if(secs < 10)
		{
			return mins + " : " + "0" + secs;
		}
		else
		{
			return mins + " : " + secs;
		}
	}
	
};

function displayTime() {
	document.getElementById("clock").innerHTML = formatTime();
};

function btnSubmitOnClick(params) {
	
	window.location.href = "index.html";
	maxMins =  document.getElementById("set_mins").value;
	maxSecs =  document.getElementById("set_secs").value;
	document.body.style.backgroundColor = "red";
	backColor  = document.getElementById("set_color").value;
	soundTrack = document.getElementById("set_sound").value;
	
	alert(soundTrack);
	var audio = new Audio(soundTrack);
		audio.play();
	
}

function btnCancelOnClick(params) {
	window.location.href = "settings.html";
	alert(params);
	
	
}
window.onload = function(){
	 displayTime();
};
	 
	 