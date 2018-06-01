var data2 = JSON.parse(localStorage.getItem('identity'));
var data1 = (localStorage.getItem('sum'));
var box = document.getElementsByClassName('box');
var id = document.getElementsByClassName('id');
var begin = document.getElementById('begin');

function allot() {

    for (i = 0; i < data1; i++) {
        box[i].style.display = 'block';
        if (data2[i] == '好人') {
            id[i].innerText = '平民';

        } else {
            id[i].innerText = '狼人';
        }

    }
}
allot();

begin.onclick = function go() {
    window.location.href = '6.html';
}