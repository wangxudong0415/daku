var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    /*路由重定向 $urlRouterProvider:如果没有路由引擎能匹配当前的导航状态，那它就会默认将路径路由至 home.html,  
     *这个页面就是状态名称被声明的地方. */
    $urlRouterProvider.otherwise('/register');
    $stateProvider
        .state('register', {
            url: '/register',
            templateUrl: 'register.html',
            // controller:'goList'
        })

        .state('list', {
            url: '/list',
            views: {
                "": {
                    templateUrl: 'list.html',
                },
             
                 'content@list': {
                    templateUrl: 'welcome.html',

                },
            }
        })
        .state('list.1',{
            url: '/1',
            views:{
               'content@list': {
                    templateUrl:'1.html',
                    
                }, 
            },
        })
        .state('list.2',{
            url: '/2',
            views:{
               'content@list': {
                    templateUrl:'2.html',
                    
                }, 
            },
        })
        .state('list.3',{
            url: '/3',
            views:{
               'content@list': {
                    templateUrl:'3.html',
                    
                }, 
            },
        })



       


}]);