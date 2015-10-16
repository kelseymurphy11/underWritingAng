'use strict';

/**
 * @ngdoc function
 * @name underwritingAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the underwritingAdminApp
 */
angular.module('underwritingAdminApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
   
   ];

   		$scope.submit = function(isValid){
   			console.log($scope.admin);
   		}
   
  });
