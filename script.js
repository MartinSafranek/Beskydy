(function($){
    $(function(){

        $(".n1-scroll").click(function(){
            $("html, body").animate({scrollTop: $(".n1").offset().top}, 500);
        });

    });
})(jQuery);