angular.module('measures2go')
.controller('MeasureCtrl', function($scope, $stateParams, $sce, Measure) {
  $scope.values = [];
  $scope.test = { results: [] };
  $scope.viewLocation = $sce.trustAsResourceUrl('http://measures2go.com/Measures2Go-Tests/measures/' + $stateParams.id + '.test.html');

  $scope.totalValue = function() {
    var v = 0;
    angular.forEach($scope.values, function(x) {
      v += x * 1;
    })
    return v;
  };

  $scope.result = function() {
    var x = $scope.totalValue();
    for (var i = 0; i < $scope.test.results.length; i++) {
      if (eval($scope.test.results[i].eval)) {
        return $scope.test.results[i].result;
      }
    }
    return '';
  };

  Measure.getTest($stateParams.id)
    .then(function (test) {
      $scope.test = test;
      $scope.title = test.name;
      $scope.data = test.content;
    })
});
