 var taskApp = angular.module("ViewOne", []);
taskApp.controller('viewOneController',function($scope,$location,$window){
	$scope.task = {
		"_id"			:	"",
		"taskName"		:	"",
		"hoformno"		:	"",
		"mailSub"		:	"",
		"devDate" 		:   "",
		"sqaDate" 		: 	"",
		"iuatDate"		:	"",
		"iliveDate"		:	"",	
		"fileList"		:	"",
		"remarks"		:	"",
		"taskLevel"		:	""
	};
	$scope.controls = {
		"refresh" : function(){
			viewOneTask(function(oneTask){
				$scope.task = oneTask;
				$scope.$apply();
			});
			}
	};
	$window.onload = function(){
		viewOneTask(function(oneTask){
				$scope.task.taskName = oneTask.taskName;
				$scope.task.hoformno = oneTask.hoformno;
				$scope.task.mailSub = oneTask.mailSub;
				$scope.task.devDate = oneTask.devDate;
				$scope.task.sqaDate = oneTask.sqaDate;
				$scope.task.iuatDate = oneTask.iuatDate;
				$scope.task.iliveDate = oneTask.iliveDate;
				$scope.task.fileList = oneTask.fileList;
				$scope.task.remarks = oneTask.remarks;
				$scope.task.taskLevel = oneTask.taskLevel;
				$scope.$apply();
			});
	};
});