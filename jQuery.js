var playing = false;
var score;
var trialsleft;
var step;
var action;
var fruits = ['apple','banana','cherries','grapes','mangoe','orange','pear','pineapple','watermelon'];
$(function(){
    //click on start button
$("#startreset").click(function(){

    //we are playing
if(playing == true){
    //reload the page 
    location.reload();
}else{

    //we are not playing
 playing = true; // game initaited

 //set score to 0
 score = 0; 
 $("#scorevalue").html(score);
 
 //show trail left
 $("#trialsleft").show();
 trialsleft = 5;
 addhearts();

 $("#gameover").hide()

 //change button text to reset game
$("#startreset").html("Reset Game");
// stat sendinf fruits
startAction();
 }
});

$("#fruit1").mouseover(function(){
     score++;
     $("#scorevalue").html(score);
     $("#slicesound")[0].play();
     //stop fruit
     clearInterval(action);  

     //hide fruit
     $("#fruit1").hide("explode",500);

     //send new fruit
     setTimeout(startAction , 800);
    })
 //slice a fruit 
 // play sound
 //explode fruit 
 
function addhearts(){
    $("#trialsleft").empty();
    for(i = 0; i < trialsleft; i++) {
        $("#trialsleft").append('<img src="project/hearts.png" class = "life">');
    } 
} 


function startAction(){
    // genrate a fruit 
        $("#fruit1").show();
        choosefruit();
        $("#fruit1").css({'position': Math.round(400*Math.random()),'top':-40});
 
        //generate a random step
     step = 1+ Math.round(5*Math.random());

     //move fruit down by one step every 10ms
    action = setInterval(function(){

        //move fruit by one step
        $("#fruit1").css('top',$("#fruit1").position().top + step);

        //check if fruit is too low
        if($("#fruit1").position().top > $("#fruitcontainer").height()){
            //check if we have trails left
        if(trialsleft > 1){
            //generate a fruit
            $("#fruit1").show();
            choosefruit();
            $("#fruit1").css({'left': Math.round(100*Math.random()),'top': -40});
     
            //generate a random step
         step = 1+ Math.round(5*Math.random());
         
        //reduce trails by one
        trialsleft --;
        

        // populate trials left box
        addhearts();
        
        }else{
                //game over
              playing = false;
              $("#startreset").html("Start Game");
              $("#gameover").show();
              $("#gameover").html('<p> GAME OVER!</p><p>Your Score is '+ score +'</p>');
             $("#trialsleft").hide();
              stopAction();
              }
        }
    }, 20);
}  

// generate a random fruit
function choosefruit(){
$("#fruit1").attr('src' , 'project/' + fruits[Math.round(8*Math.random())]+'.png');
}

 // stop dropping fruit


function stopAction(){
    clearInterval(action);
    $("#fruit1").hide()
}
});
