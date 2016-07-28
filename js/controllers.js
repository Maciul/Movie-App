


app.controller('myController', function($scope) {
  $scope.greeting = "Hello World!";
});

app.controller('HomeController', function($scope){
  $scope.view = {};
  $scope.view.message = "Welcome!";
});

app.controller('MovieController', function($scope, $stateParams, $http){
  $scope.view = {};
  $scope.view.message = "Movie";
  movieTitle = $stateParams.title;
  $http.get('http://www.omdbapi.com/?s='+ movieTitle).then(function(data){
    $scope.view.movieData = data.data.Search;
  });
});

app.controller('DetailController', function($scope, $stateParams, $http){
  $scope.view = {};
  $scope.view.message = "Detail!";
  id = $stateParams.id;
  $http.get('http://www.omdbapi.com/?i='+ id +'&plot=full&r=json').then(function(data){
    console.log(data)
    $scope.view.detailData = data.data;
    console.log($scope.view.detailData)
  });
});


//
