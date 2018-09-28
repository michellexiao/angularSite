(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
        abstract: true,
        templateUrl: 'public/public.html'
      })
    .state('public.home', {
      url: '/',
      templateUrl: 'public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'public/menu/menu.html',
      controller: 'NarrowItDownController',
      controllerAs: 'menu',
    })
    .state('public.signup',{
      url:'/signup',
      templateUrl:'public/signUp/signUp.html',
      controller: 'SignUpController',
      controllerAs: 'signUpCtrl'

    })
    .state('public.myinfo',{
      url:'/myinfo',
      templateUrl:'public/other/myinfo.html',
      controller: 'MyInfoController',
      controllerAs: 'myInfoCtrl'
    });
}
})();
