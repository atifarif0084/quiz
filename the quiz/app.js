const question [
    { question : "What country has the highest life expectancy?"
        answer : [
            {text : "Sydne",correct : false},
            {text : "Dubai",correct : false},
            {text : "Hong Kong",correct : true},
            {text : "Bangkock",correct : false},
        ]
},
    { question : "Where would you be if you were standing on the Spanish Steps?"
        answer : [
            {text : "Span",correct : false},
            {text : "Rome",correct : true},
            {text : "Itly",correct : false},
            {text : "Franch",correct : false},
        ]
},
    { question : "Which language has the more native speakers?"
        answer : [
            {text : "English",correct : false},
            {text : "Russian",correct : false},
            {text : "Chanies",correct : false},
            {text : "Spanish",correct : true},
        ]
},
    { question : "What is the most common surname in the United States?"
        answer : [
            {text : "Smith",correct : true},
            {text : "John",correct : false},
            {text : "Peter",correct : false},
            {text : "Rocky",correct : false},
        ]
},
]

const questionElement = document.getElementById ("question");
const answerBtn = document.getElementById ("answer");
const nextBtn = document.getElementById ("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question
}