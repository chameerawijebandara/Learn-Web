var timer;
var maxMins;
var maxSecs;
var mins;
var secs;
var soundTrack;

function btnStartOnClick(btnStart) {

    console.log("Start btn clicked");
    if (btnStart.innerHTML.toUpperCase() === "START")
    {
        btnStart.innerHTML = "Pause";
        timer = setInterval(timeOut, 1000);
    }
    else
    {
        btnStart.innerHTML = "Start";
        clearInterval(timer);
    }
}
;

function btnStopOnClick(btnStop) {
    console.log("Stop btn clicked");

    clearInterval(timer);
    $("#btn_start").innerHTML = "Start";
    mins = maxMins;
    secs = maxSecs;
    displayTime();
}
;

function btnSettingsClick() {
    console.log("Setting btn clicked");
    window.location.href = "settings.html";
}
function timeOut() {
    console.log("Timer tics");
    secs--;
    if (secs < 0)
    {
        mins--;

        secs = 59;
    }
    if (secs < 0 || mins < 0)
    {
        document.getElementById("btn_start").innerHTML = "Start";
        return;
    }
    displayTime();

    if (mins + secs === 0)
    {
        document.getElementById("btn_start").innerHTML = "Start";
        var audio = new Audio(soundTrack);
        audio.play();
        document.getElementById("clock").innerHTML = "Time Passed";
        clearInterval(timer);
    }
}
;

function formatTime() {
    if (mins < 10)
    {
        if (secs < 10)
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
        if (secs < 10)
        {
            return mins + " : " + "0" + secs;
        }
        else
        {
            return mins + " : " + secs;
        }
    }

}
;

function displayTime() {
    if (document.getElementById("clock"))
    {
        document.getElementById("clock").innerHTML = formatTime();
    }
}
;


window.onload = function() {
    console.log("Page loaded");

    maxMins = LocalStorage.getMaxMins();
    maxSecs = LocalStorage.getMaxSecs();

    mins = maxMins;
    secs = maxSecs;

    document.bgColor = LocalStorage.getBackColor();
    soundTrack = LocalStorage.getSoundTrack();

    displayTime();
};
	 