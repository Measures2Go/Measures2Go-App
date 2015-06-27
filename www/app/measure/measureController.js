angular.module('measures2go')
.controller('MeasureCtrl', function($scope, $stateParams, Measure) {
  Measure.getTest($stateParams.id, function(err, test) {
    $scope.title = test.name;
    $scope.data = test.content;
  })
});
