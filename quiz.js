function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;

	var correct = 0;


	if (question1 == "Lawrence") {
		correct++;
}
	if (question2 == "DE") {
		correct++;
}	
	if (question3 == "Steak") {
		correct++;
    }
    if (question4 == "Red") {
		correct++;
    }
    if (question5 == "69") {
		correct++;
    }
    if (question6 == "Wisconsin") {
        correct++;
    }
    if (question7 == "'Yesterday' by The Beatles") {
		correct++;
    }

  
	
	var messages = ["Good Job Mate", "That's not good enough.", "How do you not know anything about our Computer Science Teacher?"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct <7) {
		score = 1;
	}

	if (correct ==7) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";

	}