(function($) {

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
      divReports.append('<p>Pour télécharger nos rapports d' + "'" + 'activité :</p><div style="display: flex; flex-wrap: wrap;"><a href="https://philquand.github.io/Javascript/Blog-widgets/CATDP/RapportsAct/Rapport-1.pdf"><img class="iFrameGalleryIMG" src="https://1.bp.blogspot.com/-zjupOB2LaFM/XVww7Td7rYI/AAAAAAAAjz8/u8JbzXgqz3sNss-B71sXFtMiQzbF5HzNwCLcBGAs/s1600/icon-png%2Bv3%2BRap1%2Bv2.png"></a><br><a href="https://philquand.github.io/Javascript/Blog-widgets/CATDP/RapportsAct/Rapport-2.pdf"><img class="iFrameGalleryIMG" src="https://1.bp.blogspot.com/-pufN_Ora744/XVww7VaF1BI/AAAAAAAAjz4/1TiVFHF1Cs0WC-Cw-7nO4g22qGq-mQ4-ACLcBGAs/s1600/icon-png%2Bv3%2BRap2%2Bv2.png"></a><br><a href="https://philquand.github.io/Javascript/Blog-widgets/CATDP/RapportsAct/Rapport-3.pdf"><img class="iFrameGalleryIMG" src="https://1.bp.blogspot.com/-I-YrJQ5e2X0/XVww7TBRw7I/AAAAAAAAj0A/MrzFMGimSo00jeA9dyLxCKQyhuztGyWcgCLcBGAs/s1600/icon-png%2Bv3%2BRap3%2Bv2.png"></a><br>')
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

})(jQuery);