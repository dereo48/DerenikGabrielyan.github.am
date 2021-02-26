$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.my-navbar').addClass("sticky");
        }else{
            $('.my-navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    if($( window ).width() < 1024){
        $(".my-navbar .logo a").text("Derenik");
    }else{
        $(".my-navbar .logo a").text("Derenik Gabrielyan");
    }
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    // toggle menu/navbar script
       $('.menu-btn').click(function(){
        if(scrollY < 20){
            $('.my-navbar .menu').toggleClass("menu-active");
            $('.my-navbar ').toggleClass("sticky");
        }else{
            $('.my-navbar .menu').toggleClass("menu-active");
        }
            $('.menu-btn').toggleClass("toggle");
       });


 });
 $( window ).resize(function() {
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.my-navbar').addClass("sticky");
        }else{
            $('.my-navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     if($( window ).width() < 1024){
        $(".my-navbar .logo a").text("Derenik");
    }else{
        $(".my-navbar .logo a").text("Derenik Gabrielyan");
    }
 });

 $(document).ready(function(){
    $('#email-button').click(function() {
        window.open("derenik_gabrielyan@mail.ru");
      });

      $('.ok').click(function() {
        window.open("Resume-2021.pdf");
      });
 });