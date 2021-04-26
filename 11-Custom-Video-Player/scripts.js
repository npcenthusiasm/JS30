/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggleBtn = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Hook up the event listeners */
let mousedown = false;



video.addEventListener('click', togglePlay);
video.addEventListener('play', updatePlayBtn)
video.addEventListener('pause', updatePlayBtn)
video.addEventListener('timeupdate', handleProgressUpdate);

toggleBtn.addEventListener('click', togglePlay);
skipButtons.forEach(skipButton => skipButton.addEventListener('click', handleSkipClick))

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);


function togglePlay(e) {

  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}

function updatePlayBtn () {
  let icon = this.paused ? '►' : '❚ ❚';
  console.log('icon: ', icon);
  toggleBtn.textContent = icon
}

function handleRangeUpdate (e) {
  video[this.name] = this.value
}

function handleSkipClick (e) {
  video.currentTime += parseFloat(this.dataset.skip)
}

function handleProgressUpdate (e) {
  
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}


function scrub(e) {

  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
