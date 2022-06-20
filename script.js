(function($){
    $(function(){

        $(".n1-scroll").click(function(){
            $("html, body").animate({scrollTop: $(".n1").offset().top}, 500);
        });

        $(".n2-scroll").click(function(){
            $("html, body").animate({scrollTop: $(".n2").offset().top}, 600);
        });

        $(".content-scroll").click(function(){
            $("html, body").animate({scrollTop: $(".tip").offset().top}, 700);
        });

        $(".n3-scroll").click(function(){
            $("html, body").animate({scrollTop: $(".n3").offset().top}, 700);
        });

        $(".n4-scroll").click(function(){
            $("html, body").animate({scrollTop: $(".n4").offset().top}, 800);
        });

    });
})(jQuery);