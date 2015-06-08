function btnSubmitOnClick() {
    console.log("Submit btn clicked");

    DB.setMaxMins($("#set_mins").val());
    DB.setMaxSecs($("#set_secs").val());
    DB.setBackColor($("#set_color").val());

    if ($("#set_color").val())
    {
        DB.setSoundTrack($("#set_sound").val());
    }
    window.location.href = "index.html";
}

function btnCancelOnClick() {
    console.log("Cancel btn clicked");

    var r = confirm("All your changes will be discarded.");
    if (r !== true) {
        return;
    }
    window.location.href = "index.html";
}

function btnDefaultOnClick() {
    console.log("Default btn clicked");

    var r = confirm("All your changes will be discarded.");
    if (r !== true) {
        return;
    }

    DB.free();
    window.location.href = "index.html";
}
$(window).load(function() {
    console.log("Page loaded");
    $("#set_mins").val(DB.getMaxMins());
    $("#set_secs").val(DB.getMaxSecs());
    $("#set_color").val(DB.getBackColor());
});
	 