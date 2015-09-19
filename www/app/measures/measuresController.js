angular.module('measures2go')
.controller('MeasuresCtrl', function($scope, Measure) {
  Measure.getCategories(function(err, categories) {
    $scope.categories = categories;
  })
});
