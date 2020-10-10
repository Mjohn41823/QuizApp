const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const counterDisplayElem = document.querySelector('counter-display');
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const resultsContainer = document.getElementById('results');
let countRightAnswers = 0;
let currentQuestion = 1;
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  render();
currentQuestion++; 
  document.getElementById('current-question').innerHTML = currentQuestion;


})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - 1)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  render()

  currentQuestion = 1;
 
  countRightAnswers = 0;

   


}

function render() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}
function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add()
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  if (selectedButton.dataset = correct) {
    countRightAnswers++;
     }
     document.getElementById('right-answers').innerHTML = countRightAnswers;
  }


if (selectedButton.dataset = correct) {
    countRightAnswers++; 
  }

  
  

}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}





const questions = [
  {
    question: ' Question 5: What is the stock symbol for Google?',
    answers: [
      { text: 'GOOG', correct: true },
      { text: 'NIO', correct: false },
      { text: 'KO', correct: false },
      { text: 'They do not have one', correct: false }
    ]
  },
  {
    question: 'Question 4: How many stocks are on the S&P 500?',
    answers: [
      { text: '550', correct: false },
      { text: '500', correct: true },
      { text: '100', correct: false },
      { text: '5000', correct: false }
    ]
  },
  {
    question: 'Question 3: What is the stock symbol for Coke?',
    answers: [
      { text: 'KO', correct: true },
      { text: 'CO', correct: false },
      { text: 'PEP', correct: false },
      { text: 'They do not have one', correct: false }
    ]
  },
  {
    question: 'Question 2: What does P/E stand for?',
    answers: [
      { text: 'Price to Earnings', correct: true },
       { text: 'Price to sales', correct: false },
        { text: 'Price to Price', correct: false },
         { text: 'I have no idea', correct: false },
    ]
  },
  {
    question: 'Question 1: What is a mutual fund?',
    answers: [
      { text: 'A basket of stocks', correct: true },
       { text: 'One stock of a company', correct: false },
        { text: 'A bond', correct: false },
         { text: 'I have no idea', correct: false },
    ]
  }]
  /**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
