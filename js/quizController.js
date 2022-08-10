/**
 * access the previously created module 'musicProject'
 */

(function() {
	var musicProject = angular.module('musicProject');

	musicProject.controller('quizController', function($scope, $location) {
		
		 "use strict";
		  $scope.questions = [
		    {"questionText": "Who is a well-known Ragtime composer?", "answers": [
		      {"answerText":"Ludwig van Beethoven", "correct": false},
		      {"answerText":"Scott Joplin", "correct": true},
		      {"answerText":"Lizzo", "correct": false},
		      {"answerText":"Marvin Gaye", "correct": false}
		      ]},
		    {"questionText": "What is the name of the song in the 1955 film Blackboard Jungle that caused teens to dance in the aisles?", "answers": [
		      {"answerText":"Rock Around the Clock", "correct": true},
		      {"answerText":"Tutti Frutti", "correct": false},
		      {"answerText":"Johnny B. Goode", "correct": false},
		      {"answerText":"Hound Dog", "correct": false}
		      ]},
		    {"questionText": "Which instrument is the central defining characteristic of Surf Rock?", "answers": [
		      {"answerText":"Harpsichord", "correct": false},
		      {"answerText":"Trombone", "correct": false},
		      {"answerText":"Spring Reverb", "correct": true},
		      {"answerText":"Hurdy Gurdy", "correct": false}
		      ]},
		    {"questionText": "Classic Rock is the music of what generation's growing up years?", "answers": [
		      {"answerText":"The Silent Generation", "correct": false},
		      {"answerText":"Generation Z", "correct": false},
		      {"answerText":"Millenials", "correct": false},
		      {"answerText":"The Boomer Generation", "correct": true}
		      ]},
	        {"questionText": "What is the song most Millenials can name when given only the first note?", "answers": [
		      {"answerText":"Ocean Avenue", "correct": false},
		      {"answerText":"Welcome to the Black Parade", "correct": true},
		      {"answerText":"I Write Sins Not Tragedies", "correct": false},
		      {"answerText":"American Idiot", "correct": false}
		      ]}
		  ];
		  
		  $scope.answers ={};
		  $scope.correctCount = 0;
		  $scope.show = false;
		  $scope.showResult = function(){
		    $scope.correctCount = 0;
		    var qLength = $scope.questions.length;
		    for(var i=0;i<qLength;i++){
		      var answers = $scope.questions[i].answers;
		      $scope.questions[i].userAnswerCorrect = false;
		      $scope.questions[i].userAnswer = $scope.answers[i];
		      for(var j=0;j<answers.length;j++){
		        answers[j].selected = "donno";
		        if ($scope.questions[i].userAnswer === answers[j].answerText && answers[j].correct===true){
		          $scope.questions[i].userAnswerCorrect = true;
		          answers[j].selected = "true";
		          $scope.correctCount++;
		          $scope.show = true;
		        }else if($scope.questions[i].userAnswer === answers[j].answerText && answers[j].correct===false){
		          answers[j].selected = "false";
		          $scope.show = true;
		        }
		       
		      }
		      
		    }
		    
		    console.log($scope.answers);
		    
		 };
		 
		 $scope.goToLearn = function() {
				console.log('go to learn view');
				$location.path('/learn');
			}
		
	});
	
})();
	
	
	
	
	