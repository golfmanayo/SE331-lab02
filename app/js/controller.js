'use strict';

/* Controller */
var studentApp = angular.module('studentApp',[]);

studentApp.controller('StudentAppController', function($scope){
    $scope.students=[
        {'id': '55678910',
         'name': 'Yongyuth Wichaidit',
         'gpa': '3.55'},
        {'id': '55555555',
         'name': 'Prayuth Chan-o-cha',
         'gpa': '0.02'}
    ];


    $scope.getStudentGPA = function(){
        var totalGrade = 0.0;
        var student;
        for (var i = 0; i < $scope.students.length;i++){
            totalGrade += parseFloat(($scope.students)[i]['gpa']);
        }
        return totalGrade/$scope.students.length;

    }

    $scope.getStudentSize = function(){
        return  $scope.students.length;
    }




});