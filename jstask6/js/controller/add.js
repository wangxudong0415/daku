var routerApp = angular.module('routerApp')
    .controller('add', function ($scope, $state, userService, articleConstant) {
        $scope.user = $state.params
        console.log($state.params)
        if ($scope.user.id) {
            userService.oneArticle($scope.user.id)
                .then(function (sre) {
                    console.log(sre)
                    $scope.user = sre.data.data.article
                    $scope.imgname = sre.data.data.article.img
                })
            $scope.up = function (status) {
                var params = $scope.user
                params.status = status

                userService.redactArticle($scope.user.id, params)
                    .then(function (res) {
                        console.log(res)
                        $state.go('list.article')
                    })
            }
        } else {
            $scope.up = function (status) {
                var params = {
                    title: $scope.user.title,
                    type: $scope.user.type,
                    status: status,
                    img: $scope.user.img,
                    content: $scope.user.content,
                    url: $scope.user.url,
                    industry: $scope.user.industry
                }
                console.log(params)
                userService.addArticle(params)
                    .then(function (res) {
                        console.log(res)
                        $state.go('list.article')
                    })
            }
        }
        $scope.back = function () {
            $state.go('list.article')
        }

        $scope.uploading = function () {
            var file = document.getElementById("file").files[0];
            if (file) {
                $scope.bar = true;
                var form = new FormData();
                form.append("file", file);
                userService.postImg(form)
                    .then(function (res) {
                        console.log(res)
                        $scope.user.img = res.data.data.url
                    })
            }
        }
        $scope.deleteimg = function () {
            $scope.imgname = "";
            $scope.bar = false;
            $scope.fileSize = "";
            $scope.name1 = "";
            $("#file").val("")
            $scope.user.img = ""
            $scope.file = undefined
        }
        $scope.change = function () {
            var file = document.getElementById("file").files[0];
            $scope.file = file;
            $scope.name1 = file.name;
            $scope.fileSize = (file.size / 1024 / 1024).toFixed(2) + "M";
            var reader = new FileReader();
            reader.onload = function () {
                $scope.imgname = this.result;
                $scope.$apply();
            }
            reader.readAsDataURL(file);
        }
        $scope.typeList = articleConstant.typeList
        $scope.industrylist = articleConstant.industrylist


    })