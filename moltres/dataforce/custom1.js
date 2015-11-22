
var myapp = angular.module('my', ['ui.bootstrap']);

myapp.controller('MainCtrl1', function ($scope, $http) {
    $http.get('navbar.html')
    	.then(function(response){
    		$scope.content= response.data;
    	})
  });
myapp.controller('MainCtrl2', function ($scope, $http) {
    $http.get('sl1.html')
    	.then(function(response){
    		$scope.content= response.data;
    	})
  });
myapp.controller('MainCtrl3', function ($scope, $http) {
    $http.get('navbar.html')
    	.then(function(response){
    		$scope.content= response.data;
    	})
  });
myapp.controller('MainCtrl4', function ($scope, $http) {
    $http.get('navbar.html')
    	.then(function(response){
    		$scope.content= response.data;
    	})
  });
myapp.directive('onReadFile', function ($parse) {
	return {
		restrict: 'A',
		scope: false,
		link: function(scope, element, attrs) {
            var fn = $parse(attrs.onReadFile);
            
			element.on('change', function(onChangeEvent) {
				var reader = new FileReader();
                
				reader.onload = function(onLoadEvent) {
					scope.$apply(function() {
						fn(scope, {$fileContent:onLoadEvent.target.result});
					});
				};

				reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
			});
		}
	};
});