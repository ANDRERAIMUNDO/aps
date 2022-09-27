//OBS: as credencias fora removidas
var last_id = "";
var page = "1";

var pageLength = "";
var value = "";

var id0 = "";
var id1 = "";
var id2 = "";
var id3 = "";
var id4 = "";
var id5 = "";
var id6 = "";
var id7 = "";
var id8 = "";
var id9 = "";

var value_mal_id = "";
var mal_id0 = "";
var mal_id1 = "";
var mal_id2 = "";
var mal_id3 = "";
var mal_id4 = "";

var index_id = "";

function urlHome() {
  window.location.href = 'index.html';
}

function urlCalendario() {
  window.location.href = 'calendario.html';
}

function urlNoticias() {
  window.location.href = 'noticias.html';
}

function urlNnoticias() {
  var id_value = localStorage.getItem("id");
  window.location.href = 'nnoticias.html?post='+id_value;
}


function urlResenha() {
  window.location.href = 'resenha.html';
}

function urlLicenca() {
  window.location.href = 'licenca.html';
}

function urlConsulta() {
  window.location.href = 'result.html';
}

function urlAnimesDetails() {
  window.location.href = 'animes-details.html';
}

function urlNoticiasPage() {
  window.location.href = 'noticias-pages.html?page=2'
}

function guard_id0() {
 id0 =  document.getElementById("newsId0").innerHTML;
 value = id0;
 localStorage.setItem('id', value);
 urlNnoticias();
}

function guard_id1() {
  id1 =  document.getElementById("newsId1").innerHTML;
  value = id1;
  localStorage.setItem('id', value);
  urlNnoticias();
 }

function guard_id2() {
  id2 =  document.getElementById("newsId2").innerHTML;
  value = id2;  
  localStorage.setItem('id', value);
  urlNnoticias();
}

function guard_id3() {
  id3 =  document.getElementById("newsId3").innerHTML;
  value = id3;
  localStorage.setItem('id', value);
  urlNnoticias();
}

function guard_id4() {
  id4 =  document.getElementById("newsId4").innerHTML;
  value = id4;
  localStorage.setItem('id', value);
  urlNnoticias();
}

function guard_id5() {
  id5 =  document.getElementById("newsId5").innerHTML;
  value = id5;
  localStorage.setItem('id', value);
  urlNnoticias();
}

function guard_id6() {
  id6 =  document.getElementById("newsId6").innerHTML;
  value = id6;
  localStorage.setItem('id', value);
  urlNnoticias();
}

function guard_id7() {
  id7 =  document.getElementById("newsId7").innerHTML;
  value = id7;
  localStorage.setItem('id', value);
  urlNnoticias();
}


function guard_id8() {
  id8 =  document.getElementById("newsId8").innerHTML;
  value = id8;
  localStorage.setItem('id', value);
  urlNnoticias();
}


function guard_id9() {
  id9 =  document.getElementById("newsId9").innerHTML;
  value = id9;
  localStorage.setItem('id', value);
  urlNnoticias();
}

function guard_mal_id0() {
  mal_id0 =  document.getElementById("0mal_id").innerHTML;
  value_mal_id = mal_id0;
  localStorage.setItem('mal_id', value_mal_id);
  urlAnimesDetails();
}

function guard_mal_id1() {
  mal_id1 =  document.getElementById("1mal_id").innerHTML;
  value_mal_id = mal_id1;
  localStorage.setItem('mal_id', value_mal_id);
  urlAnimesDetails();

}

function guard_mal_id2() {
  mal_id2 =  document.getElementById("2mal_id").innerHTML;
  value_mal_id = mal_id2;
  localStorage.setItem('mal_id', value_mal_id);
  urlAnimesDetails();
}

function guard_mal_id3() {
  mal_id3 =  document.getElementById("3mal_id").innerHTML;
  value_mal_id = mal_id3;
  localStorage.setItem('mal_id', value_mal_id);
  urlAnimesDetails();
}

function guard_mal_id4() {
  mal_id4 =  document.getElementById("4mal_id").innerHTML;
  value = mal_id4;
  localStorage.setItem('mal_id', value);
  urlAnimesDetails();
}

function guard_mal_id5() {
  mal_id5 =  document.getElementById("5mal_id").innerHTML;
  value = mal_id5;
  localStorage.setItem('mal_id', value);
  urlAnimesDetails();
}

function guard_mal_id6() {
  mal_id6 =  document.getElementById("6mal_id").innerHTML;
  value = mal_id6;
  localStorage.setItem('mal_id', value);
  urlAnimesDetails();
}

function guard_mal_id7() {
  mal_id7 =  document.getElementById("7mal_id").innerHTML;
  value = mal_id7;
  localStorage.setItem('mal_id', value);
  urlAnimesDetails();
}

function guard_mal_id8() {
  mal_id8 =  document.getElementById("8mal_id").innerHTML;
  value = mal_id8;
  localStorage.setItem('mal_id', value);
  urlAnimesDetails();
}

function guard_mal_id9() {
  mal_id9 =  document.getElementById("9mal_id").innerHTML;
  value = mal_id9;
  localStorage.setItem('mal_id', value);
  urlAnimesDetails();
}

function guard_mal_id10() {
  mal_id10 =  document.getElementById("10mal_id").innerHTML;
  value_mal_id = mal_id10;
  localStorage.setItem('mal_id', value_mal_id);
  urlAnimesDetails();
}

function guard_mal_id11() {
  mal_id11 =  document.getElementById("11mal_id").innerHTML;
  value_mal_id = mal_id11;
  localStorage.setItem('mal_id', value_mal_id);
  urlAnimesDetails();

}

function guard_mal_id12() {
  mal_id12 =  document.getElementById("12mal_id").innerHTML;
  value_mal_id = mal_id12;
  localStorage.setItem('mal_id', value_mal_id);
  urlAnimesDetails();
}

function guard_mal_id13() {
  mal_id13 =  document.getElementById("13mal_id").innerHTML;
  value_mal_id = mal_id13;
  localStorage.setItem('mal_id', value_mal_id);
  urlAnimesDetails();
}

function guard_mal_id14() {
  mal_id14 =  document.getElementById("14mal_id").innerHTML;
  value = mal_id14;
  localStorage.setItem('mal_id', value);
  urlAnimesDetails();
}

function guard_mal_id15() {
  mal_id15 =  document.getElementById("15mal_id").innerHTML;
  value = mal_id15;
  localStorage.setItem('mal_id', value);
  urlAnimesDetails();
}

function guard_mal_id16() {
  mal_id16 =  document.getElementById("16mal_id").innerHTML;
  value = mal_id16;
  localStorage.setItem('mal_id', value);
  urlAnimesDetails();
}

function guard_mal_id17() {
  mal_id17 =  document.getElementById("17mal_id").innerHTML;
  value = mal_id17;
  localStorage.setItem('mal_id', value);
  urlAnimesDetails();
}

function guard_mal_id18() {
  mal_id18 =  document.getElementById("18mal_id").innerHTML;
  value = mal_id18;
  localStorage.setItem('mal_id', value);
  urlAnimesDetails();
}

function guard_mal_id19() {
  mal_id19 =  document.getElementById("19mal_id").innerHTML;
  value = mal_id19;
  localStorage.setItem('mal_id', value);
  urlAnimesDetails();
}

function guard_car_id0() {
  id0 =  document.getElementById("carId0").innerHTML;
  value = id0;
  localStorage.setItem('id', value);
  urlNnoticias();
}

function guard_car_id1() {
  id1 =  document.getElementById("carId1").innerHTML;
  value = id1;
  localStorage.setItem('id', value);
  urlNnoticias();
}

function guard_car_id2() {
  id2 =  document.getElementById("carId2").innerHTML;
  value = id2;
  localStorage.setItem('id', value);
  urlNnoticias();
}

function guard_car_id3() {
  id3 =  document.getElementById("carId3").innerHTML;
  value = id3;
  localStorage.setItem('id', value);
  urlNnoticias();
}

function guard_car_id4() {
  id4 =  document.getElementById("carId4").innerHTML;
  value = id4;
  localStorage.setItem('id', value);
  urlNnoticias();
}

function carroucel() {
    var xmlhttpCarroucel = new XMLHttpRequest();
    //var url = 'https://removido-por-segurança/carroucel/list?field=id&limitDoc=10';
    var url = "files/caroucel.txt";//exemplo em txt
    xmlhttpCarroucel.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        document.getElementById("carId0").innerHTML = myArr[0].id_postagem;
        document.getElementById("title0").innerHTML = myArr[0].title;
        document.getElementById("subTitle0").innerHTML = myArr[0].subTitle;
        document.getElementById("image0").src = [myArr[0].image];

        document.getElementById("carId1").innerHTML = myArr[1].id_postagem;
        document.getElementById("title1").innerHTML = myArr[1].title;
        document.getElementById("subTitle1").innerHTML = myArr[1].subTitle;
        document.getElementById("image1").src = [myArr[1].image];
        
        document.getElementById("carId2").innerHTML = myArr[2].id_postagem;
        document.getElementById("title2").innerHTML = myArr[2].title;
        document.getElementById("subTitle2").innerHTML = myArr[2].subTitle;
        document.getElementById("image2").src = [myArr[2].image];

        document.getElementById("carId3").innerHTML = myArr[3].id_postagem;
        document.getElementById("title3").innerHTML = myArr[3].title;
        document.getElementById("subTitle3").innerHTML = myArr[3].subTitle;
        document.getElementById("image3").src = [myArr[3].image];

        document.getElementById("carId4").innerHTML = myArr[4].id_postagem;
        document.getElementById("title4").innerHTML = myArr[4].title;
        document.getElementById("subTitle4").innerHTML = myArr[4].subTitle;
        document.getElementById("image4").src = [myArr[4].image];

      }
    };
    xmlhttpCarroucel.open("GET", url, true);
    xmlhttpCarroucel.send();
}

function news() {
  var xmlhttp = new XMLHttpRequest();
  //var url = 'https://removido-por-segurança/list?field=id&orderBy=DESCENDING&limitDoc=10';
  var url = "files/postagem.txt"//exemplo em txt
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText || []);
      getPages(myArr);
      document.getElementById("newsId0").innerHTML = myArr[0]?.id;
      document.getElementById("newstitle0").innerHTML = myArr[0].title;
      document.getElementById("newsdate0").innerHTML = myArr[0].date;
      document.getElementById("newssubTitle0").innerHTML= myArr[0].subTitle;
      document.getElementById("newscontent0").innerHTML = myArr[0].content1;
      document.getElementById("newsimage0").src = [myArr[0].image1];

      document.getElementById("newsId1").innerHTML = myArr[1].id;
      document.getElementById("newstitle1").innerHTML = myArr[1].title;
      document.getElementById("newsdate1").innerHTML = myArr[1].date;
      document.getElementById("newssubTitle1").innerHTML= myArr[1].subTitle;
      document.getElementById("newscontent1").innerHTML = myArr[1].content1;
      document.getElementById("newsimage1").src = [myArr[1].image1];

      document.getElementById("newsId2").innerHTML = myArr[2].id;
      document.getElementById("newstitle2").innerHTML = myArr[2].title;
      document.getElementById("newsdate2").innerHTML = myArr[2].date;
      document.getElementById("newssubTitle2").innerHTML= myArr[2].subTitle;
      document.getElementById("newscontent2").innerHTML = myArr[2].content1;
      document.getElementById("newsimage2").src = [myArr[2].image1];

      document.getElementById("newsId3").innerHTML = myArr[3].id;
      document.getElementById("newstitle3").innerHTML = myArr[3].title;
      document.getElementById("newsdate3").innerHTML = myArr[3].date;
      document.getElementById("newssubTitle3").innerHTML= myArr[3].subTitle;
      document.getElementById("newscontent3").innerHTML = myArr[3].content1;
      document.getElementById("newsimage3").src = [myArr[3].image1];

      document.getElementById("newsId4").innerHTML = myArr[4].id;
      document.getElementById("newstitle4").innerHTML = myArr[4].title;
      document.getElementById("newsdate4").innerHTML = myArr[4].date;
      document.getElementById("newssubTitle4").innerHTML= myArr[4].subTitle;
      document.getElementById("newscontent4").innerHTML = myArr[4].content1;
      document.getElementById("newsimage4").src = [myArr[4].image1];

      document.getElementById("newsId5").innerHTML = myArr[5].id;
      document.getElementById("newstitle5").innerHTML = myArr[5].title;
      document.getElementById("newsdate5").innerHTML = myArr[5].date;
      document.getElementById("newssubTitle5").innerHTML= myArr[5].subTitle;
      document.getElementById("newscontent5").innerHTML = myArr[5].content1;
      document.getElementById("newsimage5").src = [myArr[5].image1];

      document.getElementById("newsId6").innerHTML = myArr[6].id;
      document.getElementById("newstitle6").innerHTML = myArr[6].title;
      document.getElementById("newsdate6").innerHTML = myArr[6].date;
      document.getElementById("newssubTitle6").innerHTML= myArr[6].subTitle;
      document.getElementById("newscontent6").innerHTML = myArr[6].content1;
      document.getElementById("newsimage6").src = [myArr[6].image1];

      document.getElementById("newsId7").innerHTML = myArr[7].id;
      document.getElementById("newstitle7").innerHTML = myArr[7].title;
      document.getElementById("newsdate7").innerHTML = myArr[7].date;
      document.getElementById("newssubTitle7").innerHTML= myArr[7].subTitle;
      document.getElementById("newscontent7").innerHTML = myArr[7].content1;
      document.getElementById("newsimage7").src = [myArr[7].image1];

      document.getElementById("newsId8").innerHTML = myArr[8].id;
      document.getElementById("newstitle8").innerHTML = myArr[8].title;
      document.getElementById("newsdate8").innerHTML = myArr[8].date;
      document.getElementById("newssubTitle8").innerHTML= myArr[8].subTitle;
      document.getElementById("newscontent8").innerHTML = myArr[8].content1;
      document.getElementById("newsimage8").src = [myArr[8].image1];

      document.getElementById("newsId9").innerHTML = myArr[9].id;
      document.getElementById("newstitle9").innerHTML = myArr[9].title;
      document.getElementById("newsdate9").innerHTML = myArr[9].date;
      document.getElementById("newssubTitle9").innerHTML= myArr[9].subTitle;
      document.getElementById("newscontent9").innerHTML = myArr[9].content1;
      document.getElementById("newsimage9").src = [myArr[9].image1];
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function atualizacoes() {
    var xmlhttp = new XMLHttpRequest();
    var url = 'https://removido-por-segurança/updatesnow/page';
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        document.getElementById("id_postagem0").innerHTML = myArr[0].id_postagem;
        document.getElementById("0subTitle").innerHTML = myArr[0].subTitle;

        document.getElementById("id_postagem1").innerHTML = myArr[1].id_postagem;
        document.getElementById("1subTitle").innerHTML = myArr[1].subTitle;

        document.getElementById("id_postagem2").innerHTML = myArr[2].id_postagem;
        document.getElementById("2subTitle").innerHTML = myArr[2].subTitle;

        document.getElementById("id_postagem3").innerHTML = myArr[3].id_postagem;
        document.getElementById("3subTitle").innerHTML = myArr[3].subTitle;

        document.getElementById("id_postagem4").innerHTML = myArr[4].id_postagem;
        document.getElementById("4subTitle").innerHTML = myArr[4].subTitle;

      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function ranking() {
  var xmlhttpRanking = new XMLHttpRequest();
  var url = 'https://removido-por-segurançatop/anime?type=tv&filter=airing&page=1&limit=5';
  xmlhttpRanking.onreadystatechange = function() {
    if (this.status == 200) {
      var myArr = JSON.parse(this.responseText || "[]");

      document.getElementById("0mal_id").innerHTML = myArr.data[0].mal_id;
      document.getElementById("0title").innerHTML = myArr.data[0].title;
      document.getElementById("0image_url").src = [myArr.data[0].images.jpg.image_url];

      document.getElementById("1mal_id").innerHTML = myArr.data[1].mal_id;
      document.getElementById("1title").innerHTML = myArr.data[1].title;
      document.getElementById("1image_url").src = [myArr.data[1].images.jpg.image_url];

      document.getElementById("2mal_id").innerHTML = myArr.data[2].mal_id;
      document.getElementById("2title").innerHTML = myArr.data[2].title;
      document.getElementById("2image_url").src = [myArr.data[2].images.jpg.image_url];

      document.getElementById("3mal_id").innerHTML = myArr.data[3].mal_id;
      document.getElementById("3title").innerHTML = myArr.data[3].title;
      document.getElementById("3image_url").src = [myArr.data[3].images.jpg.image_url];

      document.getElementById("4mal_id").innerHTML = myArr.data[4].mal_id;
      document.getElementById("4title").innerHTML = myArr.data[4].title;
      document.getElementById("4image_url").src = [myArr.data[4].images.jpg.image_url];
  };
  }
    xmlhttpRanking.open("GET", url, true);
    xmlhttpRanking.send();
}

function contentFind() {
    var xmlhttpFind = new XMLHttpRequest();
    var text = document.getElementById('floatingInput').value
    var url = 'https://removido-por-segurança/postagens/find?field=content1&name='+text;
    xmlhttpFind.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText || "[]");
        document.getElementById("title0").innerHTML = myArr[0].title;
        document.getElementById("date0").innerHTML = myArr[0].date;
        document.getElementById("subTitle0").innerHTML= myArr[0].subTitle;
        document.getElementById("content0").innerHTML = myArr[0].content1;
        document.getElementById("image0").src = [myArr[0].image1];
  
        document.getElementById("title1").innerHTML = myArr[1].title;
        document.getElementById("date1").innerHTML = myArr[1].date;
        document.getElementById("subTitle1").innerHTML= myArr[1].subTitle;
        document.getElementById("content1").innerHTML = myArr[1].content1;
        document.getElementById("image1").src = [myArr[1].image1];
  
        document.getElementById("title2").innerHTML = myArr[2].title;
        document.getElementById("date2").innerHTML = myArr[2].date;
        document.getElementById("subTitle2").innerHTML= myArr[2].subTitle;
        document.getElementById("content2").innerHTML = myArr[2].content1;
        document.getElementById("image2").src = [myArr[2].image1];
  
        document.getElementById("title3").innerHTML = myArr[3].title;
        document.getElementById("date3").innerHTML = myArr[3].date;
        document.getElementById("subTitle3").innerHTML= myArr[3].subTitle;
        document.getElementById("content3").innerHTML = myArr[3].content1;
        document.getElementById("image3").src = [myArr[3].image1];
  
        document.getElementById("title4").innerHTML = myArr[4].title;
        document.getElementById("date4").innerHTML = myArr[4].date;
        document.getElementById("subTitle4").innerHTML= myArr[4].subTitle;
        document.getElementById("content4").innerHTML = myArr[4].content1;
        document.getElementById("image4").src = [myArr[4].image1];
  
        document.getElementById("title5").innerHTML = myArr[5].title;
        document.getElementById("date5").innerHTML = myArr[5].date;
        document.getElementById("subTitle5").innerHTML= myArr[5].subTitle;
        document.getElementById("content5").innerHTML = myArr[5].content1;
        document.getElementById("image5").src = [myArr[5].image1];
  
        document.getElementById("title6").innerHTML = myArr[6].title;
        document.getElementById("date6").innerHTML = myArr[6].date;
        document.getElementById("subTitle6").innerHTML= myArr[6].subTitle;
        document.getElementById("content6").innerHTML = myArr[6].content1;
        document.getElementById("image6").src = [myArr[6].image1];
  
        document.getElementById("title7").innerHTML = myArr[7].title;
        document.getElementById("date7").innerHTML = myArr[7].date;
        document.getElementById("subTitle7").innerHTML= myArr[7].subTitle;
        document.getElementById("content7").innerHTML = myArr[7].content1;
        document.getElementById("image7").src = [myArr[7].image1];
  
        document.getElementById("title8").innerHTML = myArr[8].title;
        document.getElementById("date8").innerHTML = myArr[8].date;
        document.getElementById("subTitle8").innerHTML= myArr[8].subTitle;
        document.getElementById("content8").innerHTML = myArr[8].content1;
        document.getElementById("image8").src = [myArr[8].image1];
  
        document.getElementById("title9").innerHTML = myArr[9].title;
        document.getElementById("date9").innerHTML = myArr[9].date;
        document.getElementById("subTitle9").innerHTML= myArr[9].subTitle;
        document.getElementById("content9").innerHTML = myArr[9].content1;
        document.getElementById("image9").src = [myArr[9].image1];
      }
    };
    xmlhttpFind.open("GET", url, true);
    xmlhttpFind.send();
}

function getPages(myArr) {
  var ultimo_id = myArr.length;
  var x = ultimo_id -1;
  last_id = myArr[x].id;
}

function enumPages() {
  var http = new XMLHttpRequest();
  var url = 'https://removido-por-segurançapostagens/list?field=id&orderBy=DESCENDING&limitDoc=100';
  http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText || []);
      var meuArray =myArr;
        var novoArray = [];
        var corte = 10;
        var p = [];
        var out = "";
        for (var i = 0; i < myArr?.length; i = i + corte) {
          novoArray.push(meuArray.slice(i, i + corte));
        }
        for (var x =0; x <novoArray.length; x ++) {
          p.push(x);
        }
        for (let item of p) {
          var value = item +1;
          out += '<li class="list-group-item">'+
                    '<a href="'+'noticias-pages.html'+'?page='+value+'">' + 
                      value + 
                    '</a>'+
                  '</li>';
        }
        document.getElementById("page").innerHTML = out;
      }
  };
  http.open("GET", url, true);
  http.send();
}

function weekup() {
  var xmlhttp = new XMLHttpRequest();
  var url = 'https://removido-por-segurança/postagens/list?field=id&orderBy=DESCENDING&limitDoc=10';
  xmlhttp.onreadystatechange = function() {
    if (this.status == 200) {
      var arr = JSON.parse(this.responseText || "[]");
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send(); 
}