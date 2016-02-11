angular.module("liftsApp")
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './components/unauthenticated/auth.html',
    controller: 'authController',
    access: {restricted: false}
  }).when('/home', {
    templateUrl: './components/authenticated/workout-entry/workout-entry.html',
    controller: 'workoutEntryController',
    access: {restricted: true}
  }).when('/chart', {
    templateUrl: './components/authenticated/chart/chart.html',
    controller: 'chartController',
    access: {restricted: true}
  });
}).run(function ($rootScope, $location, $route, SessionFactory) {
  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    if (next.access.restricted && !SessionFactory.getUserStatus()) {
      $location.path('/');
    }
  });
});
