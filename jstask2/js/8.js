var data2 = JSON.parse(localStorage.getItem('identity'));

var data1 = (localStorage.getItem('sum'));
var box = document.getElementsByClassName('box');
var id = document.getElementsByClassName('id');
var begin = document.getElementById('begin');
var a ;
var arr = [];
var overarr = [];

var oneday = JSON.parse(sessionStorage.getItem('onedayvote'));

var twoday = JSON.parse(sessionStorage.getItem('twodayvote'));

var threeday = JSON.parse(sessionStorage.getItem('threedayvote'));

var fourday = JSON.parse(sessionStorage.getItem('fourdayvote'));
var fiveday = JSON.parse(sessionStorage.getItem('fivedayvote'));
var sixday = JSON.parse(sessionStorage.getItem('sixdayvote'));
var thday = JSON.parse(sessionStorage.getItem('thdayvote'));
var etday = JSON.parse(sessionStorage.getItem('etdayvote'));

console.log(overarr)
// console.log(oneday)
// console.log(twoday)
function allot() {
    

    for ( let i = 0; i < data1; i++) {
        box[i].style.display = 'block';
        if (data2[i] == '好人') {
            id[i].innerText = '彩民';
         var obj = {
             id: i+1,
             name: '平民',
             state: 'live',
         };
         arr.push(obj);
        }
         
        
         else {
            id[i].innerText = '彩民';
            var obj = {
                id: i+1,
                name: '狼人',
                state: 'live',
            };
            arr.push(obj);
        }
        
    }
    for ( let i = 0; i < data1; i++) { 
        // console.log(id[i].state)
         if(oneday == null){
            return
        
        }
        else if(oneday[i].state == "die"){
             oneday[i].state = "died";
             arr[i].state = "died";
            // console.log(arr)
            }

    }
    for(let i=0;i<data1; i++){
        if(arr[i].state == "died"){
            id[i].style.backgroundColor = 'green';
        }
    }

    
}
function  comparetwo(){
    if(twoday == null){
        return;
    }

    for (let i = 0; i < twoday.length; i++) {
        if(twoday[i].state == "die"){
            twoday[i].state = "died";
            // console.log(twoday)
        }
        
        if (twoday[i].state == 'died') {
            overarr.push('死亡人')
            id[i].style.backgroundColor = 'green';
        
        }
    }
    if (overarr.length == 3) {
        begin.onclick = function () {
            if(a == undefined){
               alert('请选中玩家')
               return
           };
           if (twoday[a].state == 'died'){
                 alert('该玩家已死');
                 return
             }
             
             
             twoday[a].state = 'die';
           
            //  console.log(twoday)
           
           window.sessionStorage.setItem('twodayvotekill', JSON.stringify(twoday));
           
           window.location.href = '6.html';
       }
    }
}
function  comparetwo1(){
    if(threeday == null){
        return;
    }

    for (let i = 0; i < threeday.length; i++) {
        if(threeday[i].state == "die"){
            threeday[i].state = "died";
            
        }
        
        if (threeday[i].state == 'died') {
            overarr.push('死亡人')
            id[i].style.backgroundColor = 'green';
            
        }
    }
    if (overarr.length == 8) {
        begin.onclick = function () {
            if(a == undefined){
               alert('请选中玩家')
               return
           };
           if (threeday[a].state == 'died'){
                 alert('该玩家已死');
                 return
             }
             
             
             threeday[a].state = 'die';
           
            
           
           window.sessionStorage.setItem('threedayvotekill', JSON.stringify(threeday));
           
           window.location.href = '6.html';
       }
    }
}

function  comparetwo2(){
    if(fourday == null){
        return;
    }

    for (let i = 0; i < fourday.length; i++) {
        if(fourday[i].state == "die"){
            fourday[i].state = "died";
            
        }
        
        if (fourday[i].state == 'died') {
            overarr.push('死亡人')
            id[i].style.backgroundColor = 'green';
              
        }
        console.log(overarr)
    }
  
    if (overarr.length == 15) {
        begin.onclick = function () {
            if(a == undefined){
               alert('请选中玩家')
               return
           };
           if (fourday[a].state == 'died'){
                 alert('该玩家已死');
                 return
             }
             
             
             fourday[a].state = 'die';
           
             
           
           window.sessionStorage.setItem('fourdayvotekill', JSON.stringify(fourday));
           
           window.location.href = '6.html';
       }
    }
}
function  comparetwo3(){
    if(fiveday == null){
        return;
    }

    for (let i = 0; i < fiveday.length; i++) {
        if(fiveday[i].state == "die"){
            fiveday[i].state = "died";
            
        }
        
        if (fiveday[i].state == 'died') {
            overarr.push('死亡人')
            id[i].style.backgroundColor = 'green';
              
        }
        console.log(overarr)
    }
  
    if (overarr.length == 24) {
        begin.onclick = function () {
            if(a == undefined){
               alert('请选中玩家')
               return
           };
           if (fiveday[a].state == 'died'){
                 alert('该玩家已死');
                 return
             }
             
             
             fiveday[a].state = 'die';
           
             
           
           window.sessionStorage.setItem('fivedayvotekill', JSON.stringify(fiveday));
           
           window.location.href = '6.html';
       }
    }
}
function  comparetwo4(){
    if(sixday == null){
        return;
    }

    for (let i = 0; i < sixday.length; i++) {
        if(sixday[i].state == "die"){
            sixday[i].state = "died";
            
        }
        
        if (sixday[i].state == 'died') {
            overarr.push('死亡人')
            id[i].style.backgroundColor = 'green';
              
        }
        console.log(overarr)
    }
  
    if (overarr.length == 35) {
        begin.onclick = function () {
            if(a == undefined){
               alert('请选中玩家')
               return
           };
           if (sixday[a].state == 'died'){
                 alert('该玩家已死');
                 return
             }
             
             
             sixday[a].state = 'die';
           
             
           
           window.sessionStorage.setItem('sixdayvotekill', JSON.stringify(sixday));
           
           window.location.href = '6.html';
       }
    }
}

function  comparetwo5(){
    if(thday == null){
        return;
    }

    for (let i = 0; i < thday.length; i++) {
        if(thday[i].state == "die"){
            thday[i].state = "died";
            
        }
        
        if (thday[i].state == 'died') {
            overarr.push('死亡人')
            id[i].style.backgroundColor = 'green';
              
        }
        console.log(overarr)
    }
  
    if (overarr.length == 48) {
        begin.onclick = function () {
            if(a == undefined){
               alert('请选中玩家')
               return
           };
           if (thday[a].state == 'died'){
                 alert('该玩家已死');
                 return
             }
             
             
             thday[a].state = 'die';
           
             
           
           window.sessionStorage.setItem('thdayvotekill', JSON.stringify(thday));
           
           window.location.href = '6.html';
       }
    }
}
function  comparetwo6(){
    if(etday == null){
        return;
    }

    for (let i = 0; i < etday.length; i++) {
        if(etday[i].state == "die"){
            etday[i].state = "died";
            
        }
        
        if (etday[i].state == 'died') {
            overarr.push('死亡人')
            id[i].style.backgroundColor = 'green';
              
        }
        console.log(overarr)
    }
  
    if (overarr.length == 63) {
        begin.onclick = function () {
            if(a == undefined){
               alert('请选中玩家')
               return
           };
           if (etday[a].state == 'died'){
                 alert('该玩家已死');
                 return
             }
             
             
             etday[a].state = 'die';
           
             
           
           window.sessionStorage.setItem('etdayvotekill', JSON.stringify(etday));
           
           window.location.href = '6.html';
       }
    }
}






allot();






for (let i = 0; i < box.length; i++) {
 
    box[i].onclick = function () {
         a = i;
    // console.log(i)
    }
}







begin.onclick = function () {
     if(a == undefined){
        alert('请选中玩家')
        return
    };
    if (arr[a].state == 'died'){
          alert('该玩家已死');
          return
      }
      
      
      arr[a].state = 'die';
      
    //   console.log(arr)
    
    window.sessionStorage.setItem('onedayvotekill', JSON.stringify(arr));
    
    window.location.href = '6.html';
}

comparetwo()
comparetwo1()
comparetwo2()
comparetwo3()
comparetwo4()
comparetwo5()
comparetwo6()