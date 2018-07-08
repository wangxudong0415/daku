var routerApp = angular.module('routerApp', ['ui.router']);  
routerApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    /*路由重定向 $urlRouterProvider:如果没有路由引擎能匹配当前的导航状态，那它就会默认将路径路由至 home.html,  
     *这个页面就是状态名称被声明的地方. */
    $urlRouterProvider.otherwise('/main');
    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'main.html'
        })
        /*  nested list with custom controller*/
        .state('1', {
            url: '/1',
            templateUrl: '1.html',
            controller: 'a'
        }) 
        
        .state('1.2', {
            url: '/2',
            templateUrl: '2.html',
            // controller:'2controller'
        }) ;
      
      
}]);