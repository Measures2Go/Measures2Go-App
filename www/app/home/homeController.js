angular.module('measures2go')
.controller('HomeCtrl', function($scope, Measure) {
  Measure.getCategories(function(err, categories) {
    $scope.categories = categories;
  })
});
