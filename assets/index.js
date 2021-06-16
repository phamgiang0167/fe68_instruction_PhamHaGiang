let counted = false

$(window).scroll(function() {
    var hT = $('.stat__list').offset().top,
        hH = $('.stat__list').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS = (hT+hH-wH) && !counted){
        counted = true
        count()
    }

    var hTo = $('.offer').offset().top,
        hHo = $('.offer').outerHeight(),
        wHo= $(window).height(),
        wSo = $(this).scrollTop();

    if (wSo >= (hTo+hHo-wHo)){
        $('.background').attr('style', 'background-image: url(./assets/images/banner3.jpg);')
    }else{
        $('.background').attr('style', 'background-image: url(./assets/images/banner2.jpg);')
    }
});


function count(){
    let arr = document.getElementsByClassName('count') //DOM
    for(let i = 0; i < arr.length; ++i){
        let end = arr[i].innerHTML
        let count = 0
        setInterval(()=>{
            if(count < end){
                arr[i].innerHTML = count + 1
                count++
            }else{
                clearInterval()
            }
        }, 5000/end)
    }
}
          
$(document).ready(function(){
    $('.feedback').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        appendDots: '.feedback',
        prevArrow: false,
        nextArrow: false,
        autoplay:true,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              }    
        ]
    });
});