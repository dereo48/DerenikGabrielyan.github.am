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
    //Click event to scroll to top
     //$('.scrollToTop').click(function(){
       //  $('html, body').animate({scrollTop : 0},800);
       //  return false;
  //  });

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

       if($( window ).width() < 1024){
        $(".my-navbar .logo a").text("Derenik");
    }else{
        $(".my-navbar .logo a").text("Derenik Gabrielyan");
    }

 });
//------
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

