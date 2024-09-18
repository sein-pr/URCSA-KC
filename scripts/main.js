document.addEventListener('DOMContentLoaded', function() {
    const playPauseButton = document.querySelector('.play-pause-btn');
    const audioPlayer = document.querySelector('.audio-player audio');
    const audioTimeline = document.querySelector('.audio-timeline');

    // Play/pause functionality
    playPauseButton.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.classList.replace('uil-volume', 'uil-pause');
        } else {
            audioPlayer.pause();
            playPauseButton.classList.replace('uil-pause', 'uil-volume');
        }
    });

    // Update the timeline as the audio plays
    audioPlayer.addEventListener('timeupdate', function() {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        audioTimeline.value = progress;
    });

    // Seek the audio when the timeline is adjusted
    audioTimeline.addEventListener('input', function() {
        const newTime = (audioTimeline.value / 100) * audioPlayer.duration;
        audioPlayer.currentTime = newTime;
    });

    // Reset the audio and icon when the audio finishes
    audioPlayer.addEventListener('ended', function() {
        playPauseButton.classList.replace('uil-pause', 'uil-volume');
        audioTimeline.value = 0;
    });
});
