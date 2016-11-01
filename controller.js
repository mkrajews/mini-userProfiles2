angular.module('userProfiles').controller('MainController', function($scope, mainService) {

  $scope.getUsers = function() {
  	mainService.getUsers().then(function(response) {
      $scope.users = response.data.data;
    });
  };

  $scope.getUsers();

});

OR
var promise = mainService.getUsers();
promise.then(function(response){
  scope.users = response.data.data;
})
