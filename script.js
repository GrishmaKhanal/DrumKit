
window.addEventListener('keydown', playSoundTransition);

function playSoundTransition(e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    if(!audio) return; //stop the function from running
    audio.currentTime = 0; // rewind to start, this is needed as succession hits willnot play.
    audio.play();    
    key.classList.add('playing');
}

const keySelected = document.querySelectorAll('.key');
keySelected.forEach(playing => playing.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}