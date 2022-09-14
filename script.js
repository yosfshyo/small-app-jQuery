$(document).ready(function(){
    //header style app
    $('header li a').on('click', function(){
        $(this).addClass('active').parent().siblings().find('a').removeClass('active')
    })


    //window app
    var homeOffset = $('.home').offset().top
    $(window).scroll(function(){
        var windowScroll = $(this).scrollTop()
       if(windowScroll > 200) {
            $('header').addClass('changeHeader')
        }
        else{
            $('header').removeClass('changeHeader')
        }
    })

    // Dynamic Taps
    //تخفي كل السكاشن وتظهر يلي بتكبس عليه
    // $('header a').click(function(){
    //     var myid = $(this).attr('id') //home about contact portfolio
    //     $('body section').hide()
    //     $('.' + myid).fadeIn()
    // })

    //filter image
    //mixitup jquery plugin مكتبة خاصة للفلترة
    $('.tabs button').click(function(){
        var myClass = $(this).attr('class');
        if(myClass == 'all') $('.images img').show()
        else {
            $('.images img').hide()
            $('.images .' + myClass).fadeIn()
            
        }
    })
    // smoth scroll Header App
    var headerHieght = $('header').height()
    $('header a').click(function(){
        var id = $(this).attr('id')
        $('body,html').animate({
            scrollTop : $('.'+ id).offset().top - headerHieght
        })
    })
    //scroll To top
    $(window).scroll(function () {
        if ($(this).scrollTop()>200) {
            $('.scrollTop').show()
        }
        else {
            $('.scrollTop').hide()
        }
    })
    $('.scrollTop').click(function(){
        $('body,html').animate({
            scrollTop : 0
        },600)
    })
    //claculate | CountDown characters of Textarea app
    $('textarea').keyup(function(e){
        console.log(e.target.value.length);
        if (e.target.value.length >= 100){
            e.target.value = e.target.value.substr(0,100)
        }
    })
})