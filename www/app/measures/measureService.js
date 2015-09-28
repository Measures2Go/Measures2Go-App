angular.module('measures2go')
.factory('Measure', function($http) {
  var service = {};

  service.getCategories = function() {
    return $http.get('http://measures2go.com/Measures2Go-Tests/measures/index.json')
      .then(function(x) { return x.data });
  }

  service.getTest = function(id) {
    return $http.get('http://measures2go.com/Measures2Go-Tests/measures/index.json')
      .then(function(r) {
        return r.data.filter(function(x) {
          return x.slug === id
        })[0];
      });
  }

  return service;
});
