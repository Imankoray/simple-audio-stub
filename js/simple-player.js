

// use DOM to get a refetence to the UI elements 
const button = document.getElementById("play-pause-button");
const currentTime = document.getElementById("current-time");
const totalTime = document.getElementById("total-time");
const seekbar = document.getElementById("seek-bar");
const audio = document.getElementById("audio")
const vinyl = document.getElementById("vinyl");
const vinyl2 = document.getElementById("vinyl2")
const vinyl3 = document.getElementById("vinyl3")
const audio2 = document.getElementById("audio2");
const audio3 = document.getElementById("audio3");
// Add const variable for the volume seek bar
const volume = document.getElementById("seek-bar2")
// seek state - are we seeking?
let seeking = false

// Declaring a new variable of playingAudio and giving it a value of one.
// Thi shows whether an audio is playing
let playingAudio = 1


// If statement. means if the element Vinyl is clicked an event should happen
vinyl.onclick = (event) => {
    // This is where the event happens
    // if the audio is paused (==) the audio will play
    if (audio.paused == true) {
        playingAudio = 1
        audio.play();
        // Here is an else statement This happens when the past if statement isnt true. So if the audio is playing, it will pause
    } else {
        audio.pause();
    }
}
// If statement. means if the element Vinyl is clicked an event should happen
vinyl2.onclick = (event) => {
    // This is where the event happens
    // if the audio is paused (==) the audio will play
    if (audio2.paused == true) {
        playingAudio = 2
        audio2.play();
        // Here is an else statement. This happens when the past if statement isnt true. So if the audio is playing, it will pause
    } else {
        audio2.pause();
    }
}


// ! means not 
// if seeking is not true then an event will happen 
//The event will only happen when the seeking is false 
if (!seeking) {
    // Math.floor is a function that rounds the element to the nearest whole number
    // whilst seekbar value sets the value of the seekbar
    // This code sets the value of the seekbar to whatever time the audio is at
    seekbar.value = Math.floor(audio2.currentTime);
}


// If statement. means if the element Vinyl is clicked an event should happen
vinyl3.onclick = (event) => {
    // This is where the event happens
    // if the audio is paused (==) the audio will play
    if (audio3.paused == true) {
        playingAudio = 3
        audio3.play();
        // Here is an else statement. This happens when the past if statement isnt true. So if the audio is playing, it will pause
    } else {
        audio3.pause();
    }
}

// listen to button click using arrow function
button.onclick = (event) => {
    // This is where the event happens
    // if the audio is paused (==) the audio will play
    if (audio.paused == true) {
        audio.play();
    } else {
        // Here is an else statement. This happens when the past if statement isnt true. So if the audio is playing, it will pause
        audio.pause();
    }
}




// audio object listeners
// These are the audio object listeners.
// The image of the play-pause button will change depending on whether the audio is being played or whether it is paused 
// Here is the event that will happen if the audio is playing 
audio.onplay = (event) => {
    button.src = "images/pause.svg"
}
// This is the event that will happen if the audio is paused 
audio.onpause = (event) => {
    button.src = "images/play.svg"
}

// Here I have done it with the other two audios so they have the same function
audio2.onplay = (event) => {
    button.src = "images/pause.svg"
}
audio2.onpause = (event) => {
    button.src = "images/play.svg"
}

audio3.onplay = (event) => {
    button.src = "images/pause.svg"
}
audio3.onpause = (event) => {
    button.src = "images/play.svg"
}

audio.onplay = (event) => {
    button.src = "images/pause.svg"
}
audio.onpause = (event) => {
    button.src = "images/play.svg"
}
audio.onplay = (event) => {
    button.src = "images/pause.svg"
}
audio.onpause = (event) => {
    button.src = "images/play.svg"
}


audio2.onplay = (event) => {
    button.src = "images/pause.svg"
}
audio2.onpause = (event) => {
    button.src = "images/play.svg"
}
audio2.onplay = (event) => {
    button.src = "images/pause.svg"
}
audio2.onpause = (event) => {
    button.src = "images/play.svg"
}


audio3.onplay = (event) => {
    button.src = "images/pause.svg"
}
audio3.onpause = (event) => {
    button.src = "images/play.svg"
}
audio3.onplay = (event) => {
    button.src = "images/pause.svg"
}
audio3.onpause = (event) => {
    button.src = "images/play.svg"
}

// This event happen when the metadata for an audio has been loaded
// currentTime will set the HTML for the current time of the audio playing- so how much has been listened to
// totalTime sets the HTML for how long the audio is 
// seekbar.max will set the seekbar value (round it up to the nearest whole  number) and this will be the max value of the seekbar (which is the duration of the song)
// seekbar.value sets the value of the seekbar to the play back positon of the audio
// =0 sets it to start at 0
audio.onloadedmetadata = (event) => {
    currentTime.innerHTML = formatTime(0);
    totalTime.innerHTML = formatTime(audio.duration);
    seekbar.max = Math.floor(audio.duration);
    seekbar.value = 0;
}


// event handler for oncanplaythrough JS event
// oncanplaythrough happens when the brower estimates it can play thorugh the audio without stopping or buffering 
audio.oncanplaythrough = (event) => {
    // .disabled controls whether the seekbar can be interacted with
    // = false means the seekbar can be used and interacted with
    // so as a whole this code means; when the audio file has loaded and is playing. the seekbaer will reflect the playback progress and can be interacted with
    seekbar.disabled = false;
}


// ontimeupdate is a JS handler that is attached to an auio element. It is triggered when the current playback postion changes 
audio.ontimeupdate = (event) => {
    // this event is triggered everytime the currentTime changes 
    // Thi line updates the innrHTML which displays the element with the formatted current time of the audio
    currentTime.innerHTML = formatTime(audio.currentTime)
}

// This event happen when the metadata for an audio has been loaded
// currentTime will set the HTML for the current time of the audio playing- so how much has been listened to
// totalTime sets the HTML for how long the audio is 
// seekbar.max will set the seekbar value (round it up to the nearest whole  number) and this will be the max value of the seekbar (which is the duration of the song)
// seekbar.value sets the value of the seekbar to the play back positon of the audio
// =0 sets it to start at 0
audio2.onloadedmetadata = (event) => {
    currentTime.innerHTML = formatTime(0);
    totalTime.innerHTML = formatTime(audio2.duration);
    seekbar.max = Math.floor(audio2.duration);
    seekbar.value = 0;
}

// event handler for oncanplaythrough JS event
// oncanplaythrough happens when the brower estimates it can play thorugh the audio without stopping or buffering 
audio2.oncanplaythrough = (event) => {
    // .disabled controls whether the seekbar can be interacted with
    // = false means the seekbar can be used and interacted with
    // so as a whole this code means; when the audio file has loaded and is playing. the seekbaer will reflect the playback progress and can be interacted with
    seekbar.disabled = false;
}

// ontimeupdate is a JS handler that is attached to an auio element. It is triggered when the current playback postion changes 
audio2.ontimeupdate = (event) => {
    // this event is triggered everytime the currentTime changes 
    // This line updates the innrHTML which displays the element with the formatted current time of the audio
    currentTime.innerHTML = formatTime(audio2.currentTime)
}


// This event happen when the metadata for an audio has been loaded
// currentTime will set the HTML for the current time of the audio playing- so how much has been listened to
// totalTime sets the HTML for how long the audio is 
// seekbar.max will set the seekbar value (round it up to the nearest whole  number) and this will be the max value of the seekbar (which is the duration of the song)
// seekbar.value sets the value of the seekbar to the play back positon of the audio
// =0 sets it to start at 0
audio3.onloadedmetadata = (event) => {
    currentTime.innerHTML = formatTime(0);
    totalTime.innerHTML = formatTime(audio3.duration);
    seekbar.max = Math.floor(audio3.duration);
    seekbar.value = 0;
}

// event handler for oncanplaythrough JS event
// oncanplaythrough happens when the brower estimates it can play thorugh the audio without stopping or buffering 
audio3.oncanplaythrough = (event) => {
    // .disabled controls whether the seekbar can be interacted with
    // = false means the seekbar can be used and interacted with
    // so as a whole this code means; when the audio file has loaded and is playing. the seekbaer will reflect the playback progress and can be interacted with
    seekbar.disabled = false;
}

// ontimeupdate is a JS handler that is attached to an auio element. It is triggered when the current playback postion changes 
audio3.ontimeupdate = (event) => {
    // this event is triggered everytime the currentTime changes 
    // This line updates the innrHTML which displays the element with the formatted current time of the audio
    currentTime.innerHTML = formatTime(audio3.currentTime)
}



// these are event that will happen if the seekbar changes 
//they are declared using if statements 
seekbar.onchange = (event) => {

    if (playingAudio == 1) {
        //if the playing audio =1 (if the audio is playing) then the current time will be set to the value of the seekbar 
        audio.currentTime = seekbar.value;
        // if the audio is not paused, it is playing 
        if (!audio.paused) {
            audio.play();
        }
        //the seeking variable is set to false 
        seeking = false
    }

    if (playingAudio == 2) {
        //if the playing audio =2(if the audio is playing) then the current time will be set to the value of the seekbar 
        audio2.currentTime = seekbar.value;
        // if the audio is not paused, it is playing 
        if (!audio2.paused) {
            audio2.play();
        }
        //the seeking variable is set to false 
        seeking = false
    }

    if (playingAudio == 3) {
        //if the playing audio =3(if the audio is playing) then the current time will be set to the value of the seekbar 
        audio3.currentTime = seekbar.value;
        if (!audio3.paused) {
            // if the audio is not paused, it is playing 
            audio3.play();
        }
        //the seeking variable is set to false 
        seeking = false
    }

}

// seekbar listeners 
//These event listeners handle changes in the seekbar and volume control
//the input event is fired when the seekbar changes 
seekbar.oninput = (event) => {
    seeking = true;
}
// this event listener listens for the change event 
//this change event is determined by the value of the volume control
volume.onchange = (event) => {
    //if statement checks if the variable playingAudio = 1
    // if it is then it sets the audio object volume to the value of the volume object
    //you then divide it by 100 to scale it to the same range of the volume which is 0-1
    if (playingAudio == 1) {
       
        audio.volume = volume.value / 100
    }

    if (playingAudio == 2) {
        audio2.volume = volume.value / 100
    }

    if (playingAudio == 3) {
        audio3.volume = volume.value / 100
    }

}
 

// ! means false/not. if seeking = false 
//if the audio isnt seeking (when the user is not using the seekbar to navigate)
if (!seeking) {
    // this updates the position to match the current playback of the audio
    seekbar.value = Math.floor(audio.currentTime);
}

if (!seeking) {
    seekbar.value = Math.floor(audio2.currentTime);
}

if (!seeking) {
    seekbar.value = Math.floor(audio3.currentTime);
}



// helper functions
function formatTime(secs) {
    let hours = Math.floor(secs / 3600);
    let minutes = Math.floor((secs - (hours * 3600)) / 60);
    let seconds = Math.floor((secs - (hours * 3600)) - minutes * 60);
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (hours > 0) {
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return hours + ":" + minutes + ":" + seconds;
    } else {
        return minutes + ":" + seconds;
    }
}