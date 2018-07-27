var routerApp = angular.module('routerApp')
    .controller('content', function ($scope, $http, $state) {
       
        http()
        function http() {
            $http({
                method: "get",
                params: $scope.main,
                url: "/carrots-admin-ajax/a/article/search" 
            }).then(function (res) {
                if (res.data.code === 0) {
                    $scope.article = res.data.data.articleList
                  
                }
            })
        }

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
            }]


        $scope.statusList = [{
                id: undefined,
                name: "全部"
            },

            {
                id: 1,

                name: "草稿"
            },
            {
                id: 2,
                name: "上线"
            }

        ]

        $scope.search = function (start, end) {
            console.log($scope.start)
            if (start) {
                $scope.main.startAt = Date.parse(start);

            }
            if (end) {
                $scope.main.endAt = Date.parse(end);
            }
            if (start && end) {
                if (start == end) {
                    $scope.main.startAt = Date.parse(start);
                    $scope.main.endAt = Date.parse(end) + 86400000 - 1;
                } else if (start > end) {
                    alert("请正确选择时间")
                    $scope.start = undefined;
                    $scope.end = undefined;
                    $scope.main = {}

                }
            }

            http()
            console.log($scope.main)
        }

        $scope.empty = function () {
            $scope.start = undefined;
            $scope.end = undefined;
            $scope.main = {}
            http()
        }

        $scope.add = function() {
            $state.go('list.4')
        }
        
        $scope.delete = function(index ){
            if (confirm("确定删除么")) {
               $http({
                 method:"delete",
                 url:"/carrots-admin-ajax/a/u/article/" + $scope.article[index].id
             }).then(function (){
                
                 http()
             })
            }
        }
        $scope.updown = function(index){
            if (confirm("确定这个么")) {
            $scope.cut = {}
            $scope.cut.id =  $scope.article[index].id;
            if($scope.article[index].status == 1) {
               $scope.cut.status= 2
            }else if($scope.article[index].status == 2){
                $scope.cut.status =1
            }
      
            $http({
                method:"PUT",
                url:"/carrots-admin-ajax/a/u/article/status",
                params: $scope.cut
            }).then(function (res){
                console.log(res)
                http()
            })}
        }

    })