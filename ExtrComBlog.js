/**
Permet d'extraire les commentaires d'un blog pour utilisation dans un article
code d'accès:
**/
function showrecentcomments(json) {
  for (var i = 0; i < json.feed.entry.length; i++) {
    var b_rc = json.feed.entry[i];
    var c_rc = "undefined";
    //if (i == json.feed.entry.length) break;
    for (var k = 0; k < b_rc.link.length; k++) {
      if (b_rc.link[k].rel == 'alternate') {
        c_rc = b_rc.link[k].href;
        break;
      }
    }
    if( c_rc == "undefined") continue;
    var c_rc_edit; 
    if (b_rc.author[0].uri) {
        c_rc_edit = b_rc.author[0].uri.$t;
    } else {
        c_rc_edit = "undefined";
    }
    //c_rc_sup = c_rc_sup.split("/");
    //c_rc_sup = "https://www.blogger.com/comment.g?blogID=" + c_rc_sup[4] + "&postID=" + c_rc_sup[5] + "#c" + c_rc_sup[8] 
    c_rc = c_rc.replace("#", "#comment-");
    var d_rc = c_rc.split("#");
    d_rc = d_rc[0];
    var e_rc = d_rc.split("/");
    e_rc = e_rc[5];
    e_rc = e_rc.split(".html");
    e_rc = e_rc[0];
    var f_rc = e_rc.replace(/-/g, " ");
    var if_rc = f_rc.lastIndexOf(if_page)
    if (if_rc > -1) {
      f_rc = f_rc.link(d_rc);
      var g_rc = b_rc.published.$t;
      var h_rc = g_rc.substring(0, 4);
      var i_rc = g_rc.substring(5, 7);
      var j_rc = g_rc.substring(8, 10);
      var k_rc = new Array();
      k_rc[1] = ".1";
      k_rc[2] = ".2";
      k_rc[3] = ".3";
      k_rc[4] = ".4";
      k_rc[5] = ".5";
      k_rc[6] = ".6";
      k_rc[7] = ".7";
      k_rc[8] = ".8";
      k_rc[9] = ".9";
      k_rc[10] = ".10";
      k_rc[11] = ".11";
      k_rc[12] = ".12";
      if ("content" in b_rc) {
        var l_rc = b_rc.content.$t;
      }
      else if ("summary" in b_rc) {
        var l_rc = b_rc.summary.$t;
      }
      else var l_rc = "";
      var re = /<\S[^>]*>/g;
      l_rc = l_rc.replace(re, "");
      g_rc = g_rc.split(".");
      g_rc = g_rc[0];
      document.write('<div style="display: block; width: 100%; text-align: center; padding:5px 0px;border-bottom:black dotted 1px; transform-origin: -' + tr_origin + '% 10%" onMouseOver="onMouseOverFunction(this)" onMouseOut="onMouseOutFunction(this)" id="Comment_' + g_rc + '">');
      document.write('<div style="text-align: left;" >');
      if (aff_date == true) document.write('Le ' + j_rc + k_rc[parseInt(i_rc, 10)] + ' ');
      //document.write('<a href="' + c_rc + '">' + b_rc.author[0].name.$t + '</a> a &#233;crit');
      if( c_rc_edit != "undefined") {
        document.write('<a href="' + c_rc_edit + '">' + b_rc.author[0].name.$t + '</a> a &#233;crit');
      } else {
       document.write('<span style="color: #0433ff;">' + b_rc.author[0].name.$t + '</span> a &#233;crit');
      }
      //if (aff_nom_mess == true) document.write(' sur ' + f_rc + " : ");
      document.write(" : ");
      document.write('<i>');
      l_rc = l_rc.substring(0, long_resum);
      //var p_rc = f_rc.lastIndexOf(" ");
      //l_rc = l_rc.substring(0, p_rc);
      document.write(l_rc + '</i></div>');
      if( btn_theme != "undefined") document.write('<div class="likebtn-wrapper" data-lang="fr" data-popup_disabled="true" data-theme="' + btn_theme + '" data-dislike_enabled="false" data-white_label="true" data-identifier="Comment_' + g_rc + '" /></div>');
      document.write('</div>');    
    };
  };
}
