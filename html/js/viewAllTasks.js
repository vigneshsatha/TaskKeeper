var viewAllTaskApp = angular.module("viewAllTaskApp", []);
viewAllTaskApp.controller('viewAllTaskController',function($scope,$location,$window,$timeout){
	$scope.search = {query:''};
	$scope.tasks = [];
	$scope.controls = {
		 monthNames : ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  						"JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
						],
		"refresh" : function(){
					viewAllTasks(function(docs){
						console.log(docs);
						$scope.tasks = docs;
						$scope.$apply();
					});
					},
		"edit"		: function(id){
						var globalVal = require('./js/globalCache.js');
						globalVal.id=id;
						$window.location = "editTask.html";
					},
		"view"		: function(id){
						var globalVal = require('./js/globalCache.js');
						globalVal.id=id;
						$window.location="viewOneTask.html";
					},
		"remove"	: function(id){
							if(confirm('Do you wish to remove item?')){
									removeTask(id,function(){
									viewAllTasks(function(docs){
									console.log(docs);
									$scope.tasks = docs;
									$scope.$apply();
								});
							});
						}
					}
	};
	 $timeout(function(){
		 $scope.$apply();
	 }, 3000);
	 $window.onload = function(){
		viewAllTasks(function(docs){
						console.log(docs);
						$scope.tasks = docs;
						$scope.$apply();
					});
	};
});