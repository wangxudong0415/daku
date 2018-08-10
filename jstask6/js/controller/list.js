angular.module('routerApp')
    .controller('personCtrl', function ($scope, $state, userService, adminConstant) {

        $scope.listDown = adminConstant.listDown
        $scope.toggle = function (index) {
            var index1 = index
            $scope.listDown[index].show = !$scope.listDown[index].show;
            $scope.listDown[index].lala = !$scope.listDown[index].lala;
            for (let i = 0; i < 3; i++) {
                if (i != index) {
                    $scope.listDown[i].lala = true;
                    $scope.listDown[i].show = false;
                }
            }
            $scope.toggle1 = function (index) {
                $scope.listDown[index1].show = false;

                $(".list").removeClass('color');
                $scope.listDown[index1].child[index].show1 = true;

                if (index1 == 1 && index == 0) {
                    $state.go('list.article')
                }

                for (let i = 0; i < $scope.listDown[index1].child.length; i++) {
                    if (i != index) {
                        $scope.listDown[index1].child[i].show1 = false;

                    }

                }
            }
        }

        $scope.logout = function () {
            if (confirm("确定退出么")) {
                userService.logout()
                    .then(function () {
                        sessionStorage.clear()
                        $state.go('register')

                    })
            }
        }

    })