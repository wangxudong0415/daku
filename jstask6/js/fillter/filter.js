var routerApp = angular.module('routerApp')
    .filter('type', function () {
        return function (type) {
            switch (type) {
                case 0:
                    return '首页';
                case 1:
                    return '找职位';
                case 2:
                    return '找精英';
                case 3:
                    return '兴业大图'
            }
        }
    })
    .filter('status', function () {
        return function (status) {
            if (status == 1) {
                return "草稿"
            } else {
                return "上线"
            }
        }
    })
    .filter('statusbnt', function () {
        return function (status) {
            if (status == 1) {
                return "上线"
            } else {
                return "下线"
            }
        }
    })