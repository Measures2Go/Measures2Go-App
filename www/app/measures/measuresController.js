angular.module('measures2go')
.controller('MeasuresCtrl', function($scope, Measure) {
  Measure.getCategories().then(function(data) {
    var groups = {};
    for (var i of data) {
      for (var g of i.categories) {
        if (!groups[g]) {
          groups[g] = { name: g, tests: [] };
        }
        groups[g].tests.push(i);
      }
    }
    console.log(groups);

    $scope.categories = groups;
  });
});
