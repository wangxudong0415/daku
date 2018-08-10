angular.module('routerApp')
    .constant('articleConstant', {
        typeList : [{
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
        ],
        industrylist : [{
                id: undefined,
                name: "请选择"
            },
            {
                id: 0,
                name: "移动互联网"
            },
            {
                id: 1,
                name: "电子商务"
            },
            {
                id: 2,
                name: "企业服务"
            },
            {
                id: 3,
                name: "-O2O"
            },
            {
                id: 4,
                name: "教育"
            },
            {
                id: 5,
                name: "金融"
            },
            {
                id: 6,
                name: "游戏"
            }

        ],
        statusList : [{
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
    })
    .value('adminConstant', {
        listDown : [{
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
        
        }]
    })