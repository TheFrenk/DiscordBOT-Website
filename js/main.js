$(document).ready(function () {
    $(window).scroll(function(){
        if(this.scrollY > 20)
            $(".navbar").addClass("sticky");
        else
            $(".navbar").removeClass("sticky");
    });

    $(".menu-toggler").click(function() {
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });

    $('#up').on('click', function () {
        $('html, body').animate( {
            scrollTop: 0
        }, 1000);     
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once:  true
    });
});