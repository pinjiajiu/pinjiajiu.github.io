$(function() {
  var oindex = 0;
  var animated = false;
  $('.Carousel-dot ul li').eq(0).attr('style', 'background:#f00');
  $('.Carousel-img img').eq(0).css({ 'opacity': 1 });
  $('.Carousel-img img').not($('.Carousel-img img').eq(0)).css({ 'opacity': 0 });
  $('.Pointer-left,.Pointer-right').hover(
    function() {
      $(this).stop(true, true).animate({
        'opacity': 0.9
      });
    },
    function() {
      $(this).stop(true, true).animate({
        'opacity': 0.5
      });
    });
  bStart = setInterval(function() {
    Brun();
  }, 3000);
  $('.Pointer-right').click(function() {
    Brun();
  });
  $('.Pointer-right').mouseover(function() {
    clearInterval(bStart);
  })
  $('.Pointer-right').mouseleave(function() {
    bStart = setInterval(function() {
      Brun();
    }, 3000);
  })
  $('.Pointer-left').click(function() {
    oindex--;
    if (oindex < 0) {
      oindex = 2;
    }
    oindexRun();
  });
  $('.Pointer-left').mouseover(function() {
    clearInterval(bStart);
  })
  $('.Pointer-left').mouseleave(function() {
    bStart = setInterval(function() {
      Brun();
    }, 3000);
  })
  $('.Carousel-dot li').mouseenter(function() {
    oindex = $(this).index();
    $(this).attr('style', 'background:#f00');
    $('.Carousel-dot li').not($(this)).removeAttr('style', 'background:#f00');
    $('.Carousel-img img').eq(oindex).stop(true, true).animate({
      opacity: 1
    }, 300);
    $('.Carousel-img img').eq(oindex).siblings().stop(true, true).animate({
      opacity: 0
    }, 300);
    clearInterval(bStart);
  });
  $('.Carousel-dot li').mouseout(function() {
    bStart = setInterval(function() {
      Brun();
    }, 3000);
  });

  function Brun(animated) {
    oindex++;
    if (oindex > 2) {
      oindex = 0;
    }
    if (!animated) {
      oindexRun();
    }
  }

  function oindexRun() {
    animated = true;
    $('.Carousel-img img').eq(oindex).stop(true, true).animate({
      opacity: 1
    }, 500);
    $('.Carousel-img img').eq(oindex).siblings().stop(true, true).animate({
      opacity: 0
    }, 500);
    $('.Carousel-dot li').eq(oindex).attr('style', 'background:#f00');
    $('.Carousel-dot li').not($('.Carousel-dot li').eq(oindex)).removeAttr('style', 'background:#f00');
  }
});
