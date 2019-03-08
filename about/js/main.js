$(function () {

    // todo 點擊nav裡的連結能有順暢的滾動效果
    //
    $('.scroll-btn').bind('click', function (event) {
        var $anchor = $(this);
        var $scrollTarget = $($anchor.attr('href'));

        $('html, body').stop().animate({
            scrollTop: ($scrollTarget.offset().top - 50)
        }, 1000, 'easeInOutExpo');

        event.preventDefault;
    })



    // note 偵測滾動的事件處理
    //
    // 當視窗在滾動時，執行...
    $(window).scroll(function () {
        // 把目前視窗的滾動位移值存在變數scrollHeight中
        var scrollHeight = $(window).scrollTop();

        // 如果滾動位移的數值大於等於50
        if (scrollHeight >= 50) {
            // nav就加上一個叫做scroll的類別
            $('nav').addClass('scroll');
        } else {
            // 若是滾動位移沒有大於等於50
            // 則把nav的scroll類別拿掉
            $('nav').removeClass('scroll');
        }
    });

    // todo 當螢幕發生縮放自動解除.nav-list的active類別
    //
    // nav-list只有在手機版時才有藏起與顯示的兩種狀態，用意在於防止桌面版瀏覽時使用者縮放螢幕造成程式誤判
    $(window).bind('resize scroll', function () {
        $('.nav-list').removeClass('active');
        $('#showMenuBtn').removeClass('active');
    });

    // note 手機版#showMenuBtn按鈕被點擊時的事件處理
    //
    // 當#showMenuBtn被點擊時，執行...
    $('#showMenuBtn').click(function () {
        // .nav-list切換active的類別
        $('.nav-list').toggleClass('active');
        $(this).toggleClass('active');
    });

    // note nav-list裡的a被點擊時的事件處理
    //
    // .nav-list裡任何一個a被點擊時，執行...
    $('.nav-list a').click(function () {
        // .nav-list拿掉active的類別
        $('.nav-list').removeClass('active');
    });

    new WOW().init();

});
//--Click to copy email------------------------------

function copyToClipboard(text, el) {
  var copyTest = document.queryCommandSupported('copy');
  var elOriginalText = el.attr('data-original-title');

  if (copyTest === true) {
    var copyTextArea = document.createElement("textarea");
    copyTextArea.value = text;
    document.body.appendChild(copyTextArea);
    copyTextArea.select();
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'Copied!' : 'Whoops, not copied!';
      el.attr('data-original-title', msg).tooltip('show');
    } catch (err) {
      console.log('Oops, unable to copy');
    }
    document.body.removeChild(copyTextArea);
    el.attr('data-original-title', elOriginalText);
  } else {
    // Fallback if browser doesn't support .execCommand('copy')
    window.prompt("Copy to clipboard: Ctrl+C or Command+C, Enter", text);
  }
}

$(document).ready(function() {
  // Initialize
  // ---------------------------------------------------------------------

  // Tooltips
  // Requires Bootstrap 3 for functionality
  $('.js-tooltip').tooltip();

  // Copy to clipboard
  // Grab any text in the attribute 'data-copy' and pass it to the 
  // copy function
  $('.js-copy').click(function() {
    var text = $(this).attr('data-copy');
    var el = $(this);
    copyToClipboard(text, el);
  });
});

function copyToClipboard(text, el) {
  var copyTest = document.queryCommandSupported('copy');
  var elOriginalText = el.attr('data-original-title');

  if (copyTest === true) {
    var copyTextArea = document.createElement("textarea");
    copyTextArea.value = text;
    document.body.appendChild(copyTextArea);
    copyTextArea.select();
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'Copied!' : 'Whoops, not copied!';
      el.attr('data-original-title', msg).tooltip('show');
    } catch (err) {
      console.log('Oops, unable to copy');
    }
    document.body.removeChild(copyTextArea);
    el.attr('data-original-title', elOriginalText);
  } else {
    // Fallback if browser doesn't support .execCommand('copy')
    window.prompt("Copy to clipboard: Ctrl+C or Command+C, Enter", text);
  }
}

$(document).ready(function() {
  // Initialize
  // ---------------------------------------------------------------------

  // Tooltips
  // Requires Bootstrap 3 for functionality
  $('.js-tooltip').tooltip();

  // Copy to clipboard
  // Grab any text in the attribute 'data-copy' and pass it to the 
  // copy function
  $('.js-copy').click(function() {
    var text = $(this).attr('data-copy');
    var el = $(this);
    copyToClipboard(text, el);
  });
});