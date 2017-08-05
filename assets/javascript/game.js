// <script type="text/javascript">
// first the user should make a choice
//second the computer should make a choice
//capture the choice of the user and capture the choice of the computer
//compare the choices and determine a win, loss or tie
//display the result to the user
	
	var options_one = ["t","r","a","i","n"];
	var options_two = ["k","e","n","a","n","d","p","a","t"];
	var options_three = ["b","i","g","s","e","a","n"];

	var wins = 0;
	var losses = 0;
	var guess = 0;
	var answerArray = [];



 function getletters(){ 	// a function that randomly picks a word from the array and t
    	
    	for (var i = 12; i > 0; i--) {	// a forLoop that runs a cycle for each letter in the word.
    			var count = i--;
    			document.onkeyup = function(){
					alert("Start guessing the letters to form the name of the band");

					var userguess = String.fromCharCode(event.keyCode).toLowerCase();// is handling user error just to make sure only the lower case is given to the computer.
					
					document.getElementById("userguess").innerHTML= answerArray;
					// document.getElementById("userguess").innerHTML= answerArray.join(" ");	// puts the word chosen into the html
						console.log(userguess);
		      			
		      			answerArray[i] = "_";	// fills the answer array with an underscore to represent each letter in the word.
		    			
						   	document.getElementById("i").innerHTML = count;	
						   	document.getElementById("userguess").innerHTML = " ";
						   	document.getElementById("i").innerHTML = count;		//puts the countdown varaible into the html
						   	document.getElementById("userguess").innerHTML = " ";		// puts the player guess into the html
    	}

									var computerGuess = options_one["t","r","a","i","n"];
									console.log(computerGuess);

									var computerGuess = options_two["k","e","n","a","n","d","p","a","t"];
									console.log(computerGuess);

									var computerGuess = options_three["b","i","g","s","e","a","n"];
									console.log(computerGuess);

						 
  							function guessIt() {	// a function that reacts to a players input
  	    
				  	    			if (showThisMessage === "") {	// if the showthismessage varaible is exactly equal to a wrong letter
							  	       	count;
							 	   		document.getElementById("i").innerHTML = count;	
							 	   		count;	// subtracts one from the number of gusses left
							 	   		document.getElementById("i").innerHTML = count;		//updates in html the change to the countdown variable
							  	    }
				  
				 	    			if (remaining_letters == 0) {

								 	    if (remaining_letters == 0) {	//and if statement that takes the remaining leters count and compares it to 0
								  	    	wins ++;		// increases the win counter by 1
								  	    	var html = "<p> Wins: " + wins + "</p>" + "<p> Losses: " + losses + "</p>";	// takes the wins and losses variables and creates a format that will fit in to the html
								  			document.querySelector ("#game").innerHTML = html;	// calls the location to display created html
								  	    }
				  
										 	    if (countdown == 0) {
										 	    	// showthismessage = "Awww dag, you lose. The word was " + word + "!";	//distplays a message saying that you have lost and also showing you the solution
										 			losses ++;

													 	    if (countdown == 0) {	// an if statement that takes the countdown variable and compares it to 0 acts if they are equal
													 			losses ++;	// adds one to the losses variable
													  	   		var html = "<p> Wins: " + wins + "</p>" + "<p> Losses: " + losses + "</p>";	// takes the wins and losses variables and creates a format that will fit in to the html
													  			document.querySelector ("#game").innerHTML = html;	// calls the location to display created html
													 	    	quit();
													 	    	quit(); 	//triggers the quit function
													 	    }

				 
													document.getElementById("userguess").innerHTML = answerArray.join(" ");  // displays a new selection from the array when refreshed 
													document.getElementById("guess").value = "";	//clears the text entry field after a guess is processed
												}

				 											document.getElementById("message").innerHTML = showThisMessage;		//defines the place in the html to display the messages
				 					}
 					}
 
					function quit() {	// a function that acts when you press the quit button
					 		
					 		document.getElementById("message").innerHTML = "Quit the game ?" ; //distplays a message saying that you have lost and also showing you the solution
							if (message = true){
								alert("Thank you for playing the game");
								// exit;
							}
							elseif (userguess== options_one || userguess== options_two || userguess== options_three) {

							if((userguess=="t","r","a","i","n") && (computerGuess=="t","r","a","i","n")) {
								wins++;
							}
							else {
								losses++;
							}

							if((userguess=="k","e","n","a","n","d","p","a","t") && (computerGuess=="k","e","n","a","n","d","p","a","t")) {
								wins++;
							}
							else {
								losses++;
							}

							if((userguess=="b","i","g","s","e","a","n") && (computerGuess=="b","i","g","s","e","a","n")) {
								wins++;
							} 

							else{
								losses++;
							}
					} else {
				alert("Please press a letter from the keyboard");
		}

		function display(){
			//if a win and complete name of the band, then display the band image
			//play the band song
			//write the band name between the jumbotron but in the other side of the container


		}

		var html = "<h1> Hangerman Song Game </h1>" + "<p> Current Word : " + computerGuess + "</p>" + "<p> Number of guesses remainig : " + count + "</p>" 
		+ "<p> Letters already guessed " + userguess + "</p>" + "<p> Wins: " + wins + "</p>" + "</p>" + "<p> losses: " + losses + "</p>";;

		document.querySelector('#game').innerHTML = html;
	}


	
