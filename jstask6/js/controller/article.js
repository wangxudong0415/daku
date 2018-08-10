var routerApp = angular.module('routerApp')
    .controller('content', function ($scope, $state, userService, articleConstant) {
        http()
        $scope.typeList = articleConstant.typeList
        $scope.statusList = articleConstant.statusList
        $scope.main = {}

        function http() {
            userService.searchArticle($scope.main)
                .then(function (res) {
                    if (res.data.code === 0) {
                        $scope.article = res.data.data.articleList
                        $('.M-box3').pagination({
                            pageCount: Math.ceil(res.data.data.total / res.data.data.size),
                            jump: true,
                            coping: true,
                            homePage: '首页',
                            endPage: '末页',
                            prevContent: '上页',
                            nextContent: '下页',
                            callback: function (api) { //按钮、回调函数
                                $scope.main.page = api.getCurrent()
                                userService.searchArticle($scope.main)
                                    .then(function (res) {
                                        if (res.data.code === 0) {
                                            $scope.article = res.data.data.articleList
                                        }
                                    })
                            }

                        });


                    }
                })
        }
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
        }
        $scope.empty = function () {
            $scope.start = undefined;
            $scope.end = undefined;
            $scope.main = {}
            http()
        }

        $scope.add = function () {
            $state.go('list.add')
        }

        $scope.delete = function (index) {
            if (confirm("确定删除么")) {
                userService.deleteArticle($scope.article[index].id)
                    .then(function () {
                        http()
                    })
            }
        }
        $scope.updown = function (index) {
            $scope.online = "";
            if ($scope.article[index].status == 1) {
                $scope.online = "下线";
            }
            if ($scope.article[index].status == 2) {
                $scope.online = "上线";
            }

            if (confirm("确定" + $scope.online + "么")) {
                $scope.cut = {}
                $scope.cut.id = $scope.article[index].id;
                if ($scope.article[index].status == 1) {
                    $scope.cut.status = 2
                } else if ($scope.article[index].status == 2) {
                    $scope.cut.status = 1
                }
                console.log($scope.cut)
                userService.articleStatus($scope.cut)
                    .then(function (res) {
                        console.log(res)
                        http()
                    })
            }
        }

    })