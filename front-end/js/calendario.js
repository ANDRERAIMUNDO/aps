//OBS: as credencias fora removidas
function sunday() {
  var filter_day = "sunday";
  calendar(filter_day);
}

function monday() {
  var filter_day = "monday";
  calendar(filter_day);
}

function tuesday() {
  var filter_day = "tuesday";
  calendar(filter_day);
}

function wednesday() {
  var filter_day = "wednesday";
  calendar(filter_day);
}

function thursday() {
  var filter_day = "thursday";
  calendar(filter_day);
}

function friday() {
  var filter_day = "friday";
  calendar(filter_day);
}

function saturday() {
  var filter_day = "saturday";
  calendar(filter_day);
}

function calendar(filter_day){
  var xmlhttp = new XMLHttpRequest();
  var url = "https://removido-por-segurança/schedules?page=1&filter="+filter_day;
  xmlhttp.onreadystatechange = function() {
    if (this.status == 200) {
      var myArr = JSON.parse(this.responseText || "[]");
      var meuArray = (myArr.data);
      var Array = [];
      var out0 = ""; 
      var out1 = ""; 
      var out2 = ""; 
      var out3 = ""; 
      var out4 = ""; 

      for (var i = 0; i < myArr.data?.length; i = i + 5) {//corta tudo em 10 em 10 elementos
        Array.push(meuArray.slice(i, i + 5));
      }

      for (let item of Array[0] || "[]"){
        out0+='<div class="container">'+
                  '<img src="'+item.images.jpg.large_image_url+'" alt="" width="250px" height="250px">'+
                  '<div class="overlay" onclick=readAnimeId('+item.mal_id+') >'+item.title+'</div>'+
              '</div>';
      }
      document.getElementById("0-5").innerHTML = out0;
      for (let item of Array[1] || "[]"){
        out1+='<div class="container">'+
                  '<img src="'+item.images.jpg.large_image_url+'" alt="" width="250px" height="250px">'+
                  '<div class="overlay" onclick=readAnimeId('+item.mal_id+') >'+item.title+'</div>'+
              '</div>';
      }
      document.getElementById("5-9").innerHTML = out1;
      for (let item of Array[2] || "[]"){
        out2+='<div class="container">'+
                  '<img src="'+item.images.jpg.large_image_url+'" alt="" width="250px" height="250px">'+
                  '<div class="overlay" onclick=readAnimeId('+item.mal_id+') >'+item.title+'</div>'+
              '</div>';
      }
      document.getElementById("9-14").innerHTML = out2;
      for (let item of Array[3] || "[]"){
        out3+='<div class="container">'+
                  '<img src="'+item.images.jpg.large_image_url+'" alt="" width="250px" height="250px">'+
                  '<div class="overlay" onclick=readAnimeId('+item.mal_id+') >'+item.title+'</div>'+
              '</div>';
      }
      document.getElementById("14-19").innerHTML = out3;
      for (let item of Array[4] || "[]"){
        out4+='<div class="container">'+
                  '<img src="'+item.images.jpg.large_image_url+'" alt="" width="250px" height="250px">'+
                  '<div class="overlay" onclick=readAnimeId('+item.mal_id+') >'+item.title+'</div>'+
              '</div>';
      }
      document.getElementById("19-24").innerHTML = out4;
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function readAnimeId(mal_id) {
  localStorage.setItem("mal_id",mal_id);
  window.location.href = 'animes-details.html';
}