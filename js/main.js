// 메인슬라이드
var bigSlide = $('.slide_list_big').innerWidth();

$('.slide_list_big li').last().prependTo('.slide_list_big');
$('.slide_list_big').css('margin-left',-100+'vw');

//auto슬라이드(1024)
setInterval(function(){
    $('.slide_list_big').animate({marginLeft:'-='+100+'vw'}, 'slow', function(){
        $('.slide_list_big li').first().appendTo('.slide_list_big');
        $('.slide_list_big').css('margin-left',-100+'vw');
    });
}, 2500);



// 320-768 메인슬라이드
let slideImg = document.querySelector('.slide_list_small');

document.querySelector('.s_pg1').addEventListener('click', function(){
    slideImg.style.transform = 'translate(0)';
    this.classList.add('active');
});

document.querySelector('.s_pg2').addEventListener('click', function(){
    slideImg.style.transform = 'translate(-100vw)';
    this.classList.add('active');
});

document.querySelector('.s_pg3').addEventListener('click', function(){
    slideImg.style.transform = 'translate(-200vw)';
    this.classList.add('active');
});

$('.s_pg1').click(function() {
    $(this).siblings().removeClass('active');
})
$('.s_pg2').click(function() {
    $(this).siblings().removeClass('active');
})
$('.s_pg3').click(function() {
    $(this).siblings().removeClass('active');
})
$('.s_pg').eq(0).click();


//arrows
var bigSlideList = $('.slide_list_big li').innerWidth();

$('.next').click(function(){
    $('.slide_list_big li').first().appendTo('.slide_list_big');
    $('.slide_slit_big').css('left', -bigSlideList);
})

$('.prev').click(function(){
    $('.slide_list_big li').last().prependTo('.slide_list_big');
    $('.slide_slit_big').css('left', +bigSlideList);
})

//customer review slide
let reviewList = document.querySelector('.review_box');

document.querySelector('.pg').addEventListener('click', function(){
    reviewList.style.transform = 'translate(0vw)';
    this.classList.add('active');
});
document.querySelector('.pg2').addEventListener('click', function(){
    reviewList.style.transform = 'translate(-95vw)';
    this.classList.add('active');
});
document.querySelector('.pg3').addEventListener('click', function(){
    reviewList.style.transform = 'translate(-190vw)';
    this.classList.add('active');
});
document.querySelector('.pg4').addEventListener('click', function(){
    reviewList.style.transform = 'translate(-285vw)';
    this.classList.add('active');
});

$('.pg1').click(function() {
    $(this).siblings().removeClass('active');
})
$('.pg2').click(function() {
    $(this).siblings().removeClass('active');
})
$('.pg3').click(function() {
    $(this).siblings().removeClass('active');
})
$('.pg4').click(function() {
    $(this).siblings().removeClass('active');
})

$('.pg').eq(0).click();


// customer review arrow
let current = 0;
let count = $(".review_box li").length-1;

$(".review_arrow div").click(function(){

    let check = $(this).hasClass("r_prev");

    if(check==true){
        current-=1;
    }else {
        current+=1;
    }

    if(current<0) {
        current=count;
    }

    if(current>count) {
        current=0;
    }

    $(".pagenation .pg").eq(current).click();
})



/*sub_menu*/
$('.gnb li').mouseover(function(){
    $('.sub_menu').slideDown();
});
$('.sub_menu').mouseleave(function(){
    $('.sub_menu').slideUp();
});


/*m_sub_menu toggle*/

$('.menu_toggle_btn').click(function(){
    $('.m_sub_menu').fadeIn(1000);
});

$('.m_close').click(function(){
    $('.m_sub_menu').fadeOut(1000);
});

$(".snb_title_box").click(function(){
    let down = $(this);
    let bros = $(this).siblings().children('.ms_menu');
    
    if(down.hasClass("open")==true) {
        
        down.removeClass("open");
        
        /* next=p , prev=img (html참고) */
        down.next().slideUp();
        down.prev().fadeOut(200);
    } else {
        down.addClass("open");
        bros.removeClass("open");
        
        down.next().slideDown();
        bros.next().slideUp();
        
        me.prev().fadeIn(200);
        bros.prev().fadeOut(200);
    }
});

/*customer center*/
$('.customer_title').click(function(){
    let plus = $(this);
    
    if(plus.hasClass('open')==true) {
        plus.removeClass('open');
        plus.next().slideUp();
        plus.prev().fadeOut(200);
    } else {
        plus.addClass('open');
        plus.next().slideDown();
        plus.prev().fadeIn(200);
    }
});

