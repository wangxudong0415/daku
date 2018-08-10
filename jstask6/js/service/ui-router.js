angular.module('routerApp')
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider,$httpProvider) {
    $urlRouterProvider.otherwise('/register');
    $stateProvider
        .state('register', {
            url: '/register',
            templateUrl: './view/register.html',
            controller: 'reg'
        })
        .state('list', {
            url: '/list',
            views: {
                '': {
                    templateUrl: './view/list.html',
                },
                'content@list': {
                    templateUrl: './view/welcome.html',
                },
            },
        })
        .state('list.article', {
            url: '/article',
            views: {
                'content@list': {
                    templateUrl: './view/article.html',
                    controller: 'content'
                }
            },
        })
        .state('list.add', {
           
            url: '/add?id',
            views: {
                'content@list': {
                    templateUrl: './view/add.html',
                    controller: 'add'
                }
            },
        })
}])

.config(function httpConfig($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $httpProvider.defaults.transformRequest = function (data) {
        if (data === undefined) {
            return data;
        }
        return $.param(data);
    }
})