$(document).ready(function(){
    //******** slider **********//
    $slide = $("main .slider li");
    console.log($slide.length-1);

    $("main, main .ca").hover(function(){
        $("main .slider").addClass("stop");
        $("main .prev, main .next").addClass("show");
    }, function(){
        $("main .slider").removeClass("stop");
        $("main .prev, main .next").removeClass("show");
    });
    
    setInterval(function(){
        var show = $("main .slider li.show").index();
        //console.log(show);
        
        var $stop = $("main .slider").hasClass("stop");
        if($stop == true){
    
        }else{
            $slide.removeClass("show");
            show = (show + 1) % $slide.length;
            //console.log(show);

            $slide.eq(show).addClass("show");

            $(".paser li").removeClass("active");
            $(".paser li").eq(show).addClass("active");
        }
    }, 3000);

    $("main .prev").click(function(){
        var show = $("main .slider li.show").index();

        $slide.removeClass("show");
        $(".paser li").removeClass("active");

        if(show == 0){
            $slide.eq($slide.length-1).addClass("show");
            $(".paser li").eq($slide.length-1).addClass("active");

        }else{
            $slide.eq(show).prev().addClass("show");
            $(".paser li").eq(show).prev().addClass("active");
        }

        return false;
    });
    $("main .next").click(function(){
        var show = $("main .slider li.show").index();

        $slide.removeClass("show");
        $(".paser li").removeClass("active");

        if(show == $slide.length-1){
            $slide.eq(0).addClass("show");
            $(".paser li").eq(0).addClass("active");
        }else{
            $slide.eq(show).next().addClass("show");
            $(".paser li").eq(show).next().addClass("active");
        }

        return false;
    });


    //******* tab ********/
    var int_arr = [
        ["interior_01.jpg", "Livingroom"],
        ["interior_02.jpg", "Restroom"],
        ["interior_03.jpg", "Kitchen"],
        ["interior_04.jpg", "Bedroom"],
    ];

    var ext_arr = [
        ["exterior_01.jpg", "Deco Wall"],
        ["exterior_02.jpg", "Garden"],
        ["exterior_03.jpg", "Swim room"],
        ["exterior_04.jpg", "Stair"],
    ];

    var Fur_arr = [
        ["furniture_01.jpg", "Sofas"],
        ["furniture_02.jpg", "Bed"],
        ["furniture_03.jpg", "Chair"],
        ["furniture_04.jpg", "Desk"],
    ];

    var tab_cont = `
        <li>
            <div class="title">
                <p>sofas</p>
                <div class="detail_btn"><a href="">Detail More</a></div>
            </div>
        </li>
    `;

    for(i=0; i<int_arr.length; i++){
        $(".tab_cont ul").append(tab_cont);
    }

    $(".tab_cont li").each(function(i){
        $(this).css("background-image", "url(./img/"+ int_arr[i][0] +")");
        $(this).find("p").text(int_arr[i][1]);
    });

    $(".tab_title li").click(function(){
        var show = $(this).hasClass("show");
        
        if(show == false){
            $(".tab_title li").removeClass("show")
            $(this).addClass("show");
        };

        var show_index = $(".tab_title li.show").index();
            console.log(show_index);
        if(show_index == 0){
            $(".tab_cont li").each(function(i){
                $(this).fadeOut(100, function(){
                    $(this).fadeIn().css("background-image", "url(./img/"+ int_arr[i][0] +")");
                });
                $(this).find("p").text(int_arr[i][1]);
            });
        }else if(show_index == 1){
            $(".tab_cont li").each(function(i){
                $(this).fadeOut(100, function(){
                    $(this).fadeIn().css("background-image", "url(./img/"+ ext_arr[i][0] +")");
                });
                $(this).find("p").text(ext_arr[i][1]);
            });
        }else if(show_index == 2){
            $(".tab_cont li").each(function(i){
                $(this).fadeOut(100, function(){
                    $(this).fadeIn().css("background-image", "url(./img/"+ Fur_arr[i][0] +")");
                });
                $(this).find("p").text(Fur_arr[i][1]);
            });
        }


        return false;
    });


    //********* about *********/
    var about_arr = [
        ["bkimg0.png","Mission","Provide a complete service that is of the highest quality in speed, efficiency, communications and cost; and exceeds client’s expectations."],
        ["bkimg1.png","Value","With our passion for design, creativity and imagination obsession for details and leadership, we will always strive for continuous improvement."],
        ["bkimg2.png","Vistion","To be a preferred interior design company in quality service and technologically advanced communications and to offer a complete solution to our clients’ needs."],
    ];

    var about_content = `
    <li>
        <div class="about_img"></div>
        <div class="about_txt">
            <h3>Misstion</h3>
            <p>Provide a complete service that is of the highest quality in speed, efficiency, communications and cost; and exceeds client’s expectations.</p>
        </div>
    </li>
    `;

    for(i=0; i<about_arr.length; i++){
        $("#about .content ul").append(about_content);
    }

    $("#about .content li").each(function(i){
        $(this).find(".about_img").css("background-image", "url(./img/"+ about_arr[i][0] +")");
        $(this).find("h3").text(about_arr[i][1]);
        $(this).find("p").text(about_arr[i][2]);
    });


    //********* service *******/
    var service_arr = [
        ["services-icon-one.png", "1. Planing & Designing", "Constructor explains how you can enjoy high end flooring trends like textured wood and realistic stones with new laminate flooring."],
        ["services-icon-three.png", "2. Implementation", "Professional construction services from house renovations and remodeling, green building and small scope work, like painting."],
        ["services-icon-two.png", "3. Evaluation", "Our highly educated staff will make sure that your project will be finished on time and specified budget house & remodeling."],
    ];

    var serive_content = `
        <li>
            <div class="service_ico">
                <div class="service_deco"></div>
            </div>
            <div class="service_txt">
                <h3>1. Planing</h3>
                <p>Provide a complete service that is of the highest quality in speed, efficiency, communications and cost; and exceeds client’s expectations.</p>
            </div>
            <a class="ser_detail" href="">Detail More ></a>
        </li>
    `;

    for(i=0; i<service_arr.length; i++){
        $("#service .content ul").append(serive_content);
    };

    $("#service .content li").each(function(i){
        $(this).find(".service_ico").css("background-image", "url(./img/"+ service_arr[i][0] +")");
        $(this).find("h3").text(service_arr[i][1]);
        $(this).find("p").text(service_arr[i][2]);
    });


    //********* scroll ********/
    var brand = $("#brand").offset().top;
    var categories = $("#categories").offset().top;
    var about = $("#about").offset().top;
    var service = $("#service").offset().top;
    
    $("header nav li").click(function(){
        var menu_index = $(this).index();
        if(menu_index == 0){
            $("html").animate({scrollTop:brand},1000);
        }else if(menu_index == 1){
            $("html").animate({scrollTop:categories},1000);
        }else if(menu_index == 2){
            $("html").animate({scrollTop:about},1000);
        }else if(menu_index == 3){
            $("html").animate({scrollTop:service},1000);
        }
        console.log(menu_index)

        return false;
    });




    

    
    




    






});