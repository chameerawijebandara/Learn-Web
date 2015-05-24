function btnSubmitOnClick(params) {
	console.log("Submit btn clicked");

	LocalStorage.setMaxMins(document.getElementById("set_mins").value);
	LocalStorage.setMaxSecs(document.getElementById("set_secs").value);
	LocalStorage.setBackColor(document.getElementById("set_color").value);
	
	if(document.getElementById("set_color").value)
	{
		LocalStorage.setSoundTrack(document.getElementById("set_sound").value);	
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
	
	LocalStorage.free();	
	window.location.href = "index.html";
}
window.onload = function(){
	console.log("Page loaded");
	
	document.getElementById("set_mins").value = LocalStorage.getMaxMins();
	document.getElementById("set_secs").value = LocalStorage.getMaxSecs();
	document.getElementById("set_color").value = LocalStorage.getBackColor();
	
};
	 