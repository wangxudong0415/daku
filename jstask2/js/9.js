var n = JSON.parse(sessionStorage.getItem('goodlive'));
var m = JSON.parse(sessionStorage.getItem('badlive'));
var homepage = document.getElementById('homepage');
var arr = JSON.parse(sessionStorage.getItem('data'));
var arr1 = JSON.parse(sessionStorage.getItem('data3'));
var arr2 = JSON.parse(sessionStorage.getItem('data4'));
var num = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"]


homepage.onclick = function backHome() {
    sessionStorage.clear();
    window.location.href = '1.html';
}

var good = document.getElementById('good');
var bad = document.getElementById('bad');
if(n == null) {
    good.innerHTML = '所有好人存活';
    bad.innerHTML = '所有狼人存活';
}
else{
good.innerHTML = '好人存活'+ n;
bad.innerHTML = '坏人存活' + m;
}
var img = document.getElementById('img');
if(n == m ) {
    img.setAttribute('src','img/ssvtr.png');
}
else if(m == 0){
    img.setAttribute('src','img/pmvtr.png');
}
else {
    img.setAttribute('src','img/end.png');
}

var night = document.getElementsByClassName('night');
var daytime = document.getElementsByClassName('daytime');
var list = document.getElementById('list');
var day = document.getElementsByClassName('day');
for (let i=0; i< arr[0].day; i++) {
    list.innerHTML += `<li>
    <p><span class="day">第一天</span><span>0小时7分钟</span></p>
    <p class="night"></p>
    <p class="daytime"></p></li>`
    day[i].innerHTML = '第'+ num[i] + "天";
    if(arr1 == null && arr2 == null) {
        night[i].innerHTML = '晚上';
         daytime[i].innerHTML = '白天';   
         
         }
    else if(arr2 == null) {
        night[i].innerHTML = '晚上' + arr1[i];
        daytime[i].innerHTML = '白天'; 
        
    }
    else{
        if(arr1[i] == undefined){
            arr1[i] = '';
        }
        if(arr2[i] == undefined) {
            arr2[i] = '';
        }
    night[i].innerHTML = '晚上' + arr1[i];
    daytime[i].innerHTML = '白天' + arr2[i];
    }
}
var next =document.getElementById('next');
next.onclick = function  Next(){
    sessionStorage.clear();
    window.location.href = '3.html'
}



