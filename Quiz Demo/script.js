"use strict";

const question = document.querySelector(".question");
const optA = document.querySelector("#a_value");
const optB = document.querySelector("#b_value");
const optC = document.querySelector("#c_value");
const optD = document.querySelector("#d_value");
const quesNo = document.querySelector(".quesNo");
const answer = document.querySelectorAll(".answer");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const score = document.querySelector(".score");
var mark = 0;

var currentQuestion = 1;
const pattern = [
  {
    q: "Who is the god of cricket?",
    optA: "Sehwag",
    optB: "Yuvaraj",
    optC: "Sachin",
    optD: "Dhoni",
    Ans: "c",
  },

  {
    q: "Which country has highest Population?",
    optA: "India",
    optB: "USA",
    optC: "China",
    optD: "Russia",
    Ans: "c",
  },

  {
    q: "Which is the largest country?",
    optA: "China",
    optB: "Russia",
    optC: "America",
    optD: "Australia",
    Ans: "b",
  },

  {
    q: "Who is the CM of TN?",
    optA: "EPS",
    optB: "OPS",
    optC: "Annamalai",
    optD: "Stalin",
    Ans: "d",
  },

  {
    q: "Who is the Prime  Minister of India?",
    optA: "Narendra Modi",
    optB: "Rahul Gandhi",
    optC: "Mamta Banarjee",
    optD: "Stalin",
    Ans: "a",
  },
];

const loadQuestion = () => {
  deselect();

  question.textContent = pattern[currentQuestion - 1].q;
  optA.textContent = pattern[currentQuestion - 1].optA;
  optB.textContent = pattern[currentQuestion - 1].optB;
  optC.textContent = pattern[currentQuestion - 1].optC;
  optD.textContent = pattern[currentQuestion - 1].optD;
  quesNo.textContent = `Question: ${currentQuestion}`;
};
loadQuestion();

function deselect() {
  answer.forEach((option) => (option.checked = false));
}

next.addEventListener("click", () => {
  answer.forEach((answer) => {
    if (answer.checked) {
      var correctAns = answer.id;

      if (pattern[currentQuestion - 1].Ans == correctAns) {
        mark = mark + 1;
        score.textContent = "Score: " + mark;
        score.style.backgroundColor = "green";
      } else {
        score.style.backgroundColor = "red";
      }
    }
  });
});
//Next
document.querySelector(".next").addEventListener("click", function () {
  if (currentQuestion < pattern.length) {
    previous.style.opacity = 1;

    if (!answer.forEach((option) => (option.check = false))) {
      loadQuestion();
    }
  }

  if (currentQuestion - 1 == pattern.length) {
    this.textContent = "Submit";
    this.style.backgroundColor = "green";
    this.style.border = "none";
  }
  console.log(currentQuestion, pattern.length);

  if (currentQuestion == pattern.length) {
    score.textContent = `Your score is ${mark}`;
    quesNo.style.display = "none";
    question.style.display = "none";
    score.classList.add("justify");

    document.querySelector(".select").style.display = "none";
    document.querySelector(".previous").style.display = "none";
    document.querySelector(".next").style.display = "none";
    document.querySelector(".buttons").style.display = "none";
    document.querySelector(".buttons").classList.add("justify");
    currentQuestion = 0;
  }

  currentQuestion++;
  loadQuestion();
});

//Previous
document.querySelector(".previous").addEventListener("click", function () {
  deselect();
  console.log(currentQuestion + ": " + pattern.length);

  if (currentQuestion > 0) {
    currentQuestion--;
    next.textContent = "next";
    next.style.backgroundColor = "#0d6efd";
    loadQuestion();
  }
  if (currentQuestion - 1 == 0) previous.style.opacity = 0.5;
  else previous.style.opacity = 1;
});

//mouseover
document.querySelectorAll(".option").forEach((el) => {
  el.addEventListener("mouseover", function () {
    //alert("Mouseover");
    this.style.backgroundColor = "green";
	this.style.color="white";
  });
});

//mouseout
document.querySelectorAll(".option").forEach((el) => {
  el.addEventListener("mouseout", function () {
    //alert("Mouseover");
    this.style.backgroundColor = "white";
	this.style.color="black"
  });
});
