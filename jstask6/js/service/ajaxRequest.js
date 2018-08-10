angular.module('routerApp')

    // 请求服务封装
    .factory('userService', function ($http, path) {
        return {
            //登陆接口请求
            login: function (params) {
                return $http.post(path.login(), params)
            },
            //退出接口地址
            logout: function (params) {
                return $http.post(path.logout(), params)
            },
            //article管理部分
            //新增article
            addArticle: function (params) {
                return $http.post(path.addArticle(), params)
            },
            //编辑article
            redactArticle: function (id, params) {
                return $http.put(path.redactArticle(id), params)
            },
            //修改上线下线
            articleStatus: function (params) {
                return $http.put(path.articleStatus(), params)
            },
            //删除article
            deleteArticle: function (id) {
                return $http.delete(path.deleteArticle(id))
            },
            //获得单个article
            oneArticle: function (id, params) {
                return $http.get(path.oneArticle(id), params)
            },
            //按条件获得article列表
            searchArticle: function (params) {
                return $http({
                    method: 'GET',
                    url: path.searchArticle(),
                    params: params
                })
            },
            //上传图片
            postImg: function (params) {
                return $http({
                    method: 'post',
                    
                    url: path.postImg(),
                    data: params,
                    headers: {
                        'Content-Type': undefined
                    },
                    transformRequest: function (data) {
                        return data
                    }
                })
            }
        }
    })