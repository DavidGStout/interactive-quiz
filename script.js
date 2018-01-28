var questions = [{
	question: "What street had the first traffic light in the world?",
	choices: ["Superior", "East 105", "Carnegie", "Euclid"],
	correctAnswer: 2
}, {
	question: "How many games were sold out in a row at Jacobs Field?",
	choices: ["63", "351", "455", "682"],
	correctAnswer: 3
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {
	displayCurrentQuestion();
	$(this).find(".quizMessage").hide();
	$(this).find(".nextButton").on("click", function () {
		if(!quizOver) {
			value = $("input[type='radio']:checked").val();
			if (value == undefined) {
				$(document).find(".quizMessage").text("Please select an answer");
				$(document).find(".quizMessage").show();
			} else {
				$(document).find(".quizMessage").hide();
				if (value == questions[currentQuestion].correctAnswer) {
					correctAnswers++;
				}
				currentQuestion++;
				if (currentQuestion < questions.length) {
					displayCurrentQuestion();
				}else {
					displayScore();
					$(document).find(".nextButton").text("Play Again?");
					quizOver = true;
				}
			}
		}else {
			quizOver = false;
			$(document).find(".nextButton").text("Next Question");
			resetQuiz();
			displayCurrentQuestion();
			hideScore();
		}
	});
});