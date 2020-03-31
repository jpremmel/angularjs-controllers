//The first parameter of angular.module defines the name of the module (in this case, 'app'). The second parameter is an array that declares the module dependencies that the module uses.
angular.module('app', []);

//Now register a controller with our angular module. In order to pass data to the view, we need to inject $scope (by specifying it as a parameter) and add data to it. 
angular.module('app').controller('MainCtrl', function($scope) {
  $scope.message = 'hello';
  
});