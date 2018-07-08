var myModule = angular.module("routerApp");
myModule.controller("routerApp",["$scope","$http",function HelloAjax($scope,$http){
 $scope.user={};
  $scope.get_more = function(){
    $http({
        method: "POST",
        url: "/carrots-admin-ajax/a/login",
        
      }).
      success(function(data, status) {
       //$scope.status = status;
        $scope.users = data;
      }).
      error(function(data, status) {
       //$scope.data = data || "Request failed";
       //$scope.status = status;
     });
   }
}]);