(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService'];
function MyInfoController(MenuService) {
  var $ctrl = this;
  $ctrl.user = MenuService.user;

  $ctrl.item = MenuService.item;
  // $ctrl.item = {"id":1,"short_name":"A1","name":"Won Ton Soup with Chicken","description":"chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions","price_small":2.55,"price_large":5.0,"small_portion_name":"pint","large_portion_name":"quart","created_at":"2017-06-04T21:06:47.180Z","updated_at":"2017-06-04T21:06:47.180Z","category_short_name":"A","image_present":true};
}


})();
