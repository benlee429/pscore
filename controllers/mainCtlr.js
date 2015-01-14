//main controller
'use strict';
pscoreApp.
controller('mainCtlr', function($scope, $http) {
  $http.get('json/nav.json')
    .success(function(data){
      $scope.data = {headers: data};
      console.log("bl. json success");
    }).error(function(error){
      console.log("bl. json error");
    });
  console.log('bl.main controller');
});

