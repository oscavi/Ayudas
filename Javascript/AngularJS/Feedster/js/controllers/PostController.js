app.controller('PostController', ['$scope', function($scope) {
  $scope.posts = [
    {
      author: {
        name: 'Calvin Broadus, Jr.',
        avatar: 'img/cbj.svg'
      },
      comment: {
        img: 'img/dog.jpg',
        text: 'How much for that dogg in the window?'
      },
      like:0
    },


    {
      author: {
        name: 'Matthew Healy',
        avatar: 'img/mh.svg'
      },
      comment: {
        text: 'I used to have a recurring dream when I was younger.'
      },
      like:0
    }
  ]
}]);
