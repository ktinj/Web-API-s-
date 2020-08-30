// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices"); 
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");


start.addEventListener("click", startQuiz);

function startQuiz() {
  startBtn.onclick = startQuiz;
  // hide start screen
  start.style.display = "none";
}
    // start timer
function renderTime() {
  time.setInterval(timerRender,1000);
}
function renderProgress(){
  for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
      progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
  }
}
// ask a question
function getQuestion() {
  let q = questions[runningQuestion];
  question.innerHTML = "<p>" + q.question +"</p>";
choiceA.innerHTML = q.choiceA;
choiceB.innerHTML = q.choiceB;
choiceC.innerHTML = q.choiceC;
choiceD.innerHTML = q.choiceD;
}

    // create new button for each choice
    var btn = document.createElement("A");
    var btn = document.createElement("B");
    var btn = document.createElement("C");
    var btn = document.createElement("D");

function checkAnswer(answer) {
  if(answer == questions[runningQuestion].correct){
    score++;
    answerIsCorrect(); }
    else {
    answerIsWrong(); }
    count = 0;
    if(runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
clearInterval(TIMER);
scoreRender();
    }
    
  }
    // penalize time

    // display new time on page

    // play "wrong" sound effect

  // else 
    // play "right" sound effect

  // flash right/wrong feedback on page for half a second

  // move to next question

  // check if we've run out of questions
    // quizEnd
  // else 
    // getQuestion

// end quiz
function quizEnd() {
  clearInterval(TIMER);
  scoreRender();
}
  // stop timer

  // show end screen

  // show final score

  // hide questions section

function clockTick() {
  // update time
const questionTime = 10;
let count = 0,
  // check if user ran out of time
  if(count <= questionTime){
    counter.innerHTML = count;
    }
    else {
      count = 0;
      answerIsWrong();
      if(runningQuestionIndex < lasQuestionIndex){
        runningQuestionIndex++;
        renderQuestion();
      } else {
        clearInterval(timer);
        scoreRender();
      }
      let timer = setInterval(clockTick,1000);
    }
    
}

function saveHighscore() {
  // get value of input box

  // make sure value wasn't empty
    // get saved scores from localstorage, or if not any, set to empty array

    // format new score object for current user

    // save to localstorage

    // redirect to next page
}

function checkForEnter(event) {
  // check if event key is enter
    // saveHighscore
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
// 

// initialsEl.onkeyup = checkForEnter;
