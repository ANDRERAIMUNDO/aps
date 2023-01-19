 //para ter acesso mande um email para andreraimundo.me@gmail.com 
//está api foi removida por motivo de segurança
var url_aps = 'https://api-dns-do-servidor-principal';
  function getGuardNewsId(){
    var local = window.location.href
    var url = local.split("=");
    var id_value = url[1];
    var xmlhttp = new XMLHttpRequest();
   var url = url_aps+'/postagens/details?id='+id_value;
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText || "[]");
        try {
          document.getElementById("title").innerHTML = myArr.title;
          document.getElementById("display_loading").style.display = "none";
          document.getElementById("display_content").style.display = "";
        } catch(err) {}
        document.getElementById("date").innerHTML = myArr.date;
        document.getElementById("subTitle").innerHTML= myArr.subTitle;
        document.getElementById("share-subTitle").innerHTML= myArr.subTitle;
        document.getElementById("content1").innerHTML = myArr.content1;
        document.getElementById("image1").src = [myArr.image1];
        document.getElementById("image_refence1").innerHTML = myArr.image_refence1;
        document.getElementById("content2").innerHTML = myArr.content2;
        document.getElementById("image2").src = [myArr.image2];
        document.getElementById("image_refence2").innerHTML = myArr.image_refence2;
        document.getElementById("content3").innerHTML = myArr.content3;
        document.getElementById("image3").src = [myArr.image3];
        document.getElementById("image_refence3").innerHTML = myArr.image_refence3;
        document.getElementById("content4").innerHTML = myArr.content4;
        document.getElementById("image4").src = [myArr.image4];
        document.getElementById("image_refence4").innerHTML = myArr.image_refence4;
        document.getElementById("content5").innerHTML = myArr.content5;
        document.getElementById("image5").src = [myArr.image5];
        document.getElementById("image_refence5").innerHTML = myArr.image_refence5;
        document.getElementById("content6").innerHTML = myArr.content6;
        document.getElementById("image6").src = [myArr.image6];
        document.getElementById("content7").innerHTML = myArr.content7;
        document.getElementById("image7").src = [myArr.image7];
        document.getElementById("image_refence7").innerHTML = myArr.image_refence7;
        document.getElementById("content8").innerHTML = myArr.content8;
        document.getElementById("image8").src = [myArr.image8];
        document.getElementById("image_refence8").innerHTML = myArr.image_refence8;
        document.getElementById("content9").innerHTML = myArr.content9;
        document.getElementById("image9").src = [myArr.image9];
        document.getElementById("image_refence9").innerHTML = myArr.image_refence9;
        document.getElementById("content10").innerHTML = myArr.content10;
        document.getElementById("image10").src = [myArr.image10];
        document.getElementById("image_refence10").innerHTML = myArr.image_refence10;
      } else {
        try {
          document.getElementById("display_content").style.display = "none";
          document.getElementById("display_loading").style.display = "";
        }  catch(err) {}
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }
