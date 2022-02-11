$(document).ready(function () {

    $(".slider li").hide();
    $(".slider li:first").show();
    index = 0; //click yapılmadığı sürece başlangıç indexi 0'dır.

    slide_count = $(".slider li").length - 1;

    //Navigation butonların üretilmesi

    navigation_button_count = $(".slider li").length;

    for (i = 1; i <= navigation_button_count; i++) {
        $(".navigation").append("<li><a href='#'>" + i + "</a></li>");
    }

    $(".navigation li:first").find("a").addClass("active");

    /**********************************************************************/

    //click() metodu ile slider görseli değiştirme

    $(".navigation li").click(function () {
        index = $(this).index();

        $(".slider li").hide();
        $(".slider li:eq(" + index + ")").fadeIn();

        $(".navigation li a").removeClass("active");
        $(this).find("a").addClass("active");
    })


    //hover() metodu ile slider görseli değiştirme
    /*
        $(".navigation li").hover(function () {
            var index = $(this).index();
    
            $(".slider li").hide();
            $(".slider li:eq("+index+")").fadeIn(1000);
    
            $(".navigation li a").removeClass("active");
            $(this).find("a").addClass("active");
        });
    */

        /*******************************************************************/

    $("#prev").click(function () {

        if (index == 0) {
            index = 3;
        } else {
            index--;   // index = index - 1;
        }

        $(".slider li").hide();
        $(".slider li:eq(" + index + ")").fadeIn(1000);

        $(".navigation li a").removeClass("active");
        $(".navigation li a:eq(" + index + ")").addClass("active");
    })
    
    $("#next").click(function () {

        if (index == 3) {
            index = 0;
        } else {
            index++;
        }

        $(".slider li").hide();
        $(".slider li:eq(" + index + ")").fadeIn(1000);

        $(".navigation li a").removeClass("active");
        $(".navigation li a:eq(" + index + ")").addClass("active");
    })
})



