var title = "";
function redirectHome() {
  localStorage.removeItem("mal_id");
  window.location.href = 'index.html';
}

function redirectCalendario() {
  localStorage.removeItem("mal_id");
  window.location.href = 'calendario.html';
}
 
function redirectNoticias() {
  localStorage.removeItem("mal_id");
  window.location.href = 'noticias-pages.html?page=1'
}

function redirectResenha() {
  localStorage.removeItem("mal_id");
  window.location.href = 'resenha.html';
}

function redirectLicenca() {
  localStorage.removeItem("mal_id");
  window.location.href = 'licenca.html';
}

function animeId(){
    var mal_id = localStorage.getItem("mal_id");
    var xmlhttp = new XMLHttpRequest();
    var url = 'https://my-api'+mal_id;
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText || "[]");
        //document.getElementById("id").innerHTML = myArr.data.mal_id;
        document.getElementById("image").src = [myArr.data.images.jpg.large_image_url];
        document.getElementById("trailer").src= [myArr.data.trailer.embed_url];
        document.getElementById("title").innerHTML = myArr.data.title;
        title = document.getElementById("title").innerHTML = myArr.data.title;
        document.getElementById("type").innerHTML = myArr.data.type;
        document.getElementById("source").innerHTML = myArr.data.source;
        document.getElementById("episodes").innerHTML = myArr.data.episodes;
        document.getElementById("status").innerHTML = myArr.data.status;
        document.getElementById("airing").innerHTML = myArr.data.airing;
        document.getElementById("day").innerHTML = myArr.data.aired.prop.from.day;
        document.getElementById("month").innerHTML = myArr.data.aired.prop.from.month;
        document.getElementById("year").innerHTML = myArr.data.aired.prop.from.year;
        document.getElementById("to_day").innerHTML = myArr.data.aired.prop.to.day;
        document.getElementById("to_month").innerHTML = myArr.data.aired.prop.to.month;
        document.getElementById("to_year").innerHTML = myArr.data.aired.prop.to.year;
        document.getElementById("score").innerHTML = myArr.data.score;
        document.getElementById("synopsis").innerHTML = myArr.data.synopsis;
        document.getElementById("season").innerHTML= myArr.data.season;
        document.getElementById("year_lauch").innerHTML = myArr.data.year;
        document.getElementById("broadcast_day").innerHTML = myArr.data.broadcast.day;
        document.getElementById("broadcast_time").innerHTML = myArr.data.broadcast.time;
        document.getElementById("broadcast_timezone").innerHTML = myArr.data.broadcast.timezone;
        getProducers(myArr);
        getStudios(myArr);
        getGenres(myArr);
        getThemes(myArr);
        //getSynopsis(myArr.data.synopsis);
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

  function getProducers(arr) {
        var out = "";
        var i;
        for(i = 0; i < arr.data.producers.length; i++) {
        out += '<li>'+arr.data.producers[i].name+'</li>'
        }
        document.getElementById("producers").innerHTML = out;
      }

      function getStudios(arr) {
        var out1 = "";
        var i;
        for(i = 0; i < arr.data.studios.length; i++) {
        out1 += '<li>'+arr.data.studios[i].name+'</li>'
        }
        document.getElementById("studios").innerHTML = out1;
      }

      function getGenres(arr) {
        var out2 = "";
        var i;
        for(i = 0; i < arr.data.genres.length; i++) {
        out2 += '<li>'+arr.data.genres[i].name+'</li>'
        }
        document.getElementById("genres").innerHTML = out2;
      }

      function getThemes(arr) {
        var out3 = "";
        var i;
        for(i = 0; i < arr.data.themes.length; i++) {
        out3 += '<li>'+arr.data.themes[i].name+'</li>'
        }
        document.getElementById("themes").innerHTML = out3;
      }