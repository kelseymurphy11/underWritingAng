'use strict';

/**
 * @ngdoc function
 * @name underwritingAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the underwritingAppApp
 */
angular.module('underwritingApp')
  .controller('AboutCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

        $scope.submitForm = function(isValid){
    	console.log($scope.applicant);
    }
  });
