//OBS: as credencias fora removidas
var active =  "ok";

function find() {
    active = "desable"
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    document.getElementById("myUL").style.display = "";
    var xmlhttp = new XMLHttpRequest();
    var url = 'https://removido-por-segurança/postagens/find?field=title&name='+filter;
    xmlhttp.onreadystatechange = function() {
      if (this.status == 200) {
        var myArr = JSON.parse(this.responseText || "[]");
        document.getElementById("newsId0").innerHTML = myArr[0].id;
        document.getElementById("newstitle0").innerHTML = myArr[0].title;
        document.getElementById("newssubTitle0").innerHTML= myArr[0].subTitle;     
        }
        if (filter == "") {
            document.getElementById("myUL").style.display = "none";
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function displayNone() {
    if (active == "ok") {
        document.getElementById("myUL").style.display = "none";
        } 
}

//onclick="contentFind()