var app = angular.module('measures2go', ['ionic', 'ngIOS9UIWebViewPatch'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider, $controllerProvider) {
  app.controllerProvider = $controllerProvider;

  $stateProvider
  .state('measures', {
    url: '/',
    templateUrl: "app/measures/measuresView.html",
    controller: 'MeasuresCtrl'
  })
  // .state('home', {
  //   url: "/home",
  //   abstract: true,
  //   templateUrl: "app/home/homeView.html"
  // })
  // .state('home.measures', {
  //   url: '/measures',
  //   views: {
  //     'measures-tab': {
  //       templateUrl: "app/measures/measuresView.html",
  //       controller: 'MeasuresCtrl'
  //     }
  //   }
  // })
  // .state('home.archive', {
  //   url: '/archive',
  //   views: {
  //     'archive-tab': {
  //       templateUrl: 'app/archives/archiveView.html',
  //       controller: function() { }
  //     }
  //   }
  // })
  // .state('home.settings', {
  //   url: '/settings',
  //   views: {
  //     'settings-tab': {
  //       templateUrl: 'app/home/settingsView.html',
  //       controller: function() { }
  //     }
  //   }
  // })
  // .state('home.about', {
  //   url: '/about',
  //   templateUrl: 'app/home/aboutView.html',
  //   controller: 'AboutCtrl'
  // })
  // .state('base', {
  //   url: '/',
  //   templateUrl: 'app/home/homeView.html',
  //   controller: 'HomeCtrl'
  // })
  .state('test-view', {
    url: '/test/:id/view',
    cache: false,
    templateUrl: 'app/measures/measureDescriptionView.html',
    controller: function($scope, $stateParams, $sce, Measure) {
      Measure.getTest($stateParams.id)
        .then(function(test) {
          $scope.name = test.name;
        })
      $scope.viewLocation = $sce.trustAsResourceUrl('http://measures2go.com/Measures2Go-Tests/measures/' + $stateParams.id + '.description.html');
      //$scope.viewLocation = $sce.trustAsResourceUrl('http://localhost:4000/measures/' + $stateParams.id + '.description.html');
      $scope.id = $stateParams.id;
    }
  })
  .state('test-take', {
    url: '/test/:id/take',
    templateUrl: 'app/measures/measureView.html',
    controller: 'MeasureCtrl'
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});
