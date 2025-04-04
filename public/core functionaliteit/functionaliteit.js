
let button = document.querySelector('button')
let audio = document.querySelector('audio')

button.addEventListener('click', function() {
  if (this.classList.contains('paused')) {
    audio.play();
  } else {
    audio.pause();
  }
  this.classList.toggle('paused')
  
})

audio.hidden = true;

button.hidden = false;