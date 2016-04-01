var app = angular.module("pingPongApp", []);

app.controller("pongController", function($scope) {
  $scope.playerOneScore = 0;
  $scope.playerTwoScore = 0;
  $scope.addOnetoOne = function() {
    $scope.playerOneScore ++;
  }
  $scope.addOnetoTwo = function() {
    $scope.playerTwoScore ++ ;
  }
  $scope.reset = function() {
    $scope.playerOneScore = 0;
    $scope.playerTwoScore = 0;
  }
})