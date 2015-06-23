app.controller('HomeController', ['$scope', 'emails', function($scope, forecast) {
	emails.success(function(data) {
    $scope.emails = data;
  });
}]);
