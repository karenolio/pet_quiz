$(document).ready(function() {

$(".box").hide(); //box holds gif
$(".answers").hide();
$("#makeyourguess").hide();
$(".submitButton").hide(); 
$(".question_wrapper").hide(); // holds gif?
$(".answer_holder").hide(); //holds answers 


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
    '<img src="corbin.gif" alt="Vacuum dog" width="100%" height="40%">',
    ["Corbin", "Dorbin", "Corgelicious", "CorgBorg"],
    0
);

var q2 = new Question(
    '<img src="maru.gif" alt="box cat" width="100%" height="40%">',
    ["Machu", "Mongu", "Mango", "Maru"],
    3
);

var q3 = new Question(
    '<img src="boo.gif" alt="dog bear" width="100%" height="40%">',
    ["Bim", "Biddy", "Bop", "Boo"],
    3
);

var q4 = new Question(
    '<img src="grumpy.gif" alt="angry cat" width="100%" height="40%">',
    ["Grump", "Grumpie", "Grumpy", "Nan"],
    2
);

var q5 = new Question(
    '<img src="biddy.gif" alt="hedgehog" width="100%" height="40%">',
    ["Boddy", "Biddy", "Boo", "Bitty"],
    1
);

var questions = [q1, q2, q3, q4, q5]; 

var currentQuestion = 0;

////////////////////////////////////////////////////////////

function nextQuestion() {
    if (currentQuestion < 5) {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
            
            var newQuestion = '<span class="question">'+questions[currentQuestion].question'</span><br>
            <div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].answers[0]+'</span><br>
                <input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].answers[1]+'</span><br>
                <input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].answers[2]+'</span><br>
                <input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].answers[3]+'</span><br>
            </div>
                    
            <div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
           
            $("#question_wrapper").html(newQuestion);

        
        else {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
            $("#submit").css("display", "none");
            $("#retry_button").css("display", "inline");
            
            if (numberCorrect == 1) {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' question.'
                $("#answer_holder").html(finalScore);
            }
        }
    }
///////////////////////////////////////////////
 //$("#question_wrapper").on("click", "#submit", function () {
        currentQuestion++;
        nextQuestion();
   // });

$("#question_wrapper").on("click", "#retry_button", function () { //PUT RETRY BUTTON IN; has ans holder stuff so I included
        numberCorrect = 0;
        currentQuestion = 0;
    
        var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br>
       
        <div id="answer_holder">
            <input type="radio" name="option" class="option" value="0">
                <span class="answer">'+questions[currentQuestion].answers[0]+'</span><br>
            <input type="radio" name="option" class="option" value="1">
                <span class="answer">'+questions[currentQuestion].answers[1]+'</span><br>
            <input type="radio" name="option" class="option" value="2">
                <span class="answer">'+questions[currentQuestion].answers[2]+'</span><br>
            <input type="radio" name="option" class="option" value="3">
                <span class="answer">'+questions[currentQuestion].answers[3]+'</span><br>
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

//    var questionNumber = $('.selectedAnswer')[0].parentElement.id;
//    var questionAnswer = $('.selectedAnswer')[0].getAttribute("name");
    
    checkAnswer(questionNumber, questionAnswer);
});

/////////kinda repetitive 

function q2Appear (){
    $(".box").css({'opacity':'1'});
    $(".box").show(); 
    $("#secondQuestion").show();
    $(".q2").show(); 
    $(".submitButton").show();
    $("#makeyourguess").show();
};

function q3Appear (){
    $(".box").css({'opacity':'1'});
    $(".box").show(); 
    $("#secondQuestion").show();
    $(".q3").show(); 
    $(".submitButton").show();
    $("#makeyourguess").show();
};

function q4Appear (){
    $(".box").css({'opacity':'1'});
    $(".box").show(); 
    $("#secondQuestion").show();
    $(".q4").show(); 
    $(".submitButton").show();
    $("#makeyourguess").show();
};

function q5Appear (){
    $(".box").css({'opacity':'1'});
    $(".box").show(); 
    $("#secondQuestion").show();
    $(".q5").show(); 
    $(".submitButton").show();
    $("#makeyourguess").show();
};


$(".continue").click(function(){
    $('#incorrect').css({'display':'none'});
    $('#correct').css({'display':'none'});


    if ($('.unAnswered').length == 4){
        q2Appear();
    }

    else if ($('.unAnswered').length == 3){
        q3Appear();
    }

   else if ($('.unAnswered').length == 2){
        q4Appear();
    }
   else if ($('.unAnswered').length == 1){
        q5Appear();
    }

    else {

    }
};  

});
