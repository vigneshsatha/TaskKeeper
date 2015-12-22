 var taskApp = angular.module("taskApp", []);
taskApp.controller('addTaskDetail',function($scope,$location,$window){
	$scope.task	 = {
		"taskName"		:	"",
		"hoformno"		:	"",
		"mailSub"		:	"",
		"devDate" 		:   "",
		"sqaDate" 		: 	"",
		"iuatDate"		:	"",
		"iliveDate"		:	"",	
		"fileList"		:	"",
		"remarks"		:	"",
		"taskLevel"		:	"",
		"save"			:	function(){
								var taskDetail = $scope.task;
								saveTask(taskDetail,function(){
									alert('Saved successfully');
									$scope.task.taskName = "";
									$scope.task.hoformno = "";
									$scope.task.mailSub = "";
									$scope.task.devDate = "";
									$scope.task.sqaDate = "";
									$scope.task.iuatDate = "";
									$scope.task.iliveDate = "";
									$scope.task.fileList = "";
									$scope.task.remarks = "";
									$scope.task.taskLevel = "";
									$scope.$apply();
									$window.location = "index.html";		
								});
							},
		"clear"			:	function(){
								$scope.task.taskName = "";
								$scope.task.hoformno = "";
								$scope.task.mailSub = "";
								$scope.task.devDate = "";
								$scope.task.sqaDate = "";
								$scope.task.iuatDate = "";
								$scope.task.iliveDate = "";
								$scope.task.fileList = "";
								$scope.task.remarks = "";
								$scope.task.taskLevel = "";
								$scope.$apply();
							},
		"viewAllTasks"	:	function(){
								window.location.href='viewAllTasks.html';
							}
		};
});