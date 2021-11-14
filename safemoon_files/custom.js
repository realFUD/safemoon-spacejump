var audio = new Audio("./../assets/sound/ride.mp3");
var audioIsPlaying = false;

function vibesToggle() {

    if (audioIsPlaying) {
        audioIsPlaying = false;
        audio.pause();
    } else {
        audioIsPlaying = true;
        audio.play();
        audio.volume = .2;
    }

}
