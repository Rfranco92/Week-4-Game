var wins = 0;
$("#wins").text(wins); 
var losses = 0;
$("#losses").text(losses);


var targetNumber = Math.floor(Math.random()*101)+19;
$("#number-to-guess").text(targetNumber);
var counter = 0;
$("#score-number").text(counter)


    var redCrystal = $("<img>");
    redCrystal.addClass("crystal-image");
    redCrystal.attr("src", "./assets/images/redcrystal.jpg");
    redCrystal.attr("data-crystalvalue", Math.floor(Math.random()*12)+1);
    $("#redcrystal").append(redCrystal);

    var blueCrystal = $("<img>");
    blueCrystal.addClass("crystal-image");
    blueCrystal.attr("src", "./assets/images/bluecrystal.jpg");     
    blueCrystal.attr("data-crystalvalue", Math.floor(Math.random()*12)+1);
    $("#bluecrystal").append(blueCrystal);

    var yellowCrystal = $("<img>");
    yellowCrystal.addClass("crystal-image");
    yellowCrystal.attr("src", "./assets/images/yellowcrystal.jpg");
    yellowCrystal.attr("data-crystalvalue", Math.floor(Math.random()*12)+1);
    $("#yellowcrystal").append(yellowCrystal);
    
    var greenCrystal = $("<img>");
    greenCrystal.addClass("crystal-image");
    greenCrystal.attr("data-crystalvalue", Math.floor(Math.random()*12)+1);
    greenCrystal.attr("src", "./assets/images/greencrystal.jpg");
    $("#greencrystal").append(greenCrystal);      
    

  function reset(){
    targetNumber = Math.floor(Math.random()*101)+19;
    $("#number-to-guess").html(targetNumber);
    counter = 0;
    $("#score-number").html(counter);

    redCrystal.attr("data-crystalvalue", Math.floor(Math.random()*11)+1);
    $("redcrystal").append(redCrystal);
  
    blueCrystal.attr("data-crystalvalue", Math.floor(Math.random()*11)+1);
    $("bluecrystal").append(blueCrystal);

    greenCrystal.attr("data-crystalvalue", Math.floor(Math.random()*11)+1);
    $("greencrystal").append(greenCrystal);

    yellowCrystal.attr("data-crystalvalue", Math.floor(Math.random()*11)+1);
    $("yellowcrystal").append(yellowCrystal);
    }


  $(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#score-number").html(counter);

    if (counter === targetNumber) {
      alert("You win!");
      wins++;
      $("#wins").html(wins);
      reset();
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
      losses++;
      $("#losses").html(losses);
      reset();
    }

  });