//para ter acesso mande um email para andreraimundo.me@gmail.com 
//está api foi removida por motivo de segurança
var url_aps = 'https://api-dns-do-servidor-principal';
  var last_id = "";
  var pageLocation = "";
  
  function locationPages() {
    var page_value =  window.location.href ;
    var page = page_value.substr(-1);
    var http = new XMLHttpRequest();
    var url = url_aps+'/postagens/list?field=id&orderBy=DESCENDING&limitDoc=100';
    http.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText || []);
        var novoArray = [];
        var meuArray =myArr;
        var corte = 20;
        var p = [];
        var out = "";
        for (var i = 0; i < myArr?.length; i = i + corte) {//corta tudo em 20 em 20 elementos
          novoArray.push(meuArray.slice(i, i + corte));
        }
        for (var x =0; x < novoArray.length; x ++) {//salva em p numeros de cortes
           p.push(x);
        }
        var x =  page-1;
        pageLocation = x+1;
        for (let item of novoArray[x]) {//busca todos item do corte x
            out+='<li>'+
                    '<div class="container text-center noticia-page">'+
                      '<div>'+
                        '<img src="'+item.image1+'">'+
                      '</div>'+
                      '<div class="container text-center">'+
                          '<p class="p-display">'+item.id+'</p><p class="title">'+item.title+'</p>'+
                          '<p>'+item.date+'</p> <p class="sub-title">'+item.subTitle+'</p>'+
                          '<p class="content">'+item.content1+'</p>'+
                          '<a class="a-solid" href="noticias?post='+item.id+'">Continuar lendo ...</a>'+ 
                      '</div>'+
                    '</div>'+
                  '</li>';
        } try {
          document.getElementById("noticia-page").innerHTML = out;
          document.getElementById("display_content").style.display = "";
          document.getElementById("display_loading").style.display = "none";
        } catch(err) {}
      } else {
        try {
          document.getElementById("display_content").style.display = "none";
          document.getElementById("display_loading").style.display = "";
        }  catch(err) {
          
        }
      }
    };
    http.open("GET", url, true);
    http.send();
  }

  function nextPage() {
    var page = pageLocation+1;
    window.location.href = 'noticias-pages?page='+page;
  }
