var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    /*路由重定向 $urlRouterProvider:如果没有路由引擎能匹配当前的导航状态，那它就会默认将路径路由至 home.html,  
     *这个页面就是状态名称被声明的地方. */
    $urlRouterProvider.otherwise('/main');
    $stateProvider
        .state('main', {                      
            url: '/main',
            templateUrl: 'main.html'
        })
        .state('main.1', {
            url: '/1',
            views: {
                
                "name@main": {
                    templateUrl: '1.html'
                }
            }
        })
        .state('main.2', {
            url: '/2',
            views: {

                
                "name@main": {
                    templateUrl: '2.html'
                }
            }
        })
        .state('main.3', {
            url: '/3',
            views: {
                "name@main": {
                    templateUrl: '3.html'
                }
            }
        })
}]);