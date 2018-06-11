var data2 = JSON.parse(localStorage.getItem('identity'));

var data1 = (localStorage.getItem('sum'));
var box = document.getElementsByClassName('box');
var id = document.getElementsByClassName('id');
var begin = document.getElementById('begin');
var a ;
var arr = [];
var overarr = [];



var twoday = JSON.parse(sessionStorage.getItem('twoday'));
var threeday = JSON.parse(sessionStorage.getItem('threeday'));
var fourday = JSON.parse(sessionStorage.getItem('fourday'));
var fiveday = JSON.parse(sessionStorage.getItem('fiveday'));
var sixday = JSON.parse(sessionStorage.getItem('sixday'));
var thday = JSON.parse(sessionStorage.getItem('thday'));
var etday = JSON.parse(sessionStorage.getItem('etday'));

console.log(threeday)
function allot() {
    

    for ( let i = 0; i < data1; i++) {
        box[i].style.display = 'block';
       
        if (data2[i] == '好人') {
            id[i].innerText = '平民';
         var obj = {
             id: i+1,
             name: '平民',
             state: 'live',
         };
         arr.push(obj);
        }
         
        
         else {
            id[i].innerText = '狼人';
            var obj = {
                id: i+1,
                name: '狼人',
                state: 'live',
            };
            arr.push(obj);
        }
        
    }
    for ( let i = 0; i < data1; i++) { 
        // console.log(oneday[i].state)
         if(twoday == null){
            return
        
        }
        else if(twoday[i].state == "died"){

            id[i].style.backgroundColor = 'green';
            
            }
    }

    
}
// console.log(oneday)
function comparetwo() {
   
     if(twoday == null){
         return
     }
    for (let i = 0; i < twoday.length; i++) {
        
        if (twoday[i].state == 'died') {
            overarr.push('死亡人')
            id[i].style.backgroundColor = 'green';
        }
    }
    
        begin.onclick = function () {
            if(a == undefined){
                window.sessionStorage.setItem('twodaykill', JSON.stringify(twoday));   //改变后的twoday
           
           window.location.href = '6.html';
               return
           };
           if (twoday[a].state == 'died'){
                 alert('该玩家已死');
                 return
             }
             
             else if(arr[a].name == '狼人'){
                 alert('不能杀狼人');
                 return
             }
             
             twoday[a].state = 'die';
             
            //  console.log(twoday)
           
           window.sessionStorage.setItem('twodaykill', JSON.stringify(twoday));   //改变后的twoday
           
           window.location.href = '6.html';
       }
    

}

function comparetwo1() {
   
    if(threeday == null){
        return
    }
   for (let i = 0; i < threeday.length; i++) {
       
       if (threeday[i].state == 'died') {
           overarr.push('死亡人')
           id[i].style.backgroundColor = 'green';
       }
   }
   
       begin.onclick = function () {
           if(a == undefined){
            window.sessionStorage.setItem('threedaykill', JSON.stringify(threeday));   //改变后的threeday
          
            window.location.href = '6.html';
              return
          };
          if (threeday[a].state == 'died'){
                alert('该玩家已死');
                return
            }
            
            else if(arr[a].name == '狼人'){
                alert('不能杀狼人');
                return
            }
            
            threeday[a].state = 'die';
            
            console.log(threeday)
          
          window.sessionStorage.setItem('threedaykill', JSON.stringify(threeday));   //改变后的threeday
          
          window.location.href = '6.html';
      }
   

}
function comparetwo2() {
   
    if(fourday == null){
        return
    }
   for (let i = 0; i < fourday.length; i++) {
       
       if (fourday[i].state == 'died') {
           overarr.push('死亡人')
           id[i].style.backgroundColor = 'green';
       }
   }
  
       begin.onclick = function () {
           if(a == undefined){
            window.sessionStorage.setItem('fourdaykill', JSON.stringify(fourday));   //改变后的threeday
          
            window.location.href = '6.html';
              return
          };
          if (fourday[a].state == 'died'){
                alert('该玩家已死');
                return
            }
            
            else if(arr[a].name == '狼人'){
                alert('不能杀狼人');
                return
            }
            
            fourday[a].state = 'die';
            
            console.log(fourday)
          
          window.sessionStorage.setItem('fourdaykill', JSON.stringify(fourday));   //改变后的threeday
          
          window.location.href = '6.html';
      }
   

}
function comparetwo3() {
   
    if(fiveday == null){
        return
    }
   for (let i = 0; i < fiveday.length; i++) {
       
       if (fiveday[i].state == 'died') {
           overarr.push('死亡人')
           id[i].style.backgroundColor = 'green';
       }
   }
   
       begin.onclick = function () {
           if(a == undefined){
            window.sessionStorage.setItem('fivedaykill', JSON.stringify(fiveday));   //改变后的threeday
          
            window.location.href = '6.html';
              return
          };
          if (fiveday[a].state == 'died'){
                alert('该玩家已死');
                return
            }
            
            else if(arr[a].name == '狼人'){
                alert('不能杀狼人');
                return
            }
            
            fiveday[a].state = 'die';
            
            console.log(fiveday)
          
          window.sessionStorage.setItem('fivedaykill', JSON.stringify(fiveday));   //改变后的threeday
          
          window.location.href = '6.html';
      }
   

}
function comparetwo4() {
   
    if(sixday == null){
        return
    }
   for (let i = 0; i < sixday.length; i++) {
       
       if (sixday[i].state == 'died') {
           overarr.push('死亡人')
           id[i].style.backgroundColor = 'green';
       }
   }
   
       begin.onclick = function () {
           if(a == undefined){
            window.sessionStorage.setItem('sixdaykill', JSON.stringify(sixday));   //改变后的threeday
          
            window.location.href = '6.html';
              return
          };
          if (sixday[a].state == 'died'){
                alert('该玩家已死');
                return
            }
            
            else if(arr[a].name == '狼人'){
                alert('不能杀狼人');
                return
            }
            
            sixday[a].state = 'die';
            
            console.log(sixday)
          
          window.sessionStorage.setItem('sixdaykill', JSON.stringify(sixday));   //改变后的threeday
          
          window.location.href = '6.html';
      }
   

}

function comparetwo5() {
   
    if(thday == null){
        return
    }
   for (let i = 0; i < thday.length; i++) {
       
       if (thday[i].state == 'died') {
           overarr.push('死亡人')
           id[i].style.backgroundColor = 'green';
       }
   }
   
       begin.onclick = function () {
           if(a == undefined){
            window.sessionStorage.setItem('thdaykill', JSON.stringify(thday));   //改变后的threeday
          
            window.location.href = '6.html';
              return
          };
          if (thday[a].state == 'died'){
                alert('该玩家已死');
                return
            }
            
            else if(arr[a].name == '狼人'){
                alert('不能杀狼人');
                return
            }
            
            thday[a].state = 'die';
         
          
          window.sessionStorage.setItem('thdaykill', JSON.stringify(thday));   //改变后的threeday
          
          window.location.href = '6.html';
      }
   

}

function comparetwo6() {
   
    if(etday == null){
        return
    }
   for (let i = 0; i < etday.length; i++) {
       
       if (etday[i].state == 'died') {
           overarr.push('死亡人')
           id[i].style.backgroundColor = 'green';
       }
   }
   
       begin.onclick = function () {
           if(a == undefined){
            window.sessionStorage.setItem('etdaykill', JSON.stringify(etday));   
          
            window.location.href = '6.html';
              return
          };
          if (etday[a].state == 'died'){
                alert('该玩家已死');
                return
            }
            
            else if(arr[a].name == '狼人'){
                alert('不能杀狼人');
                return
            }
            
            etday[a].state = 'die';
         
          
          window.sessionStorage.setItem('etdaykill', JSON.stringify(etday));   
          
          window.location.href = '6.html';
      }
   

}








allot();






for (let i = 0; i < box.length; i++) {
 
    box[i].onclick = function () {
         a = i;
    console.log(i)
    }
}







begin.onclick = function () {
     if(a == undefined){
        window.sessionStorage.setItem('onedaykill', JSON.stringify(arr));
    
        window.location.href = '6.html';
        return
    };
    if (arr[a].state == 'died'){
          alert('该玩家已死');
          return
      }
      
      else if(arr[a].name == '狼人'){
          alert('不能杀狼人');
          return
      }
      
      arr[a].state = 'die';
      
      
    
    window.sessionStorage.setItem('onedaykill', JSON.stringify(arr));
    
    window.location.href = '6.html';
}
comparetwo()
comparetwo1()
comparetwo2()
comparetwo3()
comparetwo4()
comparetwo5()
comparetwo6()