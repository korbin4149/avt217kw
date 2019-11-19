 $(document).ready(function() {
   var colorArray = ["52","22"];
 	 var randomNumber = Math.floor(Math.random() * colorArray.length);
   var number = colorArray[randomNumber].toLowerCase();
  	console.log(number);
  	var guesses = '';
  	$('#submit').click(function() {
  	 	var guess = $('input').val();
  	 	guesses += guess + ' ';
  	 	$('.guesses p').text(guesses);
  		console.log(guess);
  		if (number == guess) {
  			$('h1').text(number + ' is right!');
  			$('input').val('');
  		} else if (number < guess) {
  			$('h1').text(guess + ' is too high');
  			$('input').val('')
  		} else {
  			$('h1').text(guess + ' is too low');
  			$('input').val('');
  		}
  	});
    $(document).keypress(function(e){
        if(e.which == 13){ //Enter key pressed
            $('#submit').click();//Trigger button click event
        }
    });
});
