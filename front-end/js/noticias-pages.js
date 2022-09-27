  //OBS: as credencias fora removidas
  var last_id = "";
  function locationPages() {
    var page_value =  window.location.href ;
    var page = page_value.substr(-1);
    var http = new XMLHttpRequest();
    var url = 'https://removido-por-segurança/postagens/list?field=id&orderBy=DESCENDING&limitDoc=100';
    http.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText || []);
        var novoArray = [];
        var meuArray =myArr;
        var corte = 10;
        var p = [];
        var out = "";
        for (var i = 0; i < myArr?.length; i = i + corte) {//corta tudo em 10 em 10 elementos
          novoArray.push(meuArray.slice(i, i + corte));
        }
        for (var x =0; x < novoArray.length; x ++) {//salva em p numeros de cortes
           p.push(x);
        }
        var x =  page-1;
        for (let item of novoArray[x]) {//busca todos item do corte x
          out+= '<li class="list-group-item">'+
                      '<div><img class="img-fluid" src="'+item.image1+'"></div>'+
                        '<div>'+
                          '<div><p class="p-displaynone">'+item.id+'</p><strong>'+item.title+'</strong> </div>'+
                            '<div> <p>'+item.date+'</p><p>'+item.subTitle+'</p> </div>'+
                            '<div> <p>'+item.content1+'</p> </div>'+
                            '<a href="nnoticias.html?post='+item.id+'">Continuar lendo ...</a>' + 
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
 
  function allNewsPage(last_id) {
    var http = new XMLHttpRequest();
    var url = 'http://removido-por-segurança/postagens/page?field=id&fielsValues='+last_id+'&limitDoc=10';
    http.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText || []);
        var meuArray =myArr;
        var out = "";
          for (let item of meuArray) {
            out+= '<li class="list-group-item">'+
                      '<div><img class="img-fluid" src="'+item.image1+'"></div>'+
                        '<div>'+
                          '<div><p class="p-displaynone">'+item.id+'</p><strong>'+item.title+'</strong> </div>'+
                            '<div> <p>'+item.date+'</p><p>'+item.subTitle+'</p> </div>'+
                            '<div> <p>'+item.content1+'</p> </div>'+   
                        '</div>'+
                    '</li>';
          }
          document.getElementById("item").innerHTML = out;
        }
    };
    http.open("GET", url, true);
    http.send();
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

  function urlConsulta() {
    localStorage.removeItem("id");
    window.location.href = 'result.html';
  }
