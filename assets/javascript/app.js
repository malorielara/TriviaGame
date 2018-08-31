var panel = $("#quiz-part");

// questions asked
var questions = [{
    question: "Who is not a character in Friends?",
    answers: ["Phoebe", "Rachel", "Ross", "Karen"],
    correctanswer: "Karen"
}, {
    question: "Who has a twin?",
    answers: ["Ross", "Joey", "Phoebe", "Chandler"],
    correctanswer: "Pheobe"
}, {
    question: "What is Monica's apartment number?",
    answers: ["20", "21", "6", "13"],
    correctanswer: "20"
}, {
    question: "What is the name of Ross's monkey?",
    answers: ["Max", "Joey", "Marcel", "Martin"],
    correctanswer: "Marcel"
}, {
    question: "What was Rachel's first job?",
    answers: ["Assistant", "Waitress", "Barista", "Chef"],
    correctanswer: "Waitress"
}, {
    question: "Who had a child together?",
    answers: ["Ross and Rachel", "Joey and Monica", "Chandler and Rachel", "Joey and Rachel"],
    correctanswer: "Ross and Rachel"
}, {
    question: "Who is the sole owner of the chick and duck?",
    answers: ["Pheobe", "Monica", "Chandler", "Joey"],
    correctanswer: "Joey"
}, {
    question: "How many total seasons of Friends?",
    answers: ["12", "14", "10", "8"],
    correctanswer: "10"
}
];

var timer;
var triviaGame = {
    correct: 0,
    incorrect: 0,
    counter: 120,

    countdown: function() {
        triviaGame.counter--;
        if(triviaGame.counter == 0) {
            console.log("TIME UP!");
        }
        game.done();

        start: function() {
            timer = setInterval(triviaGame.counter);
        }


    }
}