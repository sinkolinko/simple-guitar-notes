"use strict";

setInterval(playNotes, 3500);

const note = document.getElementById("note-1");

const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

function playNotes() {
  const random = Math.floor(Math.random() * notes.length);
  console.log(notes[random]);
}

function startNotes() {
  document.getElementById("start-1").addEventListener("click", function () {
    note.textContent = notes[random];
  });
}

startNotes();

playNotes();
