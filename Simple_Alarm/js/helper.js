var DB = {
    "getMaxMins": function()
    {
        if (!localStorage.maxMins)
        {
            localStorage.maxMins = 5;
        }
        return localStorage.maxMins;
    },
    "getMaxSecs": function()
    {
        if (!localStorage.maxSecs)
        {
            localStorage.maxSecs = 0;
        }
        return localStorage.maxSecs;
    },
    "getBackColor": function()
    {
        if (!localStorage.backColor)
        {
            localStorage.backColor = "#ffffff";
        }
        return localStorage.backColor;
    },
    "getSoundTrack": function()
    {
        if (!localStorage.soundTrack)
        {
            localStorage.soundTrack = "res/bell.mp3";
        }
        return localStorage.soundTrack;
    },
    "setMaxMins": function(maxMins)
    {
        localStorage.maxMins = maxMins;
    },
    "setMaxSecs": function(maxSecs)
    {
        localStorage.maxSecs = maxSecs;
    },
    "setBackColor": function(backColor)
    {
        localStorage.backColor = backColor;
    },
    "setSoundTrack": function(soundTrack)
    {
        localStorage.soundTrack = soundTrack;
    },
    "free": function name() {
        localStorage.removeItem("maxMins");
        localStorage.removeItem("maxSecs");
        localStorage.removeItem("backColor");
        localStorage.removeItem("soundTrack");
    }
};