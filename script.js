"use strict";

const note = document.getElementById("note");
const start = document.getElementById("start");
const slower = document.getElementById("slower");
const faster = document.getElementById("faster");
const currentSpeed = document.getElementById("current-speed");

const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

let noteCounter = null;
let noteSpeed = 1000;

start.addEventListener("click", function () {
  if (start.classList.contains("start")) {
    noteCounter = setInterval(startNotes, noteSpeed);
    start.classList.remove("start");
    start.classList.add("stop");
    start.innerHTML = "stop";
    currentSpeed.textContent = `Current speed: ${noteSpeed} milliseconds`;
  } else {
    clearInterval(noteCounter);
    start.classList.remove("stop");
    start.classList.add("start");
    start.textContent = "play";
    currentSpeed.textContent = `Current speed: 0 milliseconds`;
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
      currentSpeed.textContent = `Current speed: Note every ${noteSpeed} milliseconds`;
    }
  });

document
  .getElementById("slower")
  .addEventListener("click", function slowerNotes() {
    if (noteSpeed >= 3000) {
      slower.textContent = "X";
    } else {
      clearInterval(noteCounter);
      noteSpeed = noteSpeed + 500;
      noteCounter = setInterval(startNotes, noteSpeed);
      faster.textContent = "+";
      slower.textContent = "-";
      currentSpeed.textContent = `Current speed: Note every ${noteSpeed} milliseconds`;
    }
  });

function startNotes() {
  const random = Math.floor(Math.random() * notes.length);
  note.textContent = notes[random];
}
