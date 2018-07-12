var myModule = angular.module("routerApp");
myModule.controller("reg",  function ($scope, $http,$state) {
  $scope.gohome = function () {
    console.log($scope.user)
    $http({
      method: "POST",
      url: "/carrots-admin-ajax/a/login",
      params: $scope.user
    }).then(function (res) {
      console.log(res)
      if(res.data.code == 0) {
        $state.go('list')
      }
      else{
        
      }
      
    })


  };
});