 var taskApp = angular.module("EditTask", []);
taskApp.controller('EditTaskDetail',function($scope,$location,$window){
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
		"taskLevel"		:	"",
		"save"			:	function(){
								var taskDetail = $scope.task;
								updateTask(taskDetail,function(err){
									if(err != null){
										alert(err);
									} else{
										alert('Updated successfully');
										$window.location = "viewAllTasks.html";
									}
								});
							},
		"close"			:	function(){
			$window.close();
							},
		"clear"			:	function(){$scope.task.taskName = "";
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
		}
		};
	$window.onload = function(){
		viewOneTask(function(oneTask){
				$scope.task._id = oneTask._id;
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