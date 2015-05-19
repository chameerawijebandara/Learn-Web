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
	console.log("Stop btn clicked");
	
	clearInterval(timer);
	document.getElementById("btn_start").innerHTML = "Start";	
	mins = maxMins;
	secs = maxSecs;
	displayTime();
};

function btnSettingsClick() {
	console.log("Setting btn clicked");
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
	if( secs<0 || mins < 0)
	{
		document.getElementById("btn_start").innerHTML = "Start";	
		return;
	}
	displayTime();
	
	if(mins + secs == 0)
	{
		document.getElementById("btn_start").innerHTML = "Start";	
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
	if(document.getElementById("clock"))
	{		
		document.getElementById("clock").innerHTML = formatTime();
	}
};

function btnSubmitOnClick(params) {
	console.log("Submit btn clicked");
	localStorage.maxMins =  document.getElementById("set_mins").value;
	localStorage.maxSecs =  document.getElementById("set_secs").value;
	localStorage.backColor  = document.getElementById("set_color").value;
	if(document.getElementById("set_sound").files[0])
	{
		localStorage.soundTrack = document.getElementById("set_sound").files[0];	
	}
	
	window.location.href = "index.html";
	
}

function btnCancelOnClick(params) {
	console.log("Cancel btn clicked");
	
	var r = confirm("All your changes will be discarded.");
	if (r != true) {
	  return;
	}
	window.location.href = "index.html";
}
function btnDefaultOnClick(params) {
	console.log("Default btn clicked");
	
	var r = confirm("All your changes will be discarded.");
	if (r != true) {
	  return;
	}
	localStorage.removeItem("maxMins");
	localStorage.removeItem("maxSecs");
	localStorage.removeItem("backColor");
	localStorage.removeItem("soundTrack");
		
	window.location.href = "index.html";
}
window.onload = function(){
	console.log("Page loaded");
	
	if(localStorage.maxMins)
	{
		maxMins = localStorage.maxMins;
		maxSecs = localStorage.maxSecs;	
	}
	else
	{
		maxMins = 5;
		maxSecs = 0;	
		localStorage.maxMins = maxMins;
		localStorage.maxSecs = maxSecs;	
	}
	
	
	mins = maxMins;
	secs = maxSecs;

	if(localStorage.backColor)
	{
		backColor = localStorage.backColor;	
	}
	else
	{
		backColor = "#ffffff";
		localStorage.backColor = "#ffffff";
	}
	document.bgColor = backColor;
	
	if(localStorage.soundTrack)
	{
		soundTrack = localStorage.soundTrack;
	}
	else
	{
		soundTrack = "bell.mp3";
		localStorage.soundTrack = "bell.mp3";
	}
	
	if(document.getElementById("set_mins"))
	{
		document.getElementById("set_mins").value = localStorage.maxMins;
		document.getElementById("set_secs").value = localStorage.maxSecs;
		document.getElementById("set_color").value = localStorage.backColor;
	}
	displayTime();
};
	 