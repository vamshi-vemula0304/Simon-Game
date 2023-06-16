const buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
function nextSequence(){
    level=level+1;
    $("#level-title").html("Level "+level)
    return Math.floor(Math.random()*4)
}

document.addEventListener("keypress",function(){
    if (gamePattern.length===0){
    var randomChosenColor=buttonColours[nextSequence()]
    gamePattern.push(randomChosenColor)
    console.log("1st pattern is "+gamePattern)
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);}
})

$(".btn").on("click", function(){
    var userChosenColour=this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour)
    animatePress(userChosenColour)
    checkAnswer(userClickedPattern.length-1);
})

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        console.log("successsś ")
        console.log("user clicked pattern "+userClickedPattern)
        console.log("game pattern "+gamePattern)
        var gamePatternLength=gamePattern.length
        if (gamePatternLength===currentLevel+1){
            // console.log("gamePatternLength is  "+ gamePatternLength)
            // console.log("level is ")
            userClickedPattern=[];
            var delayInMilliseconds = 1000; //1 second
            setTimeout(function() {
                var randomChosenColor=buttonColours[nextSequence()]
                gamePattern.push(randomChosenColor)
                $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
                console.log("game pattern " +gamePattern)
                //your code to be executed after 1 second
            }, delayInMilliseconds);
        }
        
    }
    else{
        $("#level-title").html("Game Over, Press Any Key to Restart")
        $('body').addClass("game-over")
        var delayInMilliseconds = 200; //0.2 second
            setTimeout(function() {
                $('body').removeClass("game-over")
                //your code to be executed after 0.2 second
            }, delayInMilliseconds);
        gamePattern=[];
        userClickedPattern=[]
        level=0;
    }
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(currentColor){
    var classesList = $("#"+currentColor)
    classesList.addClass("pressed")
    var delayInMilliseconds = 90; //0.09 second
    setTimeout(function() {
        classesList.removeClass("pressed")
        //your code to be executed after 0.09 second
    }, delayInMilliseconds);
}
// var audio = document.createElement("AUDIO")
// document.body.appendChild(audio);
// audio.src = "sounds/blue.mp3"
// audio.play()

