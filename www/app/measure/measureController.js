angular.module('measures2go')
.controller('MeasureCtrl', function($scope, $stateParams, Measure) {
  Measure.getTest($stateParams.id, function(err, test) {
    $scope.title = test.name;
    $scope.data = test.content;
    $scope.values = [];

    $scope.totalValue = function() {
      var v = 0;
      angular.forEach($scope.values, function(x) {
        v += x * 1;
      })
      return v;
    };

    $scope.result = function() {
      var x = $scope.totalValue();
      console.log(test.results);
      for (var i = 0; i < test.results.length; i++) {
        if (eval(test.results[i].eval)) {
          return test.results[i].result;
        }
      }

      return '';
    }
  })
});
