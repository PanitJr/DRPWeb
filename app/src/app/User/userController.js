/**
 * Created by Asus on 10/8/2559.
 */
(function () {
  'use strict'
  angular.module('app').controller('ModalRegisterController',ModalRegisterController)
    .controller('ModalRegisterInstanceController',ModalRegisterInstanceController);
  /**ngInject*/
  function ModalRegisterController(userService,$uibModal,$log,$location,$rootScope) {
    var vm = this;

    vm.animationsEnabled = true;
    vm.open = function (size) {

      var modalInstance = $uibModal.open({
        animation: vm.animationsEnabled,
        templateUrl: 'sign_up.html',
        controller: 'ModalRegisterInstanceController',
        controllerAs: 'vm',
        size: size
      });

      modalInstance.result.then(function (data) {
        userService.save(data);
        $location.path("/")
        $rootScope.signUpSuccess = true;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    vm.toggleAnimation = function () {
      vm.animationsEnabled = !vm.animationsEnabled;
    };

  }

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

  function ModalRegisterInstanceController($uibModalInstance) {
    var vm = this;
    vm.ok = function () {

      $uibModalInstance.close({
        username:vm.user.username,
        password:vm.user.password,
        email:vm.user.email,
        dob:vm.user.dob,
        gender:vm.user.gender,
        roles:[{roleName:vm.role}],
        weight:vm.user.weight,
        height:vm.user.height,
        duration:vm.user.duration
      });
    };

    vm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }

})();
