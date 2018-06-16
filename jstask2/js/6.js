var list = document.getElementsByClassName('list')[0];
var daies = document.getElementsByClassName('day'); //第几天节点
var matter = document.getElementsByClassName('matter'); //列表节点
var kill = document.getElementsByClassName('kill');
var ghost = document.getElementsByClassName('ghost');
var player = document.getElementsByClassName('player');
var vote = document.getElementsByClassName('vote');
var killResult = document.getElementsByClassName('killResult'); //杀人结果声明节点
var sun = document.getElementsByClassName('sun'); //太阳图节点  
var voteResult = document.getElementsByClassName('voteResult'); //投票结果声明
var trianglea = document.getElementsByClassName('trianglea'); //4个三角形节点
var triangleb = document.getElementsByClassName('triangleb');
var trianglec = document.getElementsByClassName('trianglec');
var triangled = document.getElementsByClassName('triangled');
var num = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"]
var m = 0;
var homepage = document.getElementById('homepage');
var back = document.getElementById('back');
var end = document.getElementById('end');
end.onclick = function End() {
    window.location.href = '9.html';
}
back.onclick = function Back() {
    sessionStorage.clear();
    window.location.href = '3.html';
}
homepage.onclick = function backHome() {
    sessionStorage.clear();
    if (confirm("确定关闭游戏嘛 ")) {
        window.location.href = '1.html';
    }
}
function create() {
    list.innerHTML += `<span class="day"></span>
    <div class="matter">
    <div class="dot"></div>
    <div class="moon"></div>
    <span class="kill">杀手杀人<div class="trianglea" ></div></span>
    <p class="killResult"></p>
    <div class="sun"></div>
    <span class="ghost">亡灵发表遗言<div class="triangleb" ></div></span>
    <span class="player">玩家依次发言<div class="trianglec" ></div></span>
    <span class="vote">投票<div class="triangled" ></div></span>
    <p class="voteResult"></p>
    </div>`
    var day = document.getElementsByClassName('day')[m];
    day.innerText = '第' + num[m] + '天';
    m += 1;
    for (let i = 0; i < m; i++) {
        daies[i].onclick = function hie() {
            if (window, getComputedStyle(matter[i], null).display == 'block') {
                matter[i].style.display = 'none';
                // console.log(window, getComputedStyle(matters[i], null).display)
            } else if (window, getComputedStyle(matter[i], null).display == 'none') {
                matter[i].style.display = 'block';
            }
        }
    }
}
var arr = JSON.parse(sessionStorage.getItem('data'));
var arr1 = JSON.parse(sessionStorage.getItem('data3'));
var arr2 = JSON.parse(sessionStorage.getItem('data4'));

for (let i = 0; i < arr[0].day; i++) {
    create()
}
if (arr1 != undefined) {
    console.log(arr1[0])
    for (let i = 0; i < arr[0].day; i++) {
        if (arr1[i] != undefined) {
            killResult[i].innerHTML = arr1[i];
            sun[i].style.top = '6.4rem';
            kill[i].style.backgroundColor = '#ccc';
            trianglea[i].style.borderRight = '.7rem solid #ccc';
        }


    }
}
if (arr2 != undefined) {
    for (let i = 0; i < arr[0].day; i++) {
        if (arr2[i] != undefined) {
            voteResult[i].innerHTML = arr2[i];
            ghost[i].style.backgroundColor = '#ccc';
            triangleb[i].style.borderRight = '.7rem solid #ccc';
            player[i].style.backgroundColor = '#ccc';
            trianglec[i].style.borderRight = '.7rem solid #ccc';
            vote[i].style.backgroundColor = '#ccc';
            triangled[i].style.borderRight = '.7rem solid #ccc';
            matter[i].style.display = 'none';
        }
    }
}
for (let i = 0; i < arr[0].day; i++) {
    //杀人 转按钮
    kill[i].onclick = function murder() {
        if (window, getComputedStyle(kill[i], null).backgroundColor == 'rgb(204, 204, 204)') {
            alert('请进行下一项');
            return
        }
        sessionStorage.setItem('data', JSON.stringify(arr));

        window.location.href = '7.html';
    }
    //亡灵发表遗言按钮
    ghost[i].onclick = function talk() {
        if (window, getComputedStyle(kill[i], null).backgroundColor != 'rgb(204, 204, 204)') {
            alert('按顺序走');
            return
        }
        if (window, getComputedStyle(ghost[i], null).backgroundColor == 'rgb(204, 204, 204)') {
            alert('请进行下一项');
            return
        }
        alert('表明身份发表遗言');
        ghost[i].style.backgroundColor = '#ccc';
        triangleb[i].style.borderRight = '.7rem solid #ccc';
    }
    //玩家依次发言按钮
    player[i].onclick = function playerTalk() {
        if (window, getComputedStyle(ghost[i], null).backgroundColor != 'rgb(204, 204, 204)') {
            alert('按顺序走');
            return;
        }
        if (window, getComputedStyle(player[i], null).backgroundColor == 'rgb(204, 204, 204)') {
            alert('请进行下一项');
            return
        }
        alert('玩家依次发言');
        player[i].style.backgroundColor = '#ccc';
        trianglec[i].style.borderRight = '.7rem solid #ccc';
    }
    //投票按钮
    vote[i].onclick = function govote() {
        if (window, getComputedStyle(player[i], null).backgroundColor != 'rgb(204, 204, 204)') {
            alert('按顺序走');
            return;
        }
        if (window, getComputedStyle(vote[i], null).backgroundColor == 'rgb(204, 204, 204)') {
            alert('请进行下一项');
            return
        }
        sessionStorage.setItem('data', JSON.stringify(arr));
        window.location.href = '8.html';
    }
}