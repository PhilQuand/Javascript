<!-- jQuery for FancyBox 3-->
<script src='//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>

<!--Add fancyBox 3 see documentation at : http://fancyapps.com/fancybox/3/docs/#options -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.css" rel="stylesheet" type="text/css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.js"></script>
<!--Add fancyBox 4 voir documentation https://fancyapps.com -->
<!--script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"></script>
<!--link href="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" rel="stylesheet" type="text/css" />
<!-- Add myFancybox -->
<link href="https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/myFancybox.css" rel="stylesheet" type="text/css" />
<script src='https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/myFancybox.js'></script>
<!-- End FancyBox -->

<script src='https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/iFrameGallery-Plugin.js'></script>
<link href="https://philquand.github.io/Javascript/Blog-widgets/All-Blogs-Style.css" rel="stylesheet" type="text/css" />
<script src='https://philquand.github.io/Javascript/Blog-widgets/All-Blogs-Scripts.js'></script>

<style>
.container.post-body.entry-content {
  margin: 0;
}
.header {
  text-align: justify;
  font-weight: bold;
  color: #666666;
  line-height: 1.4;
  padding-bottom: 0.5em;
  margin-bottom: 0.5em;
}
.author {
  //font-weight: bold;
  font-style: italic;
 text-align: right;
}
.corps {
  text-align: justify;
  padding: 0.5em;
  background-color: rgba(0, 0, 0, 0.04);*/
  background-color: #F4F4F4;
}
.incrustation {
  background-color: #e8f6f8;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
}
.show-more.pill-button,
.show-less.pill-button {
  color: white
}
.reprise {
  /*background-color: #E6E6BE;*/
  background-color: #F2F2C9;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
}

blockquote {
   text-align: left;
   font-size: 20px; 
   line-height: 22pt;
}


.tractTableCATDP {
  border-collapse: collapse;
  width: 100%;
}

.tractTableCATDP td {
  border: 1px solid black;
  padding: 8px;
}

//.tractTableCATDP tr:nth-child(even){background-color: #f2f2f2;}

//.tractTableCATDP tr:hover {background-color: #ddd;}
.tractTableCATDP tr:hover {color: white; background-color: #999933;}

.tractTableCATDPTitle td {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
}
@media screen and (max-width: 425px) {
  ul{padding:20px;}
  li{padding:0;}
}
</style>
<style>
.floatLeftImg {
  float: left;
  margin-top: 0.5em;
  margin-right: 1vw;
  width: 30%;
}
.floatRightImg {
  float: right;
  margin-top: 0.5em;
  margin-left: 1vw;
  width: 30%;
}
.centerImg50, .centerImg30 {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.centerImg50 {
  width: 50%;
}
.centerImg30 {
  width: 30%;
}
.floatLeftImg img, .floatRightImg img, .centerImg50 img, .centerImg30 img {
    width: 100%
}
@media screen and (max-width: 1000px) {
  .floatLeftImg, .floatRightImg, .centerImg30 {
    width: 50%;
  }
}
@media screen and (max-width: 800px) {
  .floatLeftImg, .floatRightImg, .centerImg50, .centerImg30 {
    width: 100%;
  }
  .floatLeftImg img, .floatRightImg img, .centerImg50 img, .centerImg30 img {
    float: none;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }
}
</style>
<style>
.rejoindreCATDP {
  padding: 15px 0;
}
.rejoindreCATDP hr {
  border-top: 1px dotted black;
}
.rejoindreCATDP p {
  text-align: right;
  font-style: italic;
  font-weight: bold;
}
</style>
<style>
.Attribution {
  display: none;
}
#sidebar_bottom {
  //font-family: 'Crimson text';
  line-height: 0.8;
}
.archivedate a, .archivedate .post-count, .archivedate .post-count::before, .archivedate .post-count::after {
  color: white;
}
#Image2_img {
  //height: 325px;
}
.PopularPosts .post-title,
.PopularPosts .post-title a,
.PopularPosts .post-title a:visited,
.PopularPosts .post-title a:hover {
  font-size: 24px;
}
.contTitle {
  margin-top: 300px;
}
.sticky .contTitle {
  margin-top: 10px;
}
</style>
<!--script type='text/javascript'>
//$(document).ready(function() {
  breakCode: {
    var href = "https://catdp37.blogspot.com/";
    var actHref = window.location.href;
    var s = actHref.split(href);
    //if (s[1] != '') break breakCode;
    var blogTitle = document.getElementsByClassName("header-widget");
    if (blogTitle.length == 1) {
      if(blogTitle[0].children.length > 1) {
        var plusP = blogTitle[0].children[1]
        plusP.remove();
      }
      var h1Title = blogTitle[0].children[0].children[0];
      if (s[1] == '' || s[1] == '#loadCATDPTimeLine') {
        blogTitle[0].style.paddingBottomt = "1em";
        h1Title.style.lineHeight = "0.8";
      } else {
        var title = h1Title.children[0].innerHTML;
        //title.replace(/br/gi, "");
        //h1Title.children[0].innerHTML = "C’est au Tour(s) du Peuple !<br>Municipales 2020";
        h1Title.children[0].innerHTML = "C’est au Tour(s) du Peuple !";
      }
    };
  }
//});
</script-->

<script type='text/javascript'>
$(document).ready(function() {
  breakCode: {
    var href = "https://www.catdp.org/";
    var actHref = window.location.href;
    var s = actHref.indexOf(href + 'search');
    if (href == actHref || actHref.indexOf(href + 'search') > -1) {
      $('.blog-posts').find('.post-outer').each(function(){ 
        $(this).append('<hr style="border-top: 1px dashed;">')
      })
      $('.FeaturedPost').find('.post').each(function(){ 
        $(this).append('<hr style="border-top: 1px dashed;">')
      })
    };
    $('.PopularPosts').find('.post').each(function(){ 
      $(this).append('<hr style="border-top: 1px dashed;">')
    })
  }
});
</script>

<script>
/*$(document).ready(function() {
  $('.PageList').find('li').each(function() {
    var link = $(this).find('a')
    if (link.html() == 'Nos Actions') {
      var actHref = window.location.href;
      link.click(function(e) {
        e.preventDefault(); 
        //loadCATDPTimeLine()
        $('#myTimeLineEntries').find('a').first().click();
        return false;
      });
    }
  });
});
function loadCATDPTimeLine() {
  var href = "https://catdp37.blogspot.com/p/nos-actions_24.html";
  var result = getMyInnerLinkContent(href);
  $('body').append(result.body.find('style').first());
  $('body').append(result.body.find('#myTimeLine'));

  $.fancybox.open({
    src: "#myTimeLine",
    type: "inline",
    opts: {
      infobar: true,
      arrows: false,
      animationEffect: "fade",
      transitionEffect: "slide",
      speed: 300,
      margin: [40, 20],
      buttons: false,
      slideClass: 'customActions',
      afterLoad: function(instance, current) {

        $(function() {
          $('.corpsFancy').scroll(function() {
            $('.year').each(function() {
              var year = $(this).find('h2').first().text();
              if ($(this).offset().top < $(document).scrollTop() + 250) {
                $(this).find('.date').addClass('activeYear');
                $('#dataYear').html('Actions de « C’est au Tour(s) du Peuple »');
              }
              else {
                $(this).find('.date').removeClass('activeYear');
              }
            });
          });
        });
        $(document).ready(function() {
          var year = $('.year').find('h2').first().text();
          $('#dataYear').html('Actions de « C’est au Tour(s) du Peuple »');
          $('.year').first().find('.date').addClass('activeYear');
        });

      }

    }
  });
}*/
</script>
<style>
.mySumFeat {
line-height: 1.6;
}
.mySumFeat {
  color: black;
  font-size: 125%;
  margin: 1em 0 1em 0;
  display: inline-block; 
}
.mySumReg {
//line-height: 1.2;
  color: grey;
  margin: 1em 0 1em 0;
  display: inline-block; 
}
@media screen and (max-width: 425px) {
  .mySumReg div img {
    width: 100%;
  }
}
</style>
<script>
function getMyInnerLinkContent(theURL) {
  var xmlhttp = false;
  loadXMLDoc(theURL);
  if (xmlhttp == false) {
    //alert("timeout");
    return '';
  }
  else {
    var allText = xmlhttp.responseText;
    return getBody(allText);
  }

  function getBody(content) {
    var result = {title: '', authors: '',body: ''};
    var other = $("<div>").html(content);
    var post = $("<div>").append(other.find('.Blog').find('.post'));
    result.title = post.find('.post-title');
    result.header = post.find('.post-header');
    result.body = post.find('.post-body');
    return result;
  }


  function getPart(content, element, iIndex, iShow) {
    var indices = [];
    var idx = content.indexOf(element);
    while (idx != -1) {
      indices.push(idx);
      idx = content.indexOf(element, idx + 1);
    }
    if( iShow == 'yes' ) {
      for (var i = 0; i < indices.length; i++) {
        var x = indices[i];
        x = content.indexOf(">", x + 1);
        var y = content.lastIndexOf("</body>");
        var z = content.slice(x + 1, y);
        alert('getBody for ' + element + ' :\ni = ' + i + '\n' + z);
      }
    }
    var x = indices[iIndex];
    x = content.indexOf(">", x + 1);
    var y = content.lastIndexOf("</body>");
    return content.slice(x + 1, y);
  }

  function loadXMLDoc(theURL) {
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari, SeaMonkey
      xmlhttp = new XMLHttpRequest();
    }
    else { // code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        //alert(xmlhttp.responseText);
      }
    }
    xmlhttp.open("GET", theURL, false);
    xmlhttp.send();
  }
}
$.fn.myTimeLine = function(options) {

  if ($(this).find('div').length == 0) {
    this.append(
      $('<div class="wrap"  ></div>').append(
        $('<div class="timeline"  ></div>')
      ), $('<div id="myTimeLineEntries"  ></div>')
    );
  }
  else options.href = checkHrefOption(this, options.href);

  var _this = this.find('.timeline');

  for (var i = 0; i < options.href.length; i++) addHrefToTimeLine(_this, options.href[i]);

  if ($(this).find('#divActivityReport').length == 0) {
    var divReports = addActivityReports('divActivityReport');
    $(this).append(divReports);
  }

  function addActivityReports(idName) {
    var divReports = $('<div id="' + idName + '"></div>');
    divReports.append('<p>Pour télécharger nos rapports d' + "'" + 'activité :</p><div style="display: flex; flex-wrap: wrap;"><a href="https://philquand.github.io/Javascript/Blog-widgets/CATDP/RapportsAct/Rapport-1.pdf"><img class="iFrameGalleryIMG" src="https://1.bp.blogspot.com/-zjupOB2LaFM/XVww7Td7rYI/AAAAAAAAjz8/u8JbzXgqz3sNss-B71sXFtMiQzbF5HzNwCLcBGAs/s1600/icon-png%2Bv3%2BRap1%2Bv2.png"></a><br><a href="https://philquand.github.io/Javascript/Blog-widgets/CATDP/RapportsAct/Rapport-2.pdf"><img class="iFrameGalleryIMG" src="https://1.bp.blogspot.com/-pufN_Ora744/XVww7VaF1BI/AAAAAAAAjz4/1TiVFHF1Cs0WC-Cw-7nO4g22qGq-mQ4-ACLcBGAs/s1600/icon-png%2Bv3%2BRap2%2Bv2.png"></a><br><a href="https://philquand.github.io/Javascript/Blog-widgets/CATDP/RapportsAct/Rapport-3.pdf"><img class="iFrameGalleryIMG" src="https://1.bp.blogspot.com/-I-YrJQ5e2X0/XVww7TBRw7I/AAAAAAAAj0A/MrzFMGimSo00jeA9dyLxCKQyhuztGyWcgCLcBGAs/s1600/icon-png%2Bv3%2BRap3%2Bv2.png"></a><br><a href="https://philquand.github.io/Javascript/Blog-widgets/CATDP/RapportsAct/Rapport-4.pdf"><img class="iFrameGalleryIMG" src="https://1.bp.blogspot.com/-rWGm2H-cIMI/YFnDIE4fZaI/AAAAAAAAoUc/J1XTqnWlsFwf7EXr5u43O7_Fgc-GBbZ1ACLcBGAsYHQ/s1600/icon-png%2Bv3%2BRap4%2Bv2.png"></a><br>')
    return divReports;
  };  
  
  function checkHrefOption(_this, inputHref) {
    var pubHref = [];
    _this.find('.in > a').each(function() {
      var href = $(this).attr('href');
      pubHref.push(href);
    })
    outputHref = [];
    for (var i = 0; i < inputHref.length; i++) {
      var isHref = true;
      for (var j = 0; j < pubHref.length; j++) {
        if (inputHref[i] == pubHref[j]) {
          isHref = false;
          break;
        }
      }
      if (isHref) outputHref.push(inputHref[i]);
    }
    return outputHref;
  };

  function addHrefToTimeLine(_this, href) {
    var result = getMyInnerLinkContent(href);

    var title = result.title.html();

    var date = result.header.find(".published").html();
    var inpdate = readDate(date, 0);
    var inpday = inpdate.day;
    var inpmonth = inpdate.month;
    var inpyear = inpdate.year;

    var summary = result.body[0];
    createSummaryAndThumbfromDiv(summary, true);
    summary = summary.innerHTML;

    var item = $('<div class="evt"  ></div>').append(
      $('<div class="in"  ></div>').append(
        $('<a href="' + href + '">' + title + '</a>'), $('<div class="date">' + inpday + ' ' + inpmonth + ', ' + inpyear + '</div>'), $('<div class="data">' + summary + '</div>'), $('<hr style="border-top: 1px dashed;">')
      )
    );
    var year = getYear(_this, inpyear);
    addItem(year, item, inpmonth, inpday);
  }

  function readDate(date, format) {
    var result = {
      day: '',
      month: '',
      year: ''
    };
    date = date.split(' ');
    if (format == 0) {
      result.month = $.trim(date[0]);
      result.day = parseInt(date[1].split(',')[0]);
      result.year = parseInt(date[2]);
    }
    else {
      result.day = parseInt(date[0]);
      result.month = date[1].split(',')[0];
      result.year = parseInt(date[2]);
    }
    return result;
  }

  function addItem(year, item, month, day) {
    var itemIn = true;
    year.find('.evt').each(function() {
      //var isMonth = $(this).find('.month').html();
      //var isDay = $(this).find('.day').html();
      var result = readDate($(this).find('.date').html(), 1);
      var isDay = result.day;
      var isMonth = result.month;
      if (isGreaterDay(month, day, isMonth, isDay)) {
        $(this).before(item);
        itemIn = false;
      }
      return itemIn;
    });
    if (itemIn) {
      year.append(item);
    }
  }

  function isGreaterDay(month, day, isMonth, isDay) {
    if ((month2num(month) > month2num(isMonth)) || ((month2num(month) == month2num(isMonth)) && (day > isDay))) {
      return true;
    }
    else {
      return false;
    }

    function month2num(month) {
      var monthN;
      switch (month) {
        case 'janvier':
          monthN = 1;
          break;
        case 'février':
          monthN = 2;
          break;
        case 'mars':
          monthN = 3;
          break;
        case 'avril':
          monthN = 4;
          break;
        case 'mai':
          monthN = 5;
          break;
        case 'juin':
          monthN = 6;
          break;
        case 'juillet':
          monthN = 7;
          break;
        case 'août':
          monthN = 8;
          break;
        case 'septembre':
          monthN = 9;
          break;
        case 'octobre':
          monthN = 10;
          break;
        case 'novembre':
          monthN = 11;
          break;
        case 'décembre':
          monthN = 12;
          break;

        case 'Janvier':
          monthN = 1;
          break;
        case 'Février':
          monthN = 2;
          break;
        case 'Mars':
          monthN = 3;
          break;
        case 'Avril':
          monthN = 4;
          break;
        case 'Mai':
          monthN = 5;
          break;
        case 'Juin':
          monthN = 6;
          break;
        case 'Juillet':
          monthN = 7;
          break;
        case 'Août':
          monthN = 8;
          break;
        case 'Septembre':
          monthN = 9;
          break;
        case 'Octobre':
          monthN = 10;
          break;
        case 'Novembre':
          monthN = 11;
          break;
        case 'Décembre':
          monthN = 12;
          break;

        default:
          monthN = 13;
      }

      return monthN
    }

  }

  function getYear(_this, year) {
    var newyear = '';
    _this.find('.year').each(function() {
      var isYear = $(this).find('h2').html();
      if (year == isYear) {
        newyear = $(this);
        return false;
      }
      else if (year > isYear) {
        $('#art-' + isYear).before(
          $('<a class="data-fancybox-inline-test" data-fancybox="inlineActions"  data-slide-class="customActions" data-src="#' + year + '" href="javascript:;" style="display: none" id=art-' + year + '>' + year + '</a>')
        );
        newyear = $('<div class="articleACFancy" id=' + year + '  ></div>').append($('<div class="fontACFancy"  ></div>').append($('<div class="corpsACFancy"  ></div>').append($('<div class="year"  ></div>').append($('<i><h2>' + year + '</h2></i>')))));
        $('#' + isYear).before(newyear);
        newyear = newyear.find('.year');
        return false;
      }
    });
    if (newyear == '') {
      $('#myTimeLineEntries').append(
        $('<a class="data-fancybox-inline-test" data-fancybox="inlineActions"  data-slide-class="customActions" data-src="#' + year + '" href="javascript:;" style="display: none" id=art-' + year + '>' + year + '</a>')
      );
      newyear = $('<div class="articleACFancy" id=' + year + '  ></div>').append($('<div class="fontACFancy"  ></div>').append($('<div class="corpsACFancy"  ></div>').append($('<div class="year"  ></div>').append($('<i><h2>' + year + '</h2></i>')))));
      _this.append(newyear);
      newyear = newyear.find('.year');
    }
    return newyear;
  }
}
</script>
<!-- Début Calendrier spatio-temporel -->
<div id="myCalendar"></div>
<style>
.customVid .fancybox-button.fancybox-close-small {
  display: none;
}
@media screen and (max-width: 500px) {
    .popupCustom {
        max-width: 300px; 
    }
}
@media screen and (max-width: 400px) {
    .popupCustom {
        max-width: 250px; 
    }
}
</style>
<!-- Load Leaflet -->
<link crossorigin='' href='https://unpkg.com/leaflet@1.4.0/dist/leaflet.css' integrity='sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA==' rel='stylesheet'/>
<script crossorigin='' integrity='sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg==' src='https://unpkg.com/leaflet@1.4.0/dist/leaflet.js'></script>
<!-- For google calendar integration -->
<script src="https://momentjs.com/downloads/moment-with-locales.js"></script>
<script src="https://apis.google.com/js/api.js"></script>
  <!-- Load Esri Leaflet from CDN -->
  <script src="https://unpkg.com/esri-leaflet@2.3.0/dist/esri-leaflet.js"
  integrity="sha512-1tScwpjXwwnm6tTva0l0/ZgM3rYNbdyMj5q6RSQMbNX6EUMhYDE3pMRGZaT41zHEvLoWEK7qFEJmZDOoDMU7/Q=="
  crossorigin=""></script>
  <!-- Load Esri Leaflet Geocoder from CDN -->
  <link rel="stylesheet" href="https://unpkg.com/esri-leaflet-geocoder@2.2.14/dist/esri-leaflet-geocoder.css" 
 integrity="sha512-v5YmWLm8KqAAmg5808pETiccEohtt8rPVMGQ1jA6jqkWVydV5Cuz3nJ9fQ7ittSxvuqsvI9RSGfVoKPaAJZ/AQ==" 
 crossorigin="" />
  <script src="https://unpkg.com/esri-leaflet-geocoder@2.2.14/dist/esri-leaflet-geocoder.js"
    integrity="sha512-uK5jVwR81KVTGe8KpJa1QIN4n60TsSV8+DPbL5wWlYQvb0/nYNgSOg9dZG6ViQhwx/gaMszuWllTemL+K+IXjg=="
    crossorigin=""></script>
<!--Load markerclusters -->
    <link href='https://philquand.github.io/Javascript/LeafLet/MarkerCluster/MarkerCluster.css' rel='stylesheet' type='text/css'/>
    <link href='https://philquand.github.io/Javascript/LeafLet/MarkerCluster/MarkerCluster.Default.css' rel='stylesheet' type='text/css'/>
    <script src="https://philquand.github.io/Javascript/LeafLet/MarkerCluster/leaflet.markercluster-src.js" type='text/javascript'></script>
    <script src="https://unpkg.com/leaflet.markercluster.freezable@1.0.0/dist/leaflet.markercluster.freezable.js" type='text/javascript'></script>

<!--Load datepicker -->
  <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css" />
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<!--Load my Time-Space-Calendar -->
    <link href='https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/Time-Space-Calendar.css' rel='stylesheet' type='text/css'/>
    <script src="https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/Time-Space-Calendar.js" type='text/javascript'></script>
    <script src="https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/Time-Space-Calendar-Address.js" type='text/javascript'></script>

<script>
$(document).ready(function() {
  $('#myCalendar').myGoogleCalendar({
    calendar: [{
        ID: 'tv6kte34tohi4h8rf0gh963rdc@group.calendar.google.com',
        color: 'yellow',
        legend: 'actions'
      },
      {
        ID: 'g4hmtl6ito4djonm11dl4lec4k@group.calendar.google.com',
        color: 'blue',
        legend: 'réunions'
      }
    ],
    iframe: {
      big: "https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FParis&amp;src=ZzRobXRsNml0bzRkam9ubTExZGw0bGVjNGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=dHY2a3RlMzR0b2hpNGg4cmYwZ2g5NjNyZGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%234285F4&amp;color=%23E4C441&amp;showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0",
      medium: "https://calendar.google.com/calendar/embed?height=400&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FParis&amp;src=ZzRobXRsNml0bzRkam9ubTExZGw0bGVjNGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=dHY2a3RlMzR0b2hpNGg4cmYwZ2g5NjNyZGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%234285F4&amp;color=%23E4C441&amp;showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0",
      small: "https://calendar.google.com/calendar/embed?height=400&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FParis&amp;src=ZzRobXRsNml0bzRkam9ubTExZGw0bGVjNGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=dHY2a3RlMzR0b2hpNGg4cmYwZ2g5NjNyZGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%234285F4&amp;color=%23E4C441&amp;showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA&amp;showTabs=0"
   },
    mapTitle: 'Actions et réunions',
    calendarTitle: 'Actions et réunions',
    strDate: '2020-07-01'
  });
  $('#myCalendar').css('display', 'none');
});
</script>
<!-- Fin Calendrier spatio-temporel -->
<!-- Add a modal window -->
<!--div class="articleFancy">
<div class="corpsFancy">
<a class="fancybox fancybox.iframe" data-fancybox="videos" href="https://1.bp.blogspot.com/-2wKSPxbziCk/Xl_5OknlmVI/AAAAAAAAlJ0/camgUD9oSw8txkPUeXRoAEOq1IUJt-LcgCLcBGAsYHQ/s1600/Capture%2Bd%25E2%2580%2599e%25CC%2581cran%2B2020-03-04%2Ba%25CC%2580%2B19.12.51.jpg">Video #1</a>
<a class="fancybox fancybox.iframe" data-fancybox="videos" href="https://1.bp.blogspot.com/-duAUPmBAR7I/Xl_5Os2_gmI/AAAAAAAAlJw/A8Zn7egll_YoWd8J0pApmEJxo47ZVC0WQCLcBGAsYHQ/s1600/Capture%2Bd%25E2%2580%2599e%25CC%2581cran%2B2020-03-04%2Ba%25CC%2580%2B19.12.26.jpg">Video #2</a>
<a class="fancybox fancybox.iframe" data-fancybox="videos" href="https://1.bp.blogspot.com/-N9IXDRQEJbU/Xl_5O67lFHI/AAAAAAAAlJ4/Q1ExMMsgCigMr1UhnDzvqRj98GBvjtRdwCLcBGAsYHQ/s1600/Capture%2Bd%25E2%2580%2599e%25CC%2581cran%2B2020-03-04%2Ba%25CC%2580%2B19.13.19.jpg">Video #2</a>
</div>
</div-->
<!--div class="articleFancy" id="hidden-content-1">
<div class="corpsFancy">
<a href="https://drive.google.com/open?id=1EFLyVsvQuawzRxT6WNVTC0BWYhI1KdWa"><img src="https://1.bp.blogspot.com/-duAUPmBAR7I/Xl_5Os2_gmI/AAAAAAAAlJw/A8Zn7egll_YoWd8J0pApmEJxo47ZVC0WQCLcBGAsYHQ/s1600/Capture%2Bd%25E2%2580%2599e%25CC%2581cran%2B2020-03-04%2Ba%25CC%2580%2B19.12.26.jpg" /></a>
</div>
</div>
<a style="display:none" class="trgImgUL" data-src="#hidden-content-1" data-fancybox="images" data-width="1132" data-height="1600">TEST Fancy</a>
<div class="articleFancy" id="hidden-content-2">
<div class="corpsFancy">
<a href="https://drive.google.com/open?id=1EFLyVsvQuawzRxT6WNVTC0BWYhI1KdWa"><img src="https://1.bp.blogspot.com/-2wKSPxbziCk/Xl_5OknlmVI/AAAAAAAAlJ0/camgUD9oSw8txkPUeXRoAEOq1IUJt-LcgCLcBGAsYHQ/s1600/Capture%2Bd%25E2%2580%2599e%25CC%2581cran%2B2020-03-04%2Ba%25CC%2580%2B19.12.51.jpg" /></a>
</div>
</div>
<a style="display:none" class="trgImgUL" data-src="#hidden-content-2" data-fancybox="images" data-width="1132" data-height="1600">TEST Fancy</a>
<div class="articleFancy" id="hidden-content-3">
<div class="corpsFancy">
<a href="https://drive.google.com/open?id=1EFLyVsvQuawzRxT6WNVTC0BWYhI1KdWa"><img src="https://1.bp.blogspot.com/-N9IXDRQEJbU/Xl_5O67lFHI/AAAAAAAAlJ4/Q1ExMMsgCigMr1UhnDzvqRj98GBvjtRdwCLcBGAsYHQ/s1600/Capture%2Bd%25E2%2580%2599e%25CC%2581cran%2B2020-03-04%2Ba%25CC%2580%2B19.13.19.jpg" /></a>
</div>
</div>
<a style="display:none" class="trgImgUL" data-src="#hidden-content-3" data-fancybox="images" data-width="1132" data-height="1600">TEST Fancy</a-->
<style>
.articleFancy {
    padding: 0 0 0 0;
    //min-width: 80%;
    min-width: 800px;
    height: 90vh;
    box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 25px;
    transition: box-shadow .2s;
    display: none;
}
.corpsFancy {
    width: 100%;
    //max-height: calc(80vh - 140px);
    max-height: 100%;
    overflow: auto;
    padding: 10px 15px 10px 15px;
}
.corpsFancy > img {
    width: 100%;
}
.customInlineBaseClass.fancybox-is-open .fancybox-bg {
    opacity: 0.1;
    //transition-timing-function: cubic-bezier(.22, .61, .36, 1);
}

.customInlineBaseClass.fancybox-is-open .fancybox-content {
    height: 100vh;
}

.customInlineBaseClass .button-close,
.customInlineBaseClass .button-previous,
.customInlineBaseClass .button-next {
  background: black;
}
@media screen and (max-width: 1100px) {
  .articleFancy {
    min-width: 90%;
  }
  .customInlineBaseClass .button-close,
  .customInlineBaseClass .button-previous,
  .customInlineBaseClass .button-next {
      display: block;
  }
}
</style>
<script>
// pour déclencher: https://latouraineinsoumise.blogspot.com/#images-1
$('.trgImgUL').fancybox({
    baseClass: 'customInlineBaseClass',
    smallBtn: false,
    toolbar: false,
    afterLoad : function(instance, current) {
        
        var pixelRatio = window.devicePixelRatio || 1;

        if ( pixelRatio > 1.5 ) {
            current.width  = current.width  / pixelRatio;
            current.height = current.height / pixelRatio;
        }
        
        if (instance.group.length > 1 && current.$content) {
          if (current.index == 0) current.$content.append('<a data-fancybox-next class="button-next" href="javascript:;">→</a>');
          else if (current.index == (instance.group.length - 1)) current.$content.append('<a data-fancybox-prev class="button-previous" href="javascript:;">←</a>');
          else current.$content.append('<a data-fancybox-next class="button-next" href="javascript:;">→</a><a data-fancybox-prev class="button-previous" href="javascript:;">←</a>');
        }
        current.$content.append('<a data-fancybox-close class="button-close" href="javascript:;">x</a>');
    }
});
$('.fancybox')
.attr('rel', 'gallery')
.fancybox({
    baseClass: 'customInlineBaseClass',
    smallBtn: false,
    toolbar: false,
    afterLoad : function(instance, current) {
        
        var pixelRatio = window.devicePixelRatio || 1;

        if ( pixelRatio > 1.5 ) {
            current.width  = current.width  / pixelRatio;
            current.height = current.height / pixelRatio;
        }
        
        if (instance.group.length > 1 && current.$content) {
          if (current.index == 0) current.$content.append('<a data-fancybox-next class="button-next" href="javascript:;">→</a>');
          else if (current.index == (instance.group.length - 1)) current.$content.append('<a data-fancybox-prev class="button-previous" href="javascript:;">←</a>');
          else current.$content.append('<a data-fancybox-next class="button-next" href="javascript:;">→</a><a data-fancybox-prev class="button-previous" href="javascript:;">←</a>');
        }
        var url = window.location.href;
        indexFancy = url.indexOf('#');
        if( indexFancy > 1 ) {
          var url = url.substr(0, indexFancy-1);
        }
        current.$content.append('<a data-fancybox-close class="button-close" href="' + url + '">x</a>');
    }
})
</script>
<!-- End of modal window -->
<style>
.bg-photo-overlay {
  //background-image: url("https://1.bp.blogspot.com/-3oX1E78ddIA/XSYspRHPw0I/AAAAAAAAjb8/rTqL35gvE7cvsb8E5f7d3htvQQEfj2Q5wCPcBGAYYCw/s1600/IMG_3574%2BBlog.png");
  //background-image: url("https://1.bp.blogspot.com/-wJIM1s2IfOY/XkA-pwODE4I/AAAAAAAAk80/hktT5pDB2O42bTZFQppkkIa55RjJqG1ZgCLcBGAsYHQ/s1600/Liste%2BCARDP2020.png");
  //background-image: url("https://1.bp.blogspot.com/-FNjD_efIqhs/XkWKmYGhSaI/AAAAAAAAk9c/NIn8-IPppVMqkJMrilQYGwydAOV-2G2DQCLcBGAsYHQ/s1600/IMG_3008.png");
  //background: url("https://1.bp.blogspot.com/-PabyVfPipwc/XkgiDH7kEeI/AAAAAAAAk-s/0h4VxPkZop4YxwCVnkTpL6tPRj-NGLzKACPcBGAYYCw/s1600/IMG_3008.jpg");
  //background: url("https://1.bp.blogspot.com/-95ZFJC9lK2o/XwVpV7pnp7I/AAAAAAAAm3w/H6GlrFRJf1cd-WfgGR30fkL1u17N6mBXgCLcBGAsYHQ/s1600/CATDP-bg-Loire.jpg");
  background-size: cover;
  }
</style>
<style>
.img-foreground {
  position: absolute;
  top: 100px;
  //left: 10%;
  left: 0;
  width: 20%;
  max-width: 300px;
  //height: 100%;
  //pointer-events: none;
  cursor:pointer;
}
.img-foreground {
  background-color: white;
  animation-name: stretch;
  animation-duration: 5.0s; 
  //animation-timing-function: ease-out; 
  animation-delay: 0;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-fill-mode: none;
  animation-play-state: running;
}

@keyframes stretch {
  0% {
    transform: scale(.0);
    //background-color: red;
    border-radius: 100%;
  }
  10% {
    transform: scale(.2);
    border-radius: 0%;
    //background-color: orange;
  }
  100% {
    transform: scale(1.);
    //transform: scale(0.8);
    //background-color: yellow;
  }
}
.blog-name.container {
    margin: 0;
    padding: 0;
}
/*.centered-top-container {
    min-height: 350px;
    //max-height: 350px;
}*/
</style>
<script>
$(document).ready(function() {
  hasMultipleTitle();
  
  hasShareBan();
  $('.articleComplet .post-share-buttons-conteneurFlex').css('background-color','#828131')

  if (window.location.pathname == '/') {
    $('.header-widget').html("<h1 style='z-index: 10'>C’est au Tour(s) du Peuple !<br/></h1>");
    $('.page_body').append('<div class="img-foreground"><div id="ACCEUIL-AlaUne"></div></div>');
  }

Promise.all([
  load.js('https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/AlaUneFB4.js'),
]).then(
  function() {
    console.log('Everything has loaded!');
    //if (window.location.pathname == '/') $('.header-widget').css('visibility', 'hidden')
    $('.subscribe-button.pill-button').addClass('styled')
    $('#ACCEUIL-AlaUne').AlaUneFB4({
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoxy5HfyIvyiDVF9w5jXQCCcwDvGv13PlHd39a7Xknu5MULgzRNwBIqCPyCX0XGDqpb85624fLe-MpzcA6gqwnX0GW1RuQpaN8-zjfr7AD6ttH4UEqWjGOyNiYGAf8bz1dNFBPpeaAx8CBOlLMNRaDWNtPu6udB3sf-Rnik9k0taCd6XIXSSX5drI619Y/s1600/tract-image-loi%20immigration.png",
      fancyClass: {
        //baseClass: 'demain20200923AlaUneBaseClass',
        baseClass: 'articleFancyClass',
      },
      //fancyClass: "defaultInline",
      href: [/*{
          dataType: "inline",
          dataSrc: '<div style="font-size: 24px; line-height: 150%; margin-top: 2em;"> \
<ul> \
<li>pour des moyens en effectifs et des financements à la hauteur des besoins de la population,</li> \
<li>pour les 183€ pour toutes et tous et la revalorisation des grilles salariales pour toutes et tous sans barrage,</li> \
<li>pour le maintien et l&#39;amélioration des conventions collectives,</li> \
<li>non a la marchandisation de la santé, du social et du médicosocial</li> \
</ul> \
<p style="color: red; text-align: center; font-size: 42px; line-height: 150%;"><b>mardi 15 juin à 14h30<br />Devant l’ARS</b>.</p> \
<p style="color: red; text-align: center; font-size: 24px; line-height: 120%;">(Agence Régionale de Santé)<br />Champs Girault, Rue Edouard Vaillant, à Tours.</p> \
<p style="text-align: center;">À 13h, une AG de la psychiatrie aura lieu devant l&#39;ARS.</p> \
</div>'
        },*/
        {
          dataType: "images",
          dataSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoxy5HfyIvyiDVF9w5jXQCCcwDvGv13PlHd39a7Xknu5MULgzRNwBIqCPyCX0XGDqpb85624fLe-MpzcA6gqwnX0GW1RuQpaN8-zjfr7AD6ttH4UEqWjGOyNiYGAf8bz1dNFBPpeaAx8CBOlLMNRaDWNtPu6udB3sf-Rnik9k0taCd6XIXSSX5drI619Y/s1600/tract-image-loi%20immigration.png"
        },
        /*{
          dataType: "iframe",
          dataThumb: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXW6u39vwpYVRChSyYAIw_oXfM6k54kac6I2WFiwytgmEyrVA-zGvfdyVQmD50vsjij4dtSKRSr82YQBHY1iZcrgP0MrCYzogI0nFUdnuT_sOubwYrkbvlTPVgkRCF0HR9ngYrRWvxqJI6gYSh1rTNLYrEIdkEUgKKzpMHxcZQFjRr4Ke9NC4VCUpG/s1600/thumb-pdf.jpg",
          dataSrc: "https://philquand.github.io/Javascript/Blog-widgets/Collectif%20Sant%C3%A9%2037/articles%20pdf/appel%20unitaire%20national%20semaine%207%20avril.pdf"
        },
        {
          dataType: "video",
          //dataSrc: "https://www.youtube.com/watch?v=MfMWY6AgJ0I&amp;autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0"
          dataSrc: "https://www.youtube.com/watch?v=MfMWY6AgJ0I&amp;rel=0&amp;controls=0&amp;showinfo=0"
        },*/
      ]
    });
  }).catch(function() {
  console.log('Oh no, epic failure!');
});

  hasMultipleTitle();

});
</script>
<style>
.demain20200923AlaUneBaseClass  .fancybox-slide.fancybox-slide--iframe .fancybox-content {
    max-width: calc(100% - 80px);
    max-height: 180px;
    overflow: visible;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 40px;
}
</style>