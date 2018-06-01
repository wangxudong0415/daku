var gain = JSON.parse(localStorage.getItem('identity'));         //获得转化后的数组 传过来的数组
var data = (localStorage.getItem('sum'));                        //获得总人数   传过来得值
var next = document.getElementById('transmit');                  //翻页按钮
var look = document.getElementById('look');                      //查看身份按钮
var serial = document.getElementById('number');                  //头部序号
var serial1 = document.getElementById('number1');                //按钮序号
var play = document.getElementById('play');                      //首页图
var good = document.getElementById('good');                      //好人
var bad = document.getElementById('bad');                        //坏人
var id = document.getElementById('id');                          //文字身份
var num = 1;                                                     //建立一个值 用来每次点击加1
var a = 0;                                                       //建立一个值 用来每次点击加1
// console.log(gain);
// console.log(data);

next.onclick = function paga() {                                 //翻页按钮函数
    look.style.display = 'block';
    next.style.display = 'none';
    good.style.display = 'none';
    bad.style.display = 'none';
    id.style.display = 'none';
    play.style.display = 'block';
    serial.innerText = num +1;
   
    num += 1;
     serial1.innerText = num +1;                      
    if (num  == data) {                                            //最后一张实现法官查看
        next.innerText = '法官查看';

    }
    if (num - 1 == data) {                                         //最后一个按钮实现跳转
        window.location.href = '5.html';
    }


}
look.onclick = function check() {                                  //查看按钮 函数
    look.style.display = 'none';
    next.style.display = 'block';
    play.style.display = 'none';



    if (gain[a] == '好人') {                                        //判断好人
        good.style.display = 'block';
        bad.style.display = 'none';
        id.style.display = 'inline';
        id.innerText = '平民';

    } else {                                                        //判断狼人
        bad.style.display = 'block';
        good.style.display = 'none';
        id.style.display = 'inline';
        id.innerText = '狼人';

    }
    a += 1;
}