var timer;
var maxMins;
var maxSecs;
var mins;
var secs;
var soundTrack;

function btnStartOnClick() {

    console.log("Start btn clicked");
    if ($("#btn_start").text().toUpperCase() === "START")
    {
        $("#btn_start").text("Pause");
        timer = setInterval(timeOut, 1000);
    }
    else
    {
        $("#btn_start").text("Start");
        clearInterval(timer);
    }
}
;

function btnStopOnClick() {
    console.log("Stop btn clicked");

    clearInterval(timer);
    $("#btn_start").text("Start");
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
        $("#btn_start").text("Start");
        return;
    }

    displayTime();
    if (mins + secs == 0)
    {
        clearInterval(timer);
        $("#btn_start").text("Start");
        var audio = new Audio(soundTrack);
        $.notify.addStyle("timeout", {html:
                    "<div>" +
                    "<div class='clearfix'>" +
                    "<div class='title' data-notify-html='title'/>" +
                    "<div class='buttons'>" +
                    "<button class='yes' data-notify-text='button'></button>" +
                    "</div>" +
                    "</div>" +
                    "</div>"
        });

        $(document).on('click', '.notifyjs-foo-base .yes', function() {
            //hide notification
            $(this).trigger('notify-hide');
            alert($(this).text() + " clicked!");
            //relad page 
            location.reload();
        });

        $.notify({title: 'Time Passed',
            button: 'Confirm',
        }, {
            className: "success",
            style: 'timeout',
            autoHide: false,
            clickToHide: false
        });

        audio.play();
        $("#clock").text("Time Passed");

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
    if ($("#clock"))
    {
        $("#clock").text(formatTime());
    }
}
;

window.onload = function() {
    console.log("Page loaded");

    maxMins = DB.getMaxMins();
    maxSecs = DB.getMaxSecs();

    mins = maxMins;
    secs = maxSecs;

    document.bgColor = DB.getBackColor();
    soundTrack = DB.getSoundTrack();

    displayTime();
};
	 