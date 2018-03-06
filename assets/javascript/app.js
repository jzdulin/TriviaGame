//Questions
var triviaQuestions = [
    {
        question: "Which of the following is the fastest water animal?",
        answers: {
            a: 'Dolphin',
            b: 'Flying Fish',
            c: 'Sailfish',
            d: 'Salmon'
        },
        correctAnswer: 'c'
    },
    {
        question:"What is the largest living bird by wingspan?",
        answers: {
            a: 'Pelican',
            b: 'Wandering Albatross',
            c: 'Blue-footed booby',
            d: 'Pigeon'
        },
        correctAnswer:'b'
    },
    {
        question:"What is the color of a lobsters blood?",
        answers: {
            a: 'Blue',
            b: 'Green',
            c: 'Red',
            d: 'Black'
        },
        correctAnswer:'a'
    },
    {
        question:"Which of these snakes is the fastest on land?",
        answers: {
            a: 'Rattlesnake',
            b: 'Copperhead',
            c: 'Black mamba',
            d: 'Eastern hognose'
        },
        correctAnswer:'c'

    },
    {
        question:"Cynophobia is the fear of what kind of animal?",
        answers: {
            a: 'Dog',
            b: 'Snake',
            c: 'Cat',
            d: 'Crustacean'
        },
        correctAnswer:'a'

    },
    {
        question:"Which continent is the llama native to?",
        answers: {
            a: 'Europe',
            b: 'Asia',
            c: 'North America',
            d: 'South America'
        },
        correctAnswer:'d'
    },
    {
        question:"A flamboyance is a group of which animal?",
        answers: {
            a: 'Penguin',
            b: 'Eagle',
            c: 'Vulture',
            d: 'Flamingo'
        },
        correctAnswer:'d'
    },
    {
        question:"What is the proper term for a group of parrots?",
        answers: {
            a: 'Pandemonium',
            b: 'Flock',
            c: 'Annoying',
            d: 'A parrot party'
        },
        correctAnswer:'a',
    },
    {
        question:"What is the national animal of Scotland?",
        answers: {
            a: 'Sheep',
            b: 'Unicorn',
            c: 'Goat',
            d: 'Scottish terrier'
        },
        correctAnswer:'b',
    },
    {
        question:"How many hearts does an octopus have?",
        answers: {
            a: 'One',
            b: 'Two',
            c: 'Three',
            d: 'Four'
        },
        correctAnswer:'c'
    }   
];

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        
        //Creates a place to store the output and the answer choices
        var output = [];
        var answers;
        
        for(var i=0; i<questions.length; i++){
            
            answers = [];

            for(letter in questions[i].answers){

                //Adds a radio button for each answer choice
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="' + letter + '">' + letter + ': ' + questions[i].answers[letter]
                    + '</label>'
                );
            }

            //shoves the question and their answer choices into the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        //Turns the output into a single string
        quizContainer.innerHTML = output.join(' ');
    }

    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        var numIncorrect = 0;
        var numUnanswered = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){
    
            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                numCorrect++;
            }
            //if the answer was incorrect or unanswered
            else {
                numIncorrect++;
            }
        }
        // show number of correct answers out of total
        resultsContainer.innerHTML = "Number answered correctly: " + numCorrect + " Number answered incorrectly: " + numIncorrect;
    }

    showQuestions(questions, quizContainer);

    // //When the timer runs out of time it does this   
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var startButton = document.getElementById('start');

startButton.onclick = function(){
    //TIMER
    var timeLeft = 30;

    var display = document.getElementById("display");
    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft === -1) {
            clearInterval(timerId);
            endQuiz()

        } else {
            display.innerHTML = timeLeft + " seconds remaining";
            timeLeft--;
        }
        //When the timer expires, this happens
        function endQuiz() {
            // showResults(questions, quizContainer, resultsContainer);
            $("#results").html("I couldnt figure out how to get it so that it registered what numCorrect/numIncorrect were in the timer function. I think its because the timer is within the initial button function but isnt in my results function and I tried various things to try and fix it, but when I moved the timer function it always broke the Ready! button. Anyways this is how I would have gotten the webpage to switch from the quiz to the results. The button works fine, its just the timing out that I had issues with.")
            $("#results").html("Number answered correctly: " + numCorrect + " Number answered incorrectly: " + numIncorrect);
            // generateQuiz(questions, quizContainer, resultsContainer, submitButton)
        }
    }

    //Creates the quiz when Ready! Is clicked
    generateQuiz(triviaQuestions, quizContainer, resultsContainer, submitButton);

    var a = $("<button>");
    a.addClass("button");
    a.text("Finished!")
    $("#submit").append(a);
}


  