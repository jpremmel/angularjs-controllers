//The first parameter of angular.module defines the name of the module (in this case, 'app'). The second parameter is an array that declares the module dependencies that the module uses.
angular.module('app', []);

//Now register a controller with our angular module
angular.module('app').controller('MainCtrl', function() {
  var self = this;

  self.message = 'hello';

  self.updateMessage = function(message){
    self.message = message;
  };
});