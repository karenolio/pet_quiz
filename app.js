$(document).ready(function() {

$(".box").hide();
$(".answer").hide();
$("#makeyourguess").hide();
$(".submitButton").hide(); 
$(".question_wrapper").hide();
$(".answer_holder").hide();


//Intro PAGE
$('#start').on('click', function(){
      console.log("start button functions");
   
      $('#getStarted').hide();
      q1Appear();
});

//WHAT'S WRONG WITH THE IMAGES? SHOULD I PULL THEM OUT AND HANDLE SEPARATELY? LOOK AT VIDEO GAME QUIZ?

function Question (question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

var q1 = new Question(
    <img ="corbin.gif">,
    ["Corbin", "Dorbin", "Corgelicious", "CorgBorg"],
    0
);

var q2 = new Question(
    <img ="maru.gif">,
    ["Machu", "Mongu", "Mango", "Maru"],
    3
);

var q3 = new Question(
    <img ="boo.gif">,
    ["Bim", "Biddy", "Bop", "Boo"],
    3
);

var q4 = new Question(
    <img ="grumpy.gif">,
    ["Grump", "Grumpie", "Grumpy", "Nan"],
    2
);

var q5 = new Question(
    <img ="biddy.gif">,
    ["Boddy", "Biddy", "Boo", "Bitty"],
    1
);

var Question = [q1, q2, q3, q4, q5]; 

var currentQuestion = 0;

////////////////////////////////////////////////////////////

function nextQuestion() {
    if (currentQuestion < 5) {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
            
            var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br>
            <div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br>
                <input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br>
                <input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br>
                <input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br>
            </div>
                    
            <div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
           
            $("#question_wrapper").html(newQuestion);

        
        else {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
            $("#submit").css("display", "none");
            $("#retry_button").css("display", "inline");
            var lastFact= questions[currentQuestion-1].fact;
            $("#last_question_fact").html(lastFact);
            if (numberCorrect == 1) {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' question.'
                $("#answer_holder").html(finalScore);
            }
        
        else {
            var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' questions.'
            $("#answer_holder").html(finalScore);
            }
        }
    }

///////////////////////////////////////////////

 $("#question_wrapper").on("click", "#submit", function () {
        currentQuestion++;
        nextQuestion();
    });

$("#question_wrapper").on("click", "#retry_button", function () { //PUT RETRY BUTTON IN; has ans holder stuff so I included
        numberCorrect = 0;
        currentQuestion = 0;
    
        var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br>
       
        <div id="answer_holder">
            <input type="radio" name="option" class="option" value="0">
                <span class="answer">'+questions[currentQuestion].choices[0]+'</span><br>
            <input type="radio" name="option" class="option" value="1">
                <span class="answer">'+questions[currentQuestion].choices[1]+'</span><br>
            <input type="radio" name="option" class="option" value="2">
                <span class="answer">'+questions[currentQuestion].choices[2]+'</span><br>
            <input type="radio" name="option" class="option" value="3">
                <span class="answer">'+questions[currentQuestion].choices[3]+'</span><br>
        </div>
                        
        <div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!">
        </div>';
                        
        $("#question_wrapper").html(newQuestion);
    });

////////////////////////////////////////////check answer - POPUP

function checkAnswer(question, answer) { //can i also use function checkAnswer () {} or do i have to name the parameter here?

    if (question == "q1" && correctAnswer == 0) {
        console.log("You're Right!");
        clearScreen();
        q1Clear();
        $('#correct').css({'display':'inline-block'});    
    }
    
    else {
        clearScreen();
        q1Clear();
        $("#incorrect").css({'display':'inline-block'});    
    }    
    
    //IF THIS FIRST ONE WORKS, THEN FINISH CODING THE REST, IT'S THE SAME UNTIL Q5

    else {

    }
};

$(".submitButton").on('click', function(){ //don't get this 100%
    console.log("in submit");
    
    $(this).css({'background-color':'#445155'})

    console.dir($('.selectedAnswer')[0]);

    var questionNumber = $('.selectedAnswer')[0].parentElement.id;
    var questionAnswer = $('.selectedAnswer')[0].getAttribute("name");
    
    checkAnswer(questionNumber, questionAnswer);
});

$(".continue").click(function(){
    $('#incorrect').css({'display':'none'});
    $('#correct').css({'display':'none'});

});

});
