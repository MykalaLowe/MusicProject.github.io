/**
 * creates a module named musicProject
 */

let musicProject = angular.module('musicProject', ['ngRoute']);

musicProject.config(function($routeProvider) {
	  $routeProvider
	  .when("/learn", {
	    templateUrl : "learn.html"
	  })
	  .when("/quiz", {
	    templateUrl : "quiz.html",
	    controller: "quizController"
	  })
	  .when("/resume", {
	    templateUrl : "resume.html"
	  })
	   .when("/Ragtime", {
	    templateUrl : "Ragtime.html",
	  })
	   .when("/Jazz", {
	    templateUrl : "Jazz.html",
	  })
	   .when("/RockNRoll", {
	    templateUrl : "RockNRoll.html",
	  })
	   .when("/Motown", {
	    templateUrl : "Motown.html",
	  })
	   .when("/BritishInvasion", {
	    templateUrl : "BritishInvasion.html",
	  })
	   .when("/SurfRock", {
	    templateUrl : "SurfRock.html",
	  })
	   .when("/HipHop", {
	    templateUrl : "HipHop.html",
	  })
	   .when("/Disco", {
	    templateUrl : "Disco.html",
	  })
	   .when("/ClassicRock", {
	    templateUrl : "ClassicRock.html",
	  })
	   .when("/PopPunk", {
	    templateUrl : "PopPunk.html",
	  })
	   .when("/Metal", {
	    templateUrl : "Metal.html",
	  })
	   .when("/CurrentPop", {
	    templateUrl : "CurrentPop.html",
	  })
	   .when("/EDM", {
	    templateUrl : "EDM.html",
	  })
	  
	  .otherwise({
	    templateUrl : "main.html"
	  });
	});
