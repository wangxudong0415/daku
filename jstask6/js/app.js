
angular.module('routerApp')
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
 
    $urlRouterProvider.otherwise('/register');
    $stateProvider
        .state('register', {
            url: '/register',
            templateUrl: 'register.html',
            controller: 'reg'
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
        
        .state('list.3', {
            url: '/3',

            views: {
                'content@list': {
                    templateUrl: 'article.html',
                    controller: 'content'
                }
            },

        })
        .state('list.4', {
            url: '/4',
            views: {
                'content@list': {
                    templateUrl: 'add.html',
                    controller: 'add'
                }
            },

        })
}])

