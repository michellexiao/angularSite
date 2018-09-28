(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath','$filter'];
function MenuService($http, ApiPath,$filter) {
  var service = this;

  service.user={};
  service.item ={};

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.retrieveMenuItemViaShortName = function (short_name){
    console.log("short_name is: ",short_name);

    return $http.get(ApiPath + '/menu_items/'+ short_name +'.json')
    .then(function (response) {
      console.log("response: ", response.data);
      return response.data;
    })
    .catch(function(error){
      console.log("Something went wrong");
    });
  };

  service.validateShortName = function (short_name){
    var list = service.getMenuItems.menu_items;
    for (var i=0;i<list.length;i++){
      if (list[i].short_name.indexOf(short_name)!= -1){
        service.found.push(list[i]);
        return true;
      }
    }
    return false;
  };



}



})();
