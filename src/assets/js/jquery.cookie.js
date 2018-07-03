/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as anonymous module.
    define(['jquery'], factory);
  } else {
    // Browser globals.
    factory(jQuery);
  }
}(function ($) {

  var pluses = /\+/g;

  function raw(s) {
    return s;
  }

  function decoded(s) {
    return decodeURIComponent(s.replace(pluses, ' '));
  }

  function converted(s) {
    if (s.indexOf('"') === 0) {
      // This is a quoted cookie as according to RFC2068, unescape
      s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    }
    try {
      return config.json ? JSON.parse(s) : s;
    } catch (er) {}
  }

  var config = $.cookie = function (key, value, options) {

    // write
    if (value !== undefined) {
      options = $.extend({}, config.defaults, options);

      if (typeof options.expires === 'number') {
        var days = options.expires,
          t = options.expires = new Date();
        t.setDate(t.getDate() + days);
      }

      value = config.json ? JSON.stringify(value) : String(value);

      return (document.cookie = [
        config.raw ? key : encodeURIComponent(key),
        '=',
        config.raw ? value : encodeURIComponent(value),
        options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
        options.path ? '; path=' + options.path : '',
        options.domain ? '; domain=' + options.domain : '',
        options.secure ? '; secure' : ''
      ].join(''));
    }

    // read
    var decode = config.raw ? raw : decoded;
    var cookies = document.cookie.split('; ');
    var result = key ? undefined : {};
    for (var i = 0, l = cookies.length; i < l; i++) {
      var parts = cookies[i].split('=');
      var name = decode(parts.shift());
      var cookie = decode(parts.join('='));

      if (key && key === name) {
        result = converted(cookie);
        break;
      }

      if (!key) {
        result[name] = converted(cookie);
      }
    }

    return result;
  };

  config.defaults = {};

  $.removeCookie = function (key, options) {
    if ($.cookie(key) !== undefined) {
      // Must not alter options, thus extending a fresh object...
      $.cookie(key, '', $.extend({}, options, {
        expires: -1
      }));
      return true;
    }
    return false;
  };

}));


$(function () {
  var default_view = 'grid'; // choose the view to show by default (grid/list)

  // check the presence of the cookie, if not create "view" cookie with the default view value
  if ($.cookie('view') !== 'undefined') {
    $.cookie('view', default_view, {
      expires: 7,
      path: '/'
    });
  }

  function get_grid() {
    $('.list').removeClass('list-active');
    $('.grid').addClass('grid-active');
    $('.prod-cnt').animate({
      opacity: 0
    }, function () {
      $('.prod-cnt').removeClass('prod-box-list');
      $('.prod-cnt').addClass('prod-box');
      $('.prod-cnt').stop().animate({
        opacity: 1
      });
    });
  } // end "get_grid" function
  function get_list() {
    $('.grid').removeClass('grid-active');
    $('.list').addClass('list-active');
    $('.prod-cnt').animate({
      opacity: 0
    }, function () {
      $('.prod-cnt').removeClass('prod-box');
      $('.prod-cnt').addClass('prod-box-list');
      $('.prod-cnt').stop().animate({
        opacity: 1
      });
    });
  } // end "get_list" function

  if ($.cookie('view') == 'list') {
    // we dont use the "get_list" function here to avoid the animation
    $('.grid').removeClass('grid-active');
    $('.list').addClass('list-active');
    $('.prod-cnt').animate({
      opacity: 0
    });
    $('.prod-cnt').removeClass('prod-box');
    $('.prod-cnt').addClass('prod-box-list');
    $('.prod-cnt').stop().animate({
      opacity: 1
    });
  }

  if ($.cookie('view') == 'grid') {
    $('.list').removeClass('list-active');
    $('.grid').addClass('grid-active');
    $('.prod-cnt').animate({
      opacity: 0
    });
    $('.prod-cnt').removeClass('prod-box-list');
    $('.prod-cnt').addClass('prod-box');
    $('.prod-cnt').stop().animate({
      opacity: 1
    });
  }

  $('#list').click(function () {
    $.cookie('view', 'list');
    get_list()
  });

  $('#grid').click(function () {
    $.cookie('view', 'grid');
    get_grid();
  });

  $('#list01').click(function () {
    $.cookie('view', 'list');
    get_list()
  });

  $('#grid01').click(function () {
    $.cookie('view', 'grid');
    get_grid();
  });

  /* filter */
  $('.category-menu ul li').click(function () {
    var CategoryID = $(this).attr('category');
    $('.category-menu ul li').removeClass('cat-active');
    $(this).addClass('cat-active');

    $('.prod-cnt').each(function () {
      if (($(this).hasClass(CategoryID)) == false) {
        $(this).css({
          'display': 'none'
        });
      };
    });
    $('.' + CategoryID).fadeIn();

  });
});
