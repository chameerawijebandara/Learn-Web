function btnSubmitOnClick(params) {
    console.log("Submit btn clicked");

    DB.setMaxMins(document.getElementById("set_mins").value);
    DB.setMaxSecs(document.getElementById("set_secs").value);
    DB.setBackColor(document.getElementById("set_color").value);

    if (document.getElementById("set_color").value)
    {
        DB.setSoundTrack(document.getElementById("set_sound").value);
    }
    window.location.href = "index.html";
}

function btnCancelOnClick(params) {
    console.log("Cancel btn clicked");

    var r = confirm("All your changes will be discarded.");
    if (r !== true) {
        return;
    }
    window.location.href = "index.html";
}

function btnDefaultOnClick(params) {
    console.log("Default btn clicked");

    var r = confirm("All your changes will be discarded.");
    if (r !== true) {
        return;
    }

    DB.free();
    window.location.href = "index.html";
}
window.onload = function() {
    console.log("Page loaded");

    document.getElementById("set_mins").value = DB.getMaxMins();
    document.getElementById("set_secs").value = DB.getMaxSecs();
    document.getElementById("set_color").value = DB.getBackColor();

};
	 