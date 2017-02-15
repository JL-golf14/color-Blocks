$(document).ready(function(){

  // var newButton = $('<button></button>');
  // $('#1').append().css('background-color','blue');
  // $('#2').append().css('background-color','red');
  // $('#3').append().css('background-color','yellow');
  // $('#4').append().css('background-color','green');
  // $('body').append(newButton);
  var color = ["Red", "Blue", "Green", "Yellow"];
  for (var i = 0; i < 4; i++) {

    var newButton = $('<button></button>');
    $('body').append(newButton);
    newButton.data('idNumber', i);
    newButton.css('background-color',color[i]);
    newButton.css('height:"300px"');
    newButton.text(".         .");
    console.log(newButton);

  };
  function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
  };
  //

  var random = randomNumber(0,3);
  $('h3').append("Click the  " + color[random] + "!!!");

  $('button').on('click', function(){

    if ($(this).data().idNumber == random)
    {
      $('h2').text("You guessed it Right!!!");
      random = randomNumber(0,3);
      $('h3').text("Click the  " + color[random] + "!!!");

    } else { $('h2').text("Wrong");

  }

  // function randomNumber(min, max){
  //   return Math.floor(Math.random() * (1 + max - min) + min);
  // };

  console.log(randomNumber(1,4));



});
});
