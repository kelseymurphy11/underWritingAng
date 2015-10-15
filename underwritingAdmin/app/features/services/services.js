var services = angular.module('admin.services', []);
services.factory('adminServices', function($http) {


	$http({
		method: 'GET',
		url: 'http://www.w3schools.com/angular/customers.php'

	}).then(function successCallback(response) {
		// this callback will be called asynchronously
		// when the response is available
		creditData = response.data;
		//console.log(cardData);



		//console.log(response)
	});

	$http({
		method: 'POST',
		url: 'http://www.w3schools.com/angular/customers.php'
		}).then(function successCallback(response) {
		// this callback will be called asynchronously
		// when the response is available
		postResponse = response.data;
		//console.log(cardData);



		//console.log(response)
	});

	return {
		getAll: function() {
			for (key in creditData) {
				var creditData = creditInfo[key];
			}
			return creditData;
		}
		getPostResponse: function(){
			for (key in postResponse){
				var postData = postResponse[key];
			}
			return postResponse;
		}
});