const Questions = [{
    id: q0,
    q: "I am tall when I am young, and short when I am old. What am I?",
    a: [{ text: "candle", isCorrect: true }]

},
{
    id: q1,
    q: "what month of the year has 28 days?",
    a: [{ text: "all of them", isCorrect: true}]

},
{
    id: q2,
    q: "what is full of holes but still holds water?",
    a: [{ text: "sponge", isCorrect: true }]
},
{
    id: q3, 
    q: 'how many capitals are in the U.S.?',
    a:[{ text: "51", isCorrect: true}]
},
{
    id: q4, 
    q: 'What can you keep after giving to someone?',
    a:[{ text: "your word", isCorrect: true}]
},
{
    id: q5, 
    q: 'I have branches, but no fruit, trunk, or leaves. what am I?',
    a:[{ text: "a bank", isCorrect: true}]
},
{
    id: q6, 
    q: "what can't talk but will reply when spoken to?",
    a:[{ text: "An echo", isCorrect: true}]
},
{
    id: q7, 
    q: 'The more of this there is, the less you see. What is it?',
    a:[{ text: "darkness", isCorrect: true}]
},
{
    id: q8, 
    q: "David's parents have three sons: Snap, Crackle, and what is the third sons name?",
    a:[{ text: "David", isCorrect: true}]
},
{
    id: q9, 
    q: 'I follow you all the time and copy your every move, but you cannot touch me or catch me. What am I?',
    a:[{ text: "Shadow", isCorrect: true}]
},
{
    id: q10, 
    q: 'What has many keys but cannot open a single lock?',
    a:[{ text: "a piano", isCorrect: true}]
},


]


const q0 = document.getElementById('q0');
const clone = q0.cloneNode(true);
clone.id = 'clone-q0';

const q1 = document.getElementById('q1');
const clone = q1.cloneNode(true);
clone.id = 'clone-q1';

const q2 = document.getElementById('q2');
const clone = q2.cloneNode(true);
clone.id = 'clone-q2';

const q3 = document.getElementById('q3');
const clone = q3.cloneNode(true);
clone.id = 'clone-q3';

const q4 = document.getElementById('q4');
const clone = q4.cloneNode(true);
clone.id = 'clone-q4';

const q5 = document.getElementById('q5');
const clone = q5.cloneNode(true);
clone.id = 'clone-q5';

const q6 = document.getElementById('q6');
const clone = q6.cloneNode(true);
clone.id = 'clone-q6';

const q7 = document.getElementById('q7');
const clone = q7.cloneNode(true);
clone.id = 'clone-q7';

const q8 = document.getElementById('q8');
const clone = q8.cloneNode(true);
clone.id = 'clone-q8';

const q9 = document.getElementById('q9');
const clone = q9.cloneNode(true);
clone.id = 'clone-q9';

const q10 = document.getElementById('q10');
const clone = q10.cloneNode(true);
clone.id = 'clone-q10';

document.body.appendChild(clone);

let start = true;

function iterate(id) {

let result = document.getElementsByClassName("result");
result[0].innerText = "";

const question = document.getElementById("question");

question.innerText = Questions[id].q;

const op1 = document.getElementById('op1');


op1.innerText = Questions[id].a[0].text;

op1.value = Questions[id].a[0].isCorrect;

function showResults(questions, quizContainer, resultsContainer){

let answerContainers = quizContainer.querySelectorAll('.answers');

let userAnswer = '';
let numCorrect = 0;

for(let i=0; i<questions.length; i++){

    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

    if(userAnswer===questions[i].correctAnswer){

        numCorrect++;

        answerContainers[i].style.color = 'lightgreen';
    }
    else{
        answerContainers[i].style.color = 'red';
    }
}

resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}}