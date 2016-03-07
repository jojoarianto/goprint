angular.module('goprint',['ui.router'])
.controller('mainCtrl',function([
  '$scope',
  function($scope){
    $scope.message = "Hallo World";
  }]))