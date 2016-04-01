var app = angular.module("pingPongApp", []);

app.controller("pongController", function($scope) {
  $scope.playerOneScore = 0;
  $scope.playerTwoScore = 0;
  $scope.oneWins = false;
  $scope.twoWins = false;
  $scope.oneLose = false;
  $scope.twoLose = false;
  $scope.oneServe = true;
  $scope.twoServe = false;
  $scope.currentServe = 0;
  $scope.addOnetoOne = function() {
    $scope.playerOneScore ++;
  }
  $scope.addOnetoTwo = function() {
    $scope.playerTwoScore ++ ;
  }
  $scope.reset = function() {
    $scope.playerOneScore = 0;
    $scope.playerTwoScore = 0;
    $scope.oneWins = false;
    $scope.twoWins = false;
    $scope.oneLose = false;
    $scope.twoLose = false;
  }
  $scope.winner = function() {
    if($scope.playerOneScore >= 11) {
        $scope.oneWins = true;
        $scope.twoLose = true;
      } else if ($scope.playerTwoScore >= 11) {
      $scope.twoWins = true;
      $scope.oneLose = true;
    }
  }
  $scope.serveTracker = function() {
    $scope.currentServe++;
    if($scope.currentServe == 2) {
      if($scope.oneServe === true) {
        $scope.currentServe = 0;
        $scope.oneServe = false;
        $scope.twoServe = true;
      } else {
        $scope.currentServe = 0;
        $scope.twoServe = false;
        $scope.oneServe = true;
      }
    }
  }
})