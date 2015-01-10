//main controller
'use strict';
pscoreApp.
controller('mainCtlr', function($scope) {
  $scope.data = {user: 'blah'};
  $scope.data.headers = ['home','about','media'];
  $scope.data.homeHeaders = ['home1','home2','home3','home4'];
  $scope.data.aboutHeaders = ['about1','about2','about3','about4'];
  $scope.data.mediaHeaders = ['media1', 'media2', 'media3'];
  $scope.data.homeContent = ['homeparagraph1','paragraph2', 'paragraph3', 'homeparagrahp4'];
  $scope.data.aboutContent = ['aboutparagraph1','paragraph2', 'paragraph3'];
  $scope.data.mediaContent = ['mediaparagraph1','paragraph2', 'paragraph3'];

  console.log('bl.main controller');
});

