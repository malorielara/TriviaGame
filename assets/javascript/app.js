// start
$(document).on("click", "#start", function () {
    triviaGame.start();
});

// done
$(document).on("click", "#done", function () {
    triviaGame.done();
});

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
}];

var timer;

var triviaGame = {
    correct: 0,
    incorrect: 0,
    counter: 120,

    countdown: function () {
        // counting down 
        triviaGame.counter--;
        if (triviaGame.counter == 0) {
            console.log("TIME UP!");
        }
        // once time is up, game is over
        game.done();
    },
    // start function
    start: function () {
        timer = setInterval(triviaGame.counter, 1000);

        // TODO: add 'time remaining'

        // this did not work
        // created errors in the code and stopped all running
        // var timer = new Timer();
        // timer.start({
        //     countdown: true,
        //     startValues: {
        //         seconds: 30
        //     }
        // });
        // $('#countdownExample .values').html(timer.getTimeValues().toString());
        // timer.addEventListener('secondsUpdated', function (e) {
        //     $('#countdownExample .values').html(timer.getTimeValues().toString());
        // });
        // timer.addEventListener('targetAchieved', function (e) {
        //     $('#countdownExample .values').html('KABOOM!!');
        // });

        // adds the timer above the questions with 120 seconds to start
        $("#sub-wrapper").prepend("<h2>Time Remaining: <span id = 'count'>120</span> Seconds left..</h2>")
        

        // removes the start button after clicked
        $("#start").remove();

        for (var i = 0; i < questions.length; i++) {
            panel.append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                panel.append("<input type = 'radio' name = 'questions'" + i + 
                "'value = '" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
            }
            // done button after every question.. 
            //how to get rid of this and just make one at the end??
            // panel.append("<button id = 'done'>DONE</button>");
        }
        // this goes here..
        panel.append("<button id = 'done'>DONE</button>");
    },

    // done function
    // if value entered equals the correct answer then add to correct talley
    // otherwise, add to the incorrect count if wrong
    done: function () {
        
        // for question 1
        if ($(this).val() == questions[0].correct) {
            triviaGame.correct++;
        } else {
            triviaGame.incorrect++;
        };

        // question 2
        if ($(this).val() == questions[1].correct) {
            triviaGame.correct++;
        } else {
            triviaGame.incorrect++;
        };
        
        // question 3
        if ($(this).val() == questions[2].correct) {
            triviaGame.correct++;
        } else {
            triviaGame.incorrect++;
        };

        // question 4
        if ($(this).val() == questions[3].correct) {
            triviaGame.correct++;
        } else {
            triviaGame.incorrect++;
        };

        // question 5
        if ($(this).val() == questions[4].correct) {
            triviaGame.correct++;
        } else {
            triviaGame.incorrect++;
        };

        // question 6
        if ($(this).val() == questions[5].correct) {
            triviaGame.correct++;
        } else {
            triviaGame.incorrect++;
        };

        // question 7
        if ($(this).val() == questions[6].correct) {
            triviaGame.correct++;
        } else {
            triviaGame.incorrect++;
        };

        // question 8
        if ($(this).val() == questions[7].correct) {
            triviaGame.correct++;
        } else {
            triviaGame.incorrect++;
        };

        this.results();
    },

    // shows results
    // shows how many questions answered right and wrong
    results: function () {
        clearInterval(timer);

        panel.html("<h2>CONGRATS! All done!</h2>");
        panel.append("<h3>Correct answers: " + this.correct + "</h3>");
        panel.append("<h3>Wrong ansers: " + this.incorrect + "</h3>");
    }


}