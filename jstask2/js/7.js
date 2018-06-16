var data2 = JSON.parse(localStorage.getItem('identity'));
var data1 = (localStorage.getItem('sum'));
var box = document.getElementsByClassName('box');
var id = document.getElementsByClassName('id');
var begin = document.getElementById('begin');
var a ;
var arr = JSON.parse(sessionStorage.getItem('data'));
var arr1 = JSON.parse(sessionStorage.getItem('data3'));
var homepage = document.getElementById('homepage');
homepage.onclick = function backHome() {
    sessionStorage.clear();
    if (confirm("确定关闭游戏嘛 ")) {
        window.location.href = '1.html';
    }
}
 for ( let i = 0; i < data1; i++) {
        box[i].style.display = 'block';
       
        if (data2[i] == '好人') {
            id[i].innerText = '平民';       
        }
        else {
            id[i].innerText = '狼人';
         }
     }
for (let i = 0; i < box.length; i++) {
 
    box[i].onclick = function () {
         a = i;
    }
}
if( arr[0].ready != 'no'){ 
for ( let i = 0; i < data1; i++) { 
    if(arr[i].state == "die"){
         arr[i].state = "died";
    }
}
    for (let i = 0; i < data1; i++) {
         if (arr[i].state == 'died') {
            id[i].style.backgroundColor = 'green';
        }
    }
}
if(arr[0].ready =='no'){
    arr[0].ready = 'yes';
}
if(arr1 == null) {
    arr1= [];
}
begin.onclick = function () {
     if(a == undefined){
        arr1.push('杀手没有杀人');
        console.log(arr1)
        sessionStorage.setItem('data3', JSON.stringify(arr1));
        window.sessionStorage.setItem('data', JSON.stringify(arr));
        window.location.href = '6.html';
        return
    }
    if (arr[a].state != 'live'){
          alert('该玩家已死');
          return
        } 
      else if(arr[a].name == '狼人'){
          alert('不能杀狼人');
          return
      }  
    arr[a].state = 'die';
    arr1.push(arr[a].id + '号玩家被杀死，真实身份是好人');
    sessionStorage.setItem('data3', JSON.stringify(arr1));
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
    if( n == m ) {
        arr[0].day -= 1;
        window.sessionStorage.setItem('data', JSON.stringify(arr));       
        window.location.href = '9.html';
        return
    }
    window.location.href = '6.html';

}



