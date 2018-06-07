var data1 = (localStorage.getItem('sum'));

var list = document.getElementsByClassName('list')[0];
var daies = document.getElementsByClassName('day'); //第几天节点
var matters = document.getElementsByClassName('matter'); //列表节点
var kills = document.getElementsByClassName('kill');
var ghosts = document.getElementsByClassName('ghost');
var players = document.getElementsByClassName('player');
var votes = document.getElementsByClassName('vote');

var arr = [];


// console.log(twoday)



var num = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"]
var n = 0;
var m = 0;


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
            if (window, getComputedStyle(matters[i], null).display == 'block') {
                matters[i].style.display = 'none';
                // console.log(window, getComputedStyle(matters[i], null).display)
            } else if (window, getComputedStyle(matters[i], null).display == 'none') {
                matters[i].style.display = 'block';

            }


        }

    }

}

function all() {

    var kill = document.getElementsByClassName('kill')[n]; //杀人按钮节点
    var matter = document.getElementsByClassName('matter')[n]; //列表节点
    var killResult = document.getElementsByClassName('killResult')[n]; //杀人结果声明节点
    var sun = document.getElementsByClassName('sun')[n]; //太阳图节点  
    var ghost = document.getElementsByClassName('ghost')[n]; //亡灵遗言按钮节点
    var player = document.getElementsByClassName('player')[n]; //玩家发言按钮节点
    var vote = document.getElementsByClassName('vote')[n]; //投票按钮节点
    var voteResult = document.getElementsByClassName('voteResult')[n]; //投票结果声明
    var trianglea = document.getElementsByClassName('trianglea')[n]; //4个三角形节点
    var triangleb = document.getElementsByClassName('triangleb')[n];
    var trianglec = document.getElementsByClassName('trianglec')[n];
    var triangled = document.getElementsByClassName('triangled')[n];
    // console.log(killResult);

    //杀人 跳转按钮
    kill.onclick = function murder() {
        if (window, getComputedStyle(kills[n], null).backgroundColor == 'rgb(204, 204, 204)') {
            alert('请进行下一项');
            return
        }
        window.location.href = '7.html';
    }
    //亡灵发表遗言按钮
    ghost.onclick = function talk() {
        if (window, getComputedStyle(kills[n], null).backgroundColor != 'rgb(204, 204, 204)') {
            alert('按顺序走');
            return
        }
        if (window, getComputedStyle(ghosts[n], null).backgroundColor == 'rgb(204, 204, 204)') {
            alert('请进行下一项');
            return
        }
        alert('表明身份发表遗言');
        ghost.style.backgroundColor = '#ccc';
        triangleb.style.borderRight = '.7rem solid #ccc';
    }
    //玩家依次发言按钮
    player.onclick = function playerTalk() {
        if (window, getComputedStyle(ghosts[n], null).backgroundColor != 'rgb(204, 204, 204)') {
            alert('按顺序走');
            return;
        }
        if (window, getComputedStyle(players[n], null).backgroundColor == 'rgb(204, 204, 204)') {
            alert('请进行下一项');
            return
        }
        alert('玩家依次发言');
        player.style.backgroundColor = '#ccc';
        trianglec.style.borderRight = '.7rem solid #ccc';
    }
    //投票按钮
    vote.onclick = function govote() {
        if (window, getComputedStyle(players[n], null).backgroundColor != 'rgb(204, 204, 204)') {
            alert('按顺序走');
            return;
        }
        if (window, getComputedStyle(votes[n], null).backgroundColor == 'rgb(204, 204, 204)') {
            alert('请进行下一项');
            return
        }
        window.location.href = '8.html';

    }
}



function run() {
    all();
    //第一天
    var kill = document.getElementsByClassName('kill')[n]; //杀人按钮节点
    var matter = document.getElementsByClassName('matter')[n]; //列表节点
    var killResult = document.getElementsByClassName('killResult')[n]; //杀人结果声明节点
    var sun = document.getElementsByClassName('sun')[n]; //太阳图节点  
    var ghost = document.getElementsByClassName('ghost')[n]; //亡灵遗言按钮节点
    var player = document.getElementsByClassName('player')[n]; //玩家发言按钮节点
    var vote = document.getElementsByClassName('vote')[n]; //投票按钮节点
    var voteResult = document.getElementsByClassName('voteResult')[n]; //投票结果声明
    var trianglea = document.getElementsByClassName('trianglea')[n]; //4个三角形节点
    var triangleb = document.getElementsByClassName('triangleb')[n];
    var trianglec = document.getElementsByClassName('trianglec')[n];
    var triangled = document.getElementsByClassName('triangled')[n];
    // console.log(killResult);

    function generate() {
        var oneday = JSON.parse(sessionStorage.getItem('onedaykill'));
        if (oneday == null) {
            return
        } else {
            for (let i = 0; i < oneday.length; i++) {
                if (oneday[i].state == 'die') {
                    killResult.innerHTML = oneday[i].id + '号玩家被杀死，真实身份是好人';
                    window.sessionStorage.setItem('onedayvote', JSON.stringify(oneday));
                    sun.style.top = '6.4rem';
                    kill.style.backgroundColor = '#ccc';
                    trianglea.style.borderRight = '.7rem solid #ccc';

                }
            }
        }
    }

    function votegenerate() {
        var twoday = JSON.parse(sessionStorage.getItem('onedayvotekill'));
        if (twoday == null) {
            return
        } else {
            for (let i = 0; i < twoday.length; i++) {
                if (twoday[i].state == 'die') {
                    voteResult.innerHTML = twoday[i].id + '号玩家被票出,真是身份吗是' + twoday[i].name;
                    ghost.style.backgroundColor = '#ccc';
                    triangleb.style.borderRight = '.7rem solid #ccc';
                    player.style.backgroundColor = '#ccc';
                    trianglec.style.borderRight = '.7rem solid #ccc';
                    vote.style.backgroundColor = '#ccc';
                    triangled.style.borderRight = '.7rem solid #ccc';
                }
            }
        }

    }
    //第二天

    function compare() {
        var twodayif = JSON.parse(sessionStorage.getItem('onedayvotekill'));
        if (twodayif == null) {
            return
        }
        for (let i = 0; i < twodayif.length; i++) {
            if (twodayif[i].state == 'die') {
                twodayif[i].state = 'died';
            }
            if (twodayif[i].state == 'died') {
                arr.push('死亡人')
            }
        }
        console.log(twodayif)
        window.sessionStorage.setItem('twoday', JSON.stringify(twodayif));
        if (arr.length == 2) {
            n += 1;
            create();
            all();
            var kill = document.getElementsByClassName('kill')[n]; //杀人按钮节点
            var matter = document.getElementsByClassName('matter')[n]; //列表节点
            var killResult = document.getElementsByClassName('killResult')[n]; //杀人结果声明节点
            var sun = document.getElementsByClassName('sun')[n]; //太阳图节点  
            var ghost = document.getElementsByClassName('ghost')[n]; //亡灵遗言按钮节点
            var player = document.getElementsByClassName('player')[n]; //玩家发言按钮节点
            var vote = document.getElementsByClassName('vote')[n]; //投票按钮节点
            var voteResult = document.getElementsByClassName('voteResult')[n]; //投票结果声明
            var trianglea = document.getElementsByClassName('trianglea')[n]; //4个三角形节点
            var triangleb = document.getElementsByClassName('triangleb')[n];
            var trianglec = document.getElementsByClassName('trianglec')[n];
            var triangled = document.getElementsByClassName('triangled')[n];

            function votegenerate() {
                var threeday = JSON.parse(sessionStorage.getItem('twodayvotekill'));
                if (threeday == null) {
                    return
                } else {
                    for (let i = 0; i < threeday.length; i++) {
                        if (threeday[i].state == 'die') {
                            voteResult.innerHTML = threeday[i].id + '号玩家被票出,真是身份吗是' + threeday[i].name;
                            ghost.style.backgroundColor = '#ccc';
                            triangleb.style.borderRight = '.7rem solid #ccc';
                            player.style.backgroundColor = '#ccc';
                            trianglec.style.borderRight = '.7rem solid #ccc';
                            vote.style.backgroundColor = '#ccc';
                            triangled.style.borderRight = '.7rem solid #ccc';
                        }
                    }
                }
            }

            function generate() {
                var twoday = JSON.parse(sessionStorage.getItem('twodaykill'));
                if (twoday == null) {
                    return
                } else {
                    for (let i = 0; i < twoday.length; i++) {
                        if (twoday[i].state == 'die') {
                            killResult.innerHTML = twoday[i].id + '号玩家被杀死，真实身份是好人';
                            window.sessionStorage.setItem('twodayvote', JSON.stringify(twoday));
                            sun.style.top = '6.4rem';
                            kill.style.backgroundColor = '#ccc';
                            trianglea.style.borderRight = '.7rem solid #ccc';

                        }

                    }
                }
            }
        }
        generate();
        votegenerate();
    }
    //第三天
    function compare1() {
        var threedayif = JSON.parse(sessionStorage.getItem('twodayvotekill'));
        console.log(threedayif)
        if (threedayif == null) {
            return
        }
        for (let i = 0; i < threedayif.length; i++) {
            if (threedayif[i].state == 'die') {
                threedayif[i].state = 'died';

            }
            if (threedayif[i].state == 'died') {
                arr.push('死亡人')

            }
        }
        console.log(arr)
        window.sessionStorage.setItem('threeday', JSON.stringify(threedayif));
        if (arr.length == 6) {
            n += 1;
            create();
            all();
            var kill = document.getElementsByClassName('kill')[n]; //杀人按钮节点
            var matter = document.getElementsByClassName('matter')[n]; //列表节点
            var killResult = document.getElementsByClassName('killResult')[n]; //杀人结果声明节点
            var sun = document.getElementsByClassName('sun')[n]; //太阳图节点  
            var ghost = document.getElementsByClassName('ghost')[n]; //亡灵遗言按钮节点
            var player = document.getElementsByClassName('player')[n]; //玩家发言按钮节点
            var vote = document.getElementsByClassName('vote')[n]; //投票按钮节点
            var voteResult = document.getElementsByClassName('voteResult')[n]; //投票结果声明
            var trianglea = document.getElementsByClassName('trianglea')[n]; //4个三角形节点
            var triangleb = document.getElementsByClassName('triangleb')[n];
            var trianglec = document.getElementsByClassName('trianglec')[n];
            var triangled = document.getElementsByClassName('triangled')[n];

            function votegenerate() {
                var fourday = JSON.parse(sessionStorage.getItem('threedayvotekill'));
                if (fourday == null) {
                    return
                } else {
                    for (let i = 0; i < fourday.length; i++) {
                        if (fourday[i].state == 'die') {
                            voteResult.innerHTML = fourday[i].id + '号玩家被票出,真是身份吗是' + fourday[i].name;
                            ghost.style.backgroundColor = '#ccc';
                            triangleb.style.borderRight = '.7rem solid #ccc';
                            player.style.backgroundColor = '#ccc';
                            trianglec.style.borderRight = '.7rem solid #ccc';
                            vote.style.backgroundColor = '#ccc';
                            triangled.style.borderRight = '.7rem solid #ccc';


                        }
                    }
                }

            }

            function generate() {
                var threeday = JSON.parse(sessionStorage.getItem('threedaykill'));
                if (threeday == null) {
                    return
                } else {
                    for (let i = 0; i < threeday.length; i++) {
                        if (threeday[i].state == 'die') {
                            killResult.innerHTML = threeday[i].id + '号玩家被杀死，真实身份是好人';
                            window.sessionStorage.setItem('threedayvote', JSON.stringify(threeday));
                            sun.style.top = '6.4rem';
                            kill.style.backgroundColor = '#ccc';
                            trianglea.style.borderRight = '.7rem solid #ccc';

                        }

                    }
                }
            }
        }
        generate();
        votegenerate();
    }
    //第四天
    function compare2() {
        var fourdayif = JSON.parse(sessionStorage.getItem('threedayvotekill'));
        console.log(fourdayif)
        if (fourdayif == null) {
            return
        }
        for (let i = 0; i < fourdayif.length; i++) {
            if (fourdayif[i].state == 'die') {
                fourdayif[i].state = 'died';

            }
            if (fourdayif[i].state == 'died') {
                arr.push('死亡人')

            }
        }
        console.log(arr)
        window.sessionStorage.setItem('fourday', JSON.stringify(fourdayif));

        if (arr.length == 12) {
            n += 1;
            create();
            all();
            var kill = document.getElementsByClassName('kill')[n]; //杀人按钮节点
            var matter = document.getElementsByClassName('matter')[n]; //列表节点
            var killResult = document.getElementsByClassName('killResult')[n]; //杀人结果声明节点
            var sun = document.getElementsByClassName('sun')[n]; //太阳图节点  
            var ghost = document.getElementsByClassName('ghost')[n]; //亡灵遗言按钮节点
            var player = document.getElementsByClassName('player')[n]; //玩家发言按钮节点
            var vote = document.getElementsByClassName('vote')[n]; //投票按钮节点
            var voteResult = document.getElementsByClassName('voteResult')[n]; //投票结果声明
            var trianglea = document.getElementsByClassName('trianglea')[n]; //4个三角形节点
            var triangleb = document.getElementsByClassName('triangleb')[n];
            var trianglec = document.getElementsByClassName('trianglec')[n];
            var triangled = document.getElementsByClassName('triangled')[n];



            function votegenerate() {
                var fiveday = JSON.parse(sessionStorage.getItem('fourdayvotekill'));


                if (fiveday == null) {
                    return
                } else {
                    for (let i = 0; i < fiveday.length; i++) {
                        if (fiveday[i].state == 'die') {
                            voteResult.innerHTML = fiveday[i].id + '号玩家被票出,真是身份吗是' + fiveday[i].name;
                            ghost.style.backgroundColor = '#ccc';
                            triangleb.style.borderRight = '.7rem solid #ccc';
                            player.style.backgroundColor = '#ccc';
                            trianglec.style.borderRight = '.7rem solid #ccc';
                            vote.style.backgroundColor = '#ccc';
                            triangled.style.borderRight = '.7rem solid #ccc';


                        }
                    }
                }

            }

            function generate() {
                var fourday = JSON.parse(sessionStorage.getItem('fourdaykill'));
                if (fourday == null) {
                    return
                } else {
                    for (let i = 0; i < fourday.length; i++) {
                        if (fourday[i].state == 'die') {
                            killResult.innerHTML = fourday[i].id + '号玩家被杀死，真实身份是好人';
                            window.sessionStorage.setItem('fourdayvote', JSON.stringify(fourday));
                            sun.style.top = '6.4rem';
                            kill.style.backgroundColor = '#ccc';
                            trianglea.style.borderRight = '.7rem solid #ccc';
                        }
                    }
                }
            }

        }

        generate();
        votegenerate();
    }
    //第五天
    function compare3() {
        var fivedayif = JSON.parse(sessionStorage.getItem('fourdayvotekill'));
        console.log(fivedayif)
        if (fivedayif == null) {
            return
        }
        for (let i = 0; i < fivedayif.length; i++) {
            if (fivedayif[i].state == 'die') {
                fivedayif[i].state = 'died';

            }
            if (fivedayif[i].state == 'died') {
                arr.push('死亡人')

            }
        }
        console.log(arr)
        window.sessionStorage.setItem('fiveday', JSON.stringify(fivedayif));

        if (arr.length == 20) {
            n += 1;
            create();
            all();
            var kill = document.getElementsByClassName('kill')[n]; //杀人按钮节点
            var matter = document.getElementsByClassName('matter')[n]; //列表节点
            var killResult = document.getElementsByClassName('killResult')[n]; //杀人结果声明节点
            var sun = document.getElementsByClassName('sun')[n]; //太阳图节点  
            var ghost = document.getElementsByClassName('ghost')[n]; //亡灵遗言按钮节点
            var player = document.getElementsByClassName('player')[n]; //玩家发言按钮节点
            var vote = document.getElementsByClassName('vote')[n]; //投票按钮节点
            var voteResult = document.getElementsByClassName('voteResult')[n]; //投票结果声明
            var trianglea = document.getElementsByClassName('trianglea')[n]; //4个三角形节点
            var triangleb = document.getElementsByClassName('triangleb')[n];
            var trianglec = document.getElementsByClassName('trianglec')[n];
            var triangled = document.getElementsByClassName('triangled')[n];



            function votegenerate() {
                var sixday = JSON.parse(sessionStorage.getItem('fivedayvotekill'));


                if (sixday == null) {
                    return
                } else {
                    for (let i = 0; i < sixday.length; i++) {
                        if (sixday[i].state == 'die') {
                            voteResult.innerHTML = sixday[i].id + '号玩家被票出,真是身份吗是' + sixday[i].name;
                            ghost.style.backgroundColor = '#ccc';
                            triangleb.style.borderRight = '.7rem solid #ccc';
                            player.style.backgroundColor = '#ccc';
                            trianglec.style.borderRight = '.7rem solid #ccc';
                            vote.style.backgroundColor = '#ccc';
                            triangled.style.borderRight = '.7rem solid #ccc';


                        }
                    }
                }

            }

            function generate() {
                var fiveday = JSON.parse(sessionStorage.getItem('fivedaykill'));
                if (fiveday == null) {
                    return
                } else {
                    for (let i = 0; i < fiveday.length; i++) {
                        if (fiveday[i].state == 'die') {
                            killResult.innerHTML = fiveday[i].id + '号玩家被杀死，真实身份是好人';
                            window.sessionStorage.setItem('fivedayvote', JSON.stringify(fiveday));
                            sun.style.top = '6.4rem';
                            kill.style.backgroundColor = '#ccc';
                            trianglea.style.borderRight = '.7rem solid #ccc';
                        }
                    }
                }
            }

        }

        generate();
        votegenerate();
    }
     //第五天
     function compare4() {
        var sixdayif = JSON.parse(sessionStorage.getItem('fivedayvotekill'));
        console.log(sixdayif)
        if (sixdayif == null) {
            return
        }
        for (let i = 0; i < sixdayif.length; i++) {
            if (sixdayif[i].state == 'die') {
                sixdayif[i].state = 'died';

            }
            if (sixdayif[i].state == 'died') {
                arr.push('死亡人')

            }
        }
        console.log(arr)
        window.sessionStorage.setItem('sixday', JSON.stringify(sixdayif));

        if (arr.length == 30) {
            n += 1;
            create();
            all();
            var kill = document.getElementsByClassName('kill')[n]; //杀人按钮节点
            var matter = document.getElementsByClassName('matter')[n]; //列表节点
            var killResult = document.getElementsByClassName('killResult')[n]; //杀人结果声明节点
            var sun = document.getElementsByClassName('sun')[n]; //太阳图节点  
            var ghost = document.getElementsByClassName('ghost')[n]; //亡灵遗言按钮节点
            var player = document.getElementsByClassName('player')[n]; //玩家发言按钮节点
            var vote = document.getElementsByClassName('vote')[n]; //投票按钮节点
            var voteResult = document.getElementsByClassName('voteResult')[n]; //投票结果声明
            var trianglea = document.getElementsByClassName('trianglea')[n]; //4个三角形节点
            var triangleb = document.getElementsByClassName('triangleb')[n];
            var trianglec = document.getElementsByClassName('trianglec')[n];
            var triangled = document.getElementsByClassName('triangled')[n];



            function votegenerate() {
                var thday = JSON.parse(sessionStorage.getItem('sixdayvotekill'));


                if (thday == null) {
                    return
                } else {
                    for (let i = 0; i < thday.length; i++) {
                        if (thday[i].state == 'die') {
                            voteResult.innerHTML = thday[i].id + '号玩家被票出,真是身份吗是' + thday[i].name;
                            ghost.style.backgroundColor = '#ccc';
                            triangleb.style.borderRight = '.7rem solid #ccc';
                            player.style.backgroundColor = '#ccc';
                            trianglec.style.borderRight = '.7rem solid #ccc';
                            vote.style.backgroundColor = '#ccc';
                            triangled.style.borderRight = '.7rem solid #ccc';


                        }
                    }
                }

            }

            function generate() {
                var sixday = JSON.parse(sessionStorage.getItem('sixdaykill'));
                if (sixday == null) {
                    return
                } else {
                    for (let i = 0; i < sixday.length; i++) {
                        if (sixday[i].state == 'die') {
                            killResult.innerHTML = sixday[i].id + '号玩家被杀死，真实身份是好人';
                            window.sessionStorage.setItem('sixdayvote', JSON.stringify(sixday));
                            sun.style.top = '6.4rem';
                            kill.style.backgroundColor = '#ccc';
                            trianglea.style.borderRight = '.7rem solid #ccc';
                        }
                    }
                }
            }

        }

        generate();
        votegenerate();
    }
     //第七天
     function compare5() {
        var thdayif = JSON.parse(sessionStorage.getItem('sixdayvotekill'));
        
        if (thdayif == null) {
            return
        }
        for (let i = 0; i < thdayif.length; i++) {
            if (thdayif[i].state == 'die') {
                thdayif[i].state = 'died';

            }
            if (thdayif[i].state == 'died') {
                arr.push('死亡人')

            }
        }
        console.log(arr)
        window.sessionStorage.setItem('thday', JSON.stringify(thdayif));

        if (arr.length == 42) {
            n += 1;
            create();
            all();
            var kill = document.getElementsByClassName('kill')[n]; //杀人按钮节点
            var matter = document.getElementsByClassName('matter')[n]; //列表节点
            var killResult = document.getElementsByClassName('killResult')[n]; //杀人结果声明节点
            var sun = document.getElementsByClassName('sun')[n]; //太阳图节点  
            var ghost = document.getElementsByClassName('ghost')[n]; //亡灵遗言按钮节点
            var player = document.getElementsByClassName('player')[n]; //玩家发言按钮节点
            var vote = document.getElementsByClassName('vote')[n]; //投票按钮节点
            var voteResult = document.getElementsByClassName('voteResult')[n]; //投票结果声明
            var trianglea = document.getElementsByClassName('trianglea')[n]; //4个三角形节点
            var triangleb = document.getElementsByClassName('triangleb')[n];
            var trianglec = document.getElementsByClassName('trianglec')[n];
            var triangled = document.getElementsByClassName('triangled')[n];



            function votegenerate() {
                var etday = JSON.parse(sessionStorage.getItem('thdayvotekill'));


                if (etday == null) {
                    return
                } else {
                    for (let i = 0; i < etday.length; i++) {
                        if (etday[i].state == 'die') {
                            voteResult.innerHTML = etday[i].id + '号玩家被票出,真是身份吗是' + etday[i].name;
                            ghost.style.backgroundColor = '#ccc';
                            triangleb.style.borderRight = '.7rem solid #ccc';
                            player.style.backgroundColor = '#ccc';
                            trianglec.style.borderRight = '.7rem solid #ccc';
                            vote.style.backgroundColor = '#ccc';
                            triangled.style.borderRight = '.7rem solid #ccc';


                        }
                    }
                }

            }

            function generate() {
                var thday = JSON.parse(sessionStorage.getItem('thdaykill'));
                if (thday == null) {
                    return
                } else {
                    for (let i = 0; i < thday.length; i++) {
                        if (thday[i].state == 'die') {
                            killResult.innerHTML = thday[i].id + '号玩家被杀死，真实身份是好人';
                            window.sessionStorage.setItem('thdayvote', JSON.stringify(thday));
                            sun.style.top = '6.4rem';
                            kill.style.backgroundColor = '#ccc';
                            trianglea.style.borderRight = '.7rem solid #ccc';
                        }
                    }
                }
            }

        }

        generate();
        votegenerate();
    }
 //第八天
 function compare6() {
    var etdayif = JSON.parse(sessionStorage.getItem('thdayvotekill'));
    
    if (etdayif == null) {
        return
    }
    for (let i = 0; i < etdayif.length; i++) {
        if (etdayif[i].state == 'die') {
            etdayif[i].state = 'died';

        }
        if (etdayif[i].state == 'died') {
            arr.push('死亡人')

        }
    }
    console.log(arr)
    window.sessionStorage.setItem('etday', JSON.stringify(etdayif));

    if (arr.length == 56) {
        n += 1;
        create();
        all();
        var kill = document.getElementsByClassName('kill')[n]; //杀人按钮节点
        var matter = document.getElementsByClassName('matter')[n]; //列表节点
        var killResult = document.getElementsByClassName('killResult')[n]; //杀人结果声明节点
        var sun = document.getElementsByClassName('sun')[n]; //太阳图节点  
        var ghost = document.getElementsByClassName('ghost')[n]; //亡灵遗言按钮节点
        var player = document.getElementsByClassName('player')[n]; //玩家发言按钮节点
        var vote = document.getElementsByClassName('vote')[n]; //投票按钮节点
        var voteResult = document.getElementsByClassName('voteResult')[n]; //投票结果声明
        var trianglea = document.getElementsByClassName('trianglea')[n]; //4个三角形节点
        var triangleb = document.getElementsByClassName('triangleb')[n];
        var trianglec = document.getElementsByClassName('trianglec')[n];
        var triangled = document.getElementsByClassName('triangled')[n];



        function votegenerate() {
            var niday = JSON.parse(sessionStorage.getItem('etdayvotekill'));


            if (niday == null) {
                return
            } else {
                for (let i = 0; i < niday.length; i++) {
                    if (niday[i].state == 'die') {
                        voteResult.innerHTML = niday[i].id + '号玩家被票出,真是身份吗是' + niday[i].name;
                        ghost.style.backgroundColor = '#ccc';
                        triangleb.style.borderRight = '.7rem solid #ccc';
                        player.style.backgroundColor = '#ccc';
                        trianglec.style.borderRight = '.7rem solid #ccc';
                        vote.style.backgroundColor = '#ccc';
                        triangled.style.borderRight = '.7rem solid #ccc';


                    }
                }
            }

        }

        function generate() {
            var etday = JSON.parse(sessionStorage.getItem('etdaykill'));
            if (etday == null) {
                return
            } else {
                for (let i = 0; i < etday.length; i++) {
                    if (etday[i].state == 'die') {
                        killResult.innerHTML = etday[i].id + '号玩家被杀死，真实身份是好人';
                        window.sessionStorage.setItem('etdayvote', JSON.stringify(etday));
                        sun.style.top = '6.4rem';
                        kill.style.backgroundColor = '#ccc';
                        trianglea.style.borderRight = '.7rem solid #ccc';
                    }
                }
            }
        }

    }

    generate();
    votegenerate();
}


    generate();
    votegenerate();
    compare();
    compare1()
    compare2()
    compare3()
    compare4()
    compare5()
    compare6()



    // console.log(arr)

}












create();


run();