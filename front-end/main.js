var update = 2301161949;
function cleanCache() {
  var c = localStorage.getItem("clean");
  if (c != update) {
    localStorage.removeItem('clean');
    localStorage.setItem('clean', update);
    window.location.reload(true);
  }
}
//para ter acesso mande um email para andreraimundo.me@gmail.com 
//está api foi removida por motivo de segurança
var url_aps = 'https://api-dns-do-servidor-principal';

function postagens() {
      var xmlhttp = new XMLHttpRequest();
      var url = url_aps+'/postagens/list?field=id&orderBy=DESCENDING&limitDoc=7';
      xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText || []);
        var out= ""
        for (let item of myArr) {
            out+='<li>'+
                    '<div class="postagens-list">'+
                      '<img class="img-fluid" src="'+item.image1+'">'+
                      '<p class="p-display">'+item.id+'</p><p style="font-weight: bold;">'+item.title+'</p>'+
                      '<p>'+item.date+'</p> <p>'+item.subTitle+'</p>'+
                      '<p>'+item.content1+'</p>'+
                      '<a class="a-solid" href="noticias?post='+item.id+'">Continuar lendo ...</a>' + 
                    '</div>'+
                  '</li>';
          } try {
            document.getElementById("postagem").innerHTML = out;
            document.getElementById("display_loading").style.display = "none";
            document.getElementById("display_content").style.display = "";
          } catch(err) { }
            
      } else {
        try {
          document.getElementById("display_content").style.display = "none";
          document.getElementById("display_loading").style.display = "";
        }  catch(err) { }
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function ultimasPostagens() {
  var xmlhttp = new XMLHttpRequest();
  var url = url_aps+'/postagens/list?field=id&orderBy=DESCENDING&limitDoc=5';
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText || []);
      var out= ""
      for (let item of myArr) {
          out+='<li>'+
                '<a href="noticias?post='+item.id+'"><img src="'+item.image1+'" alt="'+item.title+'"></a>'+
                '<div style="margin-left: 15%;">'+
                  '<p class="p-display">'+item.id+'</p>'+
                  '<a href="noticias?post='+item.id+'">'+item.subTitle+'</a>'+
                '</div>'+ 
              '</li>';
        } try {
          document.getElementById("ultimasPostagens").innerHTML = out;
          document.getElementById("display_loading").style.display = "none";
          document.getElementById("display_content").style.display = "";
        } catch(err) {}
    }  else {
        try {
          document.getElementById("display_content").style.display = "none";
          document.getElementById("display_loading").style.display = "";
        }  catch(err) {}
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function ultimasPostagens_m() {
  var xmlhttp = new XMLHttpRequest();
  var url = url_aps+'/postagens/list?field=id&orderBy=DESCENDING&limitDoc=5';
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText || []);
      var out= ""
      for (let item of myArr) {
          out+='<li>'+
                '<a href="noticias.html?post='+item.id+'"><img src="'+item.image1+'" alt="'+item.title+'"></a>'+
                '<div class="ultimas-noticias-div-in-list">'+
                  '<p class="p-display">'+item.id+'</p>'+
                  '<a href="noticias?post='+item.id+'">'+item.subTitle+'</a>' +
                '</div>'+ 
              '</li>';
        } try {
          document.getElementById("ultimasPostagens-m").innerHTML = out;
          document.getElementById("display_loading").style.display = "none";
          document.getElementById("display_content").style.display = "";
        } catch(err) {}
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

function outrasPostagens() {
  var xmlhttp = new XMLHttpRequest();
  var url = url_aps+'/postagens/list?field=id&orderBy=DESCENDING&limitDoc=5';
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText || []);
      var out= ""
      for (let item of myArr) {
          out+='<li>'+
                '<a href="noticias.html?post='+item.id+'"><img src="'+item.image1+'" alt="'+item.title+'"></a>'+
                '<div>'+
                  '<p class="p-display">'+item.id+'</p>'+
                  '<div class="a-text">' +
                  '<a href="noticias.html?post='+item.id+'">'+item.subTitle+'</a>' +
                  '</div>' +
                '</div>'+ 
              '</li>';
        } try {
          document.getElementById("outrasPostagens").innerHTML = out;
          document.getElementById("display_loading").style.display = "none";
          document.getElementById("display_content").style.display = "";
        } catch(err) {}
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

function carroucel() {
  var xmlhttp = new XMLHttpRequest();
  var url = url_aps+'/carroucel/list?field=id&limitDoc=5';
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var item = JSON.parse(this.responseText);
      var out1= ""
      var out2= ""
      var out3= ""
      var out4= ""
      var out5= ""
      out1+='<div><a href="noticias?post='+item[0].id_postagem+'"><img src="'+item[0].image+'" class="img-fluid" alt="'+item[0].image+'" width="100%" height="100%"></a></div>'+
      '<div class="carousel-caption">'+
      '<h4>'+item[0].title+'</h4>'+
      '<h5>'+item[0].subTitle+'</h5>'+
      '</div>';
      out2+='<div><a href="noticias?post='+item[1].id_postagem+'"><img src="'+item[1].image+'" class="img-fluid" alt="'+item[1].image+'" width="100%" height="100%"></a></div>'+
          '<div class="carousel-caption">'+
          '<h4>'+item[1].title+'</h4>'+
          '<h5>'+item[1].subTitle+'</h5>'+
      '</div>';
      out3+='<div><a href="noticias?post='+item[1].id_postagem+'"><img src="'+item[2].image+'" class="img-fluid" alt="'+item[2].image+'" width="100%" height="100%"></a></div>'+
      '<div class="carousel-caption">'+
      '<h4>'+item[2].title+'</h4>'+
      '<h5>'+item[2].subTitle+'</h5>'+
      '</div>';
      out4+='<div><a href="noticias?post='+item[3].id_postagem+'"><img src="'+item[3].image+'" class="img-fluid" alt="'+item[3].image+'" width="100%" height="100%"></a></div>'+
          '<div class="carousel-caption">'+
          '<h4>'+item[3].title+'</h4>'+
          '<h5>'+item[3].subTitle+'</h5>'+
      '</div>';
      out5+='<div><a href="noticias?post='+item[4].id_postagem+'"><img src="'+item[4].image+'" class="img-fluid" alt="'+item[4].image+'" width="100%" height="100%"></a></div>'+
          '<div class="carousel-caption">'+
          '<h4>'+item[4].title+'</h4>'+
          '<h5>'+item[4].subTitle+'</h5>'+
      '</div>';

      try {
        document.getElementById("caroucel1").innerHTML = out1;
        document.getElementById("caroucel2").innerHTML = out2;
        document.getElementById("caroucel3").innerHTML = out3;
        document.getElementById("caroucel4").innerHTML = out4;
        document.getElementById("caroucel5").innerHTML = out5;
        document.getElementById("display_loading").style.display = "none";
        document.getElementById("display_content").style.display = "";
      } catch(err) {}

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

function noticias() {
    var xmlhttp = new XMLHttpRequest();
    var url = url_aps+'/noticias/list?field=id&orderBy=DESCENDING&limitDoc=4';
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText || []);
        var out1= "";
        var out2= "";
        var out3= "";
        var out4= "";
        
            out1+='<div style="position: relative;">'+
                '<a href="coluna-do-leitor-noticia?info='+myArr[0].tag+'&post='+myArr[0].id+'">'+
                '<img src="'+myArr[0].image_principal+'" id="noticia-img"></a>'+
                  '<div>'+
                    '<br>'+
                    '<p class="">'+myArr[0].title.substring(0,50)+' ...</p>'+
                  '</div>'+
                  '<div class="overlay-coluna" style="background-image: url('+myArr[0].image_principal+'); background-repeat: no-repeat;  background-attachment: fixed;background-size: cover;"><a href="coluna-do-leitor-noticia?info='+myArr[0].tag+'&post='+myArr[0].id+'">'+myArr[0].subTitle.substring(0,100)+'</a></div>'+
              '</div>';

            out2+='<div style="position: relative;">'+
                      '<a href="coluna-do-leitor-noticia?info='+myArr[1].tag+'&post='+myArr[1].id+'">'+
                      '<img src="'+myArr[1].image_principal+'" id="noticia-img"></a>'+
                        '<div>'+
                          '<br>'+
                          '<p>'+myArr[1].title.substring(0,50)+' ...</p>'+
                        '</div>'+
                        '<div class="overlay-coluna" style="background-image: url('+myArr[1].image_principal+'); background-repeat: no-repeat;  background-attachment: fixed;background-size: cover;"><a href="coluna-do-leitor-noticia?info='+myArr[1].tag+'&post='+myArr[1].id+'">'+myArr[1].subTitle.substring(0,100)+'</a></div>'+
                    '</div>';
            out3+='<div style="position: relative;">'+
                      '<a href="coluna-do-leitor-noticia?info='+myArr[2].tag+'&post='+myArr[2].id+'">'+
                      '<img src="'+myArr[2].image_principal+'" id="noticia-img"></a>'+
                        '<div>'+
                          '<br>'+
                          '<p>'+myArr[2].title.substring(0,50)+' ...</p>'+
                        '</div>'+
                        '<div class="overlay-coluna" style="background-image: url('+myArr[2].image_principal+'); background-repeat: no-repeat;  background-attachment: fixed;background-size: cover;"><a href="coluna-do-leitor-noticia?info='+myArr[2].tag+'&post='+myArr[2].id+'">'+myArr[2].subTitle.substring(0,100)+'</a></div>'+
                    '</div>';
            out4+='<div style="position: relative;">'+
                    '<a href="coluna-do-leitor-noticia?info='+myArr[3].tag+'&post='+myArr[3].id+'">'+
                    '<img src="'+myArr[3].image_principal+'" id="noticia-img"></a>'+
                      '<div>'+
                        '<br>'+
                        '<p>'+myArr[3].title.substring(0,50)+' ...</p>'+
                      '</div>'+
                      '<div class="overlay-coluna" style="background-image: url('+myArr[3].image_principal+'); background-repeat: no-repeat;  background-attachment: fixed;background-size: cover;"><a href="coluna-do-leitor-noticia?info='+myArr[3].tag+'&post='+myArr[3].id+'">'+myArr[3].subTitle.substring(0,100)+'</a></div>'+
                  '</div>';

            try {
                  document.getElementById("coluna1").innerHTML = out1;
                  document.getElementById("coluna2").innerHTML = out2;
                  document.getElementById("coluna3").innerHTML = out3;
                  document.getElementById("coluna4").innerHTML = out4;
                  document.getElementById("display_loading").style.display = "none";
                  document.getElementById("display_content").style.display = "";
                  } catch(err) {}
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

function noticias_m() {
  var xmlhttp = new XMLHttpRequest();
  var url = url_aps+'/noticias/list?field=id&orderBy=DESCENDING&limitDoc=4';
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText || []);
      var out= "";
      
      for (let item of myArr) {
        out+='<div style="display: flex;">'+
                '<a href="coluna-do-leitor-noticia?info='+item.tag+'&post='+item.id+'">'+
                '<img src="'+item.image_principal+'" id="noticia-img">'+
                '</a>'+
              '<div>'+
                '<p>'+item.title.substring(0,120)+' ...</p>'+
              '</div>'+
            '</div>';
      } try {
                document.getElementById("coluna-m").innerHTML = out;
                document.getElementById("display_loading").style.display = "none";
                document.getElementById("display_content").style.display = "";
                } catch(err) {}
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

function ultimasNotcias_m() {
  var xmlhttp = new XMLHttpRequest();
  var url = url_aps+'/noticias/list?field=id&orderBy=DESCENDING&limitDoc=5';
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText || []);
      var out= ""
      for (let item of myArr) {
          out+='<li>'+
                '<a href="coluna-do-leitor-noticia?info='+item.tag+'&post='+item.id+'"><img src="'+item.image_principal+'" alt="'+item.title+'"></a>'+
                '<div class="ultimas-noticias-div-in-list">'+
                  '<p class="p-display">'+item.id+'</p>'+
                  '<a href="coluna-do-leitor-noticia?info='+item.tag+'&post='+item.id+'">'+item.title+'</a>' +
                '</div>'+ 
              '</li>';
        } try {
          document.getElementById("ultimasNoticias-m").innerHTML = out;
          document.getElementById("display_loading").style.display = "none";
          document.getElementById("display_content").style.display = "";
        } catch(err) {}
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

function avisos() {
  var xmlhttp = new XMLHttpRequest();
  var url = url_aps+'/updatesnow/page';
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      var out1= "";

      for (let item of myArr) {
        out1+='<li><a href="noticias?post='+item.id_postagem+'">'+item.subTitle+'</a></li>';  
      } try {
        document.getElementById("avisos1").innerHTML = out1;
        document.getElementById("display_loading").style.display = "none";
        document.getElementById("display_content").style.display = "";
      } catch(err) {}
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

function avisos_m() {
  var xmlhttp = new XMLHttpRequest();
   var url = url_aps+'/updatesnow/page';
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      var out1= "";

      for (let item of myArr) {
        out1+='<li><a href="noticias?post='+item.id_postagem+'">'+item.subTitle+'</a></li>';  
      } try {
        document.getElementById("avisos-m").innerHTML = out1;
        document.getElementById("display_loading").style.display = "none";
        document.getElementById("display_content").style.display = "";
      } catch(err) {}
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

function ranking() {
  var xmlhttpRanking = new XMLHttpRequest();
  var url = 'https://api.jikan.moe/v4/top/anime?type=tv&filter=airing&page=1&limit=5';
  xmlhttpRanking.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var item = JSON.parse(this.responseText || "[]");
      var out1= ""
      var out2= ""
      var out3= ""
      var out4= ""
      var out5= ""
      
      out1+='<div style="display: flex; margin-left:1%">'+
                '<a href="animes-details?post='+item.data[0].mal_id+'"><img src="'+item.data[0].images.jpg.image_url+'" alt="'+item.data[0].title+'"></a>'+
                '<a href="animes-details?post='+item.data[0].mal_id+'">1º'+item.data[0].title+'</a>'+
              '</div>';

      out2+='<div style="display: flex; margin-left:1%">'+
              '<a href="animes-details?post='+item.data[1].mal_id+'"><img src="'+item.data[1].images.jpg.image_url+'" alt="'+item.data[1].title+'"></a>'+
              '<a href="animes-details?post='+item.data[1].mal_id+'">2º '+item.data[1].title+'</a>'+
            '</div>';

        out3+='<div style="display: flex; margin-left:1%">'+
            '<a href="animes-details?post='+item.data[2].mal_id+'"><img src="'+item.data[2].images.jpg.image_url+'" alt="'+item.data[2].title+'"></a>'+
            '<a href="animes-details?post='+item.data[2].mal_id+'">3º '+item.data[2].title+'</a>'+
          '</div>';

        out4+='<div style="display: flex; margin-left:1%">'+
                '<a href="animes-details?post='+item.data[3].mal_id+'"><img src="'+item.data[3].images.jpg.image_url+'" alt="'+item.data[3].title+'"></a>'+
                '<a href="animes-details?post='+item.data[3].mal_id+'">3º '+item.data[3].title+'</a>'+
          '</div>';

      out5+='<div style="display: flex; margin-left:1%">'+
                '<a href="animes-details?post='+item.data[4].mal_id+'"><img src="'+item.data[4].images.jpg.image_url+'" alt="'+item.data[4].title+'"></a>'+
                '<a href="animes-details?post='+item.data[4].mal_id+'">4º '+item.data[4].title+'</a>'+
              '</div>';
      
      try {
        document.getElementById("ranking0").innerHTML = out1;
        document.getElementById("ranking1").innerHTML = out2;
        document.getElementById("ranking2").innerHTML = out3;
        document.getElementById("ranking3").innerHTML = out4;
        document.getElementById("ranking4").innerHTML = out5;
        document.getElementById("display_loading").style.display = "none";
        document.getElementById("display_content").style.display = "";
      } catch(err) {}
    } else {
      try {
        document.getElementById("display_content").style.display = "none";
        document.getElementById("display_loading").style.display = "";
      }  catch(err) {}
    } 
  }
    xmlhttpRanking.open("GET", url, true);
    xmlhttpRanking.send();
}

function ranking_m() {
  var xmlhttpRanking = new XMLHttpRequest();
  var url = 'https://api.jikan.moe/v4/top/anime?type=tv&filter=airing&page=1&limit=5';
  xmlhttpRanking.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var item = JSON.parse(this.responseText || "[]");
      var out1= ""
      var out2= ""
      var out3= ""
      var out4= ""
      var out5= ""

      out1+='<div class="container text-center color-ranking" style="display:block">'+
              '<div style="display: flex;">'+
                '<a href="animes-details?post='+item.data[0].mal_id+'"><img src="'+item.data[0].images.jpg.image_url+'" alt="'+item.data[0].title+'"></a>'+
                '<div class="container text-center color-ranking"><p>1º '+item.data[0].title+'</p></div>'+
              '</div>'+  
            '</div>';

      out2+='<div class="container text-center color-ranking" style="display: block">'+
              '<div style="display: flex;">'+
                '<a href="animes-details?post='+item.data[1].mal_id+'"><img src="'+item.data[1].images.jpg.image_url+'" alt="'+item.data[1].title+'"></a>'+
                '<div class="container text-center color-ranking"><p>2º '+item.data[1].title+'</p></div>'+
              '</div>'+
            '</div>';

        out3+='<div class="container text-center color-ranking" style="display: block">'+
                  '<div style="display: flex;">'+
                      '<a href="animes-details?post='+item.data[2].mal_id+'"><img src="'+item.data[2].images.jpg.image_url+'" alt="'+item.data[2].title+'"></a>'+
                      '<div class="container text-center color-ranking"><p>3º '+item.data[2].title+'</p></div>'+
                  '</div>'+
                '</div>';

        out4+='<div class="container text-center color-ranking" style="display: block">'+
                  '<div style="display: flex;">'+
                    '<a href="animes-details?post='+item.data[3].mal_id+'"><img src="'+item.data[3].images.jpg.image_url+'" alt="'+item.data[3].title+'"></a>'+
                    '<div class="container text-center color-ranking"><p>4º '+item.data[3].title+'</p></div>'+
                  '</div>'+
              '</div>';

        out5+='<div class="container text-center color-ranking" style="display: block">'+
                  '<div style="display: flex;">'+
                    '<a href="animes-details?post='+item.data[4].mal_id+'"><img src="'+item.data[4].images.jpg.image_url+'" alt="'+item.data[4].title+'"></a>'+
                    '<div class="container text-center color-ranking"><p>5º '+item.data[4].title+'</p></div>'+
                  '</div>'+  
                '</div>';
      try {
        document.getElementById("ranking-m0").innerHTML = out1;
        document.getElementById("ranking-m1").innerHTML = out2;
        document.getElementById("ranking-m2").innerHTML = out3;
        document.getElementById("ranking-m3").innerHTML = out4;
        document.getElementById("ranking-m4").innerHTML = out5;
          document.getElementById("display_loading").style.display = "none";
          document.getElementById("display_content").style.display = "";
        } catch(err) {}
    } else {
      try {
        document.getElementById("display_content").style.display = "none";
        document.getElementById("display_loading").style.display = "";
      }  catch(err) {}
    } 
  };
    xmlhttpRanking.open("GET", url, true);
    xmlhttpRanking.send();
}

function upcoming() {
  var xmlhttpRanking = new XMLHttpRequest();
  var url = 'https://api.jikan.moe/v4/seasons/upcoming';
  xmlhttpRanking.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var item = JSON.parse(this.responseText || "[]");

      var out1= ""
      var out2= ""
      var out3= ""
      var out4= ""
      var out5= ""
      var out6= ""
      var out7= ""
      var out8= ""
      var out9= ""
      var out10= ""

      out1+='<div style="display: flex; margin-left:1%">'+
              '<a href="animes-details?post='+item.data[0].mal_id+'"><img src="'+item.data[0].images.jpg.image_url+'" alt="'+item.data[0].title+'"></a>'+
              '<a href="animes-details?post='+item.data[0].mal_id+'">'+item.data[0].title+'</a>'+
            '</div>';
      out2+='<div style="display: flex; margin-left:1%">'+
              '<a href="animes-details?post='+item.data[1].mal_id+'"><img src="'+item.data[1].images.jpg.image_url+'" alt="'+item.data[1].title+'"></a>'+
              '<a href="animes-details?post='+item.data[1].mal_id+'">'+item.data[1].title+'</a>'+
            '</div>';
      out3+='<div style="display: flex; margin-left:1%">'+
              '<a href="animes-details?post='+item.data[2].mal_id+'"><img src="'+item.data[2].images.jpg.image_url+'" alt="'+item.data[2].title+'"></a>'+
              '<a href="animes-details?post='+item.data[2].mal_id+'">'+item.data[2].title+'</a>'+
          '</div>';
      out4+='<div style="display: flex; margin-left:1%">'+
              '<a href="animes-details?post='+item.data[3].mal_id+'"><img src="'+item.data[3].images.jpg.image_url+'" alt="'+item.data[3].title+'"></a>'+
              '<a href="animes-details?post='+item.data[3].mal_id+'">'+item.data[3].title+'</a>'+
            '</div>';
      out5+='<div style="display: flex; margin-left:1%">'+
                '<a href="animes-details?post='+item.data[4].mal_id+'"><img src="'+item.data[4].images.jpg.image_url+'" alt="'+item.data[4].title+'"></a>'+
                '<a href="animes-details?post='+item.data[4].mal_id+'">'+item.data[4].title+'</a>'+
            '</div>';
      out6+='<div style="display: flex; margin-left:1%">'+
                '<a href="animes-details?post='+item.data[5].mal_id+'"><img src="'+item.data[5].images.jpg.image_url+'" alt="'+item.data[5].title+'"></a>'+
                '<a href="animes-details?post='+item.data[5].mal_id+'">'+item.data[5].title+'</a>'+
            '</div>';
      out7+='<div style="display: flex; margin-left:1%">'+
              '<a href="animes-details?post='+item.data[6].mal_id+'"><img src="'+item.data[6].images.jpg.image_url+'" alt="'+item.data[6].title+'"></a>'+
              '<a href="animes-details?post='+item.data[6].mal_id+'">'+item.data[6].title+'</a>'+
            '</div>';
      out8+='<div style="display: flex; margin-left:1%">'+
                    '<a href="animes-details?post='+item.data[7].mal_id+'"><img src="'+item.data[7].images.jpg.image_url+'" alt="'+item.data[7].title+'"></a>'+
                    '<a href="animes-details?post='+item.data[7].mal_id+'">'+item.data[7].title+'</a>'+
              '</div>';
      out9+='<div style="display: flex; margin-left:1%">'+
                '<a href="animes-details?post='+item.data[8].mal_id+'"><img src="'+item.data[8].images.jpg.image_url+'" alt="'+item.data[8].title+'"></a>'+
                '<a href="animes-details?post='+item.data[8].mal_id+'">'+item.data[8].title+'</a>'+
            '</div>';
      out10+='<div style="display: flex; margin-left:1%">'+
              '<a href="animes-details?post='+item.data[9].mal_id+'"><img src="'+item.data[9].images.jpg.image_url+'" alt="'+item.data[9].title+'"></a>'+
              '<a href="animes-details?post='+item.data[9].mal_id+'">'+item.data[9].title+'</a>'+
            '</div>';

      try {
          document.getElementById("upcoming1").innerHTML = out1;
          document.getElementById("upcoming2").innerHTML = out2;
          document.getElementById("upcoming3").innerHTML = out3;
          document.getElementById("upcoming4").innerHTML = out4;
          document.getElementById("upcoming5").innerHTML = out5;
          document.getElementById("upcoming6").innerHTML = out6;
          document.getElementById("upcoming7").innerHTML = out7;
          document.getElementById("upcoming8").innerHTML = out8;
          document.getElementById("upcoming9").innerHTML = out9;
          document.getElementById("upcoming10").innerHTML = out10;
          document.getElementById("display_loading").style.display = "none";
          document.getElementById("display_content").style.display = "";
        } catch(err) {}
    } else {
      try {
        document.getElementById("display_content").style.display = "none";
        document.getElementById("display_loading").style.display = "";
      }  catch(err) {}
    } 
  };
    xmlhttpRanking.open("GET", url, true);
    xmlhttpRanking.send();
}

function upcoming_m() {
  var xmlhttpRanking = new XMLHttpRequest();
  var url = 'https://api.jikan.moe/v4/seasons/upcoming';
  xmlhttpRanking.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var item = JSON.parse(this.responseText || "[]");

      var out1= ""
      var out2= ""
      var out3= ""
      var out4= ""
      var out5= ""
      var out6= ""
      var out7= ""
      var out8= ""
      var out9= ""
      var out10= ""

      out1+='<a href="animes-details?post='+item.data[0].mal_id+'"><img src="'+item.data[0].images.jpg.image_url+'" alt="'+item.data[0].title+'"></a>'+
            '<p>'+item.data[0].title+'</p>';    
   
      out2+='<a href="animes-details?post='+item.data[1].mal_id+'"><img src="'+item.data[1].images.jpg.image_url+'" alt="'+item.data[1].title+'"></a>'+
            '<p>'+item.data[1].title+'</p>';     
 
      out3+='<a href="animes-details?post='+item.data[2].mal_id+'"><img src="'+item.data[2].images.jpg.image_url+'" alt="'+item.data[2].title+'"></a>'+
            '<div style="display:block"><p>'+item.data[2].title+'</p></div>';     
    
      out4+='<a href="animes-details?post='+item.data[3].mal_id+'"><img src="'+item.data[3].images.jpg.image_url+'" alt="'+item.data[3].title+'"></a>'+
            '<p>'+item.data[3].title+'</p>';

      out5+='<a href="animes-details?post='+item.data[4].mal_id+'"><img src="'+item.data[4].images.jpg.image_url+'" alt="'+item.data[4].title+'"></a>'+
            '<p>'+item.data[4].title+'</p>';     

      out6+='<a href="animes-details?post='+item.data[5].mal_id+'"><img src="'+item.data[5].images.jpg.image_url+'" alt="'+item.data[5].title+'"></a>'+
            '<p>'+item.data[5].title+'</p>';    

      out7+='<a href="animes-details?post='+item.data[6].mal_id+'"><img src="'+item.data[6].images.jpg.image_url+'" alt="'+item.data[6].title+'"></a>'+
            '<p>'+item.data[6].title+'</p>';   

      out8+='<a href="animes-details?post='+item.data[7].mal_id+'"><img src="'+item.data[7].images.jpg.image_url+'" alt="'+item.data[7].title+'"></a>'+
            '<p>'+item.data[7].title+'</p>';   

      out9+='<a href="animes-details?post='+item.data[8].mal_id+'"><img src="'+item.data[8].images.jpg.image_url+'" alt="'+item.data[8].title+'"></a>'+
            '<p>'+item.data[8].title+'</p>';

      out10+='<a href="animes-details?post='+item.data[9].mal_id+'"><img src="'+item.data[9].images.jpg.image_url+'" alt="'+item.data[9].title+'"></a>'+
            '<p>'+item.data[9].title+'</p>';

      try {
        document.getElementById("upcoming-m1").innerHTML = out1;
        document.getElementById("upcoming-m2").innerHTML = out2;
        document.getElementById("upcoming-m3").innerHTML = out3;
        document.getElementById("upcoming-m4").innerHTML = out4;
        document.getElementById("upcoming-m5").innerHTML = out5;
        document.getElementById("upcoming-m6").innerHTML = out6;
        document.getElementById("upcoming-m7").innerHTML = out7;
        document.getElementById("upcoming-m8").innerHTML = out8;
        document.getElementById("upcoming-m9").innerHTML = out9;
        document.getElementById("upcoming-m10").innerHTML = out10;
          document.getElementById("display_loading").style.display = "none";
          document.getElementById("display_content").style.display = "";
        } catch(err) {}
    } else {
      try {
        document.getElementById("display_content").style.display = "none";
        document.getElementById("display_loading").style.display = "";
      }  catch(err) {}
    } 
  };
    xmlhttpRanking.open("GET", url, true);
    xmlhttpRanking.send();
}

function caracter() {
  var url = url_aps+'/caracter/list?field=id&limitDoc=5';
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText || []);
      var out= "";
      for (let item of myArr) {
          out+='<li class="">'+
                  '<div style="display: flex;">'+
                    '<img src="'+item.image_url+'" width="45px" height="45px" alt=""><p><abbr title="'+item.profile+'">'+item.name+'</abbr></p>'+
                  '</div>'+
                '</li>';
        }  try {
          document.getElementById("personagens").innerHTML = out;
          document.getElementById("display_loading").style.display = "none";
          document.getElementById("display_content").style.display = "";
        } catch(err) {}   
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

function caracter_m() {
  var xmlhttp = new XMLHttpRequest();
  var url = url_aps+'/caracter/list?field=id&limitDoc=5';
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText || []);
      var out= ""
      for (let item of myArr) {
          out+='<li>'+
                '<div style="display: flex;">'+
                  '<img src="'+item.image_url+'" width="45px" height="45px" alt=""><h5>'+item.name.substring(0,30)+'</h5>'+
                '</div>'+
                '<div class="container text-center" style="display: block;"><p>'+item.profile+'</p></div>'+
                '</li>';
        } try {
          document.getElementById("personagens-m").innerHTML = out;
          document.getElementById("display_loading").style.display = "none";
          document.getElementById("display_content").style.display = "";
        } catch(err) {}
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

function list() {
  document.getElementById("myUL").style.display = "none";
  var out = "";   
  var array = [];
  var xmlhttp = new XMLHttpRequest();
  var url = url_aps+'/postagens/list-query?field=id&orderBy=DESCENDING&limitDoc=1000000';
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
         out += '<li style="list-style-type: none;">'+
                '<div style="display="flex">'+
                '<img src="'+item.image1+'" alt=""> <a href="noticias?post='+item.id+'">'+item.title+'</a></li>'+
                '</div>';
      }
      document.getElementById("myUL").innerHTML = out;
  }
}

function find() {
  var input_historico = document.getElementById("myInput").value;
  if (input_historico.length > 5) {
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
  } else {
    document.getElementById("myUL").style.display = "none";
  }
}

function display() {
  document.getElementById("myUL").style.display = "";
}

function urlIndexPage() {
  window.location.href = 'index';
}

function urlCalendarioPage() {
  window.location.href = 'calendario';
}

function urlNoticiasPage() {
  window.location.href = 'noticias-pages?page=1';
}

function urlColunaDoLeitorPage() {
  window.location.href = 'coluna-do-leitor?page=1';
}

function urlResenhaPage() {
  window.location.href = 'resenha';
}

function urlLicencaPage() {
  window.location.href = 'licenca';
}

function barnerAds2() {
  window.location.href = 'coluna-do-leitor-noticia?info=Nova-página-já-disponivel&post=20221230125448374548';
}