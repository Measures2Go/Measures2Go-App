angular.module('measures2go')
.controller('MeasureCtrl', function($scope, $stateParams, $sce, Measure) {
  $scope.values = [];
  $scope.test = { results: [] };
  $scope.viewLocation = $sce.trustAsResourceUrl('http://measures2go.com/Measures2Go-Tests/measures/' + $stateParams.id + '.test.html');
  //$scope.viewLocation = $sce.trustAsResourceUrl('http://localhost:4000/measures/' + $stateParams.id + '.test.html');

  $scope.totalValue = function() {
    var v = 0;
    angular.forEach($scope.values, function(x) {
      v += x * 1;
    })
    return v;
  };

  Measure.getTest($stateParams.id)
    .then(function (test) {
      $scope.test = test;
      $scope.title = test.name;
      $scope.data = test.content;
    })
});
