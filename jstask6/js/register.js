angular.module("routerApp")
.controller("reg",  function ($scope, $http,$state) {
  $scope.gohome = function () {
    $http({
      method: "POST",
      url: "/carrots-admin-ajax/a/login",
      params: $scope.user
    }).then(function (res) {
      if(res.data.code == 0) {
        window.sessionStorage.setItem('id', JSON.stringify(res.data.data.role.id))
         $state.go('list')
      }
      else{
        alert('账号或密码不对')
      }
      
    })


  };
 
});