function list () {
    document.getElementById("myUL").style.display = "none";
    var out = "";   
    var array = [];
    var xmlhttp = new XMLHttpRequest();
    var url = "files/list-query.txt";
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText || "[]");
        myFunction(myArr);
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function myFunction(arr) {
        for (var i =0; i<arr.length; i ++) {
            array.push(arr[i]);
        }
        for (let item of array) {
           out += '<li style="list-style-type: none;"> <img src="'+item.image1+'" alt=""> <a href="noticias.html?post='+item.id+'">'+item.title+'</a></li>';
        }
        document.getElementById("myUL").innerHTML = out;
    }
}

function find() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) { 
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            document.getElementById("myUL").style.display = "none";
        } else {
            display();
            li[i].style.display = "none";
        }
    }
}

function display() {
    document.getElementById("myUL").style.display = "";
}

function loadDisplay() {
    var input = document.getElementById("myInput").value;
    if (input == "") {
        document.getElementById("myUL").style.display = "none";
    }
}