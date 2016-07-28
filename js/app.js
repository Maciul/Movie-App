var app = angular.module('movieApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html',
            controller: 'HomeController'
        })
        .state('movie', {
          url: '/movie/:title',
          templateUrl: 'partials/movie.html',
          controller: 'MovieController'
        })

        .state('detail', {
          url: '/detail/:id',
          templateUrl: 'partials/detail.html',
          controller: 'DetailController'
        });
});
