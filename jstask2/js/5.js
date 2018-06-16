var data2 = JSON.parse(localStorage.getItem('identity'));
var data1 = (localStorage.getItem('sum'));
var box = document.getElementsByClassName('box');
var id = document.getElementsByClassName('id');
var begin = document.getElementById('begin');
var arr = []
console.log(arr)

var homepage = document.getElementById('homepage');
var back = document.getElementById('back');
back.onclick = function back() {
    window.location.href = '4.html';
}



homepage.onclick = function backHome() {
    sessionStorage.clear();
    if (confirm("确定关闭游戏嘛")) {
        window.location.href = '1.html';
    }

}
function allot() {

    for (i = 0; i < data1; i++) {
        box[i].style.display = 'block';
        if (data2[i] == '好人') {
            id[i].innerText = '平民';
            var obj = {
                id: i+1,
                name: '平民',
                state: 'live',
                day: 1,
  
                
            };
            arr.push(obj);

        } else {
            id[i].innerText = '狼人';
            var obj = {
                id: i+1,
                name: '狼人',
                state: 'live',
                day: 1,
               
            }
            arr.push(obj);
        }
    }
}
allot();

begin.onclick = function go() {
    window.location.href = '6.html';
}


sessionStorage.setItem('data', JSON.stringify(arr));
