angular.module('routerApp')
    .controller('personCtrl', function ($scope,$state) {
   
        $scope.listDown = [{
                name: "信息管理",
                lala: true,
                show:false,
                child: [{
                        name: "公司列表",
                        show1: false, 

                    },
                    {
                        name: "职业列表",
                        show1: false, 
                    },
                ]
            },
            {
                name: "Article管理",
                lala: true,
                show:false,
                child: [{
                        name: "Article列表",
                        show1: false, 
                    },
                    {
                        name: "文章管理",
                        show1: false, 
                    },
                    {
                        name: "文章管理",
                        show1: false, 
                    },
                ]
            },
            { 
                name: "用户管理",
                lala: true,
                show: false,
                
                child:[{
                    name:"用户列表",
                    show1: false, 
                }]
            
            }];
        $scope.toggle = function (index) {
            var index1 = index
            $scope.listDown[index].show = !$scope.listDown[index].show ;
           $scope.listDown[index].lala = !$scope.listDown[index].lala;
           for (let i=0; i<3;i++){
               if(i != index){
                   $scope.listDown[i].lala =true;
                   $scope.listDown[i].show =false;
               }
           }
           $scope.toggle1 = function (index) {
            $scope.listDown[index1].show =false;
             
             $(".list").removeClass('color');
            $scope.listDown[index1].child[index].show1 = true ;
            
            if(index1==1 && index ==0){
                $state.go('list.3')
            }

           
           
            for(let i=0; i<$scope.listDown[index1].child.length; i++ ){
              if(i != index){
                $scope.listDown[index1].child[i].show1 = false ;

              
              }
                
            }
          

        }
        }
        



    })