$('.newsSlider').slick({infinite:false,slidesToShow:3,slidesToScroll:3,autoplay:false,autoplaySpeed:2000,arrows:true,responsive:[{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]});var windowW=$(window).width();$(window).on('load',function(){setTimeout(function(){$('.eqheightNews').matchHeight();},200);setTimeout(function(){$('.eqheightNewsWrapper').matchHeight();},300);});$(window).resize(function(){if($(window).width()!=windowW){windowW=$(window).width();setTimeout(function(){$('.eqheightNews').matchHeight();},200);setTimeout(function(){$('.eqheightNewsWrapper').matchHeight();},300);}});