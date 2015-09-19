angular.module('measures2go')
.factory('Measure', function($http) {
  var service = {};

  service.getCategories = function(callback) {
    $http.get('http://measures2go.com/Measures2Go-Tests/categories.json')
      .success(function(data) {
        callback(null, data);
      })
      .error(function() {
        callback(new Error('Unable to get tests'));
      });

    // var categories = [{
    //   "name": "Balance",
    //   "tests": [
    //     {
    //       "name": "Berg Balance Scale",
    //       "id": "berg-balance-scale"
    //     },
    //     {
    //       "name": "Dynamic Gait Index",
    //       "id": "dynamic-gait-index"
    //     },
    //     {
    //       "name": "Functional Gait Analysis",
    //       "id": "functional-gait-analysis"
    //     },
    //     {
    //       "name": "Tinetti Performance Oriented Mobility Assessment",
    //       "id": "tinetti"
    //     }
    //   ]
    // }];
    //
    // callback(null, categories);
  }


  service.getTest = function(id, callback) {
    $http.get('http://measures2go.com/Measures2Go-Tests/index.json')
      .success(function(data) {
        var test = data.filter(function(x) {
          return x.id === id
        })[0];
        callback(null, test);
      })
      .error(function() {
        callback(new Error('Unable to get test: ' + id));
      });
  }

  return service;
});
