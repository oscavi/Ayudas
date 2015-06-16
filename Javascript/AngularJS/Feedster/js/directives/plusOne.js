app.directive('plusOne', function() {
  return {
    restrict: 'E',
    scope: {
      post: '='
    },
    templateUrl: 'js/directives/plusOne.html'
  };
});
