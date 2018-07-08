
 angular.module('routerApp')
.controller('a',function ($scope,$state){
$scope.aas= function() {
    $state.go('1.2')
}
})
