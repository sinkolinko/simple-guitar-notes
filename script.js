'use strict';

const note = document.getElementById('note');
const start = document.getElementById('start');

const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

let noteCounter = null;

start.addEventListener('click', function () {
  if (start.classList.contains('start')) {
    noteCounter = setInterval(startNotes, 1000);
    start.classList.remove('start');
    start.classList.add('stop');
    start.textContent = 'stop';
  } else {
    clearInterval(noteCounter);
    start.classList.remove('stop');
    start.classList.add('start');
    start.textContent = 'play';
  }
});

function startNotes() {
  const random = Math.floor(Math.random() * notes.length);
  note.textContent = notes[random];
}
