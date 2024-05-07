document.addEventListener("DOMContentLoaded", function() {
    const seasonSelect = document.getElementById('season-select');
    
    const backgroundVideo = document.getElementById('background-video');
    
    const videoSources = {
      spring: '../project-3/images/spring.mp4',
      summer: '../project-3/images/summer.mp4',
      autumn: '../project-3/images/fall.mp4',
      winter: '../project-3/images/winter.mp4'
    };
    

    seasonSelect.addEventListener('change', function() {
      const selectedSeason = seasonSelect.value;
      const videoPath = videoSources[selectedSeason];
      backgroundVideo.src = videoPath;
      backgroundVideo.load();
    });

    
});

document.addEventListener("DOMContentLoaded", function() {
    const audioSelect = document.getElementById('audio-select');
    const backgroundAudio = document.getElementById('background-audio');
    const audioSources = {
      'happyjazz.mp3': 'images/happyjazz.mp3',
      'piano.mp3': 'images/piano.mp3',
      'ambient.mp3': 'images/ambient.mp3',
      'happyjazz.mp3': 'images/happyjazz.mp3'
    };

    audioSelect.addEventListener('change', function() {
      const selectedAudio = audioSelect.value;
      const audioPath = audioSources[selectedAudio];
      backgroundAudio.src = audioPath;
      backgroundAudio.load();
      backgroundAudio.play(); 
    });
  });

  