angular.module('app.controllers', [
  'app.directives'
])
  .controller('PostController', ['$scope', '$http',function($scope, $http){
    $http.get('data/posts.json').success(function(data){
      $scope.posts = data;
    });
  }])
  //ESSSSSSSSSSSSTO ES LO QUE NECESITAS PARA LOS SINGLEPOST
  .controller('SinglePostController',['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    console.log('Estas en SINGLEPOST');
    $http.get('data/posts.json').success(function(data){
      $scope.post = data[$routeParams.id];
    });
  }]);
