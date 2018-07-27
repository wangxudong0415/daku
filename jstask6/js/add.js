var routerApp = angular.module('routerApp')
    .controller('add', function ($http, $scope, $state) {

        
        $scope.bar = false;
         $scope.industry = true; 
        $scope.user = {};
        function uphttp() {
             $http({
                    method: "POST",
                    url: '/carrots-admin-ajax/a/u/article',
                    params: $scope.user
                })
                .then(function successCallback() {
                    $state.go('list.3')
                })
        }
        $scope.up = function () {
            if($scope.user.img&&$scope.user.type&&$scope.user.title&&$scope.user.url !== undefined){
            $scope.user.status = 1;
            uphttp()
        }
        }
        $scope.down = function () {
            if($scope.user.img&&$scope.user.type&&$scope.user.title&&$scope.user.url !== undefined){
            $scope.user.status = 2;
            uphttp()
            }
        }
        $scope.back = function () {
            $state.go('list.3')
        }


        $scope.uploading = function () {
            var file = document.getElementById("file").files[0];
            if (file) {
                $scope.bar = true;
                var form = new FormData();
                form.append("file", file);
                $http({
                    method: "POST",
                    url: "/carrots-admin-ajax/a/u/img/task",
                    data: form,
                    headers: {
                        "Content-Type": undefined
                    }
                }).then(function (res) {
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
            $scope.file =undefined
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
        $scope.typeList = [{
                id: undefined,
                name: "请选择"
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
        $scope.industrylist = [{
            id: undefined,
            name: "请选择"
        }, 
        {
            id:0,
            name:"移动互联网"
        },
        {
            id:1,
            name:"电子商务"
        },
        {
            id:2,
            name:"企业服务"
        },
        {
            id:3,
            name:"-O2O"
        },
        {
            id:4,
            name:"教育"
        },
        {
            id:5,
            name:"金融"
        },
        {
            id:6,
            name:"游戏"
        }      

    ]
    


    })