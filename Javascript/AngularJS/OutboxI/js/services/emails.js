app.factory('emails', ['$http', function($http) {
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/emails-api/emails.json')
            .success(function(data) {
              console.log(data);
              return data;
            })
            .error(function(err) {
              console.log(err);
              return err;
            });
}]);
s
