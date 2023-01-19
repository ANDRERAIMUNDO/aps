//para ter acesso mande um email para andreraimundo.me@gmail.com 
//está api foi removida por motivo de segurança
var url_aps = 'https://api-dns-do-servidor-principal';

  function calendario_domingo() {
    var xmlhttp = new XMLHttpRequest();
    var url = url_aps+'/calendario/domingo/list?field=id&orderBy=DESCENDING&limitDoc=10';
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText || []);
        var out= "";
        for (let data of myArr) {
            out+= '<div class="conteudo">'+
                  '<p>'+data.title+'</p>'+
                  '<a href="animes-details?calendario=domingo&post='+data.mal_id+'"><img src="'+data.large_image_url+'" alt="'+data.title+'"></a>'+
                  '</div>';
        } try {
          document.getElementById("domingo").innerHTML = out;
          document.getElementById("display_content").style.display = "";
          document.getElementById("display_loading").style.display = "none";
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

  function calendario_segunda(){
    var xmlhttp = new XMLHttpRequest();
    var url = url_aps+'/calendario/segunda/list?field=id&orderBy=DESCENDING&limitDoc=10';
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText || []);
        var out= ""
        for (let data of myArr) {
          out+= '<div class="conteudo">'+
          '<p>'+data.title+'</p>'+
          '<a href="animes-details?calendario=segunda&post='+data.mal_id+'"><img src="'+data.large_image_url+'" alt="'+data.title+'"></a>'+
          '</div>';
          } try {
            document.getElementById("segunda").innerHTML = out;
            document.getElementById("display_content").style.display = "";
            document.getElementById("display_loading").style.display = "none";
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

  function calendario_terca(){
    var xmlhttp = new XMLHttpRequest();
    var url = url_aps+'/calendario/terca/list?field=id&orderBy=DESCENDING&limitDoc=10';
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText || []);
        var out= ""
        for (let data of myArr) {
          out+= '<div class="conteudo">'+
          '<p>'+data.title+'</p>'+
          '<a href="animes-details?calendario=terca&post='+data.mal_id+'"><img src="'+data.large_image_url+'" alt="'+data.title+'"></a>'+
          '</div>';
          } try {
            document.getElementById("terca").innerHTML = out;
            document.getElementById("display_content").style.display = "";
            document.getElementById("display_loading").style.display = "none";
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

  function calendario_quarta() {
    var xmlhttp = new XMLHttpRequest();
    var url = url_aps+'/calendario/quarta/list?field=id&orderBy=DESCENDING&limitDoc=10';
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText || []);
        var out= ""
        for (let data of myArr) {
          out+= '<div class="conteudo">'+
          '<p>'+data.title+'</p>'+
          '<a href="animes-details?calendario=quarta&post='+data.mal_id+'"><img src="'+data.large_image_url+'" alt="'+data.title+'"></a>'+
          '</div>';
          } try {
            document.getElementById("quarta").innerHTML = out;
            document.getElementById("display_content").style.display = "";
            document.getElementById("display_loading").style.display = "none";
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

  function calendario_quinta(){
        var xmlhttp = new XMLHttpRequest();
        var url = url_aps+'/calendario/quinta/list?field=id&orderBy=DESCENDING&limitDoc=10';
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText || []);
            var out= ""
            for (let data of myArr) {
              out+= '<div class="conteudo">'+
              '<p>'+data.title+'</p>'+
              '<a href="animes-details?calendario=quinta&post='+data.mal_id+'"><img src="'+data.large_image_url+'" alt="'+data.title+'"></a>'+
              '</div>';
              } try {
                document.getElementById("quinta").innerHTML = out;
                document.getElementById("display_content").style.display = "";
                document.getElementById("display_loading").style.display = "none";
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

  function calendario_sexta() {
        var xmlhttp = new XMLHttpRequest();
        var url = url_aps+'/calendario/sexta/list?field=id&orderBy=DESCENDING&limitDoc=10';
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText || []);
            var out= ""
            for (let data of myArr) {
              out+= '<div class="conteudo">'+
              '<p>'+data.title+'</p>'+
              '<a href="animes-details?calendario=sexta&post='+data.mal_id+'"><img src="'+data.large_image_url+'" alt="'+data.title+'"></a>'+
              '</div>';
              } try {
                document.getElementById("sexta").innerHTML = out;
                document.getElementById("display_content").style.display = "";
                document.getElementById("display_loading").style.display = "none";
              } catch(err) {}
              document.getElementById("sexta").innerHTML = out;
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

  function calendario_sabado(){
        var xmlhttp = new XMLHttpRequest();
        var url = url_aps+'/calendario/sabado/list?field=id&orderBy=DESCENDING&limitDoc=10';
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText || []);
            var out= ""
            for (let data of myArr) {
              out+= '<div class="conteudo">'+
              '<p>'+data.title+'</p>'+
              '<a href="animes-details?calendario=sabado&post='+data.mal_id+'"><img src="'+data.large_image_url+'" alt="'+data.title+'"></a>'+
              '</div>';
              } try {
                document.getElementById("sabado").innerHTML = out;
                document.getElementById("display_content").style.display = "";
                document.getElementById("display_loading").style.display = "none";
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

    function getAnimesDetails()  {
      const urlParams = new URLSearchParams(window.location.search);
      const mal_id = urlParams.get("post")
      const calendario = urlParams.get("calendario");
      var url;

      if (calendario == 'domingo') {
        url = url_aps+'/calendario/domingo/find?field=mal_id&name='+mal_id;
        this.findMalIdInFileTXT(url);
      }
      if (calendario == 'segunda') {
        url = url_aps+'/calendario/segunda/find?field=mal_id&name='+mal_id;
        this.findMalIdInFileTXT(url);
      } 
      if (calendario == 'terca') {
        url = url_aps+'/calendario/terca/find?field=mal_id&name='+mal_id;
        this.findMalIdInFileTXT(url);
      } 
      if (calendario == 'quarta') {
        url = url_aps+'/calendario/quarta/find?field=mal_id&name='+mal_id;
        this.findMalIdInFileTXT(url);
      } 
      if (calendario == 'quinta') {
        url = url_aps+'/calendario/quinta/find?field=mal_id&name='+mal_id;
        this.findMalIdInFileTXT(url);
      } 
      if (calendario == 'sexta') {
        url = url_aps+'/calendario/sexta/find?field=mal_id&name='+mal_id;
        this.findMalIdInFileTXT(url);
      } 
      if (calendario == 'sabado') {
        url = url_aps+'/calendario/sabado/find?field=mal_id&name='+mal_id;
        this.findMalIdInFileTXT(url);
      }  else {
        url = url_aps+'/animes-details/find?field=mal_id&name='+mal_id;
        this.findMalIdInFileTXT(url);
      }
    }

    function findMalIdInFileTXT(url_mal_id) {

      var xmlhttp = new XMLHttpRequest(); 
      var url = url_mal_id;
   
      xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
          var item = JSON.parse(this.responseText || "[]");
          const myArr = item[0];
            try {
              document.getElementById("image").src = [myArr.large_image_url];
              document.getElementById("title").innerHTML = myArr.title;
              document.getElementById("score").innerHTML = myArr.score;
              document.getElementById("year_lauch").innerHTML = myArr.year;
              getGenresBR(myArr);
              getThemesBR(myArr);
              document.getElementById("type").innerHTML = myArr.type;
              document.getElementById("source").innerHTML = myArr.source;
              document.getElementById("episodes").innerHTML = myArr.episodes;
              document.getElementById("season").innerHTML= myArr.season;
              document.getElementById("status").innerHTML = myArr.status;
              getBroadcastBR(myArr);
              getFromBR(myArr);
              getStudiosBR(myArr);
              getProducersBR(myArr);
              document.getElementById("synopsis").innerHTML = myArr.synopsis;
              document.getElementById("display_content").style.display = "";
              document.getElementById("display_loading").style.display = "none";
            } catch(err) {}
          }   else {
            try {
              document.getElementById("display_content").style.display = "none";
              document.getElementById("display_loading").style.display = "";
            }  catch(err) {}
          }
      };
      xmlhttp.open("GET", url, true);
      xmlhttp.send();

    }

    function getProducersBR(arr) {
      var out = "";
      for(var i= 0; i < arr.producers.length; i++) {
      out += '<li><p>'+arr.producers[i]+'</p></li>';
      }
      document.getElementById("producers").innerHTML = out;
    }

    function getStudiosBR(arr) {
      var out1 = "";
      for(var i=0; i < arr.studios.length; i++) {
      out1+= '<li><p>'+arr.studios[i]+'</p></li>';
      } try {
        document.getElementById("studios").innerHTML = out1;
        document.getElementById("display_content").style.display = "";
        document.getElementById("display_loading").style.display = "none";
      } catch(err) {}
   
    }

    function getGenresBR(arr) {
      var out2 = "";
      for(var i=0; i < arr.genres.length; i++) {
      out2 += '<li><p>'+arr.genres[i]+'</p></li>';
      } try {
        document.getElementById("genres").innerHTML = out2;
        document.getElementById("display_content").style.display = "";
        document.getElementById("display_loading").style.display = "none";
      } catch(err) {}
    }

    function getThemesBR(arr) {
      var out3 = "";
      for(var i= 0; i < arr.themes.length; i++) {
      out3+= '<li><p>'+arr.themes[i]+'</p></li>';
      } try {
        document.getElementById("themes").innerHTML = out3;
        document.getElementById("display_content").style.display = "";
        document.getElementById("display_loading").style.display = "none";
      } catch(err) {}
    }
    
    function getFromBR(arr) {
      var out3 = "";
      for(var i= 0; i < arr.from.length; i++) {
      out3+= arr.from[i];
      } try {
        document.getElementById("from").innerHTML = out3;
        document.getElementById("display_content").style.display = "";
        document.getElementById("display_loading").style.display = "none";
      } catch(err) {}
    }

    function getBroadcastBR (arr) {
      var out4 = "";
      for(var i= 0; i < arr.broadcast.length; i++) {
      out4+= arr.broadcast[i];
      } try {
        document.getElementById("broadcast").innerHTML = out4;
        document.getElementById("display_content").style.display = "";
        document.getElementById("display_loading").style.display = "none";
      } catch(err) {}
    }