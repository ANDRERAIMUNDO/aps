//OBS: as credencias fora removidas
function newsId() {
  var local = window.location.href
  var url = local.split("=");
}

function redirectHome() {
  localStorage.removeItem("id");
  window.location.href = 'index.html';
}

function redirectCalendario() {
  localStorage.removeItem("id");
  window.location.href = 'calendario.html';
}
 
function redirectNoticias() {
  localStorage.removeItem("id");
  window.location.href = 'noticias.html';
}

function redirectResenha() {
  localStorage.removeItem("id");
  window.location.href = 'resenha.html';
}

function redirectLicenca() {
  localStorage.removeItem("id");
  window.location.href = 'licenca.html';
}

  function getGuardNewsId(){
    var local = window.location.href
    var url = local.split("=");
    var id_value = url[1];
  //  var id_value = localStorage.getItem("id");
    var xmlhttp = new XMLHttpRequest();
   var url = 'https://removido-por-segurança/postagens/details?id='+id_value;
    xmlhttp.onreadystatechange = function() {
      if (this.status == 200) {
        var myArr = JSON.parse(this.responseText || "[]");
        document.getElementById("title").innerHTML = myArr.title;
        document.getElementById("date").innerHTML = myArr.date;
        document.getElementById("subTitle").innerHTML= myArr.subTitle;
        document.getElementById("content1").innerHTML = myArr.content1;
        document.getElementById("image1").src = [myArr.image1];
        document.getElementById("content2").innerHTML = myArr.content2;
        document.getElementById("image2").src = [myArr.image2];
        document.getElementById("content3").innerHTML = myArr.content3;
        document.getElementById("image3").src = [myArr.image3];
        document.getElementById("content4").innerHTML = myArr.content4;
        document.getElementById("image4").src = [myArr.image4];
        document.getElementById("content5").innerHTML = myArr.content5;
        document.getElementById("image5").src = [myArr.image5];
        document.getElementById("image6").src = [myArr.image6]
        document.getElementById("content6").innerHTML = myArr.content6;
        document.getElementById("image6").src = [myArr.image6];
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    //localStorage.removeItem("id");
  }

  