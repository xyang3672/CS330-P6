// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var volLevels = [];
var volume = 2;
var play_status = false;

function init() {
	for (let i=0;i<6;i++){ //fill the volLevels array
		volLevels.push(document.getElementById("vl" + String(i)));
	}
	for (let i=0;i<3;i++){ //Fill the background of the first 3 volume level 
		volLevels[i].style.background="#e6ccff";
	}
};

function volUp() {
	if (volume<5){ //volume up button pressed at full volume(volLevels[5])
		volume++;
		volLevels[volume].style.background='#e6ccff';
	}
}

function volDown() {
	if (volume>-1){ //volume down button pressed at min volume
		volLevels[volume].style.background='none';
		volume--;
	}
}

function switchPlay() { //adopted from exercise 5
	let play = document.getElementById("play-button");
    let pause = document.getElementById("pause-button");
    if (play && pause) {
        play.classList.toggle('hidden');
		pause.classList.toggle('hidden');
	}
	play_status = !play_status; //change the Play status
}

var time_elapsed = document.getElementById("time-range");

var stimulation = setInterval(function(){	
	if (play_status) {
		let count = Number(time_elapsed.value)+1  //modify the range type
		if (count < 180) {
			time_elapsed.value = count;  //modify the range type
		}
		else {nextSong();} //When the value of the input hits 180, call nextSong()
		let time_display = document.getElementById("player-time");
		time_display.innerHTML = secondsToMs(time_elapsed.value);
	}
},1000);

var song_number = 6;
var song_name = document.getElementById("player-song-name");

function nextSong() {
	song_number++;
	time_elapsed.value = 0; //set the player time back to 0 so that the page displays 0:00
	if (song_number > tracklist.length-1) {  
		song_number = 0;   //When you get to the end of the last song, have it loop back to the first track again
	}
	song_name.innerHTML = `${tracklist[song_number]}`;
}

function prevSong() {
	song_number--;
	time_elapsed.value = 0;
	if (song_number < 0) {
		song_number = tracklist.length-1; //When you are on the first song and hit prevSong, have it loop to the last track
	}
	song_name.innerHTML = `${tracklist[song_number]}`;
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();