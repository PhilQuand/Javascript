(function($) {
  $.fn.iFrameGallery = function(options) {

    if (typeof options !== 'undefined' && typeof options.archi !== 'undefined' && options.archi.length > 0) {

      var indexInlineHTML = 0;
      var divLinkID = 'none';
      var divCont;
      if (options.accessmode == 'linkID') {
        var divLinkID = $('#linkID').clone();
        $(this).append(divLinkID);
        $('#linkID').removeAttr('id');
      }
      var divArchi = $('<div id="divArchi" style="display: flex; flex-wrap: wrap;"></div>');
      $(this).append(divArchi);

      for (i = 0; i < options.archi.length; i++) {
      
        var svgID = options.archi[i].svgID;
        var svgInfos = options.archi[i].svgInfos;
        var idG = options.archi[i].idG;
        var idGtyp = options.archi[i].idGtyp;
        var idGlinkID = options.archi[i].idGlinkID;
        var idGExt = options.archi[i].idGExt;
        var pdfLink = options.archi[i].pdfLink;
        var inlineProgram = options.archi[i].inlineProgram;
        if (typeof inlineProgram === 'undefined') inlineProgram = 'inlineProgram';
        
        if (idG.split("id=").length > 1) {
          idG = idG.split("id=")[1];
          idG = "https://docs.google.com/file/d/" + idG + "/preview"
        }
        else if (idG.split("file/d/").length > 1) {
          idG = idG.split("file/d/")[1];
          idG = idG.split("/view")[0];
          idG = "https://docs.google.com/file/d/" + idG + "/preview"
        }
        addInfos(svgID, svgInfos, idG, idGtyp, idGlinkID, idGExt, pdfLink, divArchi, divLinkID, inlineProgram);
      }

    }

    function addInfos(svgID, svgInfos, idG, idGtyp, idGlinkID, idGExt, pdfLink, divArchi, divLinkID, inlineProgram) {
      if (typeof svgID !== 'undefined') {
        var svgTemp = $("#" + svgID).html();
        svgTemp = $('<svg width="100%" height="100%" viewBox="0 0 400 400" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">' + svgTemp + '</svg>');
      }
      else {
        var svgTemp = $('<svg width="100%" height="100%" viewBox="0 0 400 400" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><rect x="10" y="10" width="100%" height="100%" stroke="blue" fill="#A2C4C9" stroke-opacity="1.0" fill-opacity="0.8"/> <g transform="matrix(0.622762,0,0,0.695394,-73.9671,-168.06)"> <text x="187.961px" y="471px" style="' + "font-family:'ArialMT', 'Arial', sans-serif;font-size:96px;fill:rgb(244,60,61);" + '" id="l1"></text> <text x="310.68px" y="549.099px" style="' + "font-family:'ArialMT', 'Arial', sans-serif;font-size:64px;fill:rgb(244,60,61);" + '" id="l2"></text> <text x="319.57px" y="615.193px" style="' + "font-family:'ArialMT', 'Arial', sans-serif;font-size:64px;fill:rgb(244,60,61);" + '" id="l3"></text> <text x="372.945px" y="693.292px" style="' + "font-family:'ArialMT', 'Arial', sans-serif;font-size:64px;fill:rgb(244,60,61);" + '" id="l4"></text> </g></svg>');
      }
      for (var i = 0; i < svgInfos.length; i++) {
        svgTemp.find('#l' + (i + 1).toString()).html(svgInfos[i]);
      }
      //divArchi.append(svgTemp, '<br/>');
      var svgInfosstr = svgTemp.get(0).outerHTML;
      //divArchi.append('<p>' + svgInfosstr + '</p>')
      var svgInfosbase64r = base64.encode(svgInfosstr);
      //divArchi.append('<p>' + svgInfosbase64r + '</p>')

      var imgBase64 = 'data:image/svg+xml;base64,' + svgInfosbase64r;
      if (idGtyp == 'inlined') {
        if (indexInlineHTML == 0) divCont = $('<div id="contInlineHTML"></div>').insertAfter(divArchi);
        idG = inlineHTML(idG, divCont, pdfLink);
      }
      var inputLink = linkBuild(idG, inlineProgram, imgBase64);
      if (typeof idGExt !== 'undefined') {
        var innerLink = inputLink.clone();
        divArchi.append(innerLink);
        innerLink.wrap('<div style="display: none"></div>');
        inputLink = $('<a href="' + idGExt + '">' + inputLink.html() + '</a>');
      }
      if (divLinkID != 'none') {
        var IDlink = divLinkID.find('#' + idGlinkID);
        if (IDlink.length > 0) {
          inputLink.html(IDlink.html());
          IDlink.html('');
          IDlink.append(inputLink);
        }
        else {
          inputLink.insertBefore(divArchi);
          inputLink.wrap('<div style="display: none"></div>')
        }
      }
      else {
        divArchi.append(inputLink, '<br/>')
      }
      if (idGtyp != 'inlined' && idG[0] == '#') {
        var inpLinkidG = $(idG);
        var divLinkidG = inpLinkidG.clone();
        divArchi.append(divLinkidG);
        inpLinkidG.removeAttr('id');
        if (typeof idGlinkID === 'undefined') divLinkidG.wrap('<div style="display: none"></div>')
      }

      function linkBuild(idG, inlineProgram, imgBase64) {
        if (idG[0] != '#') var myLink = $('<a class="data-fancybox-inline" data-fancybox="' + inlineProgram + '"  data-type="iframe" data-src="' + idG + '" href="javascript:;" data-thumb=' + "'" + '&#39;' + imgBase64 + '&#39;' + "'" + '><img class="iFrameGalleryIMG" src="' + imgBase64 + '" /></a>')
        else {
          var myLink = $('<a class="data-fancybox-inline" data-fancybox="' + inlineProgram + '"  data-type="inline" data-src="' + idG + '" href="javascript:;" data-thumb=' + "'" + '&#39;' + imgBase64 + '&#39;' + "'" + '><img class="iFrameGalleryIMG" src="' + imgBase64 + '" /></a>');
        }
        return myLink;
      }

      function inlineHTML(idG, divCont, pdfLink) {
        indexInlineHTML++;
        var article = 'article-' + indexInlineHTML;
        var result = getMyInnerLinkContent(idG);
        var title = $.trim(result.title.html());
        var pdfImage = "https://1.bp.blogspot.com/-TI4G_l6BEOc/XSdAHVMoDPI/AAAAAAAAjck/DBWbre-z2mk3QLeZ1xUwUsJO4ofxFjURwCLcBGAs/s1600/pdf%2Bicon.jpg";
        var item = $('<div class="incrustation articleFancy" id="' + article + '" ></div>').append(
          $('<div class="incrustation fontFancy"></div>').append(
            $('<center></center>').append(
              $('<a class="pdfref" href="' + pdfLink + '"><img style="float: right; width: 40px;" border="0" data-original-height="122" data-original-width="98" src="' + pdfImage + '" /></a>'), $('<div class="titreFancy" ></div>')
            ), $('<div class="corpsFancy" ></div>')
          )
        );

        item.find('.titreFancy').html(title);
        item.find('.corpsFancy').append(result.body);
        item.find('.fancyNotInlined').css('display', 'none');
        divCont.append(item);
        return '#' + article;
      }
    }
  };
  /**
   * Plugin default options
   */
  $.fn.iFrameGallery.defaults = {
    accessmode: ''
  };
})(jQuery);
/*
 * [hi-base64]{@link https://github.com/emn178/hi-base64}
 *
 * @version 0.2.1
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
/*jslint bitwise: true */
(function ($) {
  'use strict';

  var root = typeof window === 'object' ? window : {};
  var NODE_JS = !root.HI_BASE64_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = global;
  }
  var COMMON_JS = !root.HI_BASE64_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var AMD = typeof define === 'function' && define.amd;
  var BASE64_ENCODE_CHAR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
  var BASE64_DECODE_CHAR = {
    'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 7, 'I': 8,
    'J': 9, 'K': 10, 'L': 11, 'M': 12, 'N': 13, 'O': 14, 'P': 15, 'Q': 16, 
    'R': 17, 'S': 18, 'T': 19, 'U': 20, 'V': 21, 'W': 22, 'X': 23, 'Y': 24, 
    'Z': 25, 'a': 26, 'b': 27, 'c': 28, 'd': 29, 'e': 30, 'f': 31, 'g': 32, 
    'h': 33, 'i': 34, 'j': 35, 'k': 36, 'l': 37, 'm': 38, 'n': 39, 'o': 40, 
    'p': 41, 'q': 42, 'r': 43, 's': 44, 't': 45, 'u': 46, 'v': 47, 'w': 48, 
    'x': 49, 'y': 50, 'z': 51, '0': 52, '1': 53, '2': 54, '3': 55, '4': 56, 
    '5': 57, '6': 58, '7': 59, '8': 60, '9': 61, '+': 62, '/': 63, '-': 62,
    '_': 63
  };

  var utf8ToBytes = function (str) {
    var bytes = [];
    for (var i = 0; i < str.length; i++) {
      var c = str.charCodeAt(i);
      if (c < 0x80) {
        bytes[bytes.length] = c;
      } else if (c < 0x800) {
        bytes[bytes.length] = 0xc0 | (c >> 6);
        bytes[bytes.length] = 0x80 | (c & 0x3f);
      } else if (c < 0xd800 || c >= 0xe000) {
        bytes[bytes.length] = 0xe0 | (c >> 12);
        bytes[bytes.length] = 0x80 | ((c >> 6) & 0x3f);
        bytes[bytes.length] = 0x80 | (c & 0x3f);
      } else {
        c = 0x10000 + (((c & 0x3ff) << 10) | (str.charCodeAt(++i) & 0x3ff));
        bytes[bytes.length] = 0xf0 | (c >> 18);
        bytes[bytes.length] = 0x80 | ((c >> 12) & 0x3f);
        bytes[bytes.length] = 0x80 | ((c >> 6) & 0x3f);
        bytes[bytes.length] = 0x80 | (c & 0x3f);
      }
    }
    return bytes;
  };

  var decodeAsBytes = function (base64Str) {
    var v1, v2, v3, v4, bytes = [], index = 0, length = base64Str.length;
    if (base64Str.charAt(length - 2) === '=') {
      length -= 2;
    } else if (base64Str.charAt(length - 1) === '=') {
      length -= 1;
    }

    // 4 char to 3 bytes
    for (var i = 0, count = length >> 2 << 2; i < count;) {
      v1 = BASE64_DECODE_CHAR[base64Str.charAt(i++)];
      v2 = BASE64_DECODE_CHAR[base64Str.charAt(i++)];
      v3 = BASE64_DECODE_CHAR[base64Str.charAt(i++)];
      v4 = BASE64_DECODE_CHAR[base64Str.charAt(i++)];
      bytes[index++] = (v1 << 2 | v2 >>> 4) & 255;
      bytes[index++] = (v2 << 4 | v3 >>> 2) & 255;
      bytes[index++] = (v3 << 6 | v4) & 255;
    }

    // remain bytes
    var remain = length - count;
    if (remain === 2) {
      v1 = BASE64_DECODE_CHAR[base64Str.charAt(i++)];
      v2 = BASE64_DECODE_CHAR[base64Str.charAt(i++)];
      bytes[index++] = (v1 << 2 | v2 >>> 4) & 255;
    } else if (remain === 3) {
      v1 = BASE64_DECODE_CHAR[base64Str.charAt(i++)];
      v2 = BASE64_DECODE_CHAR[base64Str.charAt(i++)];
      v3 = BASE64_DECODE_CHAR[base64Str.charAt(i++)];
      bytes[index++] = (v1 << 2 | v2 >>> 4) & 255;
      bytes[index++] = (v2 << 4 | v3 >>> 2) & 255;
    }
    return bytes;
  };

  var encodeFromBytes = function (bytes) {
    var v1, v2, v3, base64Str = '', length = bytes.length;
    for (var i = 0, count = parseInt(length / 3) * 3; i < count;) {
      v1 = bytes[i++];
      v2 = bytes[i++];
      v3 = bytes[i++];
      base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] +
        BASE64_ENCODE_CHAR[(v1 << 4 | v2 >>> 4) & 63] +
        BASE64_ENCODE_CHAR[(v2 << 2 | v3 >>> 6) & 63] +
        BASE64_ENCODE_CHAR[v3 & 63];
    }
    
    // remain char
    var remain = length - count;
    if (remain === 1) {
      v1 = bytes[i];
      base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] +
        BASE64_ENCODE_CHAR[(v1 << 4) & 63] +
        '==';
    } else if (remain === 2) {
      v1 = bytes[i++];
      v2 = bytes[i];
      base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] +
        BASE64_ENCODE_CHAR[(v1 << 4 | v2 >>> 4) & 63] +
        BASE64_ENCODE_CHAR[(v2 << 2) & 63] +
        '=';
    }
    return base64Str;
  };

  var btoa = root.btoa, atob = root.atob, utf8Base64Encode, utf8Base64Decode;
  if (NODE_JS) {
    var Buffer = require('buffer').Buffer;
    btoa = function (str) {
      return new Buffer(str, 'ascii').toString('base64');
    };

    utf8Base64Encode = function (str) {
      return new Buffer(str).toString('base64');
    };

    encodeFromBytes = utf8Base64Encode;

    atob = function (base64Str) {
      return new Buffer(base64Str, 'base64').toString('ascii');
    };

    utf8Base64Decode = function (base64Str) {
      return new Buffer(base64Str, 'base64').toString();
    };
  } else if (!btoa) {
    btoa = function (str) {
      var v1, v2, v3, base64Str = '', length = str.length;
      for (var i = 0, count = parseInt(length / 3) * 3; i < count;) {
        v1 = str.charCodeAt(i++);
        v2 = str.charCodeAt(i++);
        v3 = str.charCodeAt(i++);
        base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] +
          BASE64_ENCODE_CHAR[(v1 << 4 | v2 >>> 4) & 63] +
          BASE64_ENCODE_CHAR[(v2 << 2 | v3 >>> 6) & 63] +
          BASE64_ENCODE_CHAR[v3 & 63];
      }
      
      // remain char
      var remain = length - count;
      if (remain === 1) {
        v1 = str.charCodeAt(i);
        base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] +
          BASE64_ENCODE_CHAR[(v1 << 4) & 63] +
          '==';
      } else if (remain === 2) {
        v1 = str.charCodeAt(i++);
        v2 = str.charCodeAt(i);
        base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] +
          BASE64_ENCODE_CHAR[(v1 << 4 | v2 >>> 4) & 63] +
          BASE64_ENCODE_CHAR[(v2 << 2) & 63] +
          '=';
      }
      return base64Str;
    };

    utf8Base64Encode = function (str) {
      var v1, v2, v3, base64Str = '', bytes = utf8ToBytes(str), length = bytes.length;
      for (var i = 0, count = parseInt(length / 3) * 3; i < count;) {
        v1 = bytes[i++];
        v2 = bytes[i++];
        v3 = bytes[i++];
        base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] +
          BASE64_ENCODE_CHAR[(v1 << 4 | v2 >>> 4) & 63] +
          BASE64_ENCODE_CHAR[(v2 << 2 | v3 >>> 6) & 63] +
          BASE64_ENCODE_CHAR[v3 & 63];
      }
      
      // remain char
      var remain = length - count;
      if (remain === 1) {
        v1 = bytes[i];
        base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] +
          BASE64_ENCODE_CHAR[(v1 << 4) & 63] +
          '==';
      } else if (remain === 2) {
        v1 = bytes[i++];
        v2 = bytes[i];
        base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] +
          BASE64_ENCODE_CHAR[(v1 << 4 | v2 >>> 4) & 63] +
          BASE64_ENCODE_CHAR[(v2 << 2) & 63] +
          '=';
      }
      return base64Str;
    };

    atob = function (base64Str) {
      var v1, v2, v3, v4, str = '', length = base64Str.length;
      if (base64Str.charAt(length - 2) === '=') {
        length -= 2;
      } else if (base64Str.charAt(length - 1) === '=') {
        length -= 1;
      }

      // 4 char to 3 bytes
      for (var i = 0, count = length >> 2 << 2; i < count;) {
        v1 = BASE64_DECODE_CHAR[base64Str.charAt(i++)];
        v2 = BASE64_DECODE_CHAR[base64Str.charAt(i++)];
        v3 = BASE64_DECODE_CHAR[base64Str.charAt(i++)];
        v4 = BASE64_DECODE_CHAR[base64Str.charAt(i++)];
        str += String.fromCharCode((v1 << 2 | v2 >>> 4) & 255) +
          String.fromCharCode((v2 << 4 | v3 >>> 2) & 255) +
          String.fromCharCode((v3 << 6 | v4) & 255);
      }

      // remain bytes
      var remain = length - count;
      if (remain === 2) {
        v1 = BASE64_DECODE_CHAR[base64Str.charAt(i++)];
        v2 = BASE64_DECODE_CHAR[base64Str.charAt(i++)];
        str += String.fromCharCode((v1 << 2 | v2 >>> 4) & 255);
      } else if (remain === 3) {
        v1 = BASE64_DECODE_CHAR[base64Str.charAt(i++)];
        v2 = BASE64_DECODE_CHAR[base64Str.charAt(i++)];
        v3 = BASE64_DECODE_CHAR[base64Str.charAt(i++)];
        str += String.fromCharCode((v1 << 2 | v2 >>> 4) & 255) +
               String.fromCharCode((v2 << 4 | v3 >>> 2) & 255);
      }
      return str;
    };

    utf8Base64Decode = function (base64Str) {
      var str = '', bytes = decodeAsBytes(base64Str), length = bytes.length;
      var i = 0, followingChars = 0, b, c;
      while (i < length) {
        b = bytes[i++];
        if (b <= 0x7F) {
          str += String.fromCharCode(b);
          continue;
        } else if (b > 0xBF && b <= 0xDF) {
          c = b & 0x1F;
          followingChars = 1;
        } else if (b <= 0xEF) {
          c = b & 0x0F;
          followingChars = 2;
        } else if (b <= 0xF7) {
          c = b & 0x07;
          followingChars = 3;
        } else {
          throw 'not a UTF-8 string';
        }

        for (var j = 0; j < followingChars; ++j) {
          b = bytes[i++];
          if (b < 0x80 || b > 0xBF) {
            throw 'not a UTF-8 string';
          }
          c <<= 6;
          c += b & 0x3F;
        }
        if (c >= 0xD800 && c <= 0xDFFF) {
          throw 'not a UTF-8 string';
        }
        if (c > 0x10FFFF) {
          throw 'not a UTF-8 string';
        }

        if (c <= 0xFFFF) {
          str += String.fromCharCode(c);
        } else {
          c -= 0x10000;
          str += String.fromCharCode((c >> 10) + 0xD800);
          str += String.fromCharCode((c & 0x3FF) + 0xDC00);
        }
      }
      return str;
    };
  } else {
    utf8Base64Encode = function (str) {
      var result = '';
      for (var i = 0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) {
          result += String.fromCharCode(charcode);
        } else if (charcode < 0x800) {
          result += String.fromCharCode(0xc0 | (charcode >> 6)) +
            String.fromCharCode(0x80 | (charcode & 0x3f));
        } else if (charcode < 0xd800 || charcode >= 0xe000) {
          result += String.fromCharCode(0xe0 | (charcode >> 12)) +
            String.fromCharCode(0x80 | ((charcode >> 6) & 0x3f)) +
            String.fromCharCode(0x80 | (charcode & 0x3f));
        } else {
          charcode = 0x10000 + (((charcode & 0x3ff) << 10) | (str.charCodeAt(++i) & 0x3ff));
          result += String.fromCharCode(0xf0 | (charcode >> 18)) +
            String.fromCharCode(0x80 | ((charcode >> 12) & 0x3f)) +
            String.fromCharCode(0x80 | ((charcode >> 6) & 0x3f)) +
            String.fromCharCode(0x80 | (charcode & 0x3f));
        }
      }
      return btoa(result);
    };

    utf8Base64Decode = function (base64Str) {
      var tmpStr = atob(base64Str.trim('=').replace(/-/g, '+').replace(/_/g, '/'));
      if (!/[^\x00-\x7F]/.test(tmpStr)) {
        return tmpStr;
      }
      var str = '', i = 0, length = tmpStr.length, followingChars = 0, b, c;
      while (i < length) {
        b = tmpStr.charCodeAt(i++);
        if (b <= 0x7F) {
          str += String.fromCharCode(b);
          continue;
        } else if (b > 0xBF && b <= 0xDF) {
          c = b & 0x1F;
          followingChars = 1;
        } else if (b <= 0xEF) {
          c = b & 0x0F;
          followingChars = 2;
        } else if (b <= 0xF7) {
          c = b & 0x07;
          followingChars = 3;
        } else {
          throw 'not a UTF-8 string';
        }

        for (var j = 0; j < followingChars; ++j) {
          b = tmpStr.charCodeAt(i++);
          if (b < 0x80 || b > 0xBF) {
            throw 'not a UTF-8 string';
          }
          c <<= 6;
          c += b & 0x3F;
        }
        if (c >= 0xD800 && c <= 0xDFFF) {
          throw 'not a UTF-8 string'; 
        }
        if (c > 0x10FFFF) {
          throw 'not a UTF-8 string';
        }

        if (c <= 0xFFFF) {
          str += String.fromCharCode(c);
        } else {
          c -= 0x10000;
          str += String.fromCharCode((c >> 10) + 0xD800);
          str += String.fromCharCode((c & 0x3FF) + 0xDC00);
        }
      }
      return str;
    };
  }
  
  var encode = function (str, asciiOnly) {
    var notString = typeof(str) != 'string';
    if (notString && str.constructor === root.ArrayBuffer) {
      str = new Uint8Array(str);
    }
    if (notString) {
      return encodeFromBytes(str);
    } else {
      if (!asciiOnly && /[^\x00-\x7F]/.test(str)) {
        return utf8Base64Encode(str);
      } else {
        return btoa(str);
      }
    }
  };

  jQuery.fn.extend({
    svgtobase64: function () {
      var svgInfosstr = $(this).get(0).outerHTML;
      var svgInfosbase64r = base64.encode(svgInfosstr);
      var imgBase64 = 'data:image/svg+xml;base64,' + svgInfosbase64r;
      return imgBase64;
    }
  });

  var decode = function (base64Str, asciiOnly) {
    return asciiOnly ? atob(base64Str) : utf8Base64Decode(base64Str);
  };

  var exports = {
    encode: encode,
    decode: decode,
    atob: atob,
    btoa: btoa
  };
  decode.bytes = decodeAsBytes;
  decode.string = decode;

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    root.base64 = exports;
    if(AMD) {
      define(function() {
        return exports;
      });
    }
  }
})(jQuery);