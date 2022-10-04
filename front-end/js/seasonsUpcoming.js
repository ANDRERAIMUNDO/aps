function g_mal_id0() {
    mal_id0 =  document.getElementById("0upmal_id").innerHTML;
    value_mal_id = mal_id0;
    localStorage.setItem('mal_id', value_mal_id);
    urlAnimesDetails();
  }
  
  function g_mal_id1() {
    mal_id1 =  document.getElementById("up1mal_id").innerHTML;
    value_mal_id = mal_id1;
    localStorage.setItem('mal_id', value_mal_id);
    urlAnimesDetails();
  
  }
  
  function g_mal_id2() {
    mal_id2 =  document.getElementById("2upmal_id").innerHTML;
    value_mal_id = mal_id2;
    localStorage.setItem('mal_id', value_mal_id);
    urlAnimesDetails();
  }
  
  function g_mal_id3() {
    mal_id3 =  document.getElementById("3upmal_id").innerHTML;
    value_mal_id = mal_id3;
    localStorage.setItem('mal_id', value_mal_id);
    urlAnimesDetails();
  }
  
  function g_mal_id4() {
    mal_id4 =  document.getElementById("4upmal_id").innerHTML;
    value = mal_id4;
    localStorage.setItem('mal_id', value);
    urlAnimesDetails();
  }
  
  function g_mal_id5() {
    mal_id5 =  document.getElementById("5upmal_id").innerHTML;
    value = mal_id5;
    localStorage.setItem('mal_id', value);
    urlAnimesDetails();
  }
  
  function g_mal_id6() {
    mal_id6 =  document.getElementById("6upmal_id").innerHTML;
    value = mal_id6;
    localStorage.setItem('mal_id', value);
    urlAnimesDetails();
  }
  
  function g_mal_id7() {
    mal_id7 =  document.getElementById("7upmal_id").innerHTML;
    value = mal_id7;
    localStorage.setItem('mal_id', value);
    urlAnimesDetails();
  }
  
  function g_mal_id8() {
    mal_id8 =  document.getElementById("8upmal_id").innerHTML;
    value = mal_id8;
    localStorage.setItem('mal_id', value);
    urlAnimesDetails();
  }
  
  function g_mal_id9() {
    mal_id9 =  document.getElementById("9upmal_id").innerHTML;
    value = mal_id9;
    localStorage.setItem('mal_id', value);
    urlAnimesDetails();
  }
  
function upcoming() {
    var xmlhttpRanking = new XMLHttpRequest();
    //var url = 'http://animesparasempre.rf.gd/postagem.txt';
    var url = 'https://api.jikan.moe/v4/seasons/upcoming';
    xmlhttpRanking.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText || "[]");
  
        document.getElementById("0upmal_id").innerHTML = myArr.data[0].mal_id;
        document.getElementById("0upimage_url").src = [myArr.data[0].images.jpg.image_url];
  
        document.getElementById("1upmal_id").innerHTML = myArr.data[1].mal_id;
        document.getElementById("1upimage_url").src = [myArr.data[1].images.jpg.image_url];
  
        document.getElementById("2upmal_id").innerHTML = myArr.data[2].mal_id;
        document.getElementById("2upimage_url").src = [myArr.data[2].images.jpg.image_url];
  
        document.getElementById("3upmal_id").innerHTML = myArr.data[3].mal_id;
        document.getElementById("3upimage_url").src = [myArr.data[3].images.jpg.image_url];
  
        document.getElementById("4upmal_id").innerHTML = myArr.data[4].mal_id;
        document.getElementById("4upimage_url").src = [myArr.data[4].images.jpg.image_url];

        document.getElementById("5upmal_id").innerHTML = myArr.data[5].mal_id;
        document.getElementById("5upimage_url").src = [myArr.data[5].images.jpg.image_url];
  
        document.getElementById("6upmal_id").innerHTML = myArr.data[6].mal_id;
        document.getElementById("6upimage_url").src = [myArr.data[6].images.jpg.image_url];
  
        document.getElementById("7upmal_id").innerHTML = myArr.data[7].mal_id;
        document.getElementById("7upimage_url").src = [myArr.data[7].images.jpg.image_url];
  
        document.getElementById("8upmal_id").innerHTML = myArr.data[8].mal_id;
        document.getElementById("8upimage_url").src = [myArr.data[8].images.jpg.image_url];
  
        document.getElementById("9upmal_id").innerHTML = myArr.data[9].mal_id;
        document.getElementById("9upimage_url").src = [myArr.data[9].images.jpg.image_url];
    };
    }
      xmlhttpRanking.open("GET", url, true);
      xmlhttpRanking.send();
  }

  function upcomingMobile() {
    var xmlhttpRanking = new XMLHttpRequest();
    var url = "files/upcoming.txt";
    //var url = 'https://api.jikan.moe/v4/seasons/upcoming';
    xmlhttpRanking.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText || "[]");
        document.getElementById("0upmmal_id").innerHTML = myArr.data[0].mal_id;
        document.getElementById("0upmimage_url").src = [myArr.data[0].images.jpg.image_url];
  
        document.getElementById("1upmmal_id").innerHTML = myArr.data[1].mal_id;
        document.getElementById("1upmimage_url").src = [myArr.data[1].images.jpg.image_url];
  
        document.getElementById("2upmmal_id").innerHTML = myArr.data[2].mal_id;
        document.getElementById("2upmimage_url").src = [myArr.data[2].images.jpg.image_url];
  
        document.getElementById("3upmmal_id").innerHTML = myArr.data[3].mal_id;
        document.getElementById("3upmimage_url").src = [myArr.data[3].images.jpg.image_url];
  
        document.getElementById("4upmmal_id").innerHTML = myArr.data[4].mal_id;
        document.getElementById("4upmimage_url").src = [myArr.data[4].images.jpg.image_url];

        document.getElementById("5upmmal_id").innerHTML = myArr.data[5].mal_id;
        document.getElementById("5upmimage_url").src = [myArr.data[5].images.jpg.image_url];
  
        document.getElementById("6upmmal_id").innerHTML = myArr.data[6].mal_id;
        document.getElementById("6upmimage_url").src = [myArr.data[6].images.jpg.image_url];
  
        document.getElementById("7upmmal_id").innerHTML = myArr.data[7].mal_id;
        document.getElementById("7upmimage_url").src = [myArr.data[7].images.jpg.image_url];
  
        document.getElementById("8upmmal_id").innerHTML = myArr.data[8].mal_id;
        document.getElementById("8upmimage_url").src = [myArr.data[8].images.jpg.image_url];
  
        document.getElementById("9upmmal_id").innerHTML = myArr.data[9].mal_id;
        document.getElementById("9upmimage_url").src = [myArr.data[9].images.jpg.image_url];
    };
    }
      xmlhttpRanking.open("GET", url, true);
      xmlhttpRanking.send();
  }