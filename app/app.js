angular.module('app', [
  'ngRoute',
  'app.controllers'
]).config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
      templateUrl: 'views/post.html',
      controller: 'PostController'
    })
    //ESSSSSSSSTO ES LO QUE NECESITAS PARA LOS SINGLE POSTS
    .when('/post/:id', {
      templateUrl: 'views/singlepost.html',
      controller: 'SinglePostController'
    })
    //ESSSTO ES LO QUE NECESITAS PARA LOS SINGLEPOST
    .otherwise({
      redirectTo: '/'
    });
  }]);
