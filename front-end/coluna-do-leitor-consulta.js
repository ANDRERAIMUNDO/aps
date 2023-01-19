//para ter acesso mande um email para andreraimundo.me@gmail.com 
//está api foi removida por motivo de segurança
var url_aps = 'https://api-dns-do-servidor-principal';
var pageLocation = "";

function noticiasHistorico() {
  var page_value =  window.location.href ;
  var page = page_value.substr(-1);
  var http = new XMLHttpRequest();

  var xmlhttp = new XMLHttpRequest();
  var url = url_aps+'/noticias/list?field=id&orderBy=DESCENDING&limitDoc=100';
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText || []);
        var novoArray = [];
        var meuArray =myArr;
        var corte = 5;
        var p = [];
        var out = "";
        for (var i = 0; i < myArr?.length; i = i + corte) {//corta tudo em 5 em 5 elementos
          novoArray.push(meuArray.slice(i, i + corte));
        }
        for (var x =0; x < novoArray.length; x ++) {//salva em p numeros de cortes
           p.push(x);
        }
        var x =  page-1;
        pageLocation = x+1;
        for (let item of novoArray[x]) {
            const value_id = item.id;
            const id  = value_id.toString();
            const value_tag = item.tag;
            const tag  = value_tag.toString();
            out+='<li onClick="noticiaDetails(\''+id+'\', \''+tag+'\')">'+
                    '<div class="noticia-historico">'+
                      '<img src="'+item.image_principal+'">'+
                      '<div class="noticia-historico-content">'+
                        '<p>'+item.date+' - '+item.title+'</p>'+
                        '<p>'+item.subTitle+'</p>'+
                        '<p class="historico-lines">'+item.content[0].lines[0].substring(0,200)+' ...</p>'+
                      '</div>'+
                    '</div>'+
                  '</li>';
                } try {
                  document.getElementById("noticia-historico").innerHTML = out;
                  document.getElementById("display_loading").style.display = "none";
                  document.getElementById("display_content").style.display = "";
                } catch(err) {}  
            }  else {
              try {
                document.getElementById("display_content").style.display = "";
                document.getElementById("display_loading").style.display = "none";
              }  catch(err) {}
            }
          };
          xmlhttp.open("GET", url, true);
          xmlhttp.send();
      }

function nextPage() {
  var page = pageLocation+1;
  window.location.href = 'coluna-do-leitor-consulta?page='+page;
}


function loadListNoticias() {
  document.getElementById("myULL").style.display = "none";
  var out = "";   
  var array = [];
  var xmlhttp = new XMLHttpRequest();
  var url = url_aps+'/noticias/list?field=id&orderBy=DESCENDING&limitDoc=10000';
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText || "[]");
      for (var i =0; i<myArr.length; i ++) {
        array.push(myArr[i]);
      }
      for (let item of array) {
        out += '<li style="list-style-type: none;">'+
                  '<div style="display="flex">'+
                  '<img src="'+item.image_principal+'" alt=""> <a href="coluna-do-leitor-noticia?info='+item.tag+'&post='+item.id+'">'+item.title+'</a>'+
                '</li>';
      }
      document.getElementById("myULL").innerHTML = out;
      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function findTitleInNoticias() {
  var input_historico = document.getElementById("inputHistorico").value;
  if (input_historico.length > 5) {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("inputHistorico");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myULL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) { 
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            document.getElementById("myULL").style.display = "none";
        } else {
            display();
            li[i].style.display = "none";
        }
    }
  } else {
    document.getElementById("myULL").style.display = "none";
  }
}

function display() {
  document.getElementById("myULL").style.display = "";
}