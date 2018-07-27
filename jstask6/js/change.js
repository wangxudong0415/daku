angular.module('routerApp', ['ui.router', 'ui.router.state.events']);


angular.module('routerApp')
    .run(['$rootScope', '$state', function ($rootScope, $state) {
            
            $rootScope.$on('$stateChangeSuccess', function () {
                    var identity = JSON.parse(sessionStorage.getItem('id'));
                    if (identity == null) {

                        $state.go("register")
                    }
                });
            }])



    