$("button").click(function () {
    var name = $(":text").val();
    var pwd = $(":password").val();
   
    var xmlhttp;

    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("no").innerHTML = JSON.parse(xmlhttp.responseText).message;
            console.log(xmlhttp.responseText)
        }
    }
    xmlhttp.open("POST", "/carrots-admin-ajax/a/login", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send('name='+name+'&pwd='+pwd);
})