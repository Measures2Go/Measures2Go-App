angular.module('measures2go')
.factory('Measure', function($http) {
  var service = {};
  var url = 'http://measures2go.com/Measures2Go-Tests/measures/index.json';
  //var url = 'http://localhost:4000/measures/index.json';

  service.getCategories = function() {
    return $http.get(url)
      .then(function(x) { return x.data });
  }

  service.getTest = function(id) {
    return $http.get(url)
      .then(function(r) {
        return r.data.filter(function(x) {
          return x.slug === id
        })[0];
      });
  }

  return service;
});
