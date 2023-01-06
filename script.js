"use strict";

const note = document.getElementById("note");
const start = document.getElementById("start");
const stop = document.getElementById("stop");

const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

// let myTimer = setInterval(playNotes, 1000);
// var myTimer;

// function playNotes() {
//   const random = Math.floor(Math.random() * notes.length);
//   note.textContent = notes[random];
//   console.log(notes[random]);
//   if (start.classList.contains("hidden")) {
//     document.getElementById("start").addEventListener("click", function () {
//       start.classList.remove("hidden");
//       stop.classList.add("hidden");
//       console.log(notes[random]);
//       const myTimer = setInterval(playNotes, 1000);
//     });
//   } else if (stop.classList.contains("hidden")) {
//     document.getElementById("stop").addEventListener("click", function () {
//       stop.classList.remove("hidden");
//       start.classList.add("hidden");
//       clearInterval(myTimer);
//     });
//   }
// }

document.getElementById("start").addEventListener("click", function () {
  // if (this.classList.contains("start")) {
  const myTimer = setInterval(() => {
    if (this.classList.contains("start")) {
      const random = Math.floor(Math.random() * notes.length);
      note.textContent = notes[random];
      console.log(notes[random]);
      this.classList.remove("start");
      this.classList.add("stop");
      this.textContent = "stop";
    } else {
      this.classList.remove("stop");
      this.classList.add("start");
      this.textContent = "play";
      clearInterval(myTimer);
    }
  }, 1000);

  // } else {
});
