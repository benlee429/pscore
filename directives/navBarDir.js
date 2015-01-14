//nav bar directive
'use strict';
pscoreApp.
directive('navBar', function () {
  console.log('bl. before nav bar is loaded');
  return {
    restrict: 'E',
    templateUrl: 'directives/templates/navBar.html'
  }
  console.log('bl.nav bar loaded.');
}).
controller('navBarCtlr', function($scope){
  $scope.active = $scope.data.headers[0].pageTitle;
  $scope.isActive = function(attrs){
    if (attrs['ng-bind'] == $scope.active) return 'active';
  };
  $scope.updateActive = function(attrs){
    $scope.active = attrs['ng-bind'];
  };
});
