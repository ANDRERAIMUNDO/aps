//para ter acesso mande um email para andreraimundo.me@gmail.com 
//está api foi removida por motivo de segurança
var url_aps = 'https://api-dns-do-servidor-principal';
var pageLocation = "";

function noticias() {
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
        for (let item of novoArray[x]) {//busca todos item do corte x
            const value_id = item.id;
            const id  = value_id.toString();
            const value_tag = item.tag;
            const tag  = value_tag.toString();
            out+='<li class="noticia" onClick="noticiaDetails(\''+id+'\', \''+tag+'\')">'+
                    '<div class="noticia-content">'+
                        '<img src="'+item.image_principal+'">'+
                      '<div>'+
                          '<br>'+
                          '<div class="title"><p>'+item.title+'</p></div>'+
                            '<strong>Por:</strong><label>'+item.author+' - '+item.date+'</label>'+
                            '<p class="sub-title">'+item.subTitle+'</p>'+
                            '<p class="lines">'+item.content[0].lines[0].substring(0,100)+' ...</p>'+
                      '</div>'+
                    '</div>'+
                  '</li>';
          } try {
            document.getElementById("coluna").innerHTML = out;
            document.getElementById("display_content").style.display = "";
            document.getElementById("display_loading").style.display = "none";
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

function noticiaDetails(id, tag) {
  let value1 = id;
  let value2 = tag;
  window.location.href = 'coluna-do-leitor-noticia?info='+value2+'&post='+value1;
}

function colunaDoLeitorOutrasNoticias() {
  var xmlhttp = new XMLHttpRequest();
  var url = url_aps+'/postagens/list?field=id&orderBy=DESCENDING&limitDoc=5';
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText || []);
      var out= ""
      for (let item of myArr) {
          out+='<li>'+
          '<div style:display:block>'+
           '<a href="noticias.html?post='+item.id+'"><img src="'+item.image1+'" alt="'+item.title+'"></a>'+
            '<div id="coluna-do-leitor-outras-noticias-a">'+
                '<a href="noticias.html?post='+item.id+'">'+item.subTitle+'</a>'+
            '</div>'+ 
            '</div>'+
        '</li>';
        }
        document.getElementById("outrasNoticias").innerHTML = out;
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function getNoticiaId(){
  var local = window.location.href;
  var url = local.split("post=");
  var id_value = url[1];
  var xmlhttp = new XMLHttpRequest();
  var url = url_aps+'/noticias/details?id='+id_value;
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText || "[]");

      try {
        document.getElementById("id").innerHTML = myArr.id;
        document.getElementById("date").innerHTML = myArr.date;
        document.getElementById("title").innerHTML = myArr.title;
        document.getElementsByTagName("META")[10].content = myArr.title;
        //document.getElementById("title-share").innerHTML = myArr.title;
        document.getElementById("author").innerHTML = myArr.author;
        document.getElementById("subTitle").innerHTML= myArr.subTitle;
        document.getElementsByTagName("META")[11].content = myArr.subTitle;
        document.getElementById("image_principal").src = myArr.image_principal;
        document.getElementsByTagName("META")[12].content = myArr.image_principal;
      //  document.getElementById("image_principal-share").src = myArr.image_principal;
        getContent(myArr);
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

function getContent(myArr) {
  var out = "";
  for (let item of myArr.content) {
    out+='<li>'+
              '<div class="text-center">'+
                  '<div><p class="lines" style="color:'+item.colors+'; font-style:'+item.styles+'">'+item.lines.join(' ')+'<a style="display:'+item.hrefs+';" href="https://'+item.hrefs+'" target="_blank">'+item.hrefs+'</a></p></div>'+
                  '<div class="text-center myclass" id="iframe" style="display:'+item.image_url+';">'+
                    '<div><img src="'+item.image_url+'"></div>'+
                    '<div><p>'+item.image_reference+'</p></div>'+
                  '</div>'+
              '</div>'+
              '<div id="iframe" class="text-center myclass" style="display:'+item.video_url+';">'+
                  '<div><iframe style="background-color: #f39a47;" src="'+item.video_url+'"></iframe></div>'+
                  '<div><p>'+item.video_reference+'</p></div>'+
              '</div>'+
          '</li>';
  }  try {
      document.getElementById("content").innerHTML= out;
  } catch(err) {}
}

function nextPage() {
  var page = pageLocation+1;
  window.location.href = 'coluna-do-leitor?page='+page;
}

function consultaAvancada() {
  //var page = pageLocation+1;
  window.location.href = 'coluna-do-leitor-consulta?page=1';
}