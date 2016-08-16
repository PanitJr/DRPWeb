/**
 * Created by Asus on 10/8/2559.
 */
(function() {
  'use strict'
  angular
    .module('app')
    .factory('userService',userService);

  /** @ngInject */
  function userService($resource){
    return $resource('/user/:id', { id: '@_id' }, {
      update: {
        method: 'PUT' // this method issues a PUT request
      }});

  }

})();
