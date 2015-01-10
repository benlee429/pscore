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
});
