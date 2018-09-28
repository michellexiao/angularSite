(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var $ctrl = this;

  $ctrl.submit = function () {
    $ctrl.completed = true;
    $ctrl.signUpUser();
  };

  // $ctrl.validateShortName = MenuService.validateShortName(short_name);
  // console.log("Validated: ",$ctrl.validateShortName);

  $ctrl.signUpUser = function(){
    var user = {fname:"", lname:"", phone:"", email:"", short_name:""};
    user.fname = $ctrl.user.fname;
    user.lname = $ctrl.user.lname;
    user.phone = $ctrl.user.phone;
    user.email = $ctrl.user.email;
    user.short_name = $ctrl.user.short_name;

    MenuService.user.push(user);
    // console.log("Users: ", MenuService.users);
    MenuService.user = user;
    console.log(MenuService.user);
  };

  $ctrl.getMenuItem = function(MenuService.user['short_name']){
    var item = MenuService.retrieveMenuItemViaShortName(MenuService.user['short_name']);
    console.log("Item: ", item);
    MenuService.item = item;
  };
}


})();
