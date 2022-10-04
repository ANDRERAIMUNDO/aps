  
  var last_id = "";
  var pageLocation = "";
  function locationPages() {
    var page_value =  window.location.href ;
    var page = page_value.substr(-1);
    var http = new XMLHttpRequest();
    var url = 'https://my-api';
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
          out+= '<li class="list-group-item">'+
                      '<div><img class="img-fluid" src="'+item.image1+'"></div>'+
                        '<div>'+
                          '<div><p class="p-displaynone">'+item.id+'</p><strong>'+item.title+'</strong> </div>'+
                            '<div> <p>'+item.date+'</p><p>'+item.subTitle+'</p> </div>'+
                            '<div> <p>'+item.content1+'</p> </div>'+
                            '<a href="noticias.html?post='+item.id+'">Continuar lendo ...</a>' + 
                        '</div>'+
                    '</li>';
        }
        document.getElementById("item").innerHTML = out;
        var nArrays = novoArray[x].length;
        var y = nArrays -1;
        last_id = novoArray[x][y].id; //falta contiinuar
      }  
    };
    http.open("GET", url, true);
    http.send();
  }
 
  function urlNoticiasPage() {
    var page = pageLocation+1;
    window.location.href = 'noticias-pages.html?page='+page;
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
    window.location.href = 'noticias-pages.html?page=1';
  }
  
  function redirectResenha() {
    localStorage.removeItem("id");
    window.location.href = 'resenha.html';
  }
  
  function redirectLicenca() {
    localStorage.removeItem("id");
    window.location.href = 'licenca.html';
  }
