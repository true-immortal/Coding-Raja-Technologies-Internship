// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const playlist = [
        {
            title: "Song 1",
            artist: "Artist 1",
            src: "path/to/song1.mp3",
            cover: "path/to/cover1.jpg"
        },
        {
            title: "Song 2",
            artist: "Artist 2",
            src: "path/to/song2.mp3",
            cover: "path/to/cover2.jpg"
        }
        // Add more songs here
    ];

    let currentTrackIndex = 0;
    let isPlaying = false;

    const audio = new Audio();
    const playPauseBtn = document.getElementById('play-pause');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const progressBar = document.getElementById('progress-bar');
    const volumeControl = document.getElementById('volume');
    const shuffleBtn = document.getElementById('shuffle');
    const repeatBtn = document.getElementById('repeat');
    const trackTitle = document.getElementById('track-title');
    const trackArtist = document.getElementById('track-artist');
    const albumCover = document.getElementById('album-cover');
    const playlistElement = document.getElementById('playlist');

    function loadTrack(index) {
        const track = playlist[index];
        audio.src = track.src;
        trackTitle.textContent = track.title;
        trackArtist.textContent = track.artist;
        albumCover.src = track.cover;
    }

    function playPauseTrack() {
        if (isPlaying) {
            audio.pause();
            playPauseBtn.textContent = 'Play';
        } else {
            audio.play();
            playPauseBtn.textContent = 'Pause';
        }
        isPlaying = !isPlaying;
    }

    function prevTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
        loadTrack(currentTrackIndex);
        playPauseTrack();
    }

    function nextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
        loadTrack(currentTrackIndex);
        playPauseTrack();
    }

    function updateProgressBar() {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;
    }

    function setVolume() {
        audio.volume = volumeControl.value / 100;
    }

    function toggleShuffle() {
        // Add shuffle functionality here
    }

    function toggleRepeat() {
        // Add repeat functionality here
    }

    audio.addEventListener('timeupdate', updateProgressBar);
    playPauseBtn.addEventListener('click', playPauseTrack);
    prevBtn.addEventListener('click', prevTrack);
    nextBtn.addEventListener('click', nextTrack);
    volumeControl.addEventListener('input', setVolume);
    shuffleBtn.addEventListener('click', toggleShuffle);
    repeatBtn.addEventListener('click', toggleRepeat);

    // Load the first track initially
    loadTrack(currentTrackIndex);
    
    // Populate playlist
    playlist.forEach((track, index) => {
        const li = document.createElement('li');
        li.textContent = track.title;
        li.addEventListener('click', () => {
            currentTrackIndex = index;
            loadTrack(currentTrackIndex);
            playPauseTrack();
        });
        playlistElement.appendChild(li);
    });
});
