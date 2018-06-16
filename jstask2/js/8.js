var data2 = JSON.parse(localStorage.getItem('identity'));
var data1 = (localStorage.getItem('sum'));
var box = document.getElementsByClassName('box');
var id = document.getElementsByClassName('id');
var begin = document.getElementById('begin');
var a;
var arr = JSON.parse(sessionStorage.getItem('data'));
var arr2 = JSON.parse(sessionStorage.getItem('data4'));
var homepage = document.getElementById('homepage');
homepage.onclick = function backHome() {
    sessionStorage.clear();
    if (confirm("确定关闭游戏嘛 ")) {
        window.location.href = '1.html';
    }
}
if (arr2 == null) {
    arr2 = [];
}

for (let i = 0; i < data1; i++) {
    box[i].style.display = 'block';
    if (data2[i] == '好人') {
        id[i].innerText = '平民';
    } else {
        id[i].innerText = '狼人';
    }
}
for (let i = 0; i < data1; i++) {
    if (arr[i].state == "die") {
        arr[i].state = "died";
    }
}
for (let i = 0; i < data1; i++) {
    if (arr[i].state == "died") {
        id[i].style.backgroundColor = 'green';
    }
}

for (let i = 0; i < box.length; i++) {
    box[i].onclick = function () {
        a = i;
    }
}
begin.onclick = function () {
    if (a == undefined) {
        alert('请选中玩家')
        return
    };
    if (arr[a].state == 'died') {
        alert('该玩家已死');
        return
    }
    arr[0].day += 1;
    arr[a].state = 'die';
    arr2.push(arr[a].id + '号玩家被票出,真是身份是' + arr[a].name);
    sessionStorage.setItem('data4', JSON.stringify(arr2));
    window.sessionStorage.setItem('data', JSON.stringify(arr));
    var n = 0;
    var m = 0;
    for(let i=0; i<data1; i++){
        if(arr[i].state == 'live' && arr[i].name == '平民') {
               n += 1
        }   
        else if (arr[i].state == 'live' && arr[i].name == '狼人'){
            m += 1 ;
        }
    }
    sessionStorage.setItem('goodlive', JSON.stringify(n));
    sessionStorage.setItem('badlive', JSON.stringify(m));
    if(m == 0){
        arr[0].day -= 1;
        window.sessionStorage.setItem('data', JSON.stringify(arr));
        window.location.href = '9.html';
        return
    }
    if( n == m ) {
        window.location.href = '9.html';
        arr[0].day -= 1;
        window.sessionStorage.setItem('data', JSON.stringify(arr));       
        return
    }
    window.location.href = '6.html';
}