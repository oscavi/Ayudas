app.controller('MainController', ['$scope', function($scope) {
  $scope.move = {
    icon: 'img/move.jpeg',
    title: 'MOVE',
    developer: 'MOVE, Inc.',
    price: 0.99
  };

  $scope.shutterbugg = {
    icon: 'img/shutterbugg.jpeg',
    title: 'Shutterbugg',
    developer: 'Chico Dusty',
    price: 2.99
  };

  $scope.gameboard = {
    icon: 'img/gameboard.jpeg',
    title: 'Gameboard',
    developer: 'Armando P.',
    price: 1.99
  };

  $scope.forecast = {
    icon: 'img/forecast.jpeg',
    title: 'Forecast',
    developer: 'Forecast',
    price: 1.99
  };

  $scope.apps=[
  {
    icon: 'img/move.jpeg',
    title: 'MOVE',
    developer: 'MOVE, Inc.',
    price: 0.99
  },
  {
    icon: 'img/shutterbugg.jpeg',
    title: 'Shutterbugg',
    developer: 'Chico Dusty',
    price: 2.99
  },
   {
    icon: 'img/gameboard.jpeg',
    title: 'Gameboard',
    developer: 'Armando P.',
    price: 1.99
  },
  {
    icon: 'img/forecast.jpeg',
    title: 'Forecast',
    developer: 'Forecast',
    price: 1.99
  }
];
}]);
