angular.module("routerApp")
  .controller("reg", function ($scope, $state, userService) {
    $scope.user = {}
    $scope.gohome = function () {
      userService.login($scope.user).then(function (res) {
        if (res.data.code == 0) {
          window.sessionStorage.setItem('id', JSON.stringify(res.data.data.role.id))
          $state.go('list')
        } else {
          alert('账号或密码不对')
        }
      })
    };

  });