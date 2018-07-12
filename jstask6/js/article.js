var routerApp = angular.module('routerApp')
    .controller('content', function ($scope, $http) {
        $http({
            method: "get",
            url: "/carrots-admin-ajax/a/article/search",

        }).then(function (main) {
            $scope.main = main.data.data.articleList



            console.log($scope.main)
        })
       
        $scope.type = undefined
        $scope.typeList = [{
                id: undefined,
                name: "全部"
            },
            {
                id: 0,
                name: "首页banner"
            },
            {
                id: 1,
                name: "找职位banner"

            },
            {
                id: 2,
                name: "找精英banner"
            },
            {
                id: 3,
                name: "兴业大图"
            }

        ]

       $scope.status = undefined;
        $scope.statusList = [{
                id: undefined,
                name: "全部"
            },

            {
                id: 0,
                name: "草稿"
            },
            {
                id: 1,
                name: "上线"
            }

        ]

         $scope.empty = function () {
             
        }

    })