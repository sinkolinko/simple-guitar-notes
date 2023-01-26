"use strict";

const note = document.getElementById("note");
const start = document.getElementById("start");
const slower = document.getElementById("slower");
const faster = document.getElementById("faster");

const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

let noteCounter = null;
let noteSpeed = 1000;

start.addEventListener("click", function () {
  if (start.classList.contains("start")) {
    noteCounter = setInterval(startNotes, noteSpeed);
    start.classList.remove("start");
    start.classList.add("stop");
    start.innerHTML = "stop";
  } else {
    clearInterval(noteCounter);
    start.classList.remove("stop");
    start.classList.add("start");
    start.textContent = "play";
  }
});

document
  .getElementById("faster")
  .addEventListener("click", function fasterNotes() {
    if (noteSpeed <= 500) {
      faster.textContent = "X";
    } else {
      clearInterval(noteCounter);
      noteSpeed = noteSpeed - 500;
      noteCounter = setInterval(startNotes, noteSpeed);
      faster.textContent = "+";
      slower.textContent = "-";
    }
  });

document
  .getElementById("slower")
  .addEventListener("click", function slowerNotes() {
    if (noteSpeed >= 1500) {
      slower.textContent = "X";
    } else {
      clearInterval(noteCounter);
      noteSpeed = noteSpeed + 500;
      noteCounter = setInterval(startNotes, noteSpeed);
      faster.textContent = "+";
      slower.textContent = "-";
    }
  });

function startNotes() {
  const random = Math.floor(Math.random() * notes.length);
  note.textContent = notes[random];
}
